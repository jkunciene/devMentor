import express from 'express';
import { validate } from '../commons/index';
import { titleRules } from '../validators/title.validator';

import { getMovie, getMovies } from '../controllers/movie.controller';

const router = express.Router();

router.route('/').get(validate(titleRules) ,getMovies);
router.route('/:movieId').get(getMovie);

export default router;
