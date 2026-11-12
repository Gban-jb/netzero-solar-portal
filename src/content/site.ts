import type { ProjectStat } from "@/lib/types";

export const site = {
  name: "Net Zero Solar Portal",
  university: "Alabama A&M University",
  initiative: "Net Zero: AAMU Solar Electric Initiative",
  project: "Solar PV Drone Monitoring & Battery Energy Storage",
  supervisor: "Dr. Raziq Yaqub",
  description:
    "The centralised project portal for AAMU's Solar PV Drone Monitoring and Battery Energy Storage research programme — bringing five engineering workstreams and five academic departments into a single public record.",
  /** Updated when the site is deployed to its production domain. */
  url: "https://netzero-solar-portal.vercel.app",
  aamuInitiativeUrl:
    "https://www.aamu.edu/research-economic-development/net-zero-solar-electric-initiative/index.html",
  /** Current reporting week, 1–25. Student 5 updates this weekly. */
  currentWeek: 12,
  totalWeeks: 25,
} as const;

export const projectStats: ProjectStat[] = [
  {
    value: "1.3 MW",
    label: "Solar array in operation",
    note: "Planned expansion to 3.5 MW",
  },
  {
    value: "2031",
    label: "Net-zero emissions target",
    note: "Campus transit system",
  },
  {
    value: "30%",
    label: "Campus electricity goal",
    note: "From the expanded solar farm",
  },
  {
    value: "5",
    label: "Departments contributing",
    note: "Engineering, Animal & Food Science, Architecture, Soil Science, Communications",
  },
];

/**
 * The seven-step weekly cycle from the project specification. Rendered
 * on the About page so every contributor can see where their work sits.
 */
export const weeklyCycle = [
  {
    step: 1,
    title: "Flight handoff",
    detail:
      "The authorised pilot places each flight's photographs and flight log into a dated folder. Original flight files are never modified.",
  },
  {
    step: 2,
    title: "Image index",
    detail:
      "Flight date, file name, photo type, location or row and table number where confirmed, and anything missing or unclear.",
  },
  {
    step: 3,
    title: "Image review",
    detail:
      "Photographs of the same location are compared only where the view and image quality allow it, and a person records what they see.",
  },
  {
    step: 4,
    title: "Observation log",
    detail:
      "One row links the location, date, photograph file names, visible condition, confidence in the call, and the reason for any follow-up.",
  },
  {
    step: 5,
    title: "BESS equipment check",
    detail:
      "Scheduled inspection of batteries, instruments and equipment, recording the date, what was checked, the condition found and anything needing attention.",
  },
  {
    step: 6,
    title: "BESS weekly meeting",
    detail:
      "Agreement on which points from the meeting are published here, together with Communications and the project leaders from the other teams.",
  },
  {
    step: 7,
    title: "Weekly reporting",
    detail:
      "All five students' updates, the hour tracker and the BESS notes go into the one-page report, presented every week of both semesters.",
  },
] as const;

/**
 * Stated limits of what this project can and cannot show. Published
 * deliberately: the specification requires that scope be explicit and
 * that no student's figures be repeated here as conclusions.
 */
export const scopeNotes = [
  "Drone photography shows what is visible on the surface — vegetation, standing water, debris — and change over time where location and image quality allow. It cannot show ground clearance, post settlement, structural strength or safety.",
  "Thermal imagery is used only as supplied, and any thermal finding points back to the Student 1 workstream.",
  "Where location, coverage or image quality is insufficient, the record reads “not visible”, “not covered” or “uncertain” rather than guessing.",
  "This site shares information. It is not a live dashboard, and content is added by hand after review.",
  "Each department section uses text that department writes itself. No student's figures are republished here as conclusions.",
  "Operating the battery system, its safety procedures and its engineering decisions remain with the BESS team.",
];
