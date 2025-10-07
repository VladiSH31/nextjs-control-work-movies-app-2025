import './MovieCardComponent.css'
import {IMovie} from "@/models/IMovie";
import type {FC} from "react";
import Link from "next/link";
import StarsRatingComponent from "@/components/stars-rating-component/StarsRatingComponent";


type MoviePropsType = {
    movie: IMovie
}

const MovieCardComponent: FC<MoviePropsType> = ({movie}) => {


    let imageUrl;

    if (movie.poster_path) {
        imageUrl = process.env.NEXT_PUBLIC_API_IMAGE_BASE_URL + movie.poster_path;
    } else {
        imageUrl = 'https://placehold.co/500x750/2d3748/e2e8f0?text=No+Image'
    }


    return (
        <Link href={{pathname: `/movies/${movie.id}`}} className="movie-card-link">
            <div className="movie-card">
                <div className="movie-title-container">
                    <h2 className="movie-title">{movie.title}</h2>
                    <StarsRatingComponent rating={movie.vote_average} />
                </div>

                <img src={imageUrl} alt={movie.title}/>
            </div>
        </Link>

    );
};

export default MovieCardComponent;