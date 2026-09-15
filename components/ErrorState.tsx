"use client";

import { useRouter } from "next/navigation";

export function ErrorState({
  message = "The gallery couldn't reach NASA's servers.",
}: {
  message?: string;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-surface py-20 text-center">
      <p className="font-display text-xl text-ink">Signal lost.</p>
      <p className="mt-2 max-w-sm text-sm text-ink-dim">{message}</p>
      <button
        type="button"
        onClick={() => router.refresh()}
        className="mt-6 rounded-full border border-line px-5 py-2 text-sm text-ink transition-colors hover:border-ember/60 hover:text-ember-pale"
      >
        Try again
      </button>
    </div>
  );
}
