import type { StudentProfile } from "@/lib/types";

/**
 * ENGINEERING STUDENT WORKSTREAMS
 * -------------------------------
 * Five subsections, one per student. Students 1–4 currently hold an
 * overview written by the project manager from the agreed project scope;
 * each student replaces their own entry with their real content.
 *
 * TO CLAIM YOUR SECTION:
 *   1. Set `name` to your name (it is `null` until you do).
 *   2. Rewrite `objective`, `inputs`, `outputs` and `stack`.
 *   3. Update the `status` on each milestone as you go:
 *      "not-started" | "in-progress" | "under-review" | "complete"
 *   4. Add your repository and demo links in `links`.
 *   5. Set `awaitingStudentCopy: false` to remove the draft banner.
 *   6. Open a pull request against `main`.
 *
 * Do not edit another student's entry. Keep changes inside your own
 * object so pull requests merge without conflicts.
 */
export const students: StudentProfile[] = [
  {
    slug: "student-1",
    number: 1,
    name: null,
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
  },
  {
    slug: "student-2",
    number: 2,
    name: null,
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
      { label: "GitHub repository", href: "#", pending: true },
      { label: "Live demo", href: "#", pending: true },
    ],
    accent: "maroon",
    awaitingStudentCopy: true,
  },
  {
    slug: "student-3",
    number: 3,
    name: null,
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
  },
  {
    slug: "student-4",
    number: 4,
    name: null,
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
      { label: "GitHub repository", href: "#", pending: true },
      { label: "Live demo", href: "#", pending: true },
    ],
    accent: "slate",
    awaitingStudentCopy: true,
  },
  {
    slug: "student-5",
    number: 5,
    name: "Jeeban Bashyal",
    role: "Project Reporting, Site Condition Monitoring & Centralised Portal",
    tagline:
      "Weekly reporting across all five students, PV and BESS condition records, and this site",
    objective:
      "Four responsibilities running at the same time: the team's weekly reporting and hour tracking across all five students; monitoring of the solar site through returned drone imagery; scheduled condition checks of the battery storage equipment and instruments once installed; and this centralised website, which brings all five students and every department into one place.",
    inputs: [
      "Weekly updates and hours from all five students",
      "Drone photographs and flight logs from the Matrice 4TD",
      "Dates, GPS readings and row / table numbers where available",
      "The site map of the solar field",
      "Files exported by Students 1 to 4 from their own programs",
      "Notes from the weekly BESS management meeting and site visits",
      "Written updates from Animal Science, Soil Science, Architecture, Communications and Engineering",
    ],
    outputs: [
      "One-page team report every week, Weeks 1–25, presented without exception",
      "Hour and milestone tracker across all five students",
      "Indexed list of every drone photograph with date and location",
      "Observation log recording what each photograph shows",
      "Before-and-after comparisons of the same location over time",
      "Follow-up list of locations needing another look",
      "Dated BESS equipment and instrument condition log",
      "Record of what each weekly BESS meeting agreed to publish, and with whom",
      "This project website, built for AAMU to absorb later",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Python / pandas",
      "OpenCV",
      "python-docx",
    ],
    fallMilestones: [
      {
        window: "Weeks 1–3",
        title: "Weekly report and hour tracker",
        detail:
          "Reusable one-page report template, hour and milestone tracker, BESS inspection checklist and dated log, weekly meeting publication record, and an agreed file-naming and folder convention.",
        status: "in-progress",
      },
      {
        window: "Weeks 4–6",
        title: "Flight image index and baseline site log",
        detail:
          "Index of drone photographs across up to ten clearly identifiable locations, with date, file name, photo type, location number and anything missing or unclear, plus a dated observation log.",
        status: "not-started",
      },
      {
        window: "Weeks 7–9",
        title: "Repeat-image review and website skeleton",
        detail:
          "Comparison of newer photographs against baselines marked changed / not changed / unsure, and the first working version of this site in Next.js with menus, student pages, department sections, a news feed and a photo gallery, deployed to Vercel from a GitHub repository.",
        status: "in-progress",
      },
      {
        window: "Weeks 10–12",
        title: "Fall report, website launch and handover",
        detail:
          "Fall summary and handover note, the site filled with real content from every student and department, and the shared code layout published.",
        status: "not-started",
      },
    ],
    springMilestones: [
      {
        window: "Weeks 13–15",
        title: "Repeat site review and spring content load",
        detail:
          "Updated records for up to ten fall locations where new flights cover the same ground, each linked to its date and source photographs, plus spring progress from all five students added to the site.",
        status: "not-started",
      },
      {
        window: "Weeks 16–18",
        title: "Vegetation and surface review, department sections",
        detail:
          "Records of what is clearly visible — vegetation, standing water, washed-out soil, debris, changed drainage — left blank where the imagery cannot support a call, and department sections written by each group in their own words.",
        status: "not-started",
      },
      {
        window: "Weeks 19–22",
        title: "Follow-up list, updates feed and AAMU integration package",
        detail:
          "Written rules for flagging repeated change and uncomparable locations, continued weekly reporting, and the site prepared for AAMU on page layout, naming, image sizes and accessibility, with a handover note for their web team.",
        status: "not-started",
      },
      {
        window: "Weeks 23–25",
        title: "Final report, website and records handover",
        detail:
          "Finished reports, tracker, photo index, condition history and follow-up list, a final report in Word or PDF, the completed website with the full archive, and instructions for keeping it running after the project ends.",
        status: "not-started",
      },
    ],
    links: [
      { label: "Portal repository", href: "#", pending: true },
      { label: "Live site", href: "/" },
    ],
    accent: "plum",
    awaitingStudentCopy: false,
  },
];
