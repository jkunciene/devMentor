import express from 'express';

import * as movieService from '../services/genre.sevrice';

const getGenres = async (_req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
    try {
        const genres = await movieService.getGenres();
        res.json(genres);
    } catch (error) {
        next(error);
    }
}

export { getGenres }