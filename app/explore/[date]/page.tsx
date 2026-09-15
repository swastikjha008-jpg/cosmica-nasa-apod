import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getAPODByDate, NasaApiError } from "@/lib/nasa";

type Params = { date: string };

function formatDate(dateStr: string): string {
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { date } = await params;
  try {
    const apod = await getAPODByDate(date);
    return {
      title: `${apod.title} — Cosmica`,
      description: apod.explanation.slice(0, 155),
    };
  } catch {
    return { title: "Astronomy Picture of the Day — Cosmica" };
  }
}

export default async function ApodDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { date } = await params;

  let apod;
  try {
    apod = await getAPODByDate(date);
  } catch (err) {
    if (err instanceof NasaApiError && err.status === 400) notFound();
    throw err;
  }

  return (
    <div className="min-h-screen bg-void">
      <div className="relative border-b border-line-soft">
        <Navbar />
        <div className="h-20" />
      </div>

      <main className="mx-auto max-w-4xl px-6 py-12 sm:px-10">
        <Link
          href="/explore"
          className="inline-flex items-center text-sm text-ink-dim transition-colors hover:text-ink"
        >
          &larr; Back to the gallery
        </Link>

        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface">
          {apod.media_type === "video" ? (
            <div className="aspect-video w-full">
              <iframe
                src={apod.url}
                title={apod.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative aspect-[16/10] w-full bg-surface-raised">
              <Image
                src={apod.hdurl || apod.url}
                alt={apod.title}
                fill
                sizes="(min-width: 768px) 896px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        <div className="mt-8 max-w-2xl">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-faint">
            <span>NASA APOD</span>
            <span aria-hidden="true">&middot;</span>
            <span>{formatDate(apod.date)}</span>
            {apod.media_type && (
              <>
                <span aria-hidden="true">&middot;</span>
                <span className="capitalize">{apod.media_type}</span>
              </>
            )}
          </div>
          <h1 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
            {apod.title}
          </h1>
          <p className="mt-5 whitespace-pre-line text-base leading-relaxed text-ink-dim">
            {apod.explanation}
          </p>
          {apod.copyright && (
            <p className="mt-6 text-sm text-ink-faint">
              &copy; {apod.copyright.trim()}
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
