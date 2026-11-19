import Link from "next/link";
import { site } from "@/content/site";

const tasks = [
  { label: "Field Hardware & Positioning", href: "/departments/engineering/students/student-4" },
  { label: "Thermal Imaging & Hotspot Detection", href: "/departments/engineering/students/student-1" },
  { label: "Anomaly Management & Inspection", href: "/departments/engineering/students/student-2" },
  { label: "Energy Loss & Financial Impact", href: "/departments/engineering/students/student-3" },
  { label: "Reporting & This Portal", href: "/departments/engineering/students/student-5" },
];

const elsewhere = [
  { label: "Updates", href: "/news" },
  { label: "Photo gallery", href: "/gallery" },
  { label: "Alongside the engineering work", href: "/departments" },
  { label: "About & scope", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-therm-05 text-white">
      <div aria-hidden="true" className="therm-ramp h-1.5 w-full" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] lg:px-10">
        <div>
          <p className="display text-[1.75rem] leading-tight text-white">
            {site.initiative}
          </p>
          <p className="prose-serif mt-5 max-w-md text-[0.9375rem] text-white/65">
            {site.description}
          </p>
          <p className="label mt-8 text-white/65">
            Project supervisor: {site.supervisor} · {site.university}
          </p>
        </div>

        <nav aria-label="Engineering tasks">
          <h2 className="label border-b border-white/15 pb-3 text-therm-85">
            The four tasks
          </h2>
          <ul className="mt-5 space-y-3">
            {tasks.map((t) => (
              <li key={t.href}>
                <Link
                  className="font-display text-[13px] font-bold leading-snug tracking-tight text-white/65 transition-colors hover:text-white"
                  href={t.href}
                >
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Project">
          <h2 className="label border-b border-white/15 pb-3 text-therm-85">
            Project
          </h2>
          <ul className="mt-5 space-y-3">
            {elsewhere.map((l) => (
              <li key={l.href}>
                <Link
                  className="font-display text-[13px] font-bold leading-snug tracking-tight text-white/65 transition-colors hover:text-white"
                  href={l.href}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                className="font-display text-[13px] font-bold leading-snug tracking-tight text-white/65 transition-colors hover:text-white"
                href={site.aamuInitiativeUrl}
                target="_blank"
                rel="noreferrer"
              >
                AAMU Net Zero pages
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="label text-white/65">
            © {new Date().getFullYear()} {site.university} · Student research project
          </p>
          <p className="label text-white/65">
            Week {site.currentWeek} of {site.totalWeeks}
          </p>
        </div>
      </div>
    </footer>
  );
}
