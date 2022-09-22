import { Routes, Route } from 'react-router-dom';
import MoviesListContainer from 'containers/MoviesListContainer';
import MoviesInfoContainer from 'containers/MoviesInfoContainer';

import { RouteKey } from './routes';

const MainRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<MoviesListContainer />} path={RouteKey.Movies} />
      <Route element={<MoviesInfoContainer />} path={RouteKey.Movie} />
      <Route element={<MoviesListContainer />} path={RouteKey.Index} />
    </Routes>
  );
};

export default MainRouter;
