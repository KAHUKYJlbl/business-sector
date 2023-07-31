import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { MainPage } from '../../../../pages/main-page';

import { AppRoute } from '../lib/routes';
import { NotFound } from '../../../../pages/not-found';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path={AppRoute.Main}
        element={
          <MainPage />
        }
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </>
  )
);
