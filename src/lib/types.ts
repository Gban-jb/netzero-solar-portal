/**
 * Shared content types for the Net Zero Solar portal.
 *
 * Everything the site renders is typed here first. Content currently
 * lives in `src/content/*.ts` as plain TypeScript objects so that each
 * student can edit their own file and open a pull request — no shared
 * database credentials, full version history, zero hosting cost.
 *
 * The data-access functions in `src/lib/content.ts` are deliberately
 * async. When the project moves to PostgreSQL (Neon / Supabase) per the
 * project specification, only that one file changes; no page or
 * component needs to be touched.
 */

export type DepartmentSlug =
  | "engineering"
  | "animal-food-science"
  | "architecture"
  | "natural-resources-soil-science"
  | "communications";

export type AccentName = "maroon" | "solar" | "field" | "slate" | "plum";

export type WorkStatus =
  | "not-started"
  | "in-progress"
  | "under-review"
  | "complete";

export interface LinkRef {
  label: string;
  href: string;
  /** Set true for links that are not live yet — rendered as disabled. */
  pending?: boolean;
}

export interface Department {
  slug: DepartmentSlug;
  name: string;
  shortName: string;
  /** One line used on cards and in the nav. */
  tagline: string;
  /** Two to four sentences for the department page header. */
  summary: string;
  /** Longer body paragraphs for the department page. */
  body: string[];
  focusAreas: string[];
  accent: AccentName;
  /** Written by the department itself. Until then, flagged as a stub. */
  contentOwner: string;
  awaitingDepartmentCopy: boolean;
  deliverables?: string[];
  links?: LinkRef[];
}

export interface Milestone {
  /** e.g. "Weeks 1–3" */
  window: string;
  title: string;
  detail: string;
  status: WorkStatus;
}

export interface StudentProfile {
  slug: string;
  /** Display number, 1–5. */
  number: number;
  /** Real name once confirmed; null renders the placeholder treatment. */
  name: string | null;
  /** Short task name — two or three words. This is what the work is
   *  called across the site: task boxes, nav chips, breadcrumbs. The
   *  section is named for the task, never for the person doing it. */
  task: string;
  /** The full task title, used as the page heading. */
  role: string;
  /**
   * Where this task sits in the data pipeline, 1 to 4 — not the same
   * as `number`, which is just its label. Field hardware captures
   * position (1), thermal imaging detects the fault (2), the
   * inspection application triages it (3), the energy-loss
   * calculation prices it (4). The site orders the tasks by this and
   * colours them along the radiometric ramp from cold capture to hot
   * consequence. Omitted for work that is not part of the pipeline.
   */
  pipelineStep?: number;
  /** Short role line used on cards. */
  tagline: string;
  objective: string;
  inputs: string[];
  outputs: string[];
  stack: string[];
  fallMilestones: Milestone[];
  springMilestones: Milestone[];
  links: LinkRef[];
  accent: AccentName;
  /** True while the overview is a placeholder written by the project
   *  manager rather than submitted by the student. */
  awaitingStudentCopy: boolean;
}

export interface NewsItem {
  slug: string;
  title: string;
  /** ISO date, e.g. "2026-11-12". */
  date: string;
  department: DepartmentSlug | "project";
  summary: string;
  body: string[];
  /** Agreed at the weekly BESS meeting, per the Student 5 workflow. */
  approvedBy?: string;
  tags?: string[];
}

export interface GalleryItem {
  id: string;
  caption: string;
  /** Public path or remote URL. Empty string renders a labelled slot. */
  src: string;
  alt: string;
  /** ISO date the photo was captured. */
  capturedOn?: string;
  location?: string;
  department: DepartmentSlug | "project";
  /** Drone flight identifier, when the image came from a flight. */
  flightId?: string;
}

export interface ProjectStat {
  value: string;
  label: string;
  note?: string;
}
