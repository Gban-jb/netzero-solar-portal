import type { StudentProfile } from "@/lib/types";

/**
 * STUDENT 5 — owned by one person.
 *
 * This file is yours. Edit it freely; do not edit the other student
 * files. Because every student has their own file, two people can push
 * on the same day without a merge conflict.
 *
 * See CONTRIBUTING.md for the checklist and `src/lib/types.ts` for the
 * meaning of every field.
 */
export const studentFive: StudentProfile = {
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
};
