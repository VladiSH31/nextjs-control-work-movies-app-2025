import './MoviesPage.css'
import MoviesComponent from "@/components/movies-component/MoviesComponent";
import PaginationComponent from "@/components/pagination-component/PaginationComponent";
import {genreService, moviesService} from "@/services/global.api.service";
import {IGenreMovies} from "@/models/IGenreMovies";

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function MoviesPage({searchParams}: Props) {
    const resolvedSearchParams = await searchParams;
    const page = Number(resolvedSearchParams.page || '1');
    const selectedGenreId = Number(resolvedSearchParams.genre || '')

    const moviesData = await moviesService.getMovies(page, selectedGenreId || null);
    const moviesGenre: IGenreMovies[] = await genreService.getMoviesGenre();

    const selectedGenre = moviesGenre.find(genre => genre.id === selectedGenreId)
    const pageTitle = selectedGenre ? `Showing results for: ${selectedGenre.name}`
        : "All Movies";

    return (
        <div>
            <MoviesComponent movies={moviesData.results} pageTitle={pageTitle}/>
            <PaginationComponent totalPages={moviesData.total_pages} currentPage={page}/>
        </div>
    );
};