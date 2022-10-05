import axios from "axios";

import { convertToMovie, convertToMovieDetails } from "../converters/movie.converter";

interface MovieCache {
    [page: number]: Movie[];
    totalPages?: number;
}

interface MovieDetailsCache {
    [movieId: number]: MovieDetails;
}

const movies: MovieCache = {};
const movieDetails: MovieDetailsCache = {};

const getMovies = async (page: number): Promise<Movies> => {
    if (!movies[page]) {
        const { data } = await axios.get<TmdbMovies>(
            `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&vote_count.gte=1000&api_key=${process.env.API_KEY}`,
        );

        movies[page] = [];
        movies.totalPages = data.total_pages;
        data.results.map(convertToMovie).forEach((movie) => movies[page].push(movie));
    }
    return {
        page,
        movies: movies[page],
        totalPages: movies.totalPages || 0,
    };
};

const getMovie = async (movieId: number): Promise<MovieDetails> => {
    if (!movieDetails[movieId]) {
        const { data } = await axios.get<TmdbMovieDetails>(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
        );

        movieDetails[movieId] = convertToMovieDetails(data);
    }

    return movieDetails[movieId];

};

const searchMoviesByTitle = async (page: number, title: string): Promise<Movies> => {
    const { data } = await axios.get<TmdbMovies>(
        `https://api.themoviedb.org/3/search/movie?query=${title}&page=${page}&api_key=${process.env.API_KEY}`,
    );

    return {
        page,
        movies: data.results.map(convertToMovie),
        totalPages: data.total_pages,
    };
};

const searchMoviesByGenre = async (page: number, genres: number[]) : Promise<Movies> => {
    const { data } = await axios.get<TmdbMovies>(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genres}&page=${page}&vote_count.gte=1000&api_key=${process.env.API_KEY}`,
    );

    return {
        page,
        movies: data.results.map(convertToMovie),
        totalPages: data.total_pages,
    }
}
export { getMovies, getMovie, searchMoviesByTitle, searchMoviesByGenre }
