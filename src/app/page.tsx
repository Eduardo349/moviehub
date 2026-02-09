import { getPopularMovies } from "./services/tmdb";

export default async function Home() {
  const data = await getPopularMovies();
  const movies = data.results;

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">🎬 Filmes Populares</h1>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie: any) => (
          <li key={movie.id} className="bg-zinc-900 rounded-lg p-3">
            <h2 className="font-semibold">{movie.title}</h2>
            <p className="text-sm text-zinc-400">
              ⭐ {movie.vote_average}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}