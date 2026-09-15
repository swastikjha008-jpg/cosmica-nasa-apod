import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center text-sm text-ink-faint sm:flex-row sm:justify-between sm:text-left">
        <span className="flex items-center gap-2 font-display italic text-ink-dim">
          <Logo className="h-15 w-15 text-ink-faint" />
          Cosmica
        </span>
        <span>Built with NASA Open APIs</span>
      </div>
    </footer>
  );
}
