"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cx } from "@/lib/format";

type NavChild = { label: string; href: string; hint?: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const nav: NavItem[] = [
  {
    label: "Departments",
    href: "/departments",
    children: [
      {
        label: "Engineering & BESS",
        href: "/departments/engineering",
        hint: "Five student workstreams",
      },
      {
        label: "Animal & Food Science",
        href: "/departments/animal-food-science",
        hint: "Agrivoltaic crop and livestock study",
      },
      {
        label: "Architecture",
        href: "/departments/architecture",
        hint: "Site design and campus integration",
      },
      {
        label: "Natural Resources & Soil Science",
        href: "/departments/natural-resources-soil-science",
        hint: "Soil, moisture, runoff and erosion",
      },
      {
        label: "Communications",
        href: "/departments/communications",
        hint: "Outreach and publication approval",
      },
    ],
  },
  {
    label: "Engineering Team",
    href: "/departments/engineering",
    children: [
      {
        label: "Student 1 — Thermal Imaging",
        href: "/departments/engineering/students/student-1",
        hint: "Hotspot detection & SCADA sync",
      },
      {
        label: "Student 2 — Inspection App",
        href: "/departments/engineering/students/student-2",
        hint: "Anomaly triage and tracking",
      },
      {
        label: "Student 3 — Energy Loss",
        href: "/departments/engineering/students/student-3",
        hint: "kWh and financial impact",
      },
      {
        label: "Student 4 — Field Hardware",
        href: "/departments/engineering/students/student-4",
        hint: "GPS, RTK, Wi-Fi and RF",
      },
      {
        label: "Student 5 — Reporting & Portal",
        href: "/departments/engineering/students/student-5",
        hint: "Weekly reports, BESS log, this site",
      },
    ],
  },
  { label: "Updates", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close everything whenever the route changes. Adjusting state during
  // render (rather than in an effect) is the recommended pattern and
  // avoids the cascading re-render that setState-in-effect causes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  // Escape closes the open dropdown.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function openNow(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }
  function closeSoon() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-maroon-900/40 bg-maroon-950/95 backdrop-blur supports-[backdrop-filter]:bg-maroon-950/85">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-maroon-800"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <SunMark />
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-extrabold tracking-tight text-white">
              Net Zero Solar
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-maroon-200/80">
              Alabama A&amp;M University
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="ml-auto hidden items-center gap-1 lg:flex"
        >
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openNow(item.label)}
                onMouseLeave={closeSoon}
              >
                <button
                  type="button"
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpenMenu(openMenu === item.label ? null : item.label)
                  }
                  className={cx(
                    "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-white/10 text-white"
                      : "text-maroon-100 hover:bg-white/5 hover:text-white",
                  )}
                >
                  {item.label}
                  <Chevron open={openMenu === item.label} />
                </button>

                {openMenu === item.label && (
                  <div
                    className="absolute right-0 top-full w-80 pt-2"
                    onMouseEnter={() => openNow(item.label)}
                    onMouseLeave={closeSoon}
                  >
                    <div className="overflow-hidden rounded-xl border border-ink-200 bg-white shadow-xl shadow-maroon-950/20">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block border-b border-ink-100 px-4 py-3 last:border-0 hover:bg-maroon-50"
                        >
                          <span className="block text-sm font-semibold text-ink-900">
                            {child.label}
                          </span>
                          {child.hint && (
                            <span className="mt-0.5 block text-xs text-ink-500">
                              {child.hint}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-white/10 text-white"
                    : "text-maroon-100 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          className="ml-auto inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-sm font-medium text-white lg:hidden"
        >
          <span className="sr-only">
            {mobileOpen ? "Close main menu" : "Open main menu"}
          </span>
          <Burger open={mobileOpen} />
          <span aria-hidden="true">Menu</span>
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary (mobile)"
          className="border-t border-white/10 bg-maroon-950 lg:hidden"
        >
          <ul className="mx-auto max-w-7xl divide-y divide-white/10 px-4 pb-4 sm:px-6">
            {nav.map((item) => (
              <li key={item.label} className="py-1">
                {item.children ? (
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 text-sm font-semibold text-white">
                      {item.label}
                      <Chevron open={false} className="group-open:rotate-180" />
                    </summary>
                    <ul className="pb-2 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2 text-sm text-maroon-100 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2.5 text-sm font-semibold text-white"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function SunMark() {
  return (
    <span
      aria-hidden="true"
      className="relative grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-solar-400 to-solar-600 ring-1 ring-solar-200/40"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-maroon-950" fill="none">
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={i}
            x="11.3"
            y="1.6"
            width="1.4"
            height="3.4"
            rx="0.7"
            fill="currentColor"
            transform={`rotate(${i * 45} 12 12)`}
          />
        ))}
      </svg>
    </span>
  );
}

function Chevron({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={cx(
        "h-3.5 w-3.5 transition-transform",
        open && "rotate-180",
        className,
      )}
      fill="currentColor"
    >
      <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Burger({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      {open ? (
        <>
          <path d="M5 5l10 10" />
          <path d="M15 5L5 15" />
        </>
      ) : (
        <>
          <path d="M3 6h14" />
          <path d="M3 10h14" />
          <path d="M3 14h14" />
        </>
      )}
    </svg>
  );
}
