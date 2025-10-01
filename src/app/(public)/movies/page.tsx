import './MoviesPage.css'
import MoviesComponent from "@/components/movies-component/MoviesComponent";
import PaginationComponent from "@/components/pagination-component/PaginationComponent";
import {FC} from "react";
import {moviesService} from "@/services/global.api.service";

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

const MoviesPage: FC<Props> = async ({searchParams}) => {

    const page = Number(searchParams.page || '1');
    const moviesData = await moviesService.getMovies(page);

    return (
        <div>
            <MoviesComponent movies={moviesData.results} />
            <PaginationComponent totalPages={moviesData.total_pages} currentPage={page}/>
        </div>
    );
};

export default MoviesPage;