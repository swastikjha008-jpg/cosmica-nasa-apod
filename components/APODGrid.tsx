import type { Apod } from "@/lib/nasa";
import { APODCard } from "./APODCard";

export function APODGrid({ items }: { items: Apod[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((apod) => (
        <APODCard key={apod.date} apod={apod} />
      ))}
    </div>
  );
}

export function APODGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl border border-line bg-surface"
        >
          <div className="aspect-[4/3] animate-pulse bg-surface-raised" />
          <div className="space-y-3 p-5">
            <div className="h-3 w-24 animate-pulse rounded bg-surface-raised" />
            <div className="h-5 w-4/5 animate-pulse rounded bg-surface-raised" />
            <div className="h-3 w-full animate-pulse rounded bg-surface-raised" />
            <div className="h-3 w-2/3 animate-pulse rounded bg-surface-raised" />
          </div>
        </div>
      ))}
    </div>
  );
}
