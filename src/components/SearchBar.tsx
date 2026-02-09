"use client";

import { useState } from "react";

type Props = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Buscar filme..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 p-2 rounded bg-zinc-800 text-white outline-none"
      />
      <button className="px-4 py-2 bg-red-600 rounded text-white">
        Buscar
      </button>
    </form>
  );
}