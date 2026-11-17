import Link from "next/link";
import type { ReactNode } from "react";
import { cx, statusLabels, statusStyles } from "@/lib/format";
import type { WorkStatus } from "@/lib/types";

/** Page-level heading block used at the top of every inner page. */
export function PageHeader({
  eyebrow,
  title,
  lede,
  accentBar = "therm-ramp",
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  accentBar?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden bg-therm-05">
      <div aria-hidden="true" className="pv-grid absolute inset-0" />
      <div aria-hidden="true" className="pv-glow animate-shimmer absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        {eyebrow && <p className="label text-therm-85">{eyebrow}</p>}
        <h1 className="display display-tight mt-5 max-w-5xl text-[2.5rem] text-white sm:text-[3.5rem] lg:text-[4.25rem]">
          {title}
        </h1>
        <div className={cx("mt-7 h-1.5 w-28", accentBar)} />
        {lede && (
          <p className="prose-serif mt-7 max-w-3xl text-therm-95/80">{lede}</p>
        )}
        {children}
      </div>
    </header>
  );
}

export function Section({
  title,
  description,
  children,
  className,
  id,
  eyebrow,
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  eyebrow?: string;
}) {
  return (
    <section
      id={id}
      className={cx("mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10", className)}
    >
      {(title || eyebrow) && (
        <div className="mb-10 max-w-3xl">
          {eyebrow && <p className="label mb-4 text-ink-400">{eyebrow}</p>}
          {title && (
            <h2 className="display text-[2rem] text-ink-900 sm:text-[2.75rem]">
              {title}
            </h2>
          )}
          {description && (
            <p className="prose-serif mt-4 text-ink-600">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

export function Breadcrumbs({
  trail,
}: {
  trail: Array<{ label: string; href?: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-ink-200">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 px-5 py-4 sm:px-8 lg:px-10">
        {trail.map((crumb, i) => (
          <li key={`${crumb.label}-${i}`} className="flex items-center gap-2">
            {crumb.href ? (
              <Link href={crumb.href} className="label text-ink-400 transition-colors hover:text-therm-55">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="label text-ink-800">
                {crumb.label}
              </span>
            )}
            {i < trail.length - 1 && (
              <span aria-hidden="true" className="text-ink-300">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function StatusPill({ status }: { status: WorkStatus }) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-[11px] font-medium ring-1 ring-inset",
        statusStyles[status],
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" aria-hidden="true" />
      {statusLabels[status]}
    </span>
  );
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-center border border-ink-200 px-2.5 py-1 font-mono text-[11px] text-ink-600",
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * Shown on any section whose copy is still a project-manager placeholder.
 * Deliberately prominent: the specification requires that each group's
 * section use text that group writes themselves.
 */
export function DraftNotice({ owner, kind }: { owner: string; kind: "department" | "student" }) {
  return (
    <div className="flex gap-4 border-l-[3px] border-therm-85 bg-therm-85/[0.1] p-5">
      <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-solar-700" fill="currentColor">
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 4.25a.9.9 0 01.9.9v4a.9.9 0 11-1.8 0v-4a.9.9 0 01.9-.9zm0 8.5a1.05 1.05 0 110-2.1 1.05 1.05 0 010 2.1z" />
      </svg>
      <div className="text-ink-700">
        <p className="label text-solar-700">Draft overview — awaiting {owner}</p>
        <p className="prose-serif mt-2 text-[0.95rem] text-ink-600">
          {kind === "student"
            ? "This summary was written by the project manager from the agreed project scope so the section has structure. The student replaces it with their own content through a pull request."
            : "This summary was written by the project manager so the section has structure. The department replaces it with text they write themselves."}
        </p>
      </div>
    </div>
  );
}

export function EmptyState({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="border border-dashed border-ink-300 p-12 text-center">
      <p className="display text-xl text-ink-800">{title}</p>
      <p className="prose-serif mx-auto mt-3 max-w-md text-[0.95rem] text-ink-500">
        {detail}
      </p>
    </div>
  );
}
