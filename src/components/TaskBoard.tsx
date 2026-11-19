import Link from "next/link";
import type { StudentProfile } from "@/lib/types";
import {
  cx,
  inPipelineOrder,
  pipelineStages,
  statusLabels,
  taskTone,
} from "@/lib/format";

/**
 * THE FOUR TASKS
 * --------------
 * One outer frame holding four smaller boxes, one per task, laid out
 * in the order the data moves through them. The frame is the pipeline;
 * each box is a stage of it.
 *
 * Motion is CSS only — the boxes drop in from above in sequence on
 * load, and each box lifts slightly under the pointer — so the page
 * stays a static server-rendered document. `prefers-reduced-motion`
 * is honoured globally in `globals.css`.
 */
export function TaskBoard({ tasks }: { tasks: StudentProfile[] }) {
  const ordered = inPipelineOrder(tasks);

  return (
    <div className="border border-ink-200 bg-ink-50/40 p-3 sm:p-5">
      <ol className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {ordered.map((task, i) => {
          const tone = taskTone(task.pipelineStep);
          const status = task.fallMilestones[0]?.status ?? "not-started";

          return (
            <li
              key={task.slug}
              className="animate-drop"
              style={{ animationDelay: `${i * 110}ms` }}
            >
              <Link
                href={`/departments/engineering/students/${task.slug}`}
                className={cx(
                  "group relative flex h-full flex-col border border-ink-200 bg-white",
                  "transition-[transform,border-color,box-shadow] duration-500",
                  "hover:-translate-y-1 hover:border-ink-300 hover:shadow-[0_18px_40px_-28px_rgba(23,19,17,0.55)]",
                  "focus-visible:-translate-y-1 focus-visible:border-ink-300",
                )}
              >
                {/* The ramp colour, banded across the top of the box. */}
                <span
                  aria-hidden="true"
                  className={cx("block h-1.5 w-full shrink-0", tone.block)}
                />

                {/* Faint wash of the same hue, on hover. */}
                <span
                  aria-hidden="true"
                  className={cx(
                    "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500",
                    "group-hover:opacity-100 group-focus-visible:opacity-100",
                    tone.soft,
                  )}
                />

                <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                  {/* Top line: stage, task number, status. */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={cx("label", tone.label)}>
                        {pipelineStages[i]}
                      </p>
                      <p className="label mt-1 text-ink-400">
                        Task {task.number}
                      </p>
                    </div>
                    <span className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className={cx(
                          "h-1.5 w-1.5 rounded-full",
                          status === "not-started" ? "bg-ink-300" : tone.dot,
                        )}
                      />
                      <span className="label text-ink-500">
                        {statusLabels[status]}
                      </span>
                    </span>
                  </div>

                  {/* The task itself. */}
                  <h3
                    className={cx(
                      "display mt-6 text-[1.375rem] leading-[1.1] text-ink-900 sm:text-[1.5rem]",
                      "transition-transform duration-500 group-hover:translate-x-0.5",
                    )}
                  >
                    {task.role}
                  </h3>
                  <p className="prose-serif mt-3 text-[0.95rem] text-ink-600">
                    {task.tagline}
                  </p>

                  {/* Stack, pushed to the foot so the boxes line up. */}
                  <ul className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-6">
                    {task.stack.slice(0, 4).map((s) => (
                      <li key={s} className="font-mono text-[11px] text-ink-500">
                        {s}
                      </li>
                    ))}
                  </ul>

                  <span
                    aria-hidden="true"
                    className={cx(
                      "mt-5 self-end font-display text-2xl font-bold transition-transform duration-500",
                      "group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5",
                      tone.label,
                    )}
                  >
                    &rarr;
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
