import type { Metadata } from "next";
import Link from "next/link";
import { site, team } from "@/content/site";
import { Breadcrumbs, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Who runs the Net Zero Solar research project at Alabama A&M University, what the project covers, and where to read the university's own account of the initiative.",
};

/** One row of the record. Kept as a definition list so the page reads
 *  as a reference card rather than as prose. */
function Entry({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-x-8 gap-y-1 border-b border-ink-200 py-5 sm:grid-cols-[12rem_minmax(0,1fr)]">
      <dt className="label text-ink-400">{term}</dt>
      <dd className="prose-serif text-[0.9375rem] text-ink-800">{children}</dd>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Who to ask, and about what"
        lede="This is a student research project inside a university initiative. Questions about the research belong with the team; questions about the initiative itself belong with Alabama A&M University."
      />
      <Breadcrumbs
        trail={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section title="The project">
        <dl className="max-w-4xl border-t border-ink-200">
          <Entry term="Institution">{site.university}</Entry>
          <Entry term="Initiative">{site.initiative}</Entry>
          <Entry term="Project">{site.project}</Entry>
          <Entry term="Supervisor">{site.supervisor}</Entry>
          <Entry term="Mentor">{site.mentor}</Entry>
          <Entry term="Research team">
            {team.map((p, i) => (
              <span key={p.slug}>
                <Link
                  href={`/departments/engineering/students/${p.slug}`}
                  className="hover:text-therm-55 hover:underline"
                >
                  {p.name}
                </Link>
                {i < team.length - 1 ? ", " : ""}
              </span>
            ))}
          </Entry>
          <Entry term="Reporting">
            Week {site.currentWeek} of {site.totalWeeks}, across two
            semesters. A weekly report is presented every week of both.
          </Entry>
        </dl>
      </Section>

      <div className="border-y border-ink-200 bg-white">
        <Section
          title="Where to go for what"
          description="The portal carries the research record. It does not speak for the university, and it does not operate the battery system."
        >
          <div className="grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="border-t-2 border-ink-900 pt-6">
              <h3 className="display text-[1.125rem] text-ink-900">
                About the research
              </h3>
              <p className="prose-serif mt-3 text-[0.9375rem] text-ink-600">
                Each workstream is documented on its own page, with its
                objective, its inputs and outputs, and its milestones.
                Start there, then ask the student who owns it.
              </p>
              <p className="mt-4">
                <Link
                  href="/departments/engineering"
                  className="label text-therm-55 hover:underline"
                >
                  The four tasks &rarr;
                </Link>
              </p>
            </div>
            <div className="border-t-2 border-ink-900 pt-6">
              <h3 className="display text-[1.125rem] text-ink-900">
                About the initiative
              </h3>
              <p className="prose-serif mt-3 text-[0.9375rem] text-ink-600">
                The array, the storage and the electric transit fleet are
                the university&rsquo;s programme, not this project&rsquo;s.
                Their pages carry the institutional account.
              </p>
              <p className="mt-4">
                <a
                  href={site.aamuInitiativeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="label text-therm-55 hover:underline"
                >
                  AAMU Net Zero Solar
                  <span className="sr-only"> (opens in a new tab)</span> &rarr;
                </a>
              </p>
            </div>
            <div className="border-t-2 border-ink-900 pt-6">
              <h3 className="display text-[1.125rem] text-ink-900">
                About the battery system
              </h3>
              <p className="prose-serif mt-3 text-[0.9375rem] text-ink-600">
                Operating the storage, its safety procedures and its
                engineering decisions stay with the BESS team. This
                project records equipment condition; it does not run it.
              </p>
              <p className="mt-4">
                <Link
                  href="/about"
                  className="label text-therm-55 hover:underline"
                >
                  Scope and limits &rarr;
                </Link>
              </p>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
