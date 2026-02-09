import Image from "next/image";

type MovieCardProps = {
  id: number;
  title: string;
  posterPath: string;
  rating: number;
};

export default function MovieCard({
  title,
  posterPath,
  rating,
}: MovieCardProps) {
  const imageUrl = posterPath
    ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${posterPath}`
    : "/no-image.png";

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={750}
        className="w-full h-auto"
      />

      <div className="p-3">
        <h2 className="font-semibold text-sm mb-1 line-clamp-2">
          {title}
        </h2>

        <p className="text-zinc-400 text-sm">
          ⭐ {rating.toFixed(1)}
        </p>
      </div>
    </div>
  );
}