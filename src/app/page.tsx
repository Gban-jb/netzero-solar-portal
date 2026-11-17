import Link from "next/link";
import { getDepartments, getGallery, getNews, getStudents } from "@/lib/content";
import { GalleryCard, NewsCard } from "@/components/cards";
import { TaskBoard } from "@/components/TaskBoard";
import { ThermalScale } from "@/components/ThermalScale";
import { Section } from "@/components/ui";
import { projectStats, site } from "@/content/site";

export default async function HomePage() {
  const [students, departments, updates, photos] = await Promise.all([
    getStudents(),
    getDepartments(),
    getNews(3),
    getGallery(),
  ]);

  const tasks = students.filter((s) => typeof s.pipelineStep === "number");
  const portal = students.find((s) => s.slug === "student-5");
  const alongside = departments.filter((d) => d.slug !== "engineering");
  const weekPct = Math.round((site.currentWeek / site.totalWeeks) * 100);

  return (
    <>
      {/* ============================================ Hero: the thesis */}
      <header className="relative overflow-hidden bg-therm-05">
        <div aria-hidden="true" className="pv-grid absolute inset-0" />
        <div aria-hidden="true" className="pv-glow animate-shimmer absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24 lg:px-10">
          <div className="animate-rise">
            <p className="label text-therm-85">
              {site.university} · Net Zero Solar Electric Initiative
            </p>

            <h1 className="display display-tight mt-7 max-w-[16ch] text-[2.75rem] text-white sm:text-[4.5rem] lg:text-[6rem]">
              From hotspot to dollar figure.
            </h1>

            <p className="prose-serif mt-8 max-w-2xl text-therm-95/80">
              A drone flies the AAMU array with a radiometric thermal camera.
              Four engineering tasks turn what it sees into a fault, a
              location, a priority, and a number in dollars. This is where that
              work is recorded — week by week, in the open.
            </p>
          </div>

          {/* The signature: the four tasks laid along a temperature scale. */}
          <div className="mt-14 sm:mt-16">
            <ThermalScale tasks={tasks} />
          </div>

          {/* Where the project is in its 25 weeks. */}
          <div className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-6">
            <div>
              <p className="label text-white/55">Reporting week</p>
              <p className="display mt-2 text-[2rem] text-white">
                {site.currentWeek}
                <span className="text-white/60"> / {site.totalWeeks}</span>
              </p>
            </div>
            <div className="w-full max-w-sm">
              <div className="h-px w-full bg-white/15">
                <div
                  className="therm-ramp h-px"
                  style={{ width: `${weekPct}%` }}
                />
              </div>
              <p className="label mt-3 text-white/55">
                Two semesters · {site.totalWeeks} weekly reports
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ======================================== The four tasks */}
      <Section
        id="tasks"
        eyebrow="The pipeline"
        title="Four tasks, in the order the data moves"
        description="Position in the field, heat on a panel, a fault in a queue, a cost in dollars. Each task hands its output to the next one, which is why they are listed by that sequence rather than by number."
      >
        <TaskBoard tasks={tasks} />

        {portal && (
          <Link
            href={`/departments/engineering/students/${portal.slug}`}
            className="group mt-10 flex flex-wrap items-baseline justify-between gap-4 border-l-[3px] border-ink-300 pl-6 transition-colors hover:border-therm-55"
          >
            <div>
              <p className="label text-ink-400">Running across all four</p>
              <h3 className="display mt-2 text-[1.375rem] text-ink-900">
                {portal.role}
              </h3>
            </div>
            <span className="label text-ink-400 transition-colors group-hover:text-therm-55">
              Weekly reports, the BESS condition log, this site &rarr;
            </span>
          </Link>
        )}
      </Section>

      {/* ======================================== The array in numbers */}
      <div className="bg-therm-05">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <p className="label text-therm-85">What the work sits on</p>
          <dl className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {projectStats.map((stat) => (
              <div key={stat.label} className="border-t border-white/15 pt-5">
                <dt className="label text-white/60">{stat.label}</dt>
                <dd className="display mt-3 text-[2.5rem] text-white">
                  {stat.value}
                </dd>
                {stat.note && (
                  <dd className="prose-serif mt-2 text-[0.9375rem] text-white/60">
                    {stat.note}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ======================================== Alongside this work */}
      <div className="border-b border-field-200 bg-field-100/40">
        <Section
          eyebrow="Alongside the engineering work"
          title="Four departments studying the same field"
          description="The array is not only an engineering site. Crops and livestock grow beneath it, its soil is measured, its enclosure is designed, and what gets published about it is agreed with Communications. Each department writes its own section."
        >
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {alongside.map((dept) => (
              <DepartmentSummary key={dept.slug} name={dept.name} tagline={dept.tagline} />
            ))}
          </div>

          <Link
            href="/departments"
            className="label group mt-12 inline-flex items-center gap-3 text-field-700"
          >
            Read all four sections
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </Link>
        </Section>
      </div>

      {/* ======================================== Updates */}
      <Section
        eyebrow="On the record"
        title="Latest updates"
        description="Published only after the weekly BESS management meeting agrees what goes on the record."
      >
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-3">
          {updates.map((item) => (
            <NewsCard
              key={item.slug}
              item={item}
              departmentName={
                item.department === "project"
                  ? "Project"
                  : departments.find((d) => d.slug === item.department)?.shortName ??
                    "Project"
              }
            />
          ))}
        </div>

        <Link
          href="/news"
          className="label group mt-12 inline-flex items-center gap-3 text-therm-55"
        >
          Every update
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </Link>
      </Section>

      {/* ======================================== From the array */}
      {photos.length > 0 && (
        <div className="border-t border-ink-200">
          <Section eyebrow="From the flights" title="The array, photographed">
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {photos.slice(0, 4).map((p) => (
                <GalleryCard key={p.id} item={p} />
              ))}
            </div>

            <Link
              href="/gallery"
              className="label group mt-12 inline-flex items-center gap-3 text-therm-55"
            >
              Full gallery
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </Section>
        </div>
      )}
    </>
  );
}

function DepartmentSummary({ name, tagline }: { name: string; tagline: string }) {
  return (
    <div className="border-t-2 border-field-500 pt-5">
      <h3 className="display text-[1.25rem] leading-tight text-ink-900">{name}</h3>
      <p className="prose-serif mt-3 text-[0.9375rem] text-ink-600">{tagline}</p>
    </div>
  );
}
