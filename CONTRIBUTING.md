# Contributing

Short version: edit one file, run the build, open a pull request.

```bash
git checkout -b student-3-content      # or: dept-soil-science-content
# edit your section in src/content/
npm run build                          # must pass
npm run lint                           # must pass
git commit -am "Student 3: real content and Fall status"
git push -u origin HEAD
```

Then open a pull request against `main`. Vercel posts a preview URL on the PR;
check your section there before asking for a merge.

## Rules that keep this working for five people

1. **Only touch your own section.** Students edit one object in
   `src/content/students.ts`. Departments edit one object in
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
