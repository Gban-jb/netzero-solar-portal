import type { StudentProfile } from "@/lib/types";

/**
 * STUDENT 3 — owned by one person.
 *
 * This file is yours. Edit it freely; do not edit the other student
 * files. Because every student has their own file, two people can push
 * on the same day without a merge conflict.
 *
 * See CONTRIBUTING.md for the checklist and `src/lib/types.ts` for the
 * meaning of every field.
 */
export const studentThree: StudentProfile = {
  slug: "student-3",
  number: 3,
  name: null,
  task: "Energy & Cost",
  role: "Energy Loss & Financial Impact Analysis",
  tagline: "What a fault actually costs, in kilowatt-hours and in dollars",
  objective:
    "Compare expected generation against actual plant or inverter production, convert the shortfall attributable to detected faults into kilowatt-hours lost, and express that loss as a financial figure that can be validated and defended.",
  inputs: [
    "Anomaly records from Students 1 and 2",
    "Actual generation data from the plant or per inverter",
    "An agreed expected-generation baseline",
    "Irradiance data and electricity cost assumptions",
  ],
  outputs: [
    "Expected-generation baseline, with its source documented",
    "kWh loss calculation per anomaly and per inverter",
    "Financial impact estimate with stated assumptions",
    "Reporting view that ranks faults by cost",
  ],
  stack: ["Python", "pandas", "TypeScript", "Charting library", "SQL"],
  fallMilestones: [
    {
      window: "Weeks 1–3",
      title: "Define the expected-generation baseline",
      detail:
        "Decide early what provides the expected value — the existing plant monitoring system, historical generation, an irradiance-based estimate, a comparison with a healthy inverter, or an approved reference value. Raised in the team's feedback as a prerequisite for transparent loss figures.",
      status: "not-started",
    },
    {
      window: "Weeks 4–6",
      title: "Data access and dependency checks",
      detail:
        "Confirm generation data is reachable at the required granularity and that timestamps align with the inspection records.",
      status: "not-started",
    },
    {
      window: "Weeks 7–9",
      title: "Energy-loss calculator",
      detail:
        "Implement the kWh-loss calculation against the agreed baseline, with the assumptions exposed rather than buried.",
      status: "not-started",
    },
    {
      window: "Weeks 10–12",
      title: "Fall prototype and handover",
      detail:
        "Working calculator on sample data, documentation of method and assumptions, and a recorded demonstration.",
      status: "not-started",
    },
  ],
  springMilestones: [
    {
      window: "Weeks 13–18",
      title: "Financial model and validation",
      detail:
        "Add the cost layer and validate outputs against real production data.",
      status: "not-started",
    },
    {
      window: "Weeks 19–25",
      title: "Integration and final demonstration",
      detail:
        "Integrate with the inspection application, complete documentation and deliver the final demonstration.",
      status: "not-started",
    },
  ],
  links: [
    { label: "GitHub repository", href: "#", pending: true },
    { label: "Live demo", href: "#", pending: true },
  ],
  accent: "field",
  awaitingStudentCopy: true,
};
