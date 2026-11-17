import Link from "next/link";
import type { StudentProfile } from "@/lib/types";
import { accents, cx, statusLabels } from "@/lib/format";

/**
 * TASK BOARD
 * ----------
 * The grid of engineering tasks at the top of the department page.
 * Each box is one task, named for the work rather than for the person
 * doing it, and links through to that task's full page.
 *
 * All motion is CSS: a staggered entrance on load, and transitions on
 * hover and focus. No client JavaScript, so the page stays a static
 * server-rendered document. The reduced-motion block in globals.css
 * switches the animation off for anyone who asks for that.
 */
export function TaskBoard({ tasks }: { tasks: StudentProfile[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {tasks.map((task, i) => {
        const a = accents[task.accent];
        const started = task.fallMilestones.some(
          (m) => m.status !== "not-started",
        );
        return (
          <li
            key={task.slug}
            className="animate-rise"
            style={{ animationDelay: `${i * 110}ms` }}
          >
            <Link
              href={`/departments/engineering/students/${task.slug}`}
              className={cx(
                "group relative flex h-full flex-col overflow-hidden rounded-xl bg-white p-6",
                "ring-1 ring-ink-200 transition-all duration-300 ease-out",
                "hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink-900/10 hover:ring-2",
                "focus-visible:-translate-y-1.5 focus-visible:shadow-xl",
                a.ring,
              )}
            >
              {/* Accent bar, drawn left to right on hover. */}
              <span
                aria-hidden="true"
                className={cx(
                  "absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 ease-out",
                  "group-hover:scale-x-100 group-focus-visible:scale-x-100",
                  a.bar,
                )}
              />

              {/* Soft accent wash that fades up behind the content. */}
              <span
                aria-hidden="true"
                className={cx(
                  "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                  a.softBg,
                )}
              />

              {/* Oversized task number, used as a watermark. */}
              <span
                aria-hidden="true"
                className={cx(
                  "pointer-events-none absolute -top-4 right-1 font-display text-[5rem] font-extrabold leading-none",
                  "text-ink-100 transition-all duration-500 ease-out",
                  "group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-white/70",
                )}
              >
                {task.number}
              </span>

              <div className="relative flex h-full flex-col">
                <p
                  className={cx(
                    "text-[11px] font-bold uppercase tracking-[0.14em]",
                    a.text,
                  )}
                >
                  Task {task.number}
                </p>

                <h3 className="mt-2 font-display text-lg font-extrabold leading-tight tracking-tight text-ink-900">
                  {task.task}
                </h3>

                <p className="mt-2 text-[13px] font-semibold leading-snug text-ink-700">
                  {task.role}
                </p>

                <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-ink-600">
                  {task.tagline}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {task.stack.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-ink-100 px-2 py-0.5 font-mono text-[10px] text-ink-600 ring-1 ring-inset ring-ink-200/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Footer pinned to the bottom so every box lines up. */}
                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-500">
                    <span
                      aria-hidden="true"
                      className={cx(
                        "h-1.5 w-1.5 rounded-full",
                        started ? a.dot : "bg-ink-300",
                      )}
                    />
                    {started
                      ? statusLabels[task.fallMilestones[0].status]
                      : "Not started"}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cx(
                      "text-sm font-bold transition-transform duration-300 ease-out",
                      "group-hover:translate-x-1 group-focus-visible:translate-x-1",
                      a.text,
                    )}
                  >
                    &rarr;
                  </span>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
