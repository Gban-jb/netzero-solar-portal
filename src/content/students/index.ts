import type { StudentProfile } from "@/lib/types";
import { studentOne } from "./student-1";
import { studentTwo } from "./student-2";
import { studentThree } from "./student-3";
import { studentFour } from "./student-4";
import { studentFive } from "./student-5";

/**
 * ENGINEERING STUDENT WORKSTREAMS
 * -------------------------------
 * Five subsections, one per student, each in its own file:
 *
 *   src/content/students/student-1.ts   Thermal imaging & hotspot detection
 *   src/content/students/student-2.ts   Anomaly management & inspection app
 *   src/content/students/student-3.ts   Energy loss & financial impact
 *   src/content/students/student-4.ts   Field hardware, positioning, connectivity
 *   src/content/students/student-5.ts   Reporting, site monitoring & this portal
 *
 * One file per person is deliberate: it is what lets several students
 * push work in the same week without fighting over the same lines.
 * `.github/CODEOWNERS` records who owns which file.
 *
 * TO CLAIM YOUR SECTION — edit only your own file:
 *   1. Set `name` to your name (it is `null` until you do).
 *   2. Rewrite `objective`, `inputs`, `outputs` and `stack`.
 *   3. Update the `status` on each milestone as you go:
 *      "not-started" | "in-progress" | "under-review" | "complete"
 *   4. Add your repository and demo links in `links`.
 *   5. Set `awaitingStudentCopy: false` to remove the draft banner.
 *   6. Open a pull request against `main`.
 *
 * This file only assembles the list. Adding or removing a student is a
 * project-manager change — raise it at the weekly meeting first.
 */
export const students: StudentProfile[] = [
  studentOne,
  studentTwo,
  studentThree,
  studentFour,
  studentFive,
];

export {
  studentOne,
  studentTwo,
  studentThree,
  studentFour,
  studentFive,
};
