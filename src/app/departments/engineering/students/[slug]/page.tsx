import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { students as allStudents } from "@/content/students";
import { getStudent, getStudents } from "@/lib/content";
import {
  Breadcrumbs,
  Chip,
  DraftNotice,
  PageHeader,
  Section,
  StatusPill,
} from "@/components/ui";
import { accents, cx } from "@/lib/format";
import type { Milestone } from "@/lib/types";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allStudents.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const student = await getStudent(slug);
  if (!student) return { title: "Student not found" };
  return {
    title: `Student ${student.number} — ${student.role}`,
    description: student.objective,
  };
}

export default async function StudentPage({ params }: Params) {
  const { slug } = await params;
  const student = await getStudent(slug);
  if (!student) notFound();

  const all = await getStudents();
  const idx = all.findIndex((s) => s.slug === student.slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;
  const a = accents[student.accent];

  return (
    <>
      <PageHeader
        eyebrow={`Engineering · Student ${student.number}`}
        title={student.role}
        lede={student.tagline}
        accentBar={a.bar}
      >
        <p className="mt-6 text-sm text-maroon-100/80">
          {student.name ? (
            <>
              Workstream lead:{" "}
              <span className="font-semibold text-white">{student.name}</span>
            </>
          ) : (
            <span className="rounded bg-white/10 px-2 py-1 font-mono text-xs text-maroon-200">
              Student name pending — set `name` in src/content/students.ts
            </span>
          )}
        </p>
      </PageHeader>

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Departments", href: "/departments" },
          { label: "Engineering", href: "/departments/engineering" },
          { label: `Student ${student.number}` },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            {student.awaitingStudentCopy && (
              <div className="mb-8">
                <DraftNotice owner={`Student ${student.number}`} kind="student" />
              </div>
            )}

            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
              Objective
            </h2>
            <p className="mt-3 font-display text-xl font-bold leading-relaxed tracking-tight text-ink-900">
              {student.objective}
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
                  Input data
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {student.inputs.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-300" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
                  Expected output
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {student.outputs.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                      <span className={cx("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", a.dot)} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <MilestoneTrack
              heading="Fall semester"
              sub="Weeks 1–12"
              milestones={student.fallMilestones}
              dot={a.dot}
            />
            <MilestoneTrack
              heading="Spring semester"
              sub="Weeks 13–25"
              milestones={student.springMilestones}
              dot={a.dot}
            />
          </div>

          <aside className="space-y-6">
            <div className={cx("rounded-xl p-6 ring-1 ring-ink-200", a.softBg)}>
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-ink-700">
                Tools &amp; stack
              </h2>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {student.stack.map((s) => (
                  <li key={s}>
                    <Chip className="bg-white/80 font-mono text-[11px] ring-1 ring-inset ring-ink-200">
                      {s}
                    </Chip>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 ring-1 ring-ink-200">
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-ink-700">
                Code &amp; demos
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {student.links.map((l) => (
                  <li key={l.label}>
                    {l.pending ? (
                      <span className="flex items-center gap-2 text-ink-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-ink-300" aria-hidden="true" />
                        {l.label} — not submitted yet
                      </span>
                    ) : (
                      <Link href={l.href} className="font-semibold text-maroon-700 hover:underline">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <nav aria-label="Other students" className="rounded-xl bg-white p-6 ring-1 ring-ink-200">
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-ink-700">
                Other workstreams
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {all
                  .filter((s) => s.slug !== student.slug)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/departments/engineering/students/${s.slug}`}
                        className="text-ink-700 hover:text-maroon-700 hover:underline"
                      >
                        <span className="font-semibold">Student {s.number}</span> — {s.role}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </aside>
        </div>

        <nav
          aria-label="Student pagination"
          className="mt-14 flex flex-col gap-3 border-t border-ink-200 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          {prev ? (
            <Link href={`/departments/engineering/students/${prev.slug}`} className="text-sm font-semibold text-maroon-700 hover:underline">
              &larr; Student {prev.number} — {prev.role}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/departments/engineering/students/${next.slug}`} className="text-sm font-semibold text-maroon-700 hover:underline sm:text-right">
              Student {next.number} — {next.role} &rarr;
            </Link>
          )}
        </nav>
      </Section>
    </>
  );
}

function MilestoneTrack({
  heading,
  sub,
  milestones,
  dot,
}: {
  heading: string;
  sub: string;
  milestones: Milestone[];
  dot: string;
}) {
  if (milestones.length === 0) return null;
  return (
    <div className="mt-12">
      <div className="flex items-baseline gap-3">
        <h2 className="font-display text-lg font-extrabold tracking-tight text-ink-900">
          {heading}
        </h2>
        <span className="font-mono text-xs text-ink-400">{sub}</span>
      </div>

      <ol className="relative mt-6 space-y-6 border-l border-ink-200 pl-6">
        {milestones.map((m) => (
          <li key={m.title} className="relative">
            <span
              aria-hidden="true"
              className={cx(
                "absolute -left-[1.655rem] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-ink-50",
                dot,
              )}
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="font-mono text-xs font-medium text-ink-500">{m.window}</span>
              <StatusPill status={m.status} />
            </div>
            <h3 className="mt-1.5 text-base font-bold text-ink-900">{m.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{m.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
