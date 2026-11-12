import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { departments as allDepartments } from "@/content/departments";
import { getDepartment, getGallery, getNewsByDepartment } from "@/lib/content";
import { GalleryCard, NewsCard } from "@/components/cards";
import {
  Breadcrumbs,
  Chip,
  DraftNotice,
  EmptyState,
  PageHeader,
  Section,
} from "@/components/ui";
import { accents, cx } from "@/lib/format";

type Params = { params: Promise<{ slug: string }> };

/** Engineering has its own richer page, so it is excluded here. */
export function generateStaticParams() {
  return allDepartments
    .filter((d) => d.slug !== "engineering")
    .map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const dept = await getDepartment(slug);
  if (!dept) return { title: "Department not found" };
  return { title: dept.name, description: dept.summary };
}

export default async function DepartmentPage({ params }: Params) {
  const { slug } = await params;
  const dept = await getDepartment(slug);
  if (!dept) notFound();

  const [items, photos] = await Promise.all([
    getNewsByDepartment(dept.slug),
    getGallery(dept.slug),
  ]);
  const a = accents[dept.accent];

  return (
    <>
      <PageHeader
        eyebrow="Department"
        title={dept.name}
        lede={dept.tagline}
        accentBar={a.bar}
      />
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Departments", href: "/departments" },
          { label: dept.shortName },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            {dept.awaitingDepartmentCopy && (
              <div className="mb-8">
                <DraftNotice owner={dept.contentOwner} kind="department" />
              </div>
            )}

            <p className="font-display text-xl font-bold leading-relaxed tracking-tight text-ink-900">
              {dept.summary}
            </p>

            <div className="mt-6 space-y-5">
              {dept.body.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-600">
                  {para}
                </p>
              ))}
            </div>

            {dept.deliverables && dept.deliverables.length > 0 && (
              <div className="mt-10">
                <h2 className="font-display text-lg font-extrabold tracking-tight text-ink-900">
                  Expected output
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {dept.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                      <span className={cx("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", a.dot)} aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className={cx("rounded-xl p-6 ring-1 ring-ink-200", a.softBg)}>
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-ink-700">
                Focus areas
              </h2>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {dept.focusAreas.map((f) => (
                  <li key={f}>
                    <Chip className="bg-white/80 ring-1 ring-inset ring-ink-200">{f}</Chip>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 ring-1 ring-ink-200">
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-ink-700">
                Section owner
              </h2>
              <p className="mt-2 text-sm font-semibold text-ink-900">{dept.contentOwner}</p>
              <p className="mt-2 text-xs leading-relaxed text-ink-500">
                This section is written by the department itself. No other team&rsquo;s
                figures are republished here as conclusions.
              </p>
            </div>

            {dept.links && dept.links.length > 0 && (
              <div className="rounded-xl bg-white p-6 ring-1 ring-ink-200">
                <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-ink-700">
                  Links
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {dept.links.map((l) => (
                    <li key={l.label}>
                      {l.pending ? (
                        <span className="text-ink-400">{l.label} — pending</span>
                      ) : (
                        <Link href={l.href} className="font-semibold text-maroon-700 hover:underline">
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Section>

      <div className="border-t border-ink-200 bg-white">
        <Section title="Updates from this department">
          {items.length > 0 ? (
            <div className="grid gap-5 lg:grid-cols-3">
              {items.map((item) => (
                <NewsCard key={item.slug} item={item} departmentName={dept.shortName} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No updates published yet"
              detail="Updates appear here once the department submits them and the weekly meeting agrees they should be published."
            />
          )}
        </Section>
      </div>

      {photos.length > 0 && (
        <Section title="Photographs">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {photos.map((p) => (
              <GalleryCard key={p.id} item={p} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
