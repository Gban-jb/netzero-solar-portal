import type { StudentProfile } from "@/lib/types";

/**
 * STUDENT 4 — owned by one person.
 *
 * This file is yours. Edit it freely; do not edit the other student
 * files. Because every student has their own file, two people can push
 * on the same day without a merge conflict.
 *
 * See CONTRIBUTING.md for the checklist and `src/lib/types.ts` for the
 * meaning of every field.
 */
export const studentFour: StudentProfile = {
  slug: "student-4",
  number: 4,
  name: "Armaan Asim",
  task: "RF & Positioning",
  pipelineStep: 1,
  role: "Field Hardware, Positioning & Connectivity",
  tagline: "GPS, RTK, Wi-Fi and RF — putting findings on the map",
  objective:
    "Make the field hardware readable from software: GPS and RTK positioning accurate enough to locate a finding on the array, and Wi-Fi and RF links reliable enough to move data off the site.",
  inputs: [
    "GPS / RTK receiver output",
    "Wi-Fi and RF hardware interfaces",
    "Site map and plant layout coordinates",
    "Drone flight logs with positional data",
  ],
  outputs: [
    "Reliable software reads from GPS, Wi-Fi and RF hardware",
    "Positional accuracy assessment against the site map",
    "Geolocation of findings to row and table",
    "Connectivity and coverage report for the site",
  ],
  stack: ["Python", "C / C++", "NMEA / RTCM", "Serial & socket I/O", "GIS"],
  fallMilestones: [
    {
      window: "Weeks 1–3",
      title: "Hardware inventory and first reads",
      detail:
        "Confirm each device is present, powered and readable from software before any dependent work is scheduled.",
      status: "not-started",
    },
    {
      window: "Weeks 4–6",
      title: "Dependency verification",
      detail:
        "Confirm GPS / RTK accuracy supports the required mapping and that the hardware can be read reliably — one of the critical early checks identified in the team's feedback.",
      status: "not-started",
    },
    {
      window: "Weeks 7–9",
      title: "Positioning and coverage",
      detail:
        "Tie positional output to the plant layout so a finding resolves to a row and table, and map Wi-Fi / RF coverage across the site.",
      status: "not-started",
    },
    {
      window: "Weeks 10–12",
      title: "Fall prototype and handover",
      detail:
        "Working hardware integration, accuracy results, documentation and a recorded demonstration.",
      status: "not-started",
    },
  ],
  springMilestones: [
    {
      window: "Weeks 13–18",
      title: "Field deployment and reliability",
      detail:
        "Operate the hardware across repeated site visits and record reliability and failure modes.",
      status: "not-started",
    },
    {
      window: "Weeks 19–25",
      title: "Integration and final demonstration",
      detail:
        "Supply positional data to the inspection pipeline, complete documentation and deliver the final demonstration.",
      status: "not-started",
    },
  ],
  links: [
    {
      label: "GitHub repository",
      href: "https://github.com/Gban-jb/netzero-field-hardware",
    },
    {
      label: "Live demo — RF & positioning dashboard",
      href: "https://netzero-field-hardware.streamlit.app/",
    },
    {
      label: "Vercel edition",
      href: "https://aamu-student4-rf-dashboard.vercel.app/",
    },
  ],
  accent: "slate",
  awaitingStudentCopy: true,
};
