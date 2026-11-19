import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { students as allStudents } from "@/content/students";
import { gallery } from "@/content/gallery";
import { getStudent, getStudents } from "@/lib/content";
import {
  Breadcrumbs,
  Chip,
  DraftNotice,
  PageHeader,
  Section,
  StatusPill,
} from "@/components/ui";
import { cx, pipelineStages, taskTone, workstreamLabel } from "@/lib/format";
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
    title: `${student.task} — ${student.role}`,
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
  const tone = taskTone(student.pipelineStep);
  const taskImages = gallery.filter(
    (img) => img.taskSlug === student.slug && img.src,
  );
  const stage =
    typeof student.pipelineStep === "number"
      ? pipelineStages[student.pipelineStep - 1]
      : null;

  return (
    <>
      <PageHeader
        eyebrow={
          stage
            ? `Engineering · ${workstreamLabel(student.number)} · ${stage}`
            : `Engineering · ${workstreamLabel(student.number)}`
        }
        title={student.role}
        lede={student.tagline}
        accentBar={tone.block}
      >
        <p className="mt-8 text-white/70">
          {student.name ? (
            <>
              <span className="label text-white/40">Task owner</span>{" "}
              <span className="font-display font-bold text-white">{student.name}</span>
            </>
          ) : (
            <span className="label bg-white/10 px-2 py-1 text-white/60">
              {`Owner pending — set \`name\` in src/content/students/${student.slug}.ts`}
            </span>
          )}
        </p>
      </PageHeader>

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Departments", href: "/departments" },
          { label: "Engineering", href: "/departments/engineering" },
          { label: student.task },
        ]}
      />

      <Section>
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            {student.awaitingStudentCopy && (
              <div className="mb-8">
                <DraftNotice owner={workstreamLabel(student.number)} kind="student" />
              </div>
            )}

            <h2 className="label border-b border-ink-200 pb-3 text-ink-500">
              Objective
            </h2>
            <p className="prose-serif mt-5 max-w-2xl text-[1.25rem] leading-[1.55] text-ink-800">
              {student.objective}
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="label border-b border-ink-200 pb-3 text-ink-500">
                  Input data
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {student.inputs.map((item) => (
                    <li key={item} className="prose-serif flex gap-3 text-[0.9375rem] text-ink-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-300" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="label border-b border-ink-200 pb-3 text-ink-500">
                  Expected output
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {student.outputs.map((item) => (
                    <li key={item} className="prose-serif flex gap-3 text-[0.9375rem] text-ink-700">
                      <span className={cx("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", tone.dot)} aria-hidden="true" />
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
              dot={tone.dot}
            />
            <MilestoneTrack
              heading="Spring semester"
              sub="Weeks 13–25"
              milestones={student.springMilestones}
              dot={tone.dot}
            />
          </div>

          <aside className="space-y-10">
            <div>
              <h2 className="label border-b border-ink-200 pb-3 text-ink-500">
                Tools &amp; stack
              </h2>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {student.stack.map((s) => (
                  <li key={s}>
                    <Chip>
                      {s}
                    </Chip>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="label border-b border-ink-200 pb-3 text-ink-500">
                Code &amp; demos
              </h2>
              <ul className="mt-4 space-y-2.5">
                {student.links.map((l) => (
                  <li key={l.label}>
                    {l.pending ? (
                      <span className="label flex items-center gap-2 text-ink-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-ink-300" aria-hidden="true" />
                        {l.label} — not submitted
                      </span>
                    ) : (
                      <Link href={l.href} className="label text-therm-55 hover:underline">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <nav aria-label="Other workstreams">
              <h2 className="label border-b border-ink-200 pb-3 text-ink-500">
                Other workstreams
              </h2>
              <ul className="mt-4 space-y-2.5">
                {all
                  .filter((s) => s.slug !== student.slug)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/departments/engineering/students/${s.slug}`}
                        className="block font-display text-[13px] font-bold leading-snug tracking-tight text-ink-700 transition-colors hover:text-therm-55"
                      >
                        {s.role}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </aside>
        </div>

        {taskImages.length > 0 && (
          <section
            aria-labelledby="reference-imagery"
            className="mt-16 border-t border-ink-200 pt-10"
          >
            <h2
              id="reference-imagery"
              className="label border-b border-ink-200 pb-3 text-ink-500"
            >
              Reference imagery
            </h2>
            <p className="prose-serif mt-4 max-w-2xl text-ink-600">
              What this task looks like in practice. These are reference
              photographs of the equipment and output involved, not captures
              from the AAMU site — site imagery appears in the{" "}
              <Link href="/gallery" className="underline hover:text-therm-55">
                gallery
              </Link>{" "}
              as it is produced.
            </p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {taskImages.map((img, i) => (
                <li
                  key={img.id}
                  className="animate-drop"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <figure>
                    <div className="aspect-[4/3] w-full overflow-hidden border border-ink-200 bg-ink-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <figcaption className="label mt-3 text-ink-500">
                      {img.caption}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        )}

        <nav
          aria-label="Workstream pagination"
          className="mt-14 flex flex-col gap-3 border-t border-ink-200 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          {prev ? (
            <Link href={`/departments/engineering/students/${prev.slug}`} className="label text-therm-55 hover:underline">
              &larr; {prev.task}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/departments/engineering/students/${next.slug}`} className="label text-therm-55 hover:underline sm:text-right">
              {next.task} &rarr;
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
        <h2 className="display text-[1.5rem] text-ink-900">{heading}</h2>
        <span className="label text-ink-400">{sub}</span>
      </div>

      <ol className="relative mt-7 space-y-8 border-l border-ink-200 pl-7">
        {milestones.map((m) => (
          <li key={m.title} className="relative">
            <span
              aria-hidden="true"
              className={cx(
                "absolute -left-[1.78rem] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-white",
                dot,
              )}
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="label text-ink-500">{m.window}</span>
              <StatusPill status={m.status} />
            </div>
            <h3 className="display mt-2.5 text-[1.125rem] text-ink-900">{m.title}</h3>
            <p className="prose-serif mt-2 text-[0.9375rem] text-ink-600">{m.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
