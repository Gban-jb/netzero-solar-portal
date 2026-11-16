import Link from "next/link";
import { getDepartments, getGallery, getNews, getStudents } from "@/lib/content";
import { projectStats, site } from "@/content/site";
import { DepartmentCard, GalleryCard, NewsCard, StudentCard } from "@/components/cards";
import { Section } from "@/components/ui";
import { HeroArray } from "@/components/HeroArray";

export default async function HomePage() {
  const [departments, students, news, gallery] = await Promise.all([
    getDepartments(),
    getStudents(),
    getNews(3),
    getGallery(),
  ]);

  const deptName = (slug: string) =>
    slug === "project"
      ? "Project-wide"
      : departments.find((d) => d.slug === slug)?.shortName ?? "Project";

  const pct = Math.round((site.currentWeek / site.totalWeeks) * 100);

  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative isolate overflow-hidden bg-maroon-950">
        <div aria-hidden="true" className="pv-grid absolute inset-0" />
        <div aria-hidden="true" className="pv-glow animate-shimmer absolute inset-0" />
        <HeroArray />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-50 to-transparent"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="relative z-10 max-w-3xl animate-rise lg:max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-solar-300 ring-1 ring-inset ring-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-solar-400" aria-hidden="true" />
              {site.university}
            </p>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Net Zero:{" "}
              <span className="text-solar-400">Solar Electric</span> Initiative
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-maroon-100/90">
              The centralised research portal for AAMU&rsquo;s Solar PV Drone Monitoring and
              Battery Energy Storage programme. Five departments, five engineering
              workstreams, one public record of the work.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/departments"
                className="inline-flex items-center gap-2 rounded-lg bg-solar-500 px-5 py-3 text-sm font-bold text-maroon-950 transition-colors hover:bg-solar-400"
              >
                Explore departments
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10h11M11 5.5 15.5 10 11 14.5" />
                </svg>
              </Link>
              <Link
                href="/departments/engineering"
                className="inline-flex items-center rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Engineering team
              </Link>
            </div>

            {/* Reporting-week progress — Student 5 updates this weekly. */}
            <div className="mt-12 max-w-md rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-solar-300">
                  Reporting cycle
                </p>
                <p className="font-mono text-xs text-maroon-200">
                  Week {site.currentWeek} of {site.totalWeeks}
                </p>
              </div>
              <div
                className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/15"
                role="progressbar"
                aria-valuenow={site.currentWeek}
                aria-valuemin={1}
                aria-valuemax={site.totalWeeks}
                aria-label={`Reporting week ${site.currentWeek} of ${site.totalWeeks}`}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-solar-500 to-solar-400"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-maroon-200/80">
                A one-page team report covering all five students is produced and
                presented every week of both semesters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Stats */}
      <div className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-px bg-ink-200 lg:grid-cols-4">
            {projectStats.map((stat) => (
              <div key={stat.label} className="bg-white px-4 py-8 sm:px-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-extrabold tracking-tight text-maroon-700 sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-sm font-semibold text-ink-800">
                    {stat.label}
                  </span>
                  {stat.note && (
                    <span className="mt-1 block text-xs leading-relaxed text-ink-500">
                      {stat.note}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* --------------------------------------------------- Departments */}
      <Section
        title="Departments"
        description="Five groups contribute to the initiative, each writing its own section. Engineering carries the drone monitoring and battery storage workstreams; the other four cover the agricultural, environmental, architectural and public-facing sides of the same site."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => (
            <DepartmentCard key={dept.slug} dept={dept} />
          ))}
        </div>
      </Section>

      {/* ----------------------------------------------- Engineering team */}
      <div className="border-y border-ink-200 bg-white">
        <Section
          title="Engineering team"
          description="Five student workstreams running in parallel, from raw thermal imagery through to the weekly report. Each student owns their own subsection and publishes to it directly."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {students.map((student) => (
              <StudentCard key={student.slug} student={student} />
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-ink-200 bg-ink-50 p-6">
            <h3 className="font-display text-base font-extrabold text-ink-900">
              How work reaches this page
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-600">
              Each student edits only their own file in{" "}
              <code className="rounded bg-white px-1.5 py-0.5 font-mono text-[12px] text-maroon-700 ring-1 ring-ink-200">
                src/content/students/
              </code>{" "}
              and opens a pull request against the project repository. A preview
              deployment is built automatically for review, and the live site updates
              on merge.
            </p>
          </div>
        </Section>
      </div>

      {/* -------------------------------------------------------- Updates */}
      <Section
        title="Latest updates"
        description="Items are published here after the weekly BESS management meeting agrees what goes on the record."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item.slug} item={item} departmentName={deptName(item.department)} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-maroon-700 hover:text-maroon-500"
          >
            All updates
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 10h11M11 5.5 15.5 10 11 14.5" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* -------------------------------------------------------- Gallery */}
      <div className="border-t border-ink-200 bg-white">
        <Section
          title="From the site"
          description="Photographs from drone flights, site visits and the BESS management site. Every image carries its location and capture date, or says plainly that they are still pending."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.slice(0, 4).map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-maroon-700 hover:text-maroon-500"
            >
              Open the full gallery
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10h11M11 5.5 15.5 10 11 14.5" />
              </svg>
            </Link>
          </div>
        </Section>
      </div>
    </>
  );
}
