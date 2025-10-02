import './MoviesComponent.css'
import {FC} from "react";
import MovieCardComponent from "@/components/movie-card-component/MovieCardComponent";
import {IMovie} from "@/models/IMovie";

type Props = {
    movies: IMovie[],
    pageTitle: string
}

const MoviesComponent:FC<Props> = ({movies, pageTitle}) => {

    return (
        <div>
            <h2 className="movies-page-title">{pageTitle}</h2>
            <div className="movies-grid">
                {
                    movies.map((movie) => <MovieCardComponent key={movie.id} movie={movie}/>)
                }
            </div>
        </div>

    );
};

export default MoviesComponent;