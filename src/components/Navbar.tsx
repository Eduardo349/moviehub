import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-black/80 backdrop-blur fixed top-0 z-50">
      <Link href="/" className="text-red-600 text-2xl font-extrabold">
        CineMovieHub
      </Link>

      <nav className="flex gap-6 text-sm font-medium">
        <Link href="/popular" className="hover:text-red-500 transition">
          Filmes Populares
        </Link>
        <Link href="/search" className="hover:text-red-500 transition">
          Buscar
        </Link>
      </nav>
    </header>
  );
}