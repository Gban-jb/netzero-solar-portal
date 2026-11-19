import type { StudentProfile } from "@/lib/types";

/**
 * STUDENT 1 — owned by one person.
 *
 * This file is yours. Edit it freely; do not edit the other student
 * files. Because every student has their own file, two people can push
 * on the same day without a merge conflict.
 *
 * See CONTRIBUTING.md for the checklist and `src/lib/types.ts` for the
 * meaning of every field.
 */
export const studentOne: StudentProfile = {
  slug: "student-1",
  number: 1,
  name: "Sudin Pokharel",
  task: "Thermal Imaging",
  pipelineStep: 2,
  role: "Thermal Imaging & Hotspot Detection",
  tagline: "Decoding radiometric thermal imagery and tying it to SCADA time",
  objective:
    "Turn raw radiometric thermal imagery from the Matrice 4TD into usable temperature data, detect hotspots and thermal anomalies across the array, and make every finding traceable to a panel, row or inverter and to a point in time that matches the SCADA record.",
  inputs: [
    "Radiometric thermal image files from the Matrice 4TD",
    "Matching visual (RGB) imagery and flight logs",
    "Plant layout with panel, row and inverter identifiers",
    "SCADA export with timestamps",
  ],
  outputs: [
    "Thermal file decoding and temperature extraction routine",
    "Hotspot and anomaly detection over array imagery",
    "Inspection records exported as CSV / JSON in the agreed common format",
    "Timestamp and metadata alignment with SCADA data",
  ],
  stack: ["Python", "OpenCV", "NumPy", "Radiometric TIFF / R-JPEG", "pandas"],
  fallMilestones: [
    {
      window: "Weeks 1–3",
      title: "Image import and thermal compatibility check",
      detail:
        "Confirm the radiometric thermal files open and process, temperatures can be extracted, and timestamps and metadata are present and can later be matched to SCADA. Moved early at the team's request so a format problem surfaces in week 3, not week 7.",
      status: "not-started",
    },
    {
      window: "Weeks 1–2",
      title: "Agree the common data format",
      detail:
        "Define the shared field set with Students 2 and 3 — asset / module / row / inverter ID, timestamp, GPS, anomaly type, thermal delta, severity, image reference and data-quality indicators — so downstream work can begin on sample data.",
      status: "not-started",
    },
    {
      window: "Weeks 4–6",
      title: "Dependency verification",
      detail:
        "Confirm SCADA availability and usability, and that the plant layout supports panel, row and inverter identification.",
      status: "not-started",
    },
    {
      window: "Weeks 7–9",
      title: "Hotspot detection feature",
      detail:
        "Full hotspot-detection capability over collected flights, with severity classification and inspection export.",
      status: "not-started",
    },
    {
      window: "Weeks 10–12",
      title: "Fall prototype and handover",
      detail:
        "Working prototype, sample dataset, setup documentation and a recorded demonstration.",
      status: "not-started",
    },
  ],
  springMilestones: [
    {
      window: "Weeks 13–18",
      title: "Field validation and refinement",
      detail:
        "Validate detections against real field conditions and refine thresholds using spring flights.",
      status: "not-started",
    },
    {
      window: "Weeks 19–25",
      title: "Integration, testing and final demonstration",
      detail:
        "Integrate with the downstream applications, document limitations, and deliver the final live demonstration.",
      status: "not-started",
    },
  ],
  links: [
    { label: "GitHub repository", href: "#", pending: true },
    { label: "Live demo", href: "#", pending: true },
  ],
  accent: "solar",
  awaitingStudentCopy: true,
};
