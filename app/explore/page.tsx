import { Suspense } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { LoadingState } from "@/components/LoadingState";
import { ErrorState } from "@/components/ErrorState";
import { getRecentAPODs, NasaApiError } from "@/lib/nasa";

export const metadata: Metadata = {
  title: "Explore — Cosmica",
  description: "Browse NASA's Astronomy Picture of the Day archive.",
};

async function ExploreGallery() {
  let items: Awaited<ReturnType<typeof getRecentAPODs>> | null = null;
  let errorMessage: string | undefined;

  try {
    items = await getRecentAPODs(30);
  } catch (err) {
    errorMessage = err instanceof NasaApiError ? err.message : undefined;
  }

  if (!items) return <ErrorState message={errorMessage} />;
  return <GallerySection items={items} />;
}

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-void">
      <div className="relative border-b border-line-soft">
        <Navbar />
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-28 sm:px-10 sm:pt-32">
          <h1 className="max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            Astronomy Picture of the Day
          </h1>
          <p className="mt-4 max-w-md text-ink-dim">
            One window into the universe, updated by NASA.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <Suspense fallback={<LoadingState />}>
          <ExploreGallery />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
