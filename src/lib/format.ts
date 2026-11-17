import type { AccentName, WorkStatus } from "@/lib/types";

/**
 * Accent palettes. Tailwind needs complete class strings at build time,
 * so these are written out in full rather than composed from fragments.
 */
export const accents: Record<
  AccentName,
  {
    bar: string;
    chip: string;
    text: string;
    ring: string;
    softBg: string;
    dot: string;
  }
> = {
  maroon: {
    bar: "bg-maroon-700",
    chip: "bg-maroon-100 text-maroon-800",
    text: "text-maroon-700",
    ring: "group-hover:ring-maroon-300",
    softBg: "bg-maroon-50",
    dot: "bg-maroon-600",
  },
  solar: {
    bar: "bg-solar-500",
    chip: "bg-solar-100 text-solar-700",
    text: "text-solar-700",
    ring: "group-hover:ring-solar-400",
    softBg: "bg-solar-100/60",
    dot: "bg-solar-500",
  },
  field: {
    bar: "bg-field-500",
    chip: "bg-field-100 text-field-700",
    text: "text-field-700",
    ring: "group-hover:ring-field-500",
    softBg: "bg-field-100/70",
    dot: "bg-field-500",
  },
  slate: {
    bar: "bg-ink-700",
    chip: "bg-ink-100 text-ink-700",
    text: "text-ink-700",
    ring: "group-hover:ring-ink-400",
    softBg: "bg-ink-100",
    dot: "bg-ink-600",
  },
  plum: {
    bar: "bg-maroon-500",
    chip: "bg-maroon-100 text-maroon-700",
    text: "text-maroon-600",
    ring: "group-hover:ring-maroon-400",
    softBg: "bg-maroon-50",
    dot: "bg-maroon-500",
  },
};

export const statusLabels: Record<WorkStatus, string> = {
  "not-started": "Not started",
  "in-progress": "In progress",
  "under-review": "Under review",
  complete: "Complete",
};

export const statusStyles: Record<WorkStatus, string> = {
  "not-started": "bg-ink-100 text-ink-600 ring-ink-200",
  "in-progress": "bg-solar-100 text-solar-700 ring-solar-200",
  "under-review": "bg-maroon-100 text-maroon-700 ring-maroon-200",
  complete: "bg-field-100 text-field-700 ring-field-200",
};

/**
 * What a workstream is called in the interface.
 *
 * Workstreams 1–4 are the four engineering tasks and are named for the
 * work. Workstream 5 is project reporting and this portal, which is not
 * one of the four tasks, so it keeps the neutral label.
 */
export function workstreamLabel(number: number): string {
  return number <= 4 ? `Task ${number}` : `Workstream ${number}`;
}

export function formatDate(iso: string): string {
  if (!iso) return "Date pending";
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/* ==================================================================
   THE RADIOMETRIC RAMP
   ------------------------------------------------------------------
   Each of the four engineering tasks takes a position on the thermal
   scale according to where it sits in the data pipeline: cold at raw
   capture, hot at financial impact. The bright ramp colours are used
   for blocks, bars and swatches; `label` is the darkened member of
   the same hue, used wherever the colour has to carry small text on
   white and still pass a contrast check.

   Tailwind needs complete class strings at build time, so these are
   written out in full rather than composed.
   ================================================================== */

export interface TaskTone {
  /** Solid block of the ramp colour. */
  block: string;
  /** Faint wash of the same hue, for hover and section tints. */
  soft: string;
  /** Readable text colour on white. */
  label: string;
  /** Hover ring. */
  ring: string;
  /** Small status dot. */
  dot: string;
  /** Text colour that sits on top of `block`. */
  onBlock: string;
}

const tones: TaskTone[] = [
  {
    block: "bg-therm-25",
    soft: "bg-therm-25/[0.06]",
    label: "text-therm-25",
    ring: "group-hover:ring-therm-25",
    dot: "bg-therm-25",
    onBlock: "text-white",
  },
  {
    block: "bg-therm-40",
    soft: "bg-therm-40/[0.07]",
    label: "text-therm-40",
    ring: "group-hover:ring-therm-40",
    dot: "bg-therm-40",
    onBlock: "text-white",
  },
  {
    block: "bg-therm-70",
    soft: "bg-therm-70/[0.08]",
    label: "text-therm-55",
    ring: "group-hover:ring-therm-70",
    dot: "bg-therm-70",
    onBlock: "text-therm-05",
  },
  {
    block: "bg-therm-85",
    soft: "bg-therm-85/[0.12]",
    label: "text-solar-700",
    ring: "group-hover:ring-therm-85",
    dot: "bg-therm-85",
    onBlock: "text-therm-05",
  },
];

/** The tone for a task, by its pipeline position (1\u20134). */
export function taskTone(pipelineStep?: number): TaskTone {
  const i = Math.min(Math.max((pipelineStep ?? 1) - 1, 0), tones.length - 1);
  return tones[i];
}

/** What each stage of the pipeline does, in two words. */
export const pipelineStages = [
  "Capture",
  "Detect",
  "Triage",
  "Price",
] as const;

/** Tasks in pipeline order rather than by label number. */
export function inPipelineOrder<T extends { pipelineStep?: number }>(
  items: T[],
): T[] {
  return items
    .filter((t) => typeof t.pipelineStep === "number")
    .sort((a, b) => (a.pipelineStep ?? 0) - (b.pipelineStep ?? 0));
}
