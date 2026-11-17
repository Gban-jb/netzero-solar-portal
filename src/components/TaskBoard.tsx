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
 * Set as full-width editorial entries rather than a grid of cards:
 * these are the four pieces of work the whole project consists of,
 * and they are listed in the order the data moves through them.
 *
 * Each entry carries its position on the radiometric ramp. Motion is
 * CSS only — the rule across the top draws in on hover and focus, and
 * the entries rise in sequence on load — so the page stays a static
 * server-rendered document.
 */
export function TaskBoard({ tasks }: { tasks: StudentProfile[] }) {
  const ordered = inPipelineOrder(tasks);

  return (
    <ol className="border-t border-ink-200">
      {ordered.map((task, i) => {
        const tone = taskTone(task.pipelineStep);
        const status = task.fallMilestones[0]?.status ?? "not-started";

        return (
          <li
            key={task.slug}
            className="animate-rise border-b border-ink-200"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <Link
              href={`/departments/engineering/students/${task.slug}`}
              className="group relative block"
            >
              {/* The ramp colour, drawn across the entry on hover. */}
              <span
                aria-hidden="true"
                className={cx(
                  "rule-grow absolute inset-x-0 top-0 h-[3px] scale-x-0",
                  "group-hover:scale-x-100 group-focus-visible:scale-x-100",
                  tone.block,
                )}
              />
              {/* Faint wash of the same hue. */}
              <span
                aria-hidden="true"
                className={cx(
                  "absolute inset-0 opacity-0 transition-opacity duration-500",
                  "group-hover:opacity-100 group-focus-visible:opacity-100",
                  tone.soft,
                )}
              />

              <div className="relative grid gap-x-10 gap-y-4 py-8 sm:py-10 lg:grid-cols-[13rem_minmax(0,1fr)_auto]">
                {/* Left: where this sits in the pipeline. */}
                <div className="flex items-start gap-3 lg:block">
                  <span
                    aria-hidden="true"
                    className={cx("block h-10 w-1.5 shrink-0", tone.block)}
                  />
                  <div className="lg:mt-3">
                    <p className={cx("label", tone.label)}>
                      {pipelineStages[i]}
                    </p>
                    <p className="label mt-1 text-ink-400">
                      Task {task.number}
                    </p>
                  </div>
                </div>

                {/* Middle: the task itself. */}
                <div className="min-w-0">
                  <h3
                    className={cx(
                      "display text-[1.75rem] leading-[1.05] text-ink-900 sm:text-[2.25rem]",
                      "transition-transform duration-500 group-hover:translate-x-1",
                    )}
                  >
                    {task.role}
                  </h3>
                  <p className="prose-serif mt-3 max-w-2xl text-ink-600">
                    {task.tagline}
                  </p>
                  <ul className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    {task.stack.slice(0, 4).map((s) => (
                      <li
                        key={s}
                        className="font-mono text-[11px] text-ink-500"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: status and the way in. */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-end lg:justify-between lg:py-1">
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
                  <span
                    aria-hidden="true"
                    className={cx(
                      "font-display text-2xl font-bold transition-transform duration-500",
                      "group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5",
                      tone.label,
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
