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

type MenuKey = "services" | "trades" | "areas";

type MenuItem = { title: string; href: string };
type MenuGroup = { label: string; items: MenuItem[] };

const serviceGroupPlan = [
  {
    label: "Project types",
    hrefs: [
      "/commercial-estimating-service/",
      "/residential-estimating-services/",
      "/industrial-estimating-services/",
      "/renovation-estimating-services/",
    ],
  },
  {
    label: "Takeoff and specialty",
    hrefs: [
      "/construction-takeoff-services/",
      "/blueprint-estimating-services/",
      "/mep-estimating-services/",
      "/equipment-estimating-services/",
      "/xactimate-estimating-services/",
      "/quantity-surveyor-services/",
    ],
  },
] as const;

const tradeGroupPlan = [
  {
    label: "Structure",
    hrefs: [
      "/concrete-estimating-services/",
      "/masonry-estimating-services/",
      "/rebar-estimating-services/",
      "/framing-estimating-services/",
      "/structural-steel-estimating-services/",
    ],
  },
  {
    label: "Envelope and finishes",
    hrefs: [
      "/roofing-estimating-services/",
      "/gutter-estimating-services/",
      "/openings-estimating-services/",
      "/painting-estimating-services/",
      "/drywall-estimating-services/",
      "/insulation-estimating-services/",
      "/waterproofing-estimating-services/",
      "/fireproofing-estimating-services/",
      "/flooring-estimating-services/",
    ],
  },
  {
    label: "MEP and site",
    hrefs: [
      "/electrical-estimating-services/",
      "/hvac-estimating-services/",
      "/duct-takeoff-services/",
      "/mechanical-estimating-services/",
      "/plumbing-estimating-services/",
      "/landscape-estimating-services/",
      "/sitework-estimating-services/",
      "/demolition-estimating-services/",
    ],
  },
] as const;

function groupsFor(menu: MenuKey): MenuGroup[] {
  if (menu === "areas") {
    return [
      {
        label: "States",
        items: homepage.publishedAreas.map((item) => ({ title: item.title, href: item.href })),
      },
    ].filter((group) => group.items.length > 0);
  }

  const source = menu === "trades" ? homepage.publishedTrades : homepage.publishedServices;
  const plan = menu === "trades" ? tradeGroupPlan : serviceGroupPlan;
  const used = new Set<string>();
  const groups: MenuGroup[] = plan.map((group) => {
    const items = group.hrefs.flatMap((href) => {
      const match = source.find((item) => item.href === href);
      if (!match) return [];
      used.add(match.href);
      return [{ title: match.title, href: match.href }];
    });
    return { label: group.label, items };
  });
  const extra = source.filter((item) => !used.has(item.href));
  if (extra.length > 0) {
    groups.push({ label: "More", items: extra.map((item) => ({ title: item.title, href: item.href })) });
  }
  return groups.filter((group) => group.items.length > 0);
}

function MegaMenu({
  menu,
  pathname,
  onNavigate,
}: {
  menu: MenuKey;
  pathname: string;
  onNavigate: () => void;
}) {
  const groups = groupsFor(menu);
  return (
    <div className="absolute left-1/2 top-full z-50 w-screen -translate-x-1/2 border-b border-line bg-surface shadow-[var(--shadow)]">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-8">
        <p className="font-heading text-sm font-semibold text-brand-strong">
          {menu === "trades" ? "Trades" : menu === "areas" ? "Areas" : "Services"}
        </p>
        <div className={cn("mt-5 grid gap-8", groups.length > 2 ? "grid-cols-3" : "grid-cols-2")}>
          {groups.map((group) => (
            <div key={group.label}>
              <p className="border-b border-line pb-2 font-heading text-base font-semibold text-ink">{group.label}</p>
              <ul className="mt-2">
                {group.items.map((item) => {
                  const current = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        aria-current={current ? "page" : undefined}
                        className={cn(
                          "block rounded-lg px-2 py-2 text-sm font-medium hover:bg-brand-tint hover:text-brand-strong",
                          current ? "text-brand-strong" : "text-ink",
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between gap-6 border-t border-line pt-5">
          <p className="text-sm text-ink-soft">
            Free quote before any work starts. Most estimates are back in 24 to 48 hours.
          </p>
          <Button href="/contact/" onClick={onNavigate}>
            {homepage.hero.primaryCta}
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [drawerSection, setDrawerSection] = useState<MenuKey | null>(null);
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

  useEffect(() => {
    setOpenMenu(null);
    setDrawer(false);
    setDrawerSection(null);
  }, [pathname]);

  const closeMenus = () => {
    setOpenMenu(null);
    setDrawer(false);
    setDrawerSection(null);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-line bg-surface",
        scrolled && "shadow-[var(--shadow)]",
      )}
    >
      <div className={cn("h-1 bg-accent lg:hidden", scrolled && "hidden")} aria-hidden="true" />
      <div
        className={cn(
          "hidden overflow-hidden bg-brand transition-[height] duration-200 lg:block",
          scrolled ? "h-0" : "h-10",
        )}
        aria-hidden={scrolled}
      >
        <div className="mx-auto grid h-10 w-full max-w-[1240px] grid-cols-3 items-center px-6 text-sm text-surface">
          <p className="font-medium">{homepage.topBar.nda}</p>
          <p className="text-center font-semibold text-accent">{homepage.topBar.quote}</p>
          <div className="text-right">
            {phone ? (
              <a href={phoneHref(phone)} className="inline-flex items-center gap-2 font-semibold text-surface hover:text-accent hover:underline">
                <Phone size={16} aria-hidden="true" />
                {phone}
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <div
        className="relative mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between gap-4 px-4 min-[480px]:px-6"
        onMouseLeave={() => setOpenMenu(null)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setOpenMenu(null);
          }
        }}
      >
        <Link href="/" aria-label="Construction Estimatings home" onClick={closeMenus}>
          <Logo />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          {homepage.nav.map((item) => {
            const current = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(item.href);
            const menu = "menu" in item ? (item.menu as MenuKey | undefined) : undefined;
            if (menu === "services" || menu === "trades" || menu === "areas") {
              const expanded = openMenu === menu;
              const sectionCurrent =
                menu === "services"
                  ? homepage.publishedServices.some((entry) => pathname === entry.href)
                  : menu === "trades"
                    ? homepage.publishedTrades.some((entry) => pathname === entry.href)
                    : homepage.publishedAreas.some((entry) => pathname === entry.href);
              return (
                <div key={item.label} onMouseEnter={() => setOpenMenu(menu)} onFocus={() => setOpenMenu(menu)}>
                  <span className="inline-flex items-center gap-1">
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-semibold hover:text-brand-strong",
                        sectionCurrent ? "text-brand-strong" : "text-ink",
                      )}
                      aria-current={sectionCurrent ? "page" : undefined}
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
                      <CaretDown size={14} aria-hidden="true" className={cn("transition-transform", expanded && "rotate-180")} />
                    </button>
                  </span>
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-semibold hover:text-brand-strong",
                  current ? "text-brand-strong" : "text-ink",
                )}
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
          <Button href="/contact/">{homepage.hero.primaryCta}</Button>
        </div>
        {openMenu ? (
          <div id={menuId + openMenu} className="hidden lg:contents">
            <MegaMenu menu={openMenu} pathname={pathname} onNavigate={closeMenus} />
          </div>
        ) : null}
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
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto bg-surface p-6 lg:hidden">
              <div className="flex items-center justify-between">
                <Dialog.Title className="font-heading text-lg font-semibold">Menu</Dialog.Title>
                <Dialog.Description className="sr-only">Primary navigation</Dialog.Description>
                <Dialog.Close className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line" aria-label="Close menu">
                  <X size={20} aria-hidden="true" />
                </Dialog.Close>
              </div>
              <nav aria-label="Mobile" className="mt-8 flex flex-col">
                {homepage.nav.map((item) => {
                  const menu = "menu" in item ? (item.menu as MenuKey | undefined) : undefined;
                  if (menu === "services" || menu === "trades" || menu === "areas") {
                    const open = drawerSection === menu;
                    const groups = groupsFor(menu);
                    return (
                      <div key={item.label} className="border-b border-line">
                        <div className="flex items-center gap-1">
                          <Link
                            href={item.href}
                            onClick={closeMenus}
                            className="flex-1 py-4 text-lg font-medium text-ink"
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            className="inline-flex h-11 w-11 items-center justify-center"
                            aria-expanded={open}
                            aria-label={`${item.label} submenu`}
                            onClick={() => setDrawerSection((value) => (value === menu ? null : menu))}
                          >
                            <CaretDown size={16} aria-hidden="true" className={cn(open && "rotate-180")} />
                          </button>
                        </div>
                        {open ? (
                          <div className="pb-4">
                            {groups.map((group) => (
                              <div key={group.label} className="mt-3">
                                <p className="px-2 font-heading text-sm font-semibold text-brand-strong">{group.label}</p>
                                <ul className="mt-1">
                                  {group.items.map((sub) => (
                                    <li key={sub.href}>
                                      <Link
                                        href={sub.href}
                                        onClick={closeMenus}
                                        className="block rounded-lg px-2 py-2 text-base text-ink hover:bg-brand-tint hover:text-brand-strong"
                                      >
                                        {sub.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMenus}
                      className="border-b border-line py-4 text-lg font-medium text-ink"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                {phone ? (
                  <a href={phoneHref(phone)} className="inline-flex h-12 items-center gap-2 font-semibold text-brand-strong">
                    <Phone size={18} aria-hidden="true" />
                    {phone}
                  </a>
                ) : null}
                <Button href="/contact/" onClick={closeMenus}>
                  {homepage.hero.primaryCta}
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
