import './GenreCardComponent.css'
import type {FC} from "react";
import Link from "next/link";
import {IGenre} from "@/models/IGenre";

type GenrePropsType = {
    genre: IGenre,
    type: 'movie' | 'tvshows'
}

const GenreCardComponent: FC<GenrePropsType> = ({genre, type}) => {
    let href;

    if (type === 'movie') {
        href = { pathname: "/movies", query: { genre: genre.id.toString() } };
    } else {
        href = { pathname: "/tvshows", query: { genre: genre.id.toString() } };
    }


    return (
        <div>
            <Link href={href} className="genre-card">
                <div>{genre.name}</div>

            </Link>
        </div>
    );
};

export default GenreCardComponent;