import axios from "axios";

let genres: Genre[] = [];

const getGenres = async (): Promise<Genre[]> => {
    if (genres.length === 0) {
        const { data } = await axios.get<Genres>(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`,
        );

        genres = data.genres;
    }
    return genres;
}

export { getGenres }
