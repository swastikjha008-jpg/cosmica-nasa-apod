export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <radialGradient id="cosmica-core" cx="36%" cy="32%" r="72%">
          <stop offset="0%" stopColor="#FFE9C7" />
          <stop offset="55%" stopColor="#FF9838" />
          <stop offset="100%" stopColor="#8E3A0B" />
        </radialGradient>
      </defs>

      {/* orbit ring, passing behind the core */}
      <ellipse
        cx="16"
        cy="16"
        rx="14.5"
        ry="5.6"
        transform="rotate(-18 16 16)"
        stroke="currentColor"
        strokeOpacity="0.32"
        strokeWidth="1.1"
      />

      <circle cx="16" cy="16" r="7.4" fill="url(#cosmica-core)" />

      {/* same ring, redrawn as a short arc in front of the core for depth */}
      <path
        d="M 4.7 19.9 A 14.5 5.6 -18 0 1 10.3 10.7"
        stroke="currentColor"
        strokeOpacity="0.85"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}
