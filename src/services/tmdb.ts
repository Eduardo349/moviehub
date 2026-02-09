const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

export async function getPopularMovies() {
  if (!API_KEY || !BASE_URL) {
    return { results: [] };
  }

  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`,
    { cache: "no-store" }
  );

  return res.json();
}

export async function getMovieById(id: string) {
  if (!API_KEY || !BASE_URL) {
    return null;
  }

  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`,
    { cache: "no-store" }
  );

  return res.json();
}

export async function searchMovies(query: string) {
  if (!API_KEY || !BASE_URL) {
    return { results: [] };
  }

  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=pt-BR`,
    { cache: "no-store" }
  );

  return res.json();
}