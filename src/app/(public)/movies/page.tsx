import './MoviesPage.css'
import MoviesComponent from "@/components/movies-component/MoviesComponent";
import PaginationComponent from "@/components/pagination-component/PaginationComponent";
import {FC} from "react";
import {genreService, moviesService} from "@/services/global.api.service";
import {IGenreMovies} from "@/models/IGenreMovies";

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

const MoviesPage: FC<Props> = async ({searchParams}) => {

    const page = Number(searchParams.page || '1');
    const moviesData = await moviesService.getMovies(page);

    const selectedGenreId = Number(searchParams.genre || '')
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

export default MoviesPage;