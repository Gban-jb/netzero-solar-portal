import type { ProjectStat } from "@/lib/types";

export const site = {
  name: "Net Zero Solar Portal",
  university: "Alabama A&M University",
  initiative: "Net Zero: AAMU Solar Electric Initiative",
  project: "Solar PV Drone Monitoring & Battery Energy Storage",
  supervisor: "Dr. Raziq Yaqub",
  mentor: "Julian",
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

/**
 * WHAT THE PROJECT IS TRYING TO DO
 * --------------------------------
 * Five objectives, written as the thing being attempted rather than
 * the thing being claimed. Each one names what would count as having
 * achieved it, because an objective that cannot be checked is not an
 * objective. They map onto the four tasks, plus the reporting work
 * that runs across all of them.
 */
export const objectives = [
  {
    number: "01",
    title: "Inspect the array from the air",
    detail:
      "Fly the array with RGB and radiometric thermal imagery and find the panels that are running hot or look wrong on the surface. Achieved when a flight reliably produces a list of candidate findings rather than a folder of pictures.",
  },
  {
    number: "02",
    title: "Know where each finding is",
    detail:
      "Use GPS and RTK positioning to tie an observation to a row and a table. Achieved when the same panel can be found again on the next flight without someone recognising it by eye.",
  },
  {
    number: "03",
    title: "Measure the radio conditions on site",
    detail:
      "Survey spectrum activity, Wi-Fi coverage, signal strength and interference around the array. Achieved when the project can say what a link on this site will and will not support.",
  },
  {
    number: "04",
    title: "Say what a fault is costing",
    detail:
      "Read the inspection findings against whatever plant monitoring data is available and estimate the energy, and the money, a given fault is losing. Achieved when a finding carries a number a maintenance decision can be argued from.",
  },
  {
    number: "05",
    title: "Keep the record in one place",
    detail:
      "Hold the findings, the weekly reports and the site condition log in a single record that can be read, sorted and handed over. Achieved when the university can take the whole thing on without the team explaining it.",
  },
] as const;

/**
 * THE EQUIPMENT
 * -------------
 * What the project actually flies and measures with. Listed by what
 * each instrument produces, because that is what the workstreams
 * downstream consume. Named equipment only — anything still being
 * specified stays off this list until it exists.
 */
export const equipment = [
  {
    name: "DJI Matrice 4TD",
    role: "Survey aircraft",
    detail:
      "Carries the RGB and radiometric thermal payload and records GPS/RTK position and flight telemetry for every capture. One flight produces the imagery, the positions and the log that the first two tasks run on.",
  },
  {
    name: "Radiometric thermal payload",
    role: "Temperature per pixel",
    detail:
      "Thermal frames that carry absolute temperature rather than a colour picture, so a hotspot can be measured against the panel around it instead of judged by eye.",
  },
  {
    name: "GNSS / RTK positioning",
    role: "Where the finding is",
    detail:
      "Corrected positioning accurate enough to tie an observation to a row and table, which is what makes an inspection repeatable from one flight to the next.",
  },
  {
    name: "RF and Wi-Fi survey equipment",
    role: "Whether data can leave the site",
    detail:
      "Spectrum activity, signal strength, coverage and interference around the array — the conditions any site telemetry has to survive.",
  },
  {
    name: "Multispectral sensing",
    role: "Reflectance by wavelength",
    detail:
      "Reflected light at several wavelengths, held as a research input rather than part of the weekly inspection cycle.",
  },
] as const;

/**
 * THE TEAM
 * --------
 * Five students and the staff supervising them. The workstream a
 * student owns is named by task, not by person — `task` here is the
 * cross-reference into `src/content/students/`.
 */
export const team = [
  { name: "Sudin Pokharel", task: "Thermal Imaging", slug: "student-1" },
  { name: "Gaurav Dev", task: "Inspection App", slug: "student-2" },
  { name: "Prashant Banjade", task: "Energy & Cost", slug: "student-3" },
  { name: "Armaan Asim", task: "RF & Positioning", slug: "student-4" },
  { name: "Jeeban Bashyal", task: "Reporting & Portal", slug: "student-5" },
] as const;

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
