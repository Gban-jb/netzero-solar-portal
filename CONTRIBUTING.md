# Contributing

Short version: edit one file, run the build, open a pull request.

```bash
git clone https://github.com/Gban-jb/netzero-solar-portal.git
cd netzero-solar-portal
npm install

git checkout -b student-3-content      # or: dept-soil-science-content
# edit your own file in src/content/
npm run build                          # must pass
npm run lint                           # must pass
git commit -am "Student 3: real content and Fall status"
git push -u origin HEAD
```

Then open a pull request against `main`. Vercel posts a preview URL on the PR;
check your section there before asking for a merge.

## Who owns what

Each engineering student has **their own file**. You edit that file and nothing
else. This is the whole reason the project can have several people pushing in
the same week without merge conflicts.

| Section   | File                              | Owner            | Workstream                                    |
| --------- | --------------------------------- | ---------------- | --------------------------------------------- |
| Student 1 | `src/content/students/student-1.ts` | Sudin Pokharel   | Thermal imaging & hotspot detection           |
| Student 2 | `src/content/students/student-2.ts` | Gaurab           | Anomaly management & inspection application   |
| Student 3 | `src/content/students/student-3.ts` | Prashant Banjade | Energy loss & financial impact analysis       |
| Student 4 | `src/content/students/student-4.ts` | Armaan           | Field hardware, positioning & connectivity    |
| Student 5 | `src/content/students/student-5.ts` | Jeeban Bashyal   | Reporting, site monitoring & this portal      |

`.github/CODEOWNERS` records the same thing for GitHub, so a pull request
touching your file asks you for review.

Departments edit their own entry in `src/content/departments.ts`.

Everything else — `src/content/students/index.ts`, `src/lib/`, `src/app/`,
`src/components/`, `src/content/news.ts` and the build configuration — is the
project manager's. If your section needs a change there, say so in your pull
request or raise it at the weekly meeting rather than editing it yourself.

## Claiming your section

In your own file:

1. Set `name` to your name — it is `null` until you do.
2. Rewrite `objective`, `inputs`, `outputs` and `stack` in your own words.
3. Update the `status` on each milestone as you go:
   `"not-started"` | `"in-progress"` | `"under-review"` | `"complete"`
4. Add your repository and demo links in `links`.
5. Set `awaitingStudentCopy: false` to remove the draft banner.
6. Open a pull request against `main`.

`src/lib/types.ts` is the source of truth for every field and what it means.

## Rules that keep this working for five people

1. **Only touch your own file.** Students edit one file in
   `src/content/students/`. Departments edit one object in
   `src/content/departments.ts`. This is what prevents merge conflicts.
2. **The build must pass.** If `npm run build` fails, the deployment fails.
3. **Don't delete other people's placeholder content** to "clean up". A
   placeholder is a slot waiting for its owner.
4. **Images go in `public/gallery/`,** under roughly 500 KB, and every image
   needs a real `alt` description.
5. **News updates need approval.** An item only goes in `src/content/news.ts`
   after the weekly BESS management meeting agrees to publish it, with
   `approvedBy` recorded.

## Getting help

Open an issue, or raise it at the weekly meeting. If TypeScript is complaining
and the message is not obvious, paste it into the issue — the types in
`src/lib/types.ts` are the source of truth for every field.
