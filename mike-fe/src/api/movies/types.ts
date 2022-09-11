export type MoviesResponse = {
  page: number;
  totalPages: number;
  movies: Movie[];
};
export type Movie = {
  id?: string;
  movieId: number;
  backdropPath: string;
  posterPath: string;
  releaseDate: string;
  title: string;
  voteAverage: number;
};
