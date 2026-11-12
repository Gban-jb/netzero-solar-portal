import type { Metadata } from "next";
import { getDepartment, getGallery, getNewsByDepartment, getStudents } from "@/lib/content";
import { GalleryCard, NewsCard, StudentCard } from "@/components/cards";
import { Breadcrumbs, Chip, EmptyState, PageHeader, Section } from "@/components/ui";
import { accents, cx } from "@/lib/format";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Engineering & Battery Energy Storage",
  description:
    "Five student workstreams covering thermal imaging, anomaly management, energy-loss analysis, field hardware and project reporting for the AAMU solar PV drone monitoring and BESS programme.",
};

export default async function EngineeringPage() {
  const dept = await getDepartment("engineering");
  if (!dept) notFound();

  const [students, items, photos] = await Promise.all([
    getStudents(),
    getNewsByDepartment("engineering"),
    getGallery("engineering"),
  ]);
  const a = accents[dept.accent];

  return (
    <>
      <PageHeader
        eyebrow="Department"
        title={dept.name}
        lede={dept.tagline}
        accentBar="bg-solar-500"
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {students.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-maroon-100 transition-colors hover:bg-white/10 hover:text-white"
            >
              Student {s.number}
            </a>
          ))}
        </div>
      </PageHeader>

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Departments", href: "/departments" },
          { label: "Engineering" },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
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

            {dept.deliverables && (
              <div className="rounded-xl bg-white p-6 ring-1 ring-ink-200">
                <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-ink-700">
                  Department deliverables
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {dept.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-maroon-600" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Section>

      {/* ----------------------------------------- Five student subsections */}
      <div className="border-y border-ink-200 bg-white" id="students">
        <Section
          title="Student workstreams"
          description="Five subsections, one per student. Students 1 to 4 currently show an overview written by the project manager from the agreed scope; each student replaces their own entry with their own content."
        >
          <div className="space-y-5">
            {students.map((student) => (
              <div key={student.slug} id={student.slug} className="scroll-mt-24">
                <StudentCard student={student} />
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section title="Engineering updates">
        {items.length > 0 ? (
          <div className="grid gap-5 lg:grid-cols-3">
            {items.map((item) => (
              <NewsCard key={item.slug} item={item} departmentName="Engineering" />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No updates published yet"
            detail="Engineering updates appear here once agreed at the weekly BESS management meeting."
          />
        )}
      </Section>

      {photos.length > 0 && (
        <div className="border-t border-ink-200 bg-white">
          <Section title="From the array and the storage site">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {photos.map((p) => (
                <GalleryCard key={p.id} item={p} />
              ))}
            </div>
          </Section>
        </div>
      )}
    </>
  );
}
