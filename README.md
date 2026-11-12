# Net Zero Solar Portal

The centralised project website for the **Solar PV Drone Monitoring & Battery
Energy Storage** research programme at **Alabama A&M University**, part of the
[Net Zero: AAMU Solar Electric Initiative](https://www.aamu.edu/research-economic-development/net-zero-solar-electric-initiative/index.html).

It brings five academic departments and five engineering student workstreams
into one public record. It is a standalone site, deliberately kept in a
structure AAMU can take over and merge into their own Net Zero Solar pages.

---

## Quick start

```bash
git clone <this-repo-url>
cd netzero-solar-portal
npm install
npm run dev          # http://localhost:3000
```

Other commands:

```bash
npm run build        # production build — run this before opening a PR
npm run lint         # ESLint
npm start            # serve the production build
```

Requires Node 20 or newer.

---

## Where content lives

All site content is plain, typed TypeScript. **There is no database and no CMS
login.** You edit a file and open a pull request; Vercel builds a preview
automatically, and the live site updates when it is merged.

| File | What it holds |
| --- | --- |
| `src/content/students.ts` | The five engineering student workstreams |
| `src/content/departments.ts` | The five department sections |
| `src/content/news.ts` | The updates feed |
| `src/content/gallery.ts` | The photo gallery |
| `src/content/site.ts` | Project meta, headline stats, the weekly cycle, scope notes |

Types for all of it are in `src/lib/types.ts`. If your editor shows a red
squiggle, read the type — it will tell you exactly which field is wrong.

---

## If you are one of the five students

Your section lives in **`src/content/students.ts`**. Find the object whose
`slug` matches your number and change only that object.

1. Set `name` to your name — it is `null` until you do, and the page shows a
   "name pending" marker.
2. Rewrite `objective`, `inputs`, `outputs` and `stack` in your own words.
3. Update the `status` on each milestone as you go. Allowed values:
   `"not-started"`, `"in-progress"`, `"under-review"`, `"complete"`.
4. Add your repository and demo links in `links`. Remove `pending: true` once
   a link actually works.
5. Set `awaitingStudentCopy: false` to remove the orange "Draft overview"
   banner from your page.
6. Run `npm run build` to check it compiles, then open a pull request.

**Stay inside your own object.** Five people editing one file only works if
nobody touches anybody else's entry — that is what keeps pull requests merging
without conflicts.

The overviews currently in place for Students 1–4 were written by the project
manager from the agreed project scope so the structure exists. They are meant
to be replaced, not extended.

## If you are a department

Your section lives in **`src/content/departments.ts`**. The text published
under your name is text you write yourselves. Edit `summary`, `body`,
`focusAreas` and `deliverables`, then set `awaitingDepartmentCopy: false`.

Send it as a pull request, or hand the text to the project manager to enter on
your behalf.

## Adding a news update

Updates are published **after the weekly BESS management meeting agrees what
goes on the record.** Copy an existing entry to the top of the array in
`src/content/news.ts`, keep the `slug` unique and the `date` in `YYYY-MM-DD`
form, and record who approved it in `approvedBy`.

## Adding a photo

1. Put the file in `public/gallery/` — keep it under roughly 500 KB.
2. Add an entry in `src/content/gallery.ts` with `src: "/gallery/your-file.jpg"`.
3. Write a real `alt` description of what the image shows. This is an
   accessibility requirement for the AAMU integration package, not optional.

An entry with an empty `src` renders as a clearly labelled empty slot, so the
layout can be reviewed before the photographs arrive.

---

## Project structure

```
src/
├── app/                        Next.js App Router pages
│   ├── page.tsx                Home
│   ├── departments/
│   │   ├── page.tsx            All departments
│   │   ├── [slug]/             Animal & Food Science, Architecture, Soil, Comms
│   │   └── engineering/
│   │       ├── page.tsx        Engineering department
│   │       └── students/[slug] The five student subsections
│   ├── news/                   Updates feed + individual updates
│   ├── gallery/                Photo gallery
│   └── about/                  Weekly cycle, scope and limits, how to contribute
├── components/                 Header, footer, cards, shared UI
├── content/                    ← all editable content lives here
└── lib/
    ├── types.ts                Content types
    ├── content.ts              Data access layer (the only DB-aware module)
    └── format.ts               Accent palettes, status labels, date formatting
```

### Moving to PostgreSQL later

The project specification calls for PostgreSQL on Neon or Supabase holding the
news feed, the weekly updates and the gallery. Every accessor in
`src/lib/content.ts` is already `async`, and every page already awaits it, so
that migration means replacing the bodies of those functions with queries —
no page or component has to change.

---

## Design notes

Colours follow the [AAMU Brand Guide](https://www.aamu.edu/brand): AAMU Maroon
`#61162D`, White and Rich Black are primary. Two project accents sit on top —
`solar` (amber, the photovoltaic and energy side) and `field` (green, the
agrivoltaic and soil side). All tokens are defined in one place,
`src/app/globals.css`.

Fonts load from Google Fonts via a stylesheet link rather than
`next/font/google`. `next/font` downloads font files **at build time**, which
fails on any machine or CI runner that cannot reach `fonts.googleapis.com` —
including networks behind a campus proxy. Loading at runtime keeps
`npm run build` working everywhere. Full fallback stacks are declared so the
page is readable before the webfonts arrive.

---

## Deployment

Hosted on Vercel, connected to this repository:

- A push to `main` deploys to production.
- Every pull request gets its own preview URL for review before merge.

## Handover to AAMU

Page layout, naming, image sizing and accessibility follow conventions that can
be mapped onto the AAMU Net Zero Solar pages. Content and presentation are
separated — everything in `src/content/` is portable to another system without
touching the components that render it.

---

Project supervisor: **Dr. Raziq Yaqub** · Alabama A&M University
