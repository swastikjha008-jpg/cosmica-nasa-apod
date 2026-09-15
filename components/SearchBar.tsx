"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchBar({
  value,
  onChange,
  placeholder = "Search the universe...",
}: SearchBarProps) {
  return (
    <div className="relative">
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className="pointer-events-none absolute left-[1.125rem] top-1/2 h-5 w-5 -translate-y-1/2 text-ink-faint"
      >
        <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 17L13.4 13.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        role="searchbox"
        aria-label="Search the universe"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-line bg-surface py-4 pl-[3.25rem] pr-5 text-base text-ink placeholder:text-ink-faint transition-colors focus:border-ember/70 focus:outline-none focus:ring-1 focus:ring-ember/40 hover:border-ink-faint/40"
      />
    </div>
  );
}
