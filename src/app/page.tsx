import MovieCard from "@/components/MovieCard";
import { getPopularMovies } from "@/services/tmdb";

export default async function Home() {
  const data = await getPopularMovies();
  const movies = data.results;

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">
        🎬 Filmes Populares
      </h1>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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