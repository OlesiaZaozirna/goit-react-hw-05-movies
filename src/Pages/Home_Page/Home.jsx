import css from './Home.module.css'
import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'Services/tmbdAPI';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        setIsLoading(true);

        const { results } = await fetchTrendingMovies();

        setMovies(results);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesData();
  }, []);

  return (
    <>
      <h1 className={css.HomeTitle}>Trending today</h1>
      {error && <p>Whoops, something went wrong: {error}</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
      {isLoading && <Loader />}
      <Outlet />
    </>
  );
};



export default Home