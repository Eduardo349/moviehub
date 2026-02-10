import { NextResponse } from "next/server";

const BASE_URL = "https://api.themoviedb.org/3";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  const token = process.env.TMDB_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "TMDB_ACCESS_TOKEN not defined" },
      { status: 500 }
    );
  }

  const res = await fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}