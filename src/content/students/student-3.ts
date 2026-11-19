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
  name: "Prashant Banjade",
  task: "Energy & Cost",
  pipelineStep: 4,
  role: "Energy Loss & Financial Impact Analysis",
  tagline: "Turn production shortfalls into clear energy and cost scenarios",
  objective:
    "Build a transparent Python dashboard that compares actual and expected energy for the same site or inverter and time interval, estimates the kWh shortfall, applies an explicitly sourced tariff, and helps a manager compare maintenance options. The prototype currently demonstrates these calculations with synthetic and sample inputs; site-calibrated savings and panel-level dollar attribution require approved baselines, production data, and matched inspection records.",
  inputs: [
    "Actual and expected interval energy in kWh with matching asset, time range, timezone, units, and source",
    "SCADA exports for data-quality review; meter identity, timezone, cadence, and field meaning must be confirmed before interpretation",
    "Tariff and editable inspection, cleaning, repair, replacement, labor, and downtime assumptions with source and assumption labels",
    "Synthetic panel findings for the visual demonstration; Students 1–2 anomaly exports and shared identifiers are still needed for integrated findings",
  ],
  outputs: [
    "Expected-versus-actual interval comparison with documented provenance; missing expected energy remains unavailable rather than zero",
    "kWh shortfall and tariff-based scenario value at the submitted site or inverter measurement level",
    "Editable maintenance action-cost comparison and synthetic what-if scenarios",
    "Visual synthetic farm overview, transparent rule-based worklist, and downloadable CSV summaries",
    "Setup instructions, deterministic sample inputs, known limitations, and verification scripts",
  ],
  stack: ["Python", "pandas", "Streamlit", "Plotly", "CSV / JSON"],
  fallMilestones: [
    {
      window: "Weeks 1–3",
      title: "Define the expected-generation baseline",
      detail:
        "The calculator accepts an expected interval value with source, asset, interval, timezone, and unit context and keeps missing baselines unavailable. The demonstration baseline is synthetic; the team has not yet approved a site baseline or confirmed its source.",
      status: "in-progress",
    },
    {
      window: "Weeks 4–6",
      title: "Data access and dependency checks",
      detail:
        "The app imports interval-energy CSVs and reviews SCADA gaps, duplicates, and coverage. Supplied meter exports still need meter identity, timezone, field meaning, and expected-generation provenance confirmed. Shared anomaly IDs and Students 1–2 exports are not integrated yet.",
      status: "in-progress",
    },
    {
      window: "Weeks 7–9",
      title: "Energy-loss calculator",
      detail:
        "Implemented and unit-checked for matching actual and expected site/inverter intervals: shortfall is max(0, expected − actual), with missing expected values unavailable. Tariff conversion retains the formula, source, and assumption flag. It is a working prototype on sample inputs, not a validated AAMU production result.",
      status: "complete",
    },
    {
      window: "Weeks 10–12",
      title: "Fall prototype and handover",
      detail:
        "The local Streamlit prototype, sample scenarios, setup guide, CSV exports, and verification scripts are available. The supervisor-selected live demonstration, five-minute recording, second-computer reproduction, and acceptance remain outstanding.",
      status: "in-progress",
    },
  ],
  springMilestones: [
    {
      window: "Weeks 13–18",
      title: "Maintenance costs and what-if scenarios",
      detail:
        "Editable tariff and maintenance costs, inspect/clean/repair/replace/wait comparison, and synthetic price/persistence/wait scenarios are implemented. Validation against approved real production and cost data has not been completed.",
      status: "in-progress",
    },
    {
      window: "Weeks 19–25",
      title: "Prioritized reporting, integration, and final demonstration",
      detail:
        "The synthetic prototype includes a deterministic severity/safety worklist and CSV exports. Integration with Students 1–2 anomaly records, validated fault-cost ranking, supervisor-selected final case, and ten-minute acceptance demonstration remain outstanding.",
      status: "in-progress",
    },
  ],
  links: [
    { label: "GitHub repository", href: "#", pending: true },
    { label: "Live demo", href: "#", pending: true },
  ],
  accent: "field",
  awaitingStudentCopy: false,
};
