/**
 * Service layer for NASA's Astronomy Picture of the Day (APOD) API.
 *
 * Every request goes through Next.js's fetch cache with a 24-hour
 * revalidation window, so a browser refresh never re-hits NASA — the
 * gallery only asks again once a day, and every request in between is
 * served from cache.
 */

const APOD_ENDPOINT = "https://api.nasa.gov/planetary/apod";
const REVALIDATE_SECONDS = 60 * 60 * 24; // 24 hours

export type Apod = {
  date: string;
  title: string;
  explanation: string;
  url: string;
  hdurl?: string;
  media_type: "image" | "video" | string;
  copyright?: string;
  service_version?: string;
};

class NasaApiError extends Error {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = "NasaApiError";
    this.status = status;
  }
}

function apiKey(): string {
  return process.env.NASA_API_KEY || "DEMO_KEY";
}

async function apodFetch(params: Record<string, string>): Promise<unknown> {
  const url = new URL(APOD_ENDPOINT);
  url.searchParams.set("api_key", apiKey());
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  let res: Response;
  try {
    res = await fetch(url.toString(), {
      next: { revalidate: REVALIDATE_SECONDS },
    });
  } catch {
    throw new NasaApiError("Could not reach NASA's servers.");
  }

  if (!res.ok) {
    if (res.status === 429) {
      throw new NasaApiError(
        "NASA's API rate limit was reached. Try again shortly.",
        429
      );
    }
    throw new NasaApiError(`NASA's API responded with ${res.status}.`, res.status);
  }

  return res.json();
}

/**
 * Fetches today's Astronomy Picture of the Day.
 */
export async function getAPOD(): Promise<Apod> {
  const data = await apodFetch({});
  return data as Apod;
}

/**
 * Fetches the APOD for a single specific date (YYYY-MM-DD).
 */
export async function getAPODByDate(date: string): Promise<Apod> {
  const data = await apodFetch({ date });
  return data as Apod;
}

/**
 * Fetches a gallery of recent APOD entries, newest first. NASA's `count`
 * parameter returns random days, so a fixed date range is used instead to
 * keep the gallery's order stable across the 24-hour cache window.
 */
export async function getRecentAPODs(days: number = 12): Promise<Apod[]> {
  const end = new Date();
  const start = new Date(end);
  start.setDate(start.getDate() - (days - 1));

  const fmt = (d: Date) => d.toISOString().slice(0, 10);

  const data = await apodFetch({
    start_date: fmt(start),
    end_date: fmt(end),
    thumbs: "true",
  });

  const list = Array.isArray(data) ? (data as Apod[]) : [data as Apod];
  return list
    .filter((item) => item && item.date)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export { NasaApiError };
