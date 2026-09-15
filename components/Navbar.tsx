import Link from "next/link";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-ink transition-colors hover:text-ember-pale"
        >
          <Logo className="h-15 w-15 text-ink-faint" />
          <span className="font-display text-xl italic tracking-tight">
            Cosmica
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-ink-dim sm:gap-8">
          <Link
            href="/"
            className="transition-colors hover:text-ink"
          >
            Home
          </Link>
          <Link
            href="/explore"
            className="rounded-full border border-line px-4 py-1.5 text-ink transition-colors hover:border-ember/60 hover:text-ember-pale"
          >
            Explore
          </Link>
        </div>
      </nav>
    </header>
  );
}
