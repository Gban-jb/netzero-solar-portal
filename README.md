# Net Zero Solar Portal

**Live at <https://netzero-solar-portal.vercel.app>**

The centralised project website for the **Solar PV Drone Monitoring & Battery
Energy Storage** research programme at **Alabama A&M University**, part of the
[Net Zero: AAMU Solar Electric Initiative](https://www.aamu.edu/research-economic-development/net-zero-solar-electric-initiative/index.html).

It brings five academic departments and five engineering student workstreams
into one public record. It is a standalone site, deliberately kept in a
structure AAMU can take over and merge into their own Net Zero Solar pages.

---

## Quick start

```bash
git clone https://github.com/Gban-jb/netzero-solar-portal.git
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
| `src/content/students/student-1.ts` … `student-5.ts` | The five engineering student workstreams, one file each |
| `src/content/departments.ts` | The five department sections |
| `src/content/news.ts` | The updates feed |
| `src/content/gallery.ts` | The photo gallery |
| `src/content/site.ts` | Project meta, headline stats, the weekly cycle, scope notes |

Types for all of it are in `src/lib/types.ts`. If your editor shows a red
squiggle, read the type — it will tell you exactly which field is wrong.

---

## If you are one of the five students

Your section is **your own file**: `src/content/students/student-N.ts`, where
`N` is your student number. Change only that file.

| Section | File | Owner |
| --- | --- | --- |
| Student 1 | `src/content/students/student-1.ts` | Sudin Pokharel |
| Student 2 | `src/content/students/student-2.ts` | Gaurab |
| Student 3 | `src/content/students/student-3.ts` | Prashant Banjade |
| Student 4 | `src/content/students/student-4.ts` | Armaan |
| Student 5 | `src/content/students/student-5.ts` | Jeeban Bashyal |

1. Set `name` to your name — it is `null` until you do, and the page shows a
   "name pending" marker.
2. Rewrite `task` (the short name on your box), `role`, `objective`, `inputs`,
   `outputs` and `stack` in your own words.
3. Update the `status` on each milestone as you go. Allowed values:
   `"not-started"`, `"in-progress"`, `"under-review"`, `"complete"`.
4. Add your repository and demo links in `links`. Remove `pending: true` once
   a link actually works. **Your program itself lives in your own repository,
   not in this one** — see "Where the student code lives" below.
5. Set `awaitingStudentCopy: false` to remove the orange "Draft overview"
   banner from your page.
6. Run `npm run build` to check it compiles, then open a pull request.

**Stay inside your own file.** One file per student is what lets five people
push in the same week without merge conflicts. `src/content/students/index.ts`
only assembles the list and is the project manager's to change.

The overviews currently in place for Students 1–4 were written by the project
manager from the agreed project scope so the structure exists. They are meant
to be replaced, not extended.

## Where the student code lives

**This repository is the portal, not the programs.** It is a Next.js site on
Vercel; a push to `main` deploys production. Four students working in Python,
OpenCV, C/C++, serial I/O, pandas and a React/Node application cannot share
that build without breaking the live site for everybody.

So each student keeps their program in **their own repository, in their own
stack, with their own README and their own CI**:

| Section | Program repository | Stack | Hosted |
| --- | --- | --- | --- |
| Student 1 | [`sudinpokharel/solar-pv-drone-inspection`](https://github.com/sudinpokharel/solar-pv-drone-inspection) | Python, React, Vite | [frontend only](https://solarpv-inspection-platform.vercel.app/) |
| Student 2 | [`gauravdev0011-code/SolarPV-Shared-Platform`](https://github.com/gauravdev0011-code/SolarPV-Shared-Platform) | TypeScript, React, FastAPI, SQLite | [live, part](https://solar-pv-shared-platform.vercel.app/) |
| Student 3 | [`Gban-jb/netzero-energy-loss`](https://github.com/Gban-jb/netzero-energy-loss) | Python, pandas, Streamlit, Plotly | [live](https://netzero-energy-loss-hevaxptm6vsibgrdiweikn.streamlit.app/) |
| Student 4 | [`Gban-jb/netzero-field-hardware`](https://github.com/Gban-jb/netzero-field-hardware) | Python, Streamlit, NMEA/RTCM, GIS | [live](https://netzero-field-hardware.streamlit.app/) |

Students 1 and 2 kept their work in their own accounts rather than in the
repositories set aside for them, so the table records where the code actually
is. `netzero-thermal-detection` and `netzero-inspection-app` remain empty.

"Frontend only" means the interface is deployed but its Python API is not, so
the dashboard renders and then fails every data request. "Live, part" means
some of it works without the API: Student 2's overview, sites and assets, and
inspection-history views run on synthetic data compiled into the bundle, while
panel inspection, data imports and the inverter workspace still need the
service. Both become complete demonstrations once the API is hosted and the
frontend is rebuilt with `VITE_API_BASE_URL` pointing at it.

The portal links to them. Each student puts their repository and demo URL in
the `links` array in their own `src/content/students/student-N.ts` and drops
`pending: true` once the link works. That is the only connection the portal
needs: no student program is ever imported into this site.

### The one thing that must be shared

The stacks differ; the **data passing between them does not**. Student 1's
detections feed Student 2's application, which feeds Student 3's loss
calculation, and Student 4 supplies the positions. That shared field set —
asset / module / row / inverter ID, timestamp, GPS, anomaly type, thermal
delta, severity, image reference, data-quality indicators — is the real
coupling in this project, and it is a Weeks 1–2 milestone for Students 1, 2
and 3 for that reason.

It is agreed once, written down once, and lives in one place as a schema plus
a few sample files. Python reads it with `json`, TypeScript reads it with
`JSON.parse` — a schema is language-neutral, which is exactly why the contract
is the format and not a shared library. A change to it is a conversation at
the weekly meeting, not a quiet commit.

Work against the sample files from week one. Nobody waits for anybody else's
prototype to start building.

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
│   └── students/               One file per student, plus index.ts
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

Type is four voices: **Fraunces** for display, **Schibsted Grotesk** for the
interface, **Newsreader** for long-form reading and **IBM Plex Mono** for
labels and data. Fraunces carries its `WONK` axis switched on and its optical
size left on `auto`, so one family holds both a 60px banner and a 13px nav
link without a second cut.

Italics are not downloaded — nothing on the site sets them. Add the `ital`
axis back to `FONT_HREF` in `src/app/layout.tsx` before using one, or the
browser will synthesise a slanted fake.

Fonts load from Google Fonts via a stylesheet link rather than
`next/font/google`. `next/font` downloads font files **at build time**, which
fails on any machine or CI runner that cannot reach `fonts.googleapis.com` —
including networks behind a campus proxy. Loading at runtime keeps
`npm run build` working everywhere. Full fallback stacks are declared so the
page is readable before the webfonts arrive.

---

## Deployment

**Live site: <https://netzero-solar-portal.vercel.app>**

Hosted on Vercel, connected to this repository:

- A push to `main` deploys to production.
- Every pull request gets its own preview URL for review before merge.

Two things worth knowing before your first push:

- **Set your git author to an address GitHub recognises.** Vercel blocks a
  deployment whose commit author it cannot match to an account, and the
  deployment reports `BLOCKED` with an empty build log rather than an error
  that says so. If `git config user.email` is unset, git invents
  `you@your-machine.local`, which matches nobody. Use your GitHub noreply
  address:

  ```sh
  git config --global user.email "<id>+<username>@users.noreply.github.com"
  git config --global user.name "<Your Name>"
  ```

- **Deployment Protection must stay off** for the site to be publicly
  readable. With Vercel Authentication enabled, every URL answers `302` to
  `vercel.com/sso-api` and only logged-in team members see the portal, even
  when the deployment itself is healthy.

## Handover to AAMU

Page layout, naming, image sizing and accessibility follow conventions that can
be mapped onto the AAMU Net Zero Solar pages. Content and presentation are
separated — everything in `src/content/` is portable to another system without
touching the components that render it.

---

Project supervisor: **Dr. Raziq Yaqub** · Alabama A&M University
