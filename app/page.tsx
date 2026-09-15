import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroContent } from "@/components/HeroContent";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { LoadingState } from "@/components/LoadingState";
import { ErrorState } from "@/components/ErrorState";
import { BlackHoleHeroSection } from "@/components/BlackHoleHeroSection";
import { getRecentAPODs, NasaApiError } from "@/lib/nasa";

async function HomeGallery() {
  let items: Awaited<ReturnType<typeof getRecentAPODs>> | null = null;
  let errorMessage: string | undefined;

  try {
    items = await getRecentAPODs(6);
  } catch (err) {
    errorMessage = err instanceof NasaApiError ? err.message : undefined;
  }

  if (!items) return <ErrorState message={errorMessage} />;
  return <GallerySection items={items} />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-void">
      <section className="relative h-[92svh] min-h-[560px] w-full">
        <BlackHoleHeroSection
          scrim="left"
          scrimStrength={0.75}
          starBrightness={0.5}
        >
          <Navbar />
          <HeroContent />
        </BlackHoleHeroSection>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="mb-10 max-w-xl">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Today, from NASA
          </h2>
          <p className="mt-3 text-ink-dim">
            A rotating look at the universe, refreshed once a day.
          </p>
        </div>
        <Suspense fallback={<LoadingState />}>
          <HomeGallery />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
}
