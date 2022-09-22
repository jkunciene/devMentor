import express from 'express';

import * as movieService from '../services/movie.service';

const getPageNumber = (req: express.Request): number => (req.query.page ? parseInt(req.query.page as string) || 1:1);

const getMovies = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const page = getPageNumber(req);
  try {
    res.json(await movieService.getMovies(page));
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
