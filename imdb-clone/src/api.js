// filepath: d:\GCU\Sem 5\FSD\IMDB-Clone\imdb-clone\src\api.js
import axios from "axios";

const API_KEY = "2ec0d66f5bdf1dd12eefa0723f1479cf";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const res = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  return res.data.results;
};