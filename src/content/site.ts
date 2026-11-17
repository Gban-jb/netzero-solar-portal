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
    value: "4\u00a2",
    label: "Per kilowatt-hour, solar",
    note: "Against about 19\u00a2 from the 6.5 MW fossil-fuel system",
  },
];

/**
 * THE WIDER INITIATIVE
 * --------------------
 * Figures published by Alabama A&M University on the Net Zero Solar
 * Electric Initiative pages. They describe the programme this research
 * project sits inside — the array, the storage and the transit fleet
 * the power is for. They are reproduced here as the university states
 * them, and `site.aamuInitiativeUrl` is the source.
 *
 * Nothing measured by this project is listed here. Student findings
 * stay on the student pages.
 */
export const initiativeFacts = [
  {
    value: "2017",
    label: "Transition begins",
    detail:
      "The Bulldog Transit System starts phasing out fossil-fuel buses for battery-electric buses and the infrastructure to run them.",
  },
  {
    value: "2019",
    label: "First electric buses",
    detail:
      "Proterra Catalyst 40-foot buses enter service — the first electric buses on the road in Alabama, and the first electric bus fleet at an HBCU in the nation.",
  },
  {
    value: "6",
    label: "Electric buses running",
    detail:
      "Alongside two 25-passenger shuttles, two coach buses, seven 15-passenger vans and four electric police cruisers. Two more buses are on order against a goal of ten.",
  },
  {
    value: "80 t",
    label: "Emissions cut per bus",
    detail:
      "Together with about $35,000 in maintenance and $285,000 in fuel costs saved per bus, as reported by the university.",
  },
] as const;

/** How the storage, the array and this research project relate. */
export const initiativeContext = [
  "The 1.3-megawatt solar farm is being brought into a new renewable microgrid, supported by a battery energy storage system that holds the excess. That power runs the campus electric buses and police vehicles.",
  "This research project sits on top of that infrastructure. It does not operate the battery system — that stays with the BESS team — but it monitors the array from the air, records the condition of the storage equipment, and turns what it finds into something the university can act on.",
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
