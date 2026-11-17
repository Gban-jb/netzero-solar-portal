import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDepartment, getGallery, getNewsByDepartment, getStudents } from "@/lib/content";
import { GalleryCard, NewsCard, StudentCard } from "@/components/cards";
import { TaskBoard } from "@/components/TaskBoard";
import { ThermalScale } from "@/components/ThermalScale";
import { Breadcrumbs, EmptyState, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Engineering & Battery Energy Storage",
  description:
    "Four engineering tasks — field hardware, thermal imaging, anomaly management and energy-loss analysis — plus project reporting, for the AAMU solar PV drone monitoring and BESS programme.",
};

export default async function EngineeringPage() {
  const dept = await getDepartment("engineering");
  if (!dept) notFound();

  const [students, items, photos] = await Promise.all([
    getStudents(),
    getNewsByDepartment("engineering"),
    getGallery("engineering"),
  ]);

  const tasks = students.filter((s) => typeof s.pipelineStep === "number");

  return (
    <>
      <PageHeader eyebrow="Department" title={dept.name} lede={dept.tagline}>
        <div className="mt-14">
          <ThermalScale tasks={tasks} />
        </div>
      </PageHeader>

      <Breadcrumbs
        trail={[{ label: "Home", href: "/" }, { label: "Engineering" }]}
      />

      <Section>
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <p className="prose-serif max-w-2xl text-[1.25rem] leading-[1.55] text-ink-800">
              {dept.summary}
            </p>
            <div className="mt-8 max-w-2xl space-y-5">
              {dept.body.map((para, i) => (
                <p key={i} className="prose-serif text-ink-600">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <aside className="space-y-10">
            <div>
              <h2 className="label border-b border-ink-200 pb-3 text-ink-500">
                Focus areas
              </h2>
              <ul className="mt-4 space-y-2">
                {dept.focusAreas.map((f) => (
                  <li key={f} className="flex gap-3 font-mono text-[11px] leading-relaxed text-ink-600">
                    <span aria-hidden="true" className="text-therm-70">
                      ·
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {dept.deliverables && (
              <div>
                <h2 className="label border-b border-ink-200 pb-3 text-ink-500">
                  Department deliverables
                </h2>
                <ul className="mt-4 space-y-3">
                  {dept.deliverables.map((d) => (
                    <li key={d} className="prose-serif text-[0.9375rem] text-ink-600">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Section>

      {/* ------------------------------------------------ The four tasks */}
      <div className="border-t border-ink-200" id="tasks">
        <Section
          eyebrow="The pipeline"
          title="Four tasks, in the order the data moves"
          description="Each task hands its output to the next, which is why they are listed by that sequence rather than by number. Open one for its objective, input data, deliverables and week-by-week status."
        >
          <TaskBoard tasks={tasks} />
        </Section>
      </div>

      {/* --------------------------------------- Every workstream in full */}
      <div className="border-t border-ink-200 bg-ink-50" id="workstreams">
        <Section
          eyebrow="Ownership"
          title="All five workstreams"
          description="The four tasks above, plus project reporting and this portal. Each overview was written by the project manager from the agreed scope until its owner replaces it."
        >
          <div className="border-t border-ink-200">
            {students.map((student) => (
              <div key={student.slug} id={student.slug} className="scroll-mt-24">
                <StudentCard student={student} />
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section eyebrow="On the record" title="Engineering updates">
        {items.length > 0 ? (
          <div className="grid gap-x-10 gap-y-12 lg:grid-cols-3">
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
        <div className="border-t border-ink-200">
          <Section eyebrow="From the flights" title="The array and the storage site">
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
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
