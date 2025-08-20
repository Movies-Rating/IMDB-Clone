import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="block bg-gray-800 rounded shadow hover:scale-105 transition">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-t"
      />
      <div className="p-2">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-400">{movie.release_date}</p>
      </div>
    </Link>
  );
}