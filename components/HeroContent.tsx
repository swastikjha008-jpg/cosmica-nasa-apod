import Link from "next/link";

export function HeroContent() {
  return (
    <div className="flex h-full max-w-6xl flex-col justify-center px-6 sm:px-10">
      <div className="max-w-xl animate-rise">
        <p className="text-sm tracking-wide text-ember-pale/90">
          Explore the universe
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink sm:text-6xl md:text-7xl">
          Look beyond.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-dim sm:text-lg">
          Explore the universe through NASA&apos;s Astronomy Picture of the
          Day — a new window into deep space, every day.
        </p>
        <div className="mt-9">
          <Link
            href="/explore"
            className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-void transition-all hover:bg-ember-pale"
          >
            Explore NASA pictures
          </Link>
        </div>
      </div>
    </div>
  );
}
