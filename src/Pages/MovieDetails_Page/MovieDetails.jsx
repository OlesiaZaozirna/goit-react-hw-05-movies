import css from './MovieDetails.module.css'
import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { Link, NavLink, Route, Routes, useLocation, useParams} from 'react-router-dom';
import { fetchMovieDetails, IMG_URL } from 'Services/tmbdAPI';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const MovieDetails = () => {
  const [movieDet, setMovieDet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetailsData = async () => {
      try {
        setIsLoading(true);

        const getMovieDetails = await fetchMovieDetails(movieId);

        setMovieDet(getMovieDetails);
      } catch (error) {
        setError(error.message);
        toast.error(`Whoops, something went wrong: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetailsData();
  }, [movieId]);

  const { title, release_date, poster_path, vote_average, overview, genres } =
    movieDet ?? {};

  const releaseYear = release_date ? release_date.split('-')[0] : '';

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      {movieDet && (
        <div className={css.MovieDetailsContainer}>
          <Link to={backLink.current}>
            <button className={css.Button}> Go back </button>
          </Link>
          <div className={css.MovieDetailsCard}>
            <div className={css.MovieDetailsInfo}>
              <img className={css.MovieDetailsPoster}
                src={
                  poster_path
                    ? `${IMG_URL}${poster_path}`
                    : `https://img.freepik.com/free-photo/collage-about-movie-time-with-people-at-cinema_23-2149946314.jpg?w=360&t=st=1706553935~exp=1706554535~hmac=7f6c48ab1c4b545dfe50e969eefe23c93a268015fc012cfff694cd7d39ef974f`
                }
                alt={title}
              />
              <div className={css.MovieMoreDetails}>
                <h2 className={css.MovieDetailsTitle}>
                  {title} ({releaseYear})
                </h2>
                <h3 className={css.MovieDetailsName}>User score: {Math.round(vote_average * 10)}%</h3>
                <span className={css.MovieDetailsText}>
                 <b>Overview</b><br/> {overview}
                </span>
                <h3 className={css.MovieDetailsName}>Genres:</h3>
                <span className={css.MovieDetailsText}>{genres.map(genre => genre.name).join(' ')}</span>
              </div>
            </div>
            <h3 className={css.MovieDetailsName}>More information</h3>
            <div>
              <NavLink to={`/movies/${movieId}/cast`}><button className={css.Button}>Cast</button></NavLink>
<NavLink to={`/movies/${movieId}/reviews`}><button className={css.Button}>Reviews</button></NavLink>
            </div>
            <div>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="cast" element={<Cast />} />
                  <Route path="reviews" element={<Reviews />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;