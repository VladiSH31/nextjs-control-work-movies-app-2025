import axios from 'axios';
import type {IMovie} from "./IMovie.ts";
import type {IPaginatedResponse} from "./IPaginatedResponse.ts";
import type {IGenreMovies} from "./IGenreMovies.ts";
import type {IMovieDetails} from "./IMovieDetails/IMovieDetails.ts";
import type {ITvShow} from "./ITvShow.ts";
import type {ITvShowDetails} from "./ITvShowDetails/ITvShowDetails.ts";
import type {IMultiSearchResult} from "./IMultiSearchResult.ts";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`
    },
});

// Movies Service

export const moviesService = {
    getMovies: async (page: number, genreId?: number | null): Promise<IPaginatedResponse<IMovie>> => {
        const params: { with_genres?: number, page: number } = {page}

        if (genreId) {
            params.with_genres = genreId;
        }
        const {data} = await axiosInstance.get<IPaginatedResponse<IMovie>>('/discover/movie', {params});
        return data
    },
    getById: async (id: string): Promise<IMovieDetails> => {
        const movie = await axiosInstance.get<IMovieDetails>('/movie/' + id);
        return movie.data
    },
    getTrending:async ():Promise<IPaginatedResponse<IMovie>> => {
        const {data} =await axiosInstance.get<IPaginatedResponse<IMovie>>('/trending/movie/week');
        return data;
    },
    getPopular:async ():Promise<IPaginatedResponse<IMovie>> => {
        const {data} =await axiosInstance.get<IPaginatedResponse<IMovie>>('/movie/popular');
        return data;
    },
    getTopRated:async ():Promise<IPaginatedResponse<IMovie>> => {
        const {data} =await axiosInstance.get<IPaginatedResponse<IMovie>>('/movie/top_rated');
        return data;
    }
}

// TV Shows Service
export const tvShowsService = {
    getTvShows: async (page: number, genreId?: number | null): Promise<IPaginatedResponse<ITvShow>> => {

        const params: { with_genres?: number, page: number } = {page}

        if (genreId) {
            params.with_genres = genreId;
        }
        const {data} = await axiosInstance.get<IPaginatedResponse<ITvShow>>('/discover/tv', {params});
        return data
    },
    getById: async (id: string): Promise<ITvShowDetails> => {
        const tvShow = await axiosInstance.get<ITvShowDetails>('/tv/' + id);
        return tvShow.data
    },
    getTrending:async ():Promise<IPaginatedResponse<ITvShow>> => {
        const {data} =await axiosInstance.get<IPaginatedResponse<ITvShow>>('/trending/tv/week');
        return data;
    },
    getPopular:async ():Promise<IPaginatedResponse<ITvShow>> => {
        const {data} =await axiosInstance.get<IPaginatedResponse<ITvShow>>('/tv/popular');
        return data;
    },
    getTopRated:async ():Promise<IPaginatedResponse<ITvShow>> => {
        const {data} =await axiosInstance.get<IPaginatedResponse<ITvShow>>('/tv/top_rated');
        return data;
    }
}
// Genre Service

export const genreService = {
    getMoviesGenre: async (): Promise<IGenreMovies[]> => {
        const {data} = await axiosInstance.get('/genre/movie/list');
        return data.genres
    },
    getTvShowsGenre: async (): Promise<IGenreMovies[]> => {
        const {data} = await axiosInstance.get('/genre/tv/list');
        return data.genres
    }
}

// Search Service

export const searchService = {
    searchMulti: async (query: string, page: number):Promise<IPaginatedResponse<IMultiSearchResult>> => {
        const {data} = await axiosInstance.get<IPaginatedResponse<IMultiSearchResult>>('/search/multi', {
            params: {
                query,
                page
            }
        })
        return data;
    }
}