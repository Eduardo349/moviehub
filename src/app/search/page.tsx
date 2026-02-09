"use client";

import { useState } from "react";
import { searchMovies } from "@/services/tmdb";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";

export default function SearchPage() {
  const [movies, setMovies] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSearch(query: string) {
    if (!query) {
      setMovies([]);
      setHasSearched(false);
      return;
    }

    const data = await searchMovies(query);
    setMovies(data.results);
    setHasSearched(true);
  }

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">
        🔎 Buscar Filmes
      </h1>

      <SearchBar onSearch={handleSearch} />

      {!hasSearched && (
        <p className="mt-6 text-gray-400">
          Digite o nome de um filme para pesquisar 🎥
        </p>
      )}

      {hasSearched && movies.length === 0 && (
        <p className="mt-6 text-red-400">
          Nenhum filme encontrado 😢
        </p>
      )}

      <ul className="
  grid 
  grid-cols-2 
  sm:grid-cols-3 
  md:grid-cols-4 
  lg:grid-cols-5 
  gap-6
">
        {movies.map((movie: any) => (
          <li key={movie.id}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              rating={movie.vote_average}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}