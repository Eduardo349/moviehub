import Link from "next/link";

interface Props {
  id: number;
  title: string;
  posterPath: string;
  rating: number;
}

export default function MovieCard({
  id,
  title,
  posterPath,
  rating,
}: Props) {
  return (
    <Link href={`/movie/${id}`}>
      <div className="group cursor-pointer">
        <div className="overflow-hidden rounded-xl">
          <img
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt={title}
            className="group-hover:scale-110 transition duration-300"
          />
        </div>

        <h3 className="mt-2 text-sm font-semibold truncate">
          {title}
        </h3>

        <p className="text-xs text-gray-400">
          ⭐ {rating.toFixed(1)}
        </p>
      </div>
    </Link>
  );
}