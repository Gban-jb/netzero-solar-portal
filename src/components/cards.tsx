import Link from "next/link";
import { accents, cx, formatDate } from "@/lib/format";
import type { Department, GalleryItem, NewsItem, StudentProfile } from "@/lib/types";
import { Chip } from "@/components/ui";

export function DepartmentCard({ dept }: { dept: Department }) {
  const a = accents[dept.accent];
  return (
    <Link
      href={`/departments/${dept.slug}`}
      className={cx(
        "group relative flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-ink-200 transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/5 hover:ring-2",
        a.ring,
      )}
    >
      <span aria-hidden="true" className={cx("h-1.5 w-full", a.bar)} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-extrabold leading-snug tracking-tight text-ink-900">
            {dept.name}
          </h3>
          {dept.awaitingDepartmentCopy && (
            <span className="shrink-0 rounded-full bg-solar-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-solar-700">
              Draft
            </span>
          )}
        </div>
        <p className={cx("mt-1.5 text-sm font-medium", a.text)}>{dept.tagline}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">{dept.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {dept.focusAreas.slice(0, 3).map((f) => (
            <li key={f}>
              <Chip>{f}</Chip>
            </li>
          ))}
          {dept.focusAreas.length > 3 && (
            <li>
              <Chip className="bg-transparent text-ink-500 ring-1 ring-inset ring-ink-200">
                +{dept.focusAreas.length - 3} more
              </Chip>
            </li>
          )}
        </ul>

        <span className={cx("mt-6 inline-flex items-center gap-1.5 text-sm font-semibold", a.text)}>
          Open section
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 10h11M11 5.5 15.5 10 11 14.5" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export function StudentCard({ student }: { student: StudentProfile }) {
  const a = accents[student.accent];
  return (
    <Link
      href={`/departments/engineering/students/${student.slug}`}
      className={cx(
        "group relative flex gap-5 overflow-hidden rounded-xl bg-white p-6 ring-1 ring-ink-200 transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/5 hover:ring-2",
        a.ring,
      )}
    >
      <span aria-hidden="true" className={cx("absolute inset-y-0 left-0 w-1.5", a.bar)} />

      <div className="shrink-0 pl-2">
        <span
          aria-hidden="true"
          className={cx(
            "grid h-12 w-12 place-items-center rounded-lg font-display text-xl font-extrabold",
            a.chip,
          )}
        >
          {student.number}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-base font-extrabold tracking-tight text-ink-900">
            Student {student.number}
          </h3>
          {student.name ? (
            <span className="text-sm font-semibold text-ink-700">· {student.name}</span>
          ) : (
            <span className="rounded bg-ink-100 px-1.5 py-0.5 font-mono text-[11px] text-ink-500">
              name pending
            </span>
          )}
          {student.awaitingStudentCopy && (
            <span className="rounded-full bg-solar-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-solar-700">
              Draft
            </span>
          )}
        </div>

        <p className={cx("mt-1 text-sm font-semibold", a.text)}>{student.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">{student.tagline}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {student.stack.slice(0, 4).map((s) => (
            <li key={s}>
              <Chip>{s}</Chip>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export function NewsCard({ item, departmentName }: { item: NewsItem; departmentName: string }) {
  return (
    <article className="group relative rounded-xl bg-white p-6 ring-1 ring-ink-200 transition-all hover:shadow-lg hover:shadow-ink-900/5 hover:ring-maroon-300">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
        <time dateTime={item.date} className="font-semibold text-maroon-700">
          {formatDate(item.date)}
        </time>
        <span aria-hidden="true" className="text-ink-300">|</span>
        <span className="text-ink-500">{departmentName}</span>
      </div>

      <h3 className="mt-2 font-display text-lg font-extrabold leading-snug tracking-tight text-ink-900">
        <Link href={`/news/${item.slug}`} className="after:absolute after:inset-0">
          {item.title}
        </Link>
      </h3>

      <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{item.summary}</p>

      {item.approvedBy && (
        <p className="mt-4 text-xs text-ink-400">
          Publication agreed with: {item.approvedBy}
        </p>
      )}
    </article>
  );
}

export function GalleryCard({ item }: { item: GalleryItem }) {
  const hasImage = Boolean(item.src);
  return (
    <figure className="overflow-hidden rounded-xl bg-white ring-1 ring-ink-200">
      <div className="relative aspect-[4/3] w-full bg-ink-100">
        {hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="pv-grid flex h-full w-full flex-col items-center justify-center gap-2 bg-ink-200/50 text-center">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 text-ink-400" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <circle cx="8.5" cy="10" r="1.5" />
              <path d="m4 17 4.5-4.5L12 16l3-3 5 5" />
            </svg>
            <figcaption className="px-4 text-[11px] font-semibold uppercase tracking-wide text-ink-500">
              Awaiting photograph
            </figcaption>
          </div>
        )}
      </div>
      <figcaption className="p-4">
        <p className="text-sm font-semibold text-ink-900">{item.caption}</p>
        <p className="mt-1 text-xs text-ink-500">
          {item.location || "Location pending"}
          {item.capturedOn ? ` · ${formatDate(item.capturedOn)}` : " · date pending"}
        </p>
        {item.flightId && (
          <p className="mt-1 font-mono text-[11px] text-ink-400">Flight {item.flightId}</p>
        )}
      </figcaption>
    </figure>
  );
}
