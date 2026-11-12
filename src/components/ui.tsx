import Link from "next/link";
import type { ReactNode } from "react";
import { cx, statusLabels, statusStyles } from "@/lib/format";
import type { WorkStatus } from "@/lib/types";

/** Page-level heading block used at the top of every inner page. */
export function PageHeader({
  eyebrow,
  title,
  lede,
  accentBar = "bg-solar-500",
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  accentBar?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-maroon-900/30 bg-maroon-950">
      <div aria-hidden="true" className="pv-grid absolute inset-0" />
      <div aria-hidden="true" className="pv-glow absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-solar-400">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-4xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className={cx("mt-6 h-1 w-16 rounded-full", accentBar)} />
        {lede && (
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-maroon-100/90 sm:text-lg">
            {lede}
          </p>
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
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cx("mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8", className)}>
      {title && (
        <div className="mb-8 max-w-3xl">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-base leading-relaxed text-ink-600">{description}</p>
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
    <nav aria-label="Breadcrumb" className="border-b border-ink-200 bg-white">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 px-4 py-3 text-xs text-ink-500 sm:px-6 lg:px-8">
        {trail.map((crumb, i) => (
          <li key={`${crumb.label}-${i}`} className="flex items-center gap-2">
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-maroon-700 hover:underline">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-ink-800">
                {crumb.label}
              </span>
            )}
            {i < trail.length - 1 && <span aria-hidden="true" className="text-ink-300">/</span>}
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
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset",
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
        "inline-flex items-center rounded-md bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-700",
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
    <div className="flex gap-3 rounded-lg border border-solar-200 bg-solar-100/70 p-4">
      <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-solar-700" fill="currentColor">
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 4.25a.9.9 0 01.9.9v4a.9.9 0 11-1.8 0v-4a.9.9 0 01.9-.9zm0 8.5a1.05 1.05 0 110-2.1 1.05 1.05 0 010 2.1z" />
      </svg>
      <div className="text-sm leading-relaxed text-solar-700">
        <p className="font-semibold">Draft overview — awaiting {owner}</p>
        <p className="mt-1 text-solar-700/90">
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
    <div className="rounded-xl border border-dashed border-ink-300 bg-white p-10 text-center">
      <p className="font-display text-base font-bold text-ink-800">{title}</p>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-500">{detail}</p>
    </div>
  );
}
