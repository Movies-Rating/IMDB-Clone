// ...import statements...
import GlobalApi from "./GlobalApi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GlobalApi.getTrendingVideos.then(res => setMovies(res.data.results));
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map(movie => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div>{movie.title}</div>
        </Link>
      ))}
    </div>
  );
}