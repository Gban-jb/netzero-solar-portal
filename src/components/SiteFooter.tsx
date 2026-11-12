import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t-4 border-solar-500 bg-maroon-950 text-maroon-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-display text-xl font-extrabold tracking-tight text-white">
            {site.initiative}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-maroon-200/90">
            {site.description}
          </p>
          <p className="mt-5 text-xs text-maroon-300/70">
            Project supervisor: {site.supervisor} &middot; {site.university}
          </p>
        </div>

        <nav aria-label="Departments">
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-solar-400">
            Departments
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-white" href="/departments/engineering">Engineering &amp; BESS</Link></li>
            <li><Link className="hover:text-white" href="/departments/animal-food-science">Animal &amp; Food Science</Link></li>
            <li><Link className="hover:text-white" href="/departments/architecture">Architecture</Link></li>
            <li><Link className="hover:text-white" href="/departments/natural-resources-soil-science">Natural Resources &amp; Soil Science</Link></li>
            <li><Link className="hover:text-white" href="/departments/communications">Communications</Link></li>
          </ul>
        </nav>

        <nav aria-label="Project">
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-solar-400">
            Project
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-white" href="/news">Updates</Link></li>
            <li><Link className="hover:text-white" href="/gallery">Photo gallery</Link></li>
            <li><Link className="hover:text-white" href="/about">About &amp; scope</Link></li>
            <li>
              <a
                className="hover:text-white"
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
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-maroon-300/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {site.university}. Student research project.
          </p>
          <p>
            A standalone project site, built for integration into the AAMU Net Zero
            Solar pages.
          </p>
        </div>
      </div>
    </footer>
  );
}
