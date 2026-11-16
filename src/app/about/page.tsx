import type { Metadata } from "next";
import Link from "next/link";
import { scopeNotes, site, weeklyCycle } from "@/content/site";
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
        title="The weekly cycle"
        description="Seven steps run every week of both semesters. The weekly report is the one that never pauses — a week without a presented report counts as a missed deliverable."
      >
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {weeklyCycle.map((s) => (
            <li
              key={s.step}
              className="relative rounded-xl bg-white p-6 ring-1 ring-ink-200"
            >
              <span
                aria-hidden="true"
                className="font-display text-3xl font-extrabold tracking-tight text-ink-200"
              >
                {String(s.step).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-display text-base font-extrabold tracking-tight text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.detail}</p>
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
                <p className="text-sm leading-relaxed text-ink-700">{note}</p>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <Section title="Contributing to this site">
        <div className="grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 ring-1 ring-ink-200">
            <h3 className="font-display text-base font-extrabold tracking-tight text-ink-900">
              If you are one of the five students
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
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

          <div className="rounded-xl bg-white p-6 ring-1 ring-ink-200">
            <h3 className="font-display text-base font-extrabold tracking-tight text-ink-900">
              If you are a department
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
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
