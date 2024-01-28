import axios from "axios"

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
//  /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/day`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const API_KEY = '259918b03cdd3627de7453af9144ee1e'

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`${TREND_URL}`, params);
  return data;
};

export const fetchSearchQuery = async movieName => {
  const { data } = await axios.get(`${SEARCH_URL}?query=${movieName}`, params);
  return data;
};

export const fetchMovieDetails = async movie_id => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movie_id}`, params);
  return data;
};

export const fetchMovieCast = async movie_id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movie_id}/credits`,
    params
  );
  return data;
};
export const fetchMovieReviews = async movie_id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movie_id}/reviews`,
    params
  );
  return data;
};