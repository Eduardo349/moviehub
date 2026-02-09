"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getMovieById } from "@/services/tmdb";

export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    getMovieById(id as string).then(setMovie);
  }, [id]);

  if (!movie) {
    return <p className="p-6">Carregando...</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded mb-4"
      />

      <p>{movie.overview}</p>
    </main>
  );
}