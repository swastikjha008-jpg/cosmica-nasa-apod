"use client";

import { useMemo, useState } from "react";
import type { Apod } from "@/lib/nasa";
import { SearchBar } from "./SearchBar";
import { APODGrid } from "./APODGrid";
import { EmptyState } from "./EmptyState";

export function GallerySection({ items }: { items: Apod[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((apod) => {
      return (
        apod.title.toLowerCase().includes(q) ||
        apod.date.includes(q) ||
        apod.explanation.toLowerCase().includes(q)
      );
    });
  }, [items, query]);

  return (
    <div className="space-y-10">
      <SearchBar value={query} onChange={setQuery} />
      {filtered.length > 0 ? (
        <APODGrid items={filtered} />
      ) : (
        <EmptyState hint="Try a different title, date, or keyword." />
      )}
    </div>
  );
}
