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
