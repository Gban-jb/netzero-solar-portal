import type { Metadata } from "next";
import Link from "next/link";
import {
  equipment,
  objectives,
  scopeNotes,
  site,
  team,
  weeklyCycle,
} from "@/content/site";
import { Breadcrumbs, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About & scope",
  description:
    "How the Net Zero Solar project portal works: the weekly reporting cycle, what the drone imagery can and cannot show, and how the site is prepared for integration into AAMU's Net Zero Solar pages.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About this portal"
        title="How the work reaches this site"
        lede="This is a standalone research portal, kept in a structure Alabama A&M University can take over. It shares information; it is not a live dashboard, and every item on it is added by hand after review."
      />
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <Section
        id="objectives"
        eyebrow="Objectives"
        title="What the project is trying to do"
        description="Five objectives, each written with the thing that would count as having achieved it. An objective that cannot be checked is not an objective."
      >
        <ol className="grid max-w-5xl gap-x-10 gap-y-8 sm:grid-cols-2">
          {objectives.map((o) => (
            <li key={o.number} className="border-t-2 border-ink-900 pt-6">
              <span
                aria-hidden="true"
                className="display text-[2.5rem] leading-none text-ink-200"
              >
                {o.number}
              </span>
              <h3 className="display mt-2 text-[1.25rem] text-ink-900">
                {o.title}
              </h3>
              <p className="prose-serif mt-3 text-[0.9375rem] text-ink-600">
                {o.detail}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        title="The weekly cycle"
        description="Seven steps run every week of both semesters. The weekly report is the one that never pauses — a week without a presented report counts as a missed deliverable."
      >
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {weeklyCycle.map((s) => (
            <li
              key={s.step}
              className="relative border-t-2 border-ink-900 pt-6"
            >
              <span
                aria-hidden="true"
                className="display text-[2.5rem] text-ink-200"
              >
                {String(s.step).padStart(2, "0")}
              </span>
              <h3 className="mt-1 display text-[1.25rem] text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 prose-serif text-[0.9375rem] text-ink-600">{s.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <div className="border-y border-ink-200 bg-white">
        <Section
          title="Scope and limits"
          description="Stated here deliberately. The project specification requires that the limits of the method be explicit rather than implied."
        >
          <ul className="max-w-4xl space-y-4">
            {scopeNotes.map((note, i) => (
              <li key={i} className="flex gap-4 rounded-lg border border-ink-200 bg-ink-50 p-5">
                <span
                  aria-hidden="true"
                  className="mt-1 h-2 w-2 shrink-0 rounded-full bg-maroon-600"
                />
                <p className="prose-serif text-[0.9375rem] text-ink-700">{note}</p>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <Section
        title="The team"
        description="Five students, one workstream each. The section is named for the task rather than the person, so the record stays readable when someone hands their work on."
      >
        <ul className="grid max-w-5xl gap-px border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <li key={person.slug} className="bg-white p-6">
              <Link
                href={`/departments/engineering/students/${person.slug}`}
                className="group block"
              >
                <p className="display text-[1.125rem] text-ink-900 transition-colors group-hover:text-therm-55">
                  {person.name}
                </p>
                <p className="label mt-2 text-ink-400">{person.task}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 max-w-3xl border-t-2 border-ink-900 pt-6">
          <p className="prose-serif text-[0.9375rem] text-ink-600">
            <span className="label text-ink-400">Supervisor</span>
            <br />
            {site.supervisor}, {site.university}
          </p>
          <p className="prose-serif mt-4 text-[0.9375rem] text-ink-600">
            <span className="label text-ink-400">Mentor</span>
            <br />
            {site.mentor}
          </p>
        </div>
      </Section>

      <div className="border-y border-ink-200 bg-white">
        <Section
          title="The equipment"
          description="Listed by what each instrument produces, because that is what the workstreams downstream consume. One flight yields the imagery, the positions and the log that the first two tasks run on."
        >
          <ul className="max-w-4xl divide-y divide-ink-200 border-y border-ink-200">
            {equipment.map((item) => (
              <li
                key={item.name}
                className="grid gap-x-8 gap-y-2 py-6 sm:grid-cols-[14rem_minmax(0,1fr)]"
              >
                <div>
                  <h3 className="display text-[1.0625rem] text-ink-900">
                    {item.name}
                  </h3>
                  <p className="label mt-1.5 text-ink-400">{item.role}</p>
                </div>
                <p className="prose-serif text-[0.9375rem] text-ink-600">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <Section title="Contributing to this site">
        <div className="grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="border-t-2 border-ink-900 pt-6">
            <h3 className="display text-[1.25rem] text-ink-900">
              If you are one of the five students
            </h3>
            <p className="mt-3 prose-serif text-[0.9375rem] text-ink-600">
              Your section lives in its own file under{" "}
              <code className="rounded bg-ink-100 px-1.5 py-0.5 font-mono text-[12px] text-maroon-700">
                src/content/students/
              </code>
              , named for your student number. Edit only that file, set{" "}
              <code className="rounded bg-ink-100 px-1.5 py-0.5 font-mono text-[12px] text-maroon-700">
                awaitingStudentCopy
              </code>{" "}
              to{" "}
              <code className="rounded bg-ink-100 px-1.5 py-0.5 font-mono text-[12px] text-maroon-700">
                false
              </code>{" "}
              once it is yours, and open a pull request. One file per student is what
              lets five people work in the same week without merge conflicts.
            </p>
          </div>

          <div className="border-t-2 border-ink-900 pt-6">
            <h3 className="display text-[1.25rem] text-ink-900">
              If you are a department
            </h3>
            <p className="mt-3 prose-serif text-[0.9375rem] text-ink-600">
              Your section lives in{" "}
              <code className="rounded bg-ink-100 px-1.5 py-0.5 font-mono text-[12px] text-maroon-700">
                src/content/departments.ts
              </code>
              . The text published under your name is text you write yourself — send it
              as a pull request, or hand it to the project manager to enter on your
              behalf.
            </p>
          </div>
        </div>
      </Section>

      <div className="border-t border-ink-200 bg-white">
        <Section title="The initiative">
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-ink-700">
            <p>
              This portal documents a student research programme running inside{" "}
              {site.initiative} at {site.university}, under the supervision of{" "}
              {site.supervisor}.
            </p>
            <p>
              The wider initiative covers the campus solar array, the battery energy
              storage that buffers it, and the electric transit fleet it supplies. This
              site covers the research programme: the drone-based monitoring of the
              array, the condition monitoring of the storage equipment, and the work of
              the five departments studying the site.
            </p>
            <p>
              <a
                href={site.aamuInitiativeUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-maroon-700 hover:underline"
              >
                The university&rsquo;s own Net Zero Solar pages
                <span className="sr-only"> (opens in a new tab)</span>
              </a>{" "}
              carry the institutional account of the initiative. This portal is built to
              be merged into them once the AAMU web team approves the integration.
            </p>
          </div>

          <p className="mt-8">
            <Link href="/departments" className="text-sm font-bold text-maroon-700 hover:underline">
              Browse the departments &rarr;
            </Link>
          </p>
        </Section>
      </div>
    </>
  );
}
