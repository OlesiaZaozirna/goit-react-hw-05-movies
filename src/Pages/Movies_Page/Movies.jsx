import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchQuery } from 'Services/tmbdAPI';
import { toast } from 'react-toastify';
import MoviesList from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import css from './Movies.module.css'

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = inputValue => {
    setSearchParams({ query: inputValue });
  };
  useEffect(() => {
    if (!searchQuery) return;

    const fetchMoviesData = async () => {
      try {
        setIsLoading(true);

        const { results } = await fetchSearchQuery(searchQuery);
        if (results.length === 0 || !results) {
          return toast.error('Sorry movies not found...');
        }

        setMovies(results);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesData();
  }, [searchQuery]);
  return (
    <div >
      <SearchForm onSubmit={onSubmit} className={css.FormContainer} />
      {error && (
        <p className="errorMessage">Whoops, something went wrong: {error}</p>
      )}
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};
export default MoviesPage;