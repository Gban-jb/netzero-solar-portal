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
  tagline: "Turning detections into a triaged, trackable inspection list",
  objective:
    "Build the application that consumes the inspection records produced upstream and turns them into something a site team can act on — anomalies mapped to assets, sorted by severity, tracked from first detection through to resolution.",
  inputs: [
    "Inspection CSV / JSON files produced by Student 1",
    "Plant layout and asset register",
    "Image references for each detected anomaly",
    "Data-quality indicators from the common format",
  ],
  outputs: [
    "Inspection and anomaly management application",
    "Asset mapping from detection to panel, row and inverter",
    "Severity and priority triage",
    "Status tracking from detection to resolution, with history",
  ],
  stack: [
    "TypeScript",
    "React",
    "Node.js",
    "REST / JSON",
    "SQLite or PostgreSQL",
  ],
  fallMilestones: [
    {
      window: "Weeks 1–2",
      title: "Common data format agreed",
      detail:
        "Agree the shared field set with Students 1 and 3 and begin development against synthetic or sample data rather than waiting for the Fall prototype.",
      status: "not-started",
    },
    {
      window: "Weeks 3–6",
      title: "Ingest and asset mapping",
      detail:
        "Read inspection files reliably and resolve each record to a physical asset using the plant layout.",
      status: "not-started",
    },
    {
      window: "Weeks 7–9",
      title: "Triage and tracking",
      detail:
        "Severity classification, prioritised queue and status tracking across the anomaly lifecycle.",
      status: "not-started",
    },
    {
      window: "Weeks 10–12",
      title: "Fall prototype and handover",
      detail:
        "Working application on sample data, setup documentation and a recorded demonstration.",
      status: "not-started",
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
      label: "Frontend preview — interface only, API not yet hosted",
      href: "https://solarpv-asset-dashboard.vercel.app/",
    },
  ],
  accent: "maroon",
  awaitingStudentCopy: true,
};
