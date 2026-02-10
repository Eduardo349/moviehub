import { notFound } from "next/navigation";
import { getMovieById } from "@/services/tmdb";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function MoviePage({ params }: Props) {
  const { id } = await params;

  const movie = await getMovieById(id);

  if (!movie) {
    notFound();
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
}