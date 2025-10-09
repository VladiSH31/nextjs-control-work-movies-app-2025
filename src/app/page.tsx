import './HomePage.css'
import TrendingSliderComponent from "@/components/trending-slider/TrendingSliderComponent";
import MoviesCarouselComponent from "@/components/movies-carousel-component/MoviesCarouselComponent";
import TvShowsCarouselComponent from "@/components/tv-shows-carousel-component/TvShowsCarouselComponent";
// import styles from './HomePage.css';
import {moviesService, tvShowsService} from "@/services/global.api.service";

const HomePage = async () => {
    const trendingMovie = await moviesService.getTrending();
    const popularMovie = await moviesService.getPopular();
    const topRatedMovie = await moviesService.getTopRated();

    const trendingTvShows = await tvShowsService.getTrending();
    const popularTvShows = await tvShowsService.getPopular();
    const topRatedTvShows = await tvShowsService.getTopRated()
    return (
        <div className={"pageContainer"}>
            <TrendingSliderComponent trendingMovies={trendingMovie.results}/>
            <div className={"carouselsWrapper"}>
                <MoviesCarouselComponent title="Popular Movies" movies={popularMovie.results}/>
                <MoviesCarouselComponent title="Top Rated Movies" movies={topRatedMovie.results}/>
                <TvShowsCarouselComponent title="Trending Tv Shows" tvShows={trendingTvShows.results}/>
                <TvShowsCarouselComponent title="Popular Tv Shows" tvShows={popularTvShows.results}/>
                <TvShowsCarouselComponent title="Top Rated Tv Shows" tvShows={topRatedTvShows.results}/>
            </div>
        </div>
    );
};

export default HomePage;