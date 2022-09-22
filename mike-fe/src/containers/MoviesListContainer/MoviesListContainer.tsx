import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'api/movies';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';

import MovieCard from './MovieCard';
import styles from './MoviesListContainer.module.css';

const MoviesListContainer = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePage = parseInt(searchParams.get('page') || '1');

  const { data, isLoading, isFetching } = useQuery(['movies', activePage], () => getMovies(activePage));

  const totalPages = data?.totalPages || 0;

  const handleNextClick = () => {
    const nextPage = activePage === totalPages ? activePage : activePage + 1;
    setSearchParams({ page: `${nextPage}` });
  };

  const handlePrevClick = () => {
    const nextPage = activePage === 1 ? activePage : activePage - 1;
    setSearchParams({ page: `${nextPage}` });
  };

  const handlePageClick = (page: number) => {
    setSearchParams({ page: `${page}` });
  };

  if (isLoading || isFetching) {
    return <Loader />;
  }

  const renderMovies = () => {
    return data?.movies.map((movie) => <MovieCard key={movie.movieId} {...movie} />);
  };

  return (
    <>
      <div className={styles.moviesListContainer}>{renderMovies()}</div>
      <Pagination currentPage={activePage} totalPages={totalPages} onNextClick={handleNextClick} onPageClick={handlePageClick} onPrevClick={handlePrevClick} />
    </>
  );
};

export default MoviesListContainer;
