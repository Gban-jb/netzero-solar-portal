import type { NewsItem } from "@/lib/types";

/**
 * NEWS FEED
 * ---------
 * Per the project workflow, an item appears here only after the weekly
 * BESS meeting agrees it should be published. Record who approved it in
 * `approvedBy` so the published item and the meeting record match.
 *
 * TO ADD AN UPDATE: copy an entry, put it at the top of the array, and
 * open a pull request. Keep `slug` unique and `date` in ISO format.
 */
export const news: NewsItem[] = [
  {
    slug: "project-portal-goes-live",
    title: "Centralised project portal goes live",
    date: "2026-11-12",
    department: "project",
    summary:
      "The first working version of the project website is deployed, with a section for every department and a subsection for each of the five engineering students.",
    body: [
      "The portal is now live with its full navigation in place: five department sections, five engineering student workstreams, a news feed and a photo gallery. The structure matches the Weeks 7–9 deliverable in the project plan.",
      "Content for Students 1 to 4 and for four of the five departments is currently an overview written by the project manager. Each student and each department replaces their own section with their own text through a pull request against the project repository.",
      "The site is built so that AAMU can take it over. Page layout, naming and image handling follow conventions that can be mapped onto the university's Net Zero Solar pages once their web team approves the integration.",
    ],
    approvedBy: "Pending — to be confirmed at the next weekly BESS meeting",
    tags: ["portal", "milestone"],
  },
  {
    slug: "weekly-reporting-cycle-established",
    title: "Weekly reporting cycle established across all five students",
    date: "2026-11-05",
    department: "engineering",
    summary:
      "A one-page report template and an hour and milestone tracker covering all five students are in use, with the BESS inspection checklist ready for when the storage equipment is installed.",
    body: [
      "The reporting cycle now runs every week of both semesters. Each student submits their update and hours; those are consolidated into a single one-page report and presented to the team and the supervisor.",
      "A dated BESS checklist and log has been prepared ahead of installation, covering the batteries, instruments and equipment to be checked and the condition found at each inspection.",
    ],
    approvedBy: "Project supervisor",
    tags: ["reporting", "BESS"],
  },
  {
    slug: "common-data-format-under-discussion",
    title: "Common inspection data format agreed in principle",
    date: "2026-10-29",
    department: "engineering",
    summary:
      "Students 1, 2 and 3 are converging on a shared field set so that downstream work can begin against sample data rather than waiting on the first complete prototype.",
    body: [
      "The proposed field set covers asset, module, row or inverter identifier, timestamp, GPS and location information, anomaly type, thermal temperature difference, severity or priority, image reference, and data-quality indicators.",
      "Agreeing this early means Students 2 and 3 can develop and test against synthetic or sample files. The format will be refined as real field data is collected.",
    ],
    approvedBy: "Engineering team",
    tags: ["data-format", "dependencies"],
  },
];
