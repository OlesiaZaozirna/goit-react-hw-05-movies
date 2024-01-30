import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import NotFound from 'Pages/NotFound_Page/NotFound';

const Home = lazy(() => import('Pages/Home_Page/Home'));
const Movies = lazy(()=> import('Pages/Movies_Page/Movies'));
const MovieDetails = lazy(()=> import ('Pages/MovieDetails_Page/MovieDetails'));
const Cast = lazy(()=> import('components/Cast/Cast'));
const Reviews = lazy(()=> import ('components/Reviews/Reviews'));

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<SharedLayout />}> 
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
         <Route path="*" element={<NotFound />} />
      </Route>
      </Routes>
    </div>
  );
};
 