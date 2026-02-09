import Image from "next/image";
import { getMovieById } from "@/services/tmdb";


type MoviePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params; // 👈 AQUI ESTÁ A CORREÇÃO
  const movie = await getMovieById(id);

  const imageUrl = movie.poster_path
    ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${movie.poster_path}`
    : "/no-image.png";

  return (
    <main className="min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Image
          src={imageUrl}
          alt={movie.title}
          width={500}
          height={750}
          className="rounded-lg"
        />

        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">
            {movie.title}
          </h1>

          <p className="text-zinc-400 mb-4">
            ⭐ {movie.vote_average.toFixed(1)} | 📅 {movie.release_date}
          </p>

          <p className="leading-relaxed">
            {movie.overview}
          </p>
        </div>
      </div>
    </main>
  );
}