import { Routes, Route } from 'react-router-dom';
import MoviesListContainer from 'containers/MoviesListContainer';

import { RouteKey } from './routes';

const MainRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<MoviesListContainer />} path={RouteKey.Movies} />
      <Route element={<MoviesListContainer />} path={RouteKey.Index} />
    </Routes>
  );
};

export default MainRouter;
