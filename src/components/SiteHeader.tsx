"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cx } from "@/lib/format";

type NavChild = { label: string; href: string; hint?: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

/**
 * The project is an engineering project, so the four tasks are the
 * primary navigation. Everything else — the departments working
 * alongside, the updates feed, the photographs — sits after them.
 */
const nav: NavItem[] = [
  {
    label: "Tasks",
    href: "/departments/engineering",
    children: [
      {
        label: "Field Hardware, Positioning & Connectivity",
        href: "/departments/engineering/students/student-4",
        hint: "01 Capture · GPS, RTK, Wi-Fi and RF",
      },
      {
        label: "Thermal Imaging & Hotspot Detection",
        href: "/departments/engineering/students/student-1",
        hint: "02 Detect · radiometric imagery, SCADA sync",
      },
      {
        label: "Anomaly Management & Inspection Application",
        href: "/departments/engineering/students/student-2",
        hint: "03 Triage · the inspection queue",
      },
      {
        label: "Energy Loss & Financial Impact Analysis",
        href: "/departments/engineering/students/student-3",
        hint: "04 Price · kWh lost and what it costs",
      },
      {
        label: "Project Reporting & This Portal",
        href: "/departments/engineering/students/student-5",
        hint: "Across all four · weekly reports, BESS log",
      },
    ],
  },
  { label: "Updates", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Alongside", href: "/departments" },
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
    <header className="sticky top-0 z-50 bg-therm-05/95 backdrop-blur supports-[backdrop-filter]:bg-therm-05/85">
      <a
        href="#main"
        className="label sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-therm-25"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <ScaleMark />
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-extrabold tracking-tight text-white">
              Net Zero Solar
            </span>
            <span className="label block text-[9px] text-white/55">
              Alabama A&amp;M University
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 lg:flex">
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
                    "label flex items-center gap-2 px-3 py-2 transition-colors",
                    isActive(item.href)
                      ? "text-therm-85"
                      : "text-white/70 hover:text-white",
                  )}
                >
                  {item.label}
                  <Chevron open={openMenu === item.label} />
                </button>

                {openMenu === item.label && (
                  <div
                    className="absolute right-0 top-full w-[26rem] pt-2"
                    onMouseEnter={() => openNow(item.label)}
                    onMouseLeave={closeSoon}
                  >
                    <div className="border-t-2 border-therm-70 bg-white shadow-2xl shadow-therm-05/30">
                      {item.children.map((child, i) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group block border-b border-ink-100 px-5 py-4 last:border-0 hover:bg-ink-50"
                        >
                          <span className="block font-display text-[14px] font-bold leading-snug tracking-tight text-ink-900">
                            {child.label}
                          </span>
                          {child.hint && (
                            <span className="label mt-1.5 block text-ink-400">
                              {child.hint}
                            </span>
                          )}
                          <span className="sr-only">{i + 1}</span>
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
                  "label px-3 py-2 transition-colors",
                  isActive(item.href)
                    ? "text-therm-85"
                    : "text-white/70 hover:text-white",
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
          className="label ml-auto inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-white lg:hidden"
        >
          <span className="sr-only">
            {mobileOpen ? "Close main menu" : "Open main menu"}
          </span>
          <Burger open={mobileOpen} />
          <span aria-hidden="true">Menu</span>
        </button>
      </div>

      {/* The scale, as a hairline under the masthead. */}
      <div aria-hidden="true" className="therm-ramp h-px w-full opacity-70" />

      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary (mobile)"
          className="bg-therm-05 lg:hidden"
        >
          <ul className="mx-auto max-w-7xl divide-y divide-white/10 px-5 pb-5 sm:px-8">
            {nav.map((item) => (
              <li key={item.label} className="py-1">
                {item.children ? (
                  <details className="group">
                    <summary className="label flex cursor-pointer list-none items-center justify-between py-3 text-white">
                      {item.label}
                      <Chevron open={false} className="group-open:rotate-180" />
                    </summary>
                    <ul className="pb-3 pl-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2.5 font-display text-[13px] font-bold leading-snug tracking-tight text-white/70 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={item.href} className="label block py-3 text-white">
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

/**
 * The mark is the temperature scale itself, compressed to a square —
 * the same device the site is built around.
 */
function ScaleMark() {
  return (
    <span
      aria-hidden="true"
      className="therm-steps block h-9 w-9 shrink-0 ring-1 ring-white/15"
    />
  );
}

function Chevron({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={cx("h-3 w-3 transition-transform", open && "rotate-180", className)}
      fill="none"
    >
      <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
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
