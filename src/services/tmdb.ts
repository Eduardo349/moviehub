const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;



if (!API_KEY) {
  console.warn("⚠️ TMDB API KEY não configurada");
}

export async function getPopularMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/popular?language=pt-BR`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar filmes");
  }

  return response.json();
}

export async function getMovieById(id: string) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`,
    {
      cache: "no-store"
    }
  );

  if (!response.ok) {
    console.error("Erro TMDB:", response.status);
    return null; // 👈 não quebra a página
  }

  return response.json();
}

export async function searchMovies(query: string) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(
      query
    )}`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar filmes");
  }

  return response.json();
}