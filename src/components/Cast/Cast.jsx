import css from './Cast.module.css'

import {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast, IMG_URL } from 'Services/tmbdAPI';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(error.message);
        toast.error(`Error fetching movie details: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    movieCast();
  }, [movieId]);

  return (
    <>
      {cast.length !== 0 && (
        <div>
          <h2>Movie Cast</h2>
          <ul className={css.CastList}>
            {cast.map(({character, id, name, profile_path}) => (
              <li key={id} className={css.Actors}>
                <img
                  width="170px"
                  height="250px"
                  src={
                    profile_path
                      ? `${IMG_URL}${profile_path}`
                      : `https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg`
                  }
                  alt={name}
                />
                <p>{name}</p>
                <p>Caracter: {character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {cast.length === 0 && <div>We don't have any cast for this movie.</div>}
      {error && <p>Whoops, something went wrong: {error}</p>}
      {isLoading && <Loader />}
    </>
  );
};

export default Cast;