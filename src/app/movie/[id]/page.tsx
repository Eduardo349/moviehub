import { getMovieById } from "@/services/tmdb";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default async function MoviePage({ params }: Props) {
  const movie = await getMovieById(params.id);

  if (!movie) {
    notFound();
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p className="mt-4 text-gray-300">{movie.overview}</p>
    </main>
  );
}