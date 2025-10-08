import './TvShowsPage.css'

import PaginationComponent from "@/components/pagination-component/PaginationComponent";
import TvShowsComponent from "@/components/tv-shows-component/TvShowsComponent";
import {genreService, tvShowsService} from "@/services/global.api.service";
import {IGenreTvShows} from "@/models/IGenreTvShows";

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const TvShowsPage = async ({searchParams}: Props) => {

    const resolvedSearchParams = await searchParams;
    const page = Number(resolvedSearchParams.page || '1');
    const tvShowsData = await tvShowsService.getTvShows(page)

    const selectedGenreId = Number(resolvedSearchParams.genre || '')
    const tvShowsGenre: IGenreTvShows[] = await genreService.getTvShowsGenre()

    const selectedGenre = tvShowsGenre.find(genre => genre.id === selectedGenreId)
    const pageTitle = selectedGenre ? `Showing results for: ${selectedGenre.name}`
        : "All TV Shows";

    return (
        <div>
            <TvShowsComponent tvShows={tvShowsData.results} pageTitle={pageTitle}/>
            <PaginationComponent totalPages={tvShowsData.total_pages} currentPage={page}/>
        </div>
    );
};

export default TvShowsPage;