import express from 'express';

import * as movieService from '../services/movie.service';

const getMovies = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    res.json(await movieService.getMovies());
  } catch (err) {
    next(err);
  }
};

const getMovie = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    res.json(await movieService.getMovie(parseInt(req.params.movieId)));
  } catch (err) {
    next(err);
  }
}

export { getMovies, getMovie }
