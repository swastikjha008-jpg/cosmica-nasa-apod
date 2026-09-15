import Image from "next/image";
import Link from "next/link";
import type { Apod } from "@/lib/nasa";

function formatDate(dateStr: string): string {
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function shortDescription(explanation: string, maxLen = 120): string {
  if (explanation.length <= maxLen) return explanation;
  const cut = explanation.slice(0, maxLen);
  return cut.slice(0, cut.lastIndexOf(" ")) + "\u2026";
}

export function APODCard({ apod }: { apod: Apod }) {
  const thumb =
    apod.media_type === "video"
      ? (apod as Apod & { thumbnail_url?: string }).thumbnail_url ?? null
      : apod.url;

  return (
    <Link
      href={`/explore/${apod.date}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-ink-faint/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-raised">
        {thumb ? (
          <Image
            src={thumb}
            alt={apod.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-ink-faint">
            <span className="text-sm">Video</span>
          </div>
        )}
        {apod.media_type === "video" && (
          <span className="absolute right-3 top-3 rounded-full bg-void/70 px-2.5 py-1 text-xs text-ink-dim backdrop-blur-sm">
            Video
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between text-xs text-ink-faint">
          <span>NASA APOD</span>
          <span>{formatDate(apod.date)}</span>
        </div>
        <h3 className="font-display text-lg leading-snug text-ink">
          {apod.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-dim">
          {shortDescription(apod.explanation)}
        </p>
      </div>
    </Link>
  );
}
