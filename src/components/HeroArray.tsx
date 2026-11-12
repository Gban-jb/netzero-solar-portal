/**
 * Decorative photovoltaic array drawn in SVG for the home hero.
 * Purely ornamental — hidden from assistive technology, and hidden
 * entirely below the lg breakpoint where the headline needs the room.
 */
export function HeroArray() {
  const rows = [0, 1, 2, 3];
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-1/2 hidden w-[46rem] -translate-y-1/2 translate-x-24 lg:block xl:translate-x-10"
    >
      <svg viewBox="0 0 640 520" className="h-auto w-full" fill="none">
        <defs>
          <linearGradient id="panelFace" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f2bc6b" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#e8a33d" stopOpacity="0.07" />
          </linearGradient>
          <linearGradient id="panelEdge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f2bc6b" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#e8a33d" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sun */}
        <circle cx="470" cy="96" r="120" fill="url(#sunGlow)" />
        <circle cx="470" cy="96" r="26" fill="#f2bc6b" opacity="0.65" />

        {/* Four receding rows of panels */}
        {rows.map((r) => {
          const y = 190 + r * 78;
          const inset = (3 - r) * 26;
          const depth = 20 + r * 4;
          const left = 40 + inset;
          const right = 600 - inset;
          return (
            <g key={r} opacity={0.5 + r * 0.14}>
              {/* Panel face as a shallow parallelogram */}
              <path
                d={`M${left} ${y} L${right} ${y - 16} L${right} ${y + depth - 16} L${left} ${y + depth} Z`}
                fill="url(#panelFace)"
                stroke="url(#panelEdge)"
                strokeWidth="1"
              />
              {/* Cell divisions */}
              {Array.from({ length: 7 }).map((_, c) => {
                const t = (c + 1) / 8;
                const x = left + (right - left) * t;
                const yy = y - 16 * t;
                return (
                  <line
                    key={c}
                    x1={x}
                    y1={yy}
                    x2={x}
                    y2={yy + depth}
                    stroke="#ffffff"
                    strokeOpacity="0.13"
                    strokeWidth="1"
                  />
                );
              })}
              {/* Support legs */}
              <line x1={left + 30} y1={y + depth} x2={left + 30} y2={y + depth + 22} stroke="#ffffff" strokeOpacity="0.16" strokeWidth="2" />
              <line x1={right - 40} y1={y + depth - 16} x2={right - 40} y2={y + depth + 6} stroke="#ffffff" strokeOpacity="0.16" strokeWidth="2" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
