import { Movie } from 'api/movies/types';
import { StarIcon } from 'components/Icons';

import styles from './MovieCard.module.css';

const MovieCard = ({ posterPath, releaseDate, title, voteAverage }: Movie): JSX.Element => {
  return (
    <div className={styles.movieCardWrapper}>
      <img alt={`${title}-movie-poster`} className={styles.movieImage} loading="lazy" src={posterPath} />
      <div className={styles.movieInfoWrapper}>
        <div>
          <p className={styles.movieInfoParagraph}>
            <StarIcon className={styles.ratingIcon} />
            <span className={styles.voteAverage}>{voteAverage}</span>
          </p>
          <p>
            <span className={styles.filmTitle}>{title}</span>
          </p>
        </div>
        <p className={styles.voteAverage}>
          <span>{releaseDate}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
