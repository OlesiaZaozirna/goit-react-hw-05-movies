import HomePage from 'Pages/Home_Page/Home';
import css from './App.module.css'
import Header from 'components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from 'Pages/Home_Page/Home';
import Movies from 'Pages/Movies_Page/Movies';
import MovieDetails from 'Pages/MovieDetails_Page/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import NotFound from 'Pages/NotFound_Page/NotFound';

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
