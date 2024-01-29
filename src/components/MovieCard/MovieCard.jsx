import css from './MovieCard.module.css'
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMG_URL } from 'Services/tmbdAPI';


const MovieCard = ({ poster_path, title, id }) => {
  const location = useLocation();
   return (
    <ul className={css.MovieList}>
      <li className={css.MovieCard}>
        <Link state={{ from: location }} to={`/movies/${id}`} className={css.MovieCardLink}>
          <img
            src={poster_path ? `${IMG_URL}${poster_path}` : `https://img.freepik.com/free-photo/collage-about-movie-time-with-people-at-cinema_23-2149946314.jpg?w=360&t=st=1706553935~exp=1706554535~hmac=7f6c48ab1c4b545dfe50e969eefe23c93a268015fc012cfff694cd7d39ef974f`}
            alt={title}
            className={css.MovieCardImg}
          />
          <div className={css.MovieCardInfo}>
            <h3 className={css.MovieCardTitle}>{title}</h3>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default MovieCard