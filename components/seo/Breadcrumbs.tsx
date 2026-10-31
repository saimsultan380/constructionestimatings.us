import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo";
import { withTrailingSlash } from "@/lib/site";

type Props = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      {items.length > 1 ? (
        <nav aria-label="Breadcrumb" className="border-b border-line bg-surface-tint">
          <ol className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center gap-x-2 gap-y-1 px-4 py-3 text-sm text-ink-soft min-[480px]:px-6">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const href = withTrailingSlash(item.path);
              return (
                <li key={`${item.path}-${item.name}`} className="inline-flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true">/</span> : null}
                  {isLast ? (
                    <span aria-current="page" className="font-medium text-ink">
                      {item.name}
                    </span>
                  ) : (
                    <Link href={href} className="hover:text-brand-strong hover:underline">
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      ) : null}
    </>
  );
}
