import Link from "next/link";
import type { StudentProfile } from "@/lib/types";
import { cx, inPipelineOrder, pipelineStages, taskTone } from "@/lib/format";

/**
 * THE RADIOMETRIC SCALE
 * ---------------------
 * The temperature legend a thermal camera prints beside its image,
 * reused as the structural spine of this site.
 *
 * It is not decoration: the four engineering tasks are laid out along
 * it in the order the data actually moves, from raw capture in the
 * field at the cold end to the cost of a fault in dollars at the hot
 * end. Task numbers are labels; this is the sequence.
 *
 * The bar draws itself in on load and is static thereafter.
 */
export function ThermalScale({
  tasks,
  className,
}: {
  tasks: StudentProfile[];
  className?: string;
}) {
  const ordered = inPipelineOrder(tasks);

  return (
    <div className={cx("w-full", className)}>
      <div className="flex items-end justify-between gap-4">
        <span className="label text-therm-95/70">Raw capture</span>
        <span className="label text-therm-99/80">Cost of the fault</span>
      </div>

      {/* The scale itself. */}
      <div
        aria-hidden="true"
        className="therm-steps animate-sweep mt-2 h-2.5 w-full"
      />

      {/* One column per stage, aligned to its block of the scale. */}
      <ol className="mt-0 grid grid-cols-2 gap-px sm:grid-cols-4">
        {ordered.map((task, i) => {
          const tone = taskTone(task.pipelineStep);
          return (
            <li key={task.slug}>
              <Link
                href={`/departments/engineering/students/${task.slug}`}
                className="group block border-t-0 pt-3 transition-colors"
              >
                <span className="flex items-baseline gap-2">
                  <span className={cx("label", tone.label)}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="label text-white/65">
                    {pipelineStages[i]}
                  </span>
                </span>
                <span className="mt-1.5 block font-display text-[15px] font-bold leading-tight tracking-tight text-white/90 transition-colors group-hover:text-white">
                  {task.task}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
