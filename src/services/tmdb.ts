const ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

const BASE_URL = "https://api.themoviedb.org/3";

async function fetchFromTMDB(endpoint: string) {
  if (!ACCESS_TOKEN) {
    throw new Error("TMDB_ACCESS_TOKEN is not defined");
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("TMDB error:", await res.text());
    throw new Error("Failed to fetch from TMDB");
  }

  return res.json();
}

export async function getPopularMovies() {
  return fetchFromTMDB("/movie/popular?language=pt-BR");
}

export async function getMovieById(id: string) {
  return fetchFromTMDB(`/movie/${id}?language=pt-BR`);
}

export async function searchMovies(query: string) {
  return fetchFromTMDB(
    `/search/movie?query=${encodeURIComponent(query)}&language=pt-BR`
  );
}