import './SearchPage.css'
import {FC} from "react";
import MovieCardComponent from "@/components/movie-card-component/MovieCardComponent";
import PaginationComponent from "@/components/pagination-component/PaginationComponent";
import {IMovie} from "@/models/IMovie";
import TvShowsCardComponent from "@/components/tv-shows-card-component/TvShowsCardComponent";
import {ITvShow} from "@/models/ITvShow";
import {searchService} from "@/services/global.api.service";

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const SearchPage:FC<Props> = async ({searchParams}) => {

    const resolvedSearchParams = await searchParams;
    const query = resolvedSearchParams.query as string || '';
    const page = Number(resolvedSearchParams.page || '1');

    const searchMultiResult = await searchService.searchMulti(query, page)

    if (!query) {
        return <div className="text-center text-white text-2xl mt-10">
            Please enter something to search for.
        </div>
    }
    let result;
    if (searchMultiResult.total_results > 0) {
        result = (
            <div className="search-results-grid">
                {
                    searchMultiResult.results.map(item => {
                        if (item.media_type === 'movie') {
                            return <MovieCardComponent key={item.id} movie={item as IMovie} />
                        }
                        if (item.media_type === 'tv') {
                            return <TvShowsCardComponent key={item.id} tvShow={item as ITvShow} />
                        }
                    })
                }
            </div>
        )

    } else {
        result = (
            <div className="no-results-message">
                No movies found for "{query}". Please try another search term.
            </div>
        )

    }

    return <div className="search-page-container">
        <h1 className="search-page-title">
            Search results for: <span className="search-query-highlight">"{query}"</span>
        </h1>

        {result}
        <PaginationComponent totalPages={searchMultiResult.total_pages} currentPage={page}/>
    </div>
};

export default SearchPage;