const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

export async function getPopularMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar filmes");
  }

  return response.json();
}

export async function getMovieById(id: string) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar filme");
  }

  return response.json();
}