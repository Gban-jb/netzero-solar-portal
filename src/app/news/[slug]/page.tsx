import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news as allNews } from "@/content/news";
import { getDepartments, getNewsItem } from "@/lib/content";
import { Breadcrumbs, Chip, PageHeader, Section } from "@/components/ui";
import { formatDate } from "@/lib/format";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allNews.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = await getNewsItem(slug);
  if (!item) return { title: "Update not found" };
  return { title: item.title, description: item.summary };
}

export default async function NewsItemPage({ params }: Params) {
  const { slug } = await params;
  const item = await getNewsItem(slug);
  if (!item) notFound();

  const departments = await getDepartments();
  const department =
    item.department === "project"
      ? null
      : departments.find((d) => d.slug === item.department);

  return (
    <>
      <PageHeader
        eyebrow={`${formatDate(item.date)} · ${department?.shortName ?? "Project-wide"}`}
        title={item.title}
        lede={item.summary}
      />
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Updates", href: "/news" },
          { label: item.title },
        ]}
      />

      <Section>
        <article className="max-w-3xl">
          <div className="space-y-5">
            {item.body.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-700">
                {para}
              </p>
            ))}
          </div>

          {item.tags && item.tags.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-1.5">
              {item.tags.map((t) => (
                <li key={t}>
                  <Chip>#{t}</Chip>
                </li>
              ))}
            </ul>
          )}

          <dl className="mt-10 grid gap-4 border-t border-ink-200 pt-6 sm:grid-cols-2">
            <div>
              <dt className="label text-ink-400">
                Published
              </dt>
              <dd className="mt-1 text-sm text-ink-800">
                <time dateTime={item.date}>{formatDate(item.date)}</time>
              </dd>
            </div>
            <div>
              <dt className="label text-ink-400">
                Source
              </dt>
              <dd className="mt-1 text-sm text-ink-800">
                {department ? (
                  <Link href={`/departments/${department.slug}`} className="font-semibold text-maroon-700 hover:underline">
                    {department.name}
                  </Link>
                ) : (
                  "Project-wide"
                )}
              </dd>
            </div>
            {item.approvedBy && (
              <div className="sm:col-span-2">
                <dt className="label text-ink-400">
                  Publication agreed with
                </dt>
                <dd className="mt-1 text-sm text-ink-800">{item.approvedBy}</dd>
              </div>
            )}
          </dl>

          <p className="mt-10">
            <Link href="/news" className="text-sm font-bold text-maroon-700 hover:underline">
              &larr; All updates
            </Link>
          </p>
        </article>
      </Section>
    </>
  );
}
