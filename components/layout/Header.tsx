"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { CaretDown, List, Phone, X } from "@phosphor-icons/react";
import { homepage } from "@/content/homepage";
import { phone, phoneHref } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";

function MenuPanel({
  label,
  items,
}: {
  label: string;
  items: { title: string; href: string }[];
}) {
  return (
    <div
      id={`${label.toLowerCase()}-menu`}
      className="absolute left-0 top-full z-50 w-[360px] rounded-xl border border-line bg-surface p-6 shadow-[var(--shadow-soft)]"
    >
      <p className="mb-4 text-sm font-semibold text-ink-soft">{label}</p>
      <ul className="grid gap-y-2">
        {items.map((item) => (
          <li key={item.title}>
            <Link href={item.href} className="block py-1 text-sm text-ink hover:text-brand-strong hover:underline">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<"services" | null>(null);
  const [drawer, setDrawer] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenus = () => {
    setOpenMenu(null);
    setDrawer(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-line bg-surface",
        scrolled && "shadow-[var(--shadow)]",
      )}
    >
      <div className="hidden h-10 bg-brand-tint lg:block">
        <div className="mx-auto grid h-full w-full max-w-[1240px] grid-cols-3 items-center px-6 text-sm text-ink">
          <p>{homepage.topBar.nda}</p>
          <p className="text-center">{homepage.topBar.quote}</p>
          <div className="text-right">
            {phone ? (
              <a href={phoneHref(phone)} className="inline-flex items-center gap-2 font-semibold text-brand-strong hover:underline">
                <Phone size={16} aria-hidden="true" />
                {phone}
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between gap-4 px-4 min-[480px]:px-6">
        <Link href="/" aria-label="Construction Estimatings home" onClick={closeMenus}>
          <Logo />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          {homepage.nav.map((item) => {
            const current = item.href === "/" ? pathname === "/" : pathname === item.href;
            const menu = "menu" in item ? item.menu : undefined;
            if (menu === "services") {
              const items = homepage.publishedServices.map((service) => ({
                title: service.title,
                href: service.href,
              }));
              const expanded = openMenu === menu;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(menu)}
                  onMouseLeave={() => setOpenMenu(null)}
                  onFocus={() => setOpenMenu(menu)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                      setOpenMenu(null);
                    }
                  }}
                >
                  <span className="inline-flex items-center gap-1">
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-ink hover:underline"
                      aria-current={current ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="inline-flex h-11 w-8 items-center justify-center"
                      aria-expanded={expanded}
                      aria-controls={menuId + menu}
                      aria-label={`${item.label} menu`}
                      onClick={() => setOpenMenu((value) => (value === menu ? null : menu))}
                    >
                      <CaretDown size={14} aria-hidden="true" />
                    </button>
                  </span>
                  {expanded ? (
                    <div id={menuId + menu}>
                      <MenuPanel label={item.label} items={items} />
                    </div>
                  ) : null}
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-ink hover:underline"
                aria-current={current ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          {phone ? (
            <a href={phoneHref(phone)} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-strong hover:underline">
              <Phone size={18} aria-hidden="true" />
              {phone}
            </a>
          ) : null}
          <Button href="/contact/">{homepage.hero.secondaryCta}</Button>
        </div>
        <Dialog.Root open={drawer} onOpenChange={setDrawer}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line lg:hidden"
              aria-label="Open menu"
            >
              <List size={22} aria-hidden="true" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40 lg:hidden" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-surface p-6 lg:hidden">
              <div className="flex items-center justify-between">
                <Dialog.Title className="font-heading text-lg font-semibold">Menu</Dialog.Title>
                <Dialog.Description className="sr-only">Primary navigation</Dialog.Description>
                <Dialog.Close className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line" aria-label="Close menu">
                  <X size={20} aria-hidden="true" />
                </Dialog.Close>
              </div>
              <nav aria-label="Mobile" className="mt-8 flex flex-col">
                {homepage.nav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setDrawer(false)}
                    className="border-b border-line py-4 text-lg font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                {phone ? (
                  <a href={phoneHref(phone)} className="inline-flex h-12 items-center gap-2 font-semibold text-brand-strong">
                    <Phone size={18} aria-hidden="true" />
                    {phone}
                  </a>
                ) : null}
                <Button href="/contact/" onClick={() => setDrawer(false)}>
                  {homepage.hero.secondaryCta}
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
