import type { Metadata } from "next";
import Link from "next/link";
import { getDepartments } from "@/lib/content";
import { Breadcrumbs, DraftNotice, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Alongside the engineering work",
  description:
    "Animal & Food Science, Architecture, Natural Resources & Soil Science and Communications — the four departments studying the AAMU solar field alongside the engineering workstreams.",
};

export default async function DepartmentsPage() {
  const departments = await getDepartments();
  const alongside = departments.filter((d) => d.slug !== "engineering");

  return (
    <>
      <PageHeader
        eyebrow="Alongside the engineering work"
        title="Four departments studying the same field"
        lede="The array is not only an engineering site. These four departments work on the same ground as the drone flights and the battery storage, each writing their own section in their own words."
      />

      <Breadcrumbs
        trail={[{ label: "Home", href: "/" }, { label: "Alongside" }]}
      />

      {/* A contents strip, because this page now holds all four. */}
      <nav aria-label="Departments on this page" className="border-b border-ink-200">
        <ol className="mx-auto grid max-w-7xl gap-px px-5 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          {alongside.map((dept, i) => (
            <li key={dept.slug}>
              <a
                href={`#${dept.slug}`}
                className="group block border-t-2 border-field-500 pt-4 pr-6"
              >
                <span className="label text-ink-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block font-display text-[15px] font-bold leading-tight tracking-tight text-ink-900 transition-colors group-hover:text-field-700">
                  {dept.name}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {alongside.map((dept, i) => (
        <article
          key={dept.slug}
          id={dept.slug}
          className={i % 2 === 1 ? "border-y border-ink-200 bg-field-100/30" : ""}
        >
          <Section className="scroll-mt-20">
            <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div>
                <p className="label text-field-700">
                  {String(i + 1).padStart(2, "0")} · Department
                </p>
                <h2 className="display mt-4 text-[2rem] text-ink-900 sm:text-[2.75rem]">
                  {dept.name}
                </h2>
                <p className="prose-serif mt-4 max-w-2xl text-ink-700">
                  {dept.tagline}
                </p>

                {dept.awaitingDepartmentCopy && (
                  <div className="mt-8 max-w-2xl">
                    <DraftNotice owner={dept.contentOwner} kind="department" />
                  </div>
                )}

                <p className="prose-serif mt-8 max-w-2xl text-ink-800">
                  {dept.summary}
                </p>

                <div className="mt-6 max-w-2xl space-y-5">
                  {dept.body.map((para, j) => (
                    <p key={j} className="prose-serif text-ink-600">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <aside className="space-y-10">
                <div>
                  <h3 className="label border-b border-ink-200 pb-3 text-ink-500">
                    Focus areas
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {dept.focusAreas.map((f) => (
                      <li
                        key={f}
                        className="flex gap-3 font-mono text-[11px] leading-relaxed text-ink-600"
                      >
                        <span aria-hidden="true" className="text-field-500">
                          ·
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {dept.deliverables && (
                  <div>
                    <h3 className="label border-b border-ink-200 pb-3 text-ink-500">
                      Deliverables
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {dept.deliverables.map((d) => (
                        <li
                          key={d}
                          className="prose-serif text-[0.9375rem] text-ink-600"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h3 className="label border-b border-ink-200 pb-3 text-ink-500">
                    Section written by
                  </h3>
                  <p className="prose-serif mt-4 text-[0.9375rem] text-ink-700">
                    {dept.contentOwner}
                  </p>
                </div>
              </aside>
            </div>
          </Section>
        </article>
      ))}

      {/* Back to the main event. */}
      <div className="bg-therm-05">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <p className="label text-therm-85">The engineering work</p>
          <h2 className="display mt-5 max-w-3xl text-[2rem] text-white sm:text-[2.75rem]">
            Four tasks turning thermal imagery into a cost
          </h2>
          <Link
            href="/departments/engineering"
            className="label group mt-8 inline-flex items-center gap-3 text-therm-85"
          >
            Open the engineering section
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
