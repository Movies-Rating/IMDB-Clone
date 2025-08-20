import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "./api";
import MovieCard from "./components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trending Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}