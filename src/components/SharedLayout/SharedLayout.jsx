import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
import { Toast } from '../Toast/Toast';

export const SharedLayout = () => {
  return (
    <>
      <Toast />
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};