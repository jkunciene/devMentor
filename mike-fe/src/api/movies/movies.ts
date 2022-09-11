import { MoviesResponse } from './types';
import { get } from '../shared/methods';

export async function getMovies(): Promise<MoviesResponse> {
  const { data } = await get<MoviesResponse>('movies?page=1');
  return data;
}
