import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          🎬 Cine MovieHub
        </h1>

        <p className="text-gray-400 text-lg mb-10">
          Explore filmes populares, descubra novos títulos e veja detalhes completos
          usando a API do TMDB.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/popular"
            className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-lg font-semibold"
          >
            ⭐ Filmes Populares
          </Link>

          <Link
            href="/search"
            className="border border-gray-600 hover:border-red-500 transition px-8 py-4 rounded-lg font-semibold"
          >
            🔎 Buscar Filmes
          </Link>
        </div>
      </div>
    </section>
  );
}