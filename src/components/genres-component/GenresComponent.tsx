import './GenresComponent.css'
import GenreCardComponent from "@/components/genre-card-component/GenreCardComponent";
import {genreService} from "@/services/global.api.service";

const GenresComponent = async () => {

   const moviesGenre = await genreService.getMoviesGenre();
   const tvShowsGenre = await genreService.getTvShowsGenre();

    return (

        <div>
            <div className="genres-section">
                <h3 className="genres-title">Movies Genres</h3>
                <div className="genres-container">
                    {
                        moviesGenre.map(genre => <GenreCardComponent key={genre.id} genre={genre} type={'movie'}/>)
                    }
                </div>
            </div>

            <div className="genres-section">
                <h3 className="genres-title">TV Shows Genres</h3>
                <div className="genres-container">
                    {
                        tvShowsGenre.map(genre => <GenreCardComponent key={genre.id} genre={genre} type={'tvshows'}/>)
                    }
                </div>
            </div>
        </div>

    );
};

export default GenresComponent;