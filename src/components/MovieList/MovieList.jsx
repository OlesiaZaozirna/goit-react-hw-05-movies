import css from './MovieList.module.css'
import MovieCard from 'components/MovieCard/MovieCard';

const MovieList = ({ movies }) => {
  return (
    <ul className={css.MovieList}>
      {movies.map(({ id, poster_path, title }) => (
        <MovieCard
          key={id}
          poster_path={poster_path}
          title={title}
          id={id}
        ></MovieCard>
      ))}
    </ul>
  );
};
export default MovieList