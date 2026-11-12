import type { Department } from "@/lib/types";

/**
 * DEPARTMENT SECTIONS
 * -------------------
 * Each department owns its own entry. Per the project specification,
 * "each department section uses text that group writes themselves" —
 * so the copy below is a placeholder written by the project manager to
 * get the structure in place.
 *
 * TO EDIT YOUR DEPARTMENT:
 *   1. Change `summary`, `body`, `focusAreas` and `deliverables`.
 *   2. Set `awaitingDepartmentCopy: false` to remove the "draft" banner.
 *   3. Open a pull request. Vercel builds a preview automatically.
 */
export const departments: Department[] = [
  {
    slug: "engineering",
    name: "Engineering & Battery Energy Storage",
    shortName: "Engineering",
    tagline: "Solar PV drone monitoring, BESS operations and the software stack",
    summary:
      "Engineering runs the technical core of the initiative: the 1.3 MW photovoltaic array, the battery energy storage system that buffers it, and the drone-based inspection pipeline that keeps both under observation. Five students work in parallel across thermal imaging, anomaly management, energy-loss analysis, field hardware and project reporting.",
    body: [
      "The engineering team treats the solar farm as a monitored asset rather than a fixed installation. Flights by the Matrice 4TD return radiometric thermal and visual imagery on a recurring schedule; that imagery is decoded, indexed against plant layout identifiers, and matched to SCADA timestamps so that an observation on an image can be traced to a row, a table and an inverter.",
      "Downstream of the imagery, anomalies are triaged by severity, converted into an estimated energy loss in kilowatt-hours, and expressed as a financial impact against an agreed expected-generation baseline. Field hardware — GPS and RTK positioning, Wi-Fi and RF links — provides the location and connectivity layer that ties a finding to a physical place on the site.",
      "The battery energy storage side is monitored on a scheduled inspection cycle once the equipment is installed, with each check recorded against the date, the equipment inspected, the condition found and anything requiring attention. Operation of the battery system, its safety procedures and its engineering decisions remain with the BESS team.",
    ],
    focusAreas: [
      "Radiometric thermal imaging and hotspot detection",
      "SCADA timestamp synchronisation",
      "Anomaly triage and inspection workflow",
      "Energy-loss and financial impact modelling",
      "GPS / RTK, Wi-Fi and RF field hardware",
      "BESS scheduled condition monitoring",
      "Weekly reporting and the centralised project portal",
    ],
    accent: "maroon",
    contentOwner: "Engineering Team",
    awaitingDepartmentCopy: false,
    deliverables: [
      "Working research prototype across the five student workstreams",
      "Common inspection data format shared between Students 1, 2 and 3",
      "Dated BESS equipment and instrument condition log",
      "Weekly one-page team report, Weeks 1–25",
    ],
    links: [
      { label: "Student workstreams", href: "/departments/engineering" },
    ],
  },
  {
    slug: "animal-food-science",
    name: "Animal & Food Science",
    shortName: "Animal & Food Science",
    tagline: "Crop and livestock study beneath the photovoltaic array",
    summary:
      "The Animal and Food Science team studies what happens to crops and livestock in the partial shade beneath and between the solar panels — the agrivoltaic question of whether a site can produce electricity and food from the same acreage.",
    body: [
      "Work in this section covers the ground under and around the array: what grows there, how forage quality compares with open field, and how the microclimate created by the panels affects it. Measurements are taken on the department's own schedule and reported in their own terms.",
      "This is placeholder text written by the project manager so the section has structure. The Animal and Food Science team will replace it with their own description of scope, method and findings.",
    ],
    focusAreas: [
      "Agrivoltaic crop trials under panel rows",
      "Forage quality and yield comparison",
      "Grazing management between array rows",
      "Microclimate effects on growth",
    ],
    accent: "field",
    contentOwner: "Animal & Food Science Team",
    awaitingDepartmentCopy: true,
    deliverables: [
      "Seasonal crop and forage observations",
      "Comparison against open-field control plots",
    ],
  },
  {
    slug: "architecture",
    name: "Architecture",
    shortName: "Architecture",
    tagline: "Site design, BESS enclosure and campus integration",
    summary:
      "The Architecture team works on how the installation sits in its place: the layout of the array and storage enclosure, the structures around them, and how the whole installation reads as part of the AAMU campus.",
    body: [
      "Scope covers site planning around the array and the battery storage enclosure, the shade and service structures the project needs, and the visual and spatial relationship between the energy installation and the rest of campus. Drawings, models and renderings produced by the team are published in this section.",
      "This is placeholder text written by the project manager so the section has structure. The Architecture team will replace it with their own description of scope, method and output.",
    ],
    focusAreas: [
      "Site layout and circulation",
      "BESS enclosure and service structures",
      "Shade structures and public-facing elements",
      "Campus integration and visualisation",
    ],
    accent: "slate",
    contentOwner: "Architecture Team",
    awaitingDepartmentCopy: true,
    deliverables: [
      "Site plans and enclosure drawings",
      "Renderings and models of the installation in context",
    ],
  },
  {
    slug: "natural-resources-soil-science",
    name: "Natural Resources & Soil Science",
    shortName: "Soil Science",
    tagline: "Soil testing, moisture, runoff and erosion across the site",
    summary:
      "The Natural Resources and Soil Science team tests the ground the array stands on — soil chemistry and structure, moisture behaviour, drainage and erosion — and tracks how those change once panels alter how water and light reach the surface.",
    body: [
      "Sampling and laboratory testing run on the department's own schedule. Results cover soil composition and nutrient status, moisture retention in and out of the panel shadow, and the drainage and erosion patterns that develop across the site over a season.",
      "This is placeholder text written by the project manager so the section has structure. The Natural Resources and Soil Science team will replace it with their own description of scope, method and findings.",
    ],
    focusAreas: [
      "Soil sampling and laboratory analysis",
      "Moisture retention under and between rows",
      "Drainage paths and surface runoff",
      "Erosion monitoring over the season",
    ],
    accent: "solar",
    contentOwner: "Natural Resources & Soil Science Team",
    awaitingDepartmentCopy: true,
    deliverables: [
      "Soil test results by sampling location",
      "Seasonal moisture and runoff observations",
    ],
  },
  {
    slug: "communications",
    name: "Communications",
    shortName: "Communications",
    tagline: "Outreach, publishing and what goes on the record",
    summary:
      "The Communications team handles how the initiative is described to the university and to the public, and works with Student 5 at the weekly BESS meeting to agree what is published on this site and when.",
    body: [
      "Communications owns the public voice of the project: news and announcements, media and photography standards, and the approval step that sits between a team's internal finding and a public post on this site. The record of what each weekly meeting agreed to publish, and who agreed it, is kept alongside the published item.",
      "This is placeholder text written by the project manager so the section has structure. The Communications team will replace it with their own description of scope and process.",
    ],
    focusAreas: [
      "News and announcements",
      "Publication approval at the weekly BESS meeting",
      "Photography and media standards",
      "Outreach to campus and the wider public",
    ],
    accent: "plum",
    contentOwner: "Communications Team",
    awaitingDepartmentCopy: true,
    deliverables: [
      "Approved publication log by week",
      "Outreach and media materials",
    ],
  },
];
