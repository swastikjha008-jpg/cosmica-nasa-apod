export function EmptyState({
  message = "No cosmic discoveries found.",
  hint,
}: {
  message?: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-line py-20 text-center">
      <p className="font-display text-xl text-ink">{message}</p>
      {hint && <p className="mt-2 max-w-sm text-sm text-ink-dim">{hint}</p>}
    </div>
  );
}
