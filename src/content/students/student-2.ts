import type { StudentProfile } from "@/lib/types";

/**
 * STUDENT 2 — owned by one person.
 *
 * This file is yours. Edit it freely; do not edit the other student
 * files. Because every student has their own file, two people can push
 * on the same day without a merge conflict.
 *
 * See CONTRIBUTING.md for the checklist and `src/lib/types.ts` for the
 * meaning of every field.
 */
export const studentTwo: StudentProfile = {
  slug: "student-2",
  number: 2,
  name: "Gaurav Dev",
  task: "Inspection App",
  pipelineStep: 3,
  role: "Anomaly Management & Inspection Application",
  tagline: "Turning detections into a triaged, trackable inspection record",
  objective:
    "Build SOLARIS, the application that consumes inspection records produced upstream and turns them into something a site team can act on — anomalies resolved to a physical panel, row and inverter, sorted by severity, and tracked from first detection through to resolution. The deployed dashboard demonstrates the portfolio, asset and inspection-history views on bundled synthetic data; the panel-inspection, CSV-import and inverter workspaces run against a local FastAPI and SQLite service that is not yet hosted.",
  inputs: [
    "Inspection CSV / JSON files produced by Student 1, read through a previewed, confirmed import step",
    "Plant layout and asset register, supplying stable panel, row and inverter identifiers",
    "Image and evidence references attached to each inspection visit",
    "Data-quality indicators from the common format, surfaced as import diagnostics",
  ],
  outputs: [
    "SOLARIS inspection and anomaly management dashboard — portfolio overview, sites and assets, inspection history, panel inspection and data imports",
    "FastAPI service over a versioned SQLite schema: seventeen migrations covering ingestion, workspace isolation, dataset management, equipment configuration and maintenance history",
    "Panel inspection workspace with CSV import preview, duplicate-safe re-import, evidence upload, revisioned notes and maintenance records",
    "Asset mapping from detection to panel, row and inverter, with severity triage and status history",
    "Integration tests over visits, panel inspection and CSV import, plus a scripted browser verification of the import flow",
  ],
  stack: [
    "TypeScript",
    "React 19",
    "Vite",
    "Python / FastAPI",
    "SQLite",
  ],
  fallMilestones: [
    {
      window: "Weeks 1–2",
      title: "Common data format agreed",
      detail:
        "Agree the shared field set with Students 1 and 3 and begin development against synthetic sample data rather than waiting for the Fall prototype. The application is built throughout against a synthetic array and a deterministic demo CSV; the field set still has to be reconciled with Student 1's thermal export.",
      status: "in-progress",
    },
    {
      window: "Weeks 3–6",
      title: "Ingest and asset mapping",
      detail:
        "Inspection CSVs are imported through a preview-and-confirm step that resolves each reading to a panel, reports a mismatch when the file does not belong to the selected panel, and records a repeat import as zero new visits. Asset, site and inverter records resolve against the layout held in the database.",
      status: "complete",
    },
    {
      window: "Weeks 7–9",
      title: "Triage and tracking",
      detail:
        "Condition grading, a prioritised work list and status history across the anomaly lifecycle are in place, with maintenance actions and revisioned panel notes recorded against the asset. Severity thresholds are still provisional and are not yet driven by Student 1's thermal deltas.",
      status: "in-progress",
    },
    {
      window: "Weeks 10–12",
      title: "Fall prototype and handover",
      detail:
        "The application runs end to end on sample data with setup instructions and integration tests. The dashboard is published for review; hosting the API so the full workspace is reachable from the published link, and the recorded demonstration, remain outstanding.",
      status: "in-progress",
    },
  ],
  springMilestones: [
    {
      window: "Weeks 13–18",
      title: "Real-data operation",
      detail:
        "Run the application against real inspection output and refine the triage rules.",
      status: "not-started",
    },
    {
      window: "Weeks 19–25",
      title: "Integration and final demonstration",
      detail:
        "Connect to the energy-loss calculation, complete documentation and deliver the final demonstration.",
      status: "not-started",
    },
  ],
  links: [
    {
      label: "GitHub repository",
      href: "https://github.com/gauravdev0011-code/SolarPV-Shared-Platform",
    },
    {
      label: "Live demo — SOLARIS asset dashboard",
      href: "https://solar-pv-shared-platform.vercel.app/",
    },
  ],
  accent: "maroon",
  awaitingStudentCopy: true,
};
