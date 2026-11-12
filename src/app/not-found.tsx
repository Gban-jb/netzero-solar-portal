import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative isolate overflow-hidden bg-maroon-950">
      <div aria-hidden="true" className="pv-grid absolute inset-0" />
      <div aria-hidden="true" className="pv-glow absolute inset-0" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-start px-4 py-28 sm:px-6 lg:px-8">
        <p className="font-mono text-sm text-solar-400">404</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          That page isn&rsquo;t here
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-maroon-100/90">
          The link may be out of date, or the section may not have been published yet.
          Department and student sections appear as their owners submit them.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-lg bg-solar-500 px-5 py-3 text-sm font-bold text-maroon-950 hover:bg-solar-400"
          >
            Back to the home page
          </Link>
          <Link
            href="/departments"
            className="rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
          >
            Browse departments
          </Link>
        </div>
      </div>
    </div>
  );
}
