import Link from "next/link";
import { cx, formatDate, taskTone, workstreamLabel } from "@/lib/format";
import type { Department, GalleryItem, NewsItem, StudentProfile } from "@/lib/types";

/**
 * Departments other than Engineering. These run alongside the
 * engineering work rather than inside it, so they are set in the
 * field green throughout and never take a ramp colour — the two
 * strands of the project stay visually separate everywhere.
 */
export function DepartmentCard({ dept }: { dept: Department }) {
  return (
    <article
      id={dept.slug}
      className="group relative flex scroll-mt-24 flex-col border-t-2 border-field-500 pt-6"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="display text-[1.5rem] leading-tight text-ink-900">
          {dept.name}
        </h3>
        {dept.awaitingDepartmentCopy && (
          <span className="label shrink-0 text-solar-700">Draft</span>
        )}
      </div>

      <p className="label mt-3 text-field-700">{dept.tagline}</p>

      <p className="prose-serif mt-4 flex-1 text-[1rem] text-ink-600">
        {dept.summary}
      </p>

      <ul className="mt-6 space-y-1.5">
        {dept.focusAreas.slice(0, 4).map((f) => (
          <li key={f} className="flex gap-2.5 font-mono text-[11px] text-ink-500">
            <span aria-hidden="true" className="text-field-500">
              ·
            </span>
            {f}
          </li>
        ))}
      </ul>

      <p className="label mt-6 text-ink-400">
        Written by {dept.contentOwner}
      </p>
    </article>
  );
}

/** One engineering workstream, listed in full on the Engineering page. */
export function StudentCard({ student }: { student: StudentProfile }) {
  const tone = taskTone(student.pipelineStep);
  const isTask = typeof student.pipelineStep === "number";

  return (
    <Link
      href={`/departments/engineering/students/${student.slug}`}
      className="group relative block border-b border-ink-200 py-8"
    >
      <span
        aria-hidden="true"
        className={cx(
          "rule-grow absolute inset-x-0 top-0 h-[3px] scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100",
          isTask ? tone.block : "bg-ink-400",
        )}
      />

      <div className="grid gap-x-8 gap-y-3 sm:grid-cols-[9rem_minmax(0,1fr)]">
        <div>
          <p className={cx("label", isTask ? tone.label : "text-ink-400")}>
            {workstreamLabel(student.number)}
          </p>
          <p className="label mt-1 text-ink-400">{student.task}</p>
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-3">
            <h3 className="display text-[1.375rem] leading-tight text-ink-900 transition-transform duration-500 group-hover:translate-x-1">
              {student.role}
            </h3>
            {student.awaitingStudentCopy && (
              <span className="label text-solar-700">Draft</span>
            )}
          </div>

          <p className="prose-serif mt-2.5 max-w-2xl text-[1rem] text-ink-600">
            {student.tagline}
          </p>

          <p className="label mt-4 text-ink-400">
            {student.name ? `Led by ${student.name}` : "Owner to be confirmed"}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function NewsCard({ item, departmentName }: { item: NewsItem; departmentName: string }) {
  return (
    <article className="group relative border-t border-ink-200 pt-5">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <time dateTime={item.date} className="label text-therm-55">
          {formatDate(item.date)}
        </time>
        <span className="label text-ink-400">{departmentName}</span>
      </div>

      <h3 className="display mt-3 text-[1.375rem] leading-tight text-ink-900">
        <Link
          href={`/news/${item.slug}`}
          className="transition-colors after:absolute after:inset-0 group-hover:text-therm-55"
        >
          {item.title}
        </Link>
      </h3>

      <p className="prose-serif mt-3 text-[1rem] text-ink-600">{item.summary}</p>

      {item.approvedBy && (
        <p className="label mt-5 text-ink-400">Agreed with {item.approvedBy}</p>
      )}
    </article>
  );
}

export function GalleryCard({ item }: { item: GalleryItem }) {
  const hasImage = Boolean(item.src);
  return (
    <figure className="group">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-100">
        {hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="pv-grid flex h-full w-full flex-col items-center justify-center gap-3 bg-therm-05 text-center">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 text-therm-70/70" fill="none" stroke="currentColor" strokeWidth="1.25">
              <rect x="3" y="5" width="18" height="14" />
              <circle cx="8.5" cy="10" r="1.5" />
              <path d="m4 17 4.5-4.5L12 16l3-3 5 5" />
            </svg>
            <figcaption className="label px-4 text-therm-95/60">
              Awaiting photograph
            </figcaption>
          </div>
        )}
      </div>
      <figcaption className="pt-4">
        <p className="font-display text-[15px] font-bold leading-snug tracking-tight text-ink-900">
          {item.caption}
        </p>
        <p className="label mt-2 text-ink-400">
          {item.location || "Location pending"}
          {item.reference
            ? ""
            : item.capturedOn
              ? ` · ${formatDate(item.capturedOn)}`
              : " · date pending"}
        </p>
        {item.reference && (
          <p className="label mt-2 inline-block border border-ink-200 px-2 py-1 text-ink-500">
            Reference image · not AAMU site data
          </p>
        )}
        {item.flightId && (
          <p className="label mt-1 text-ink-400">Flight {item.flightId}</p>
        )}
      </figcaption>
    </figure>
  );
}
