import React from 'react';
import {moviesService} from "@/services/global.api.service";
import Link from "next/link";
import StarsRatingComponent from "@/components/stars-rating-component/StarsRatingComponent";
import './SingleMoviePage.css';

type Props = {
    params: Promise<{ id: string }>
}

export default async function SingleMoviePage({params}: Props) {

    const {id} = await params;
    const movie= await moviesService.getById(id);

    const imageUrl = process.env.NEXT_PUBLIC_API_IMAGE_BASE_URL + movie.poster_path

    return (
        <div className="details-container">
            {/* Ліва колонка з постером */}
            <div className="details-poster-wrapper">
                <img src={imageUrl} alt={`Poster for ${movie.title}`} className="details-poster-img" />
            </div>

            {/* Права колонка з інформацією */}
            <div className="details-info-wrapper">
                <h1 className="details-title">{movie.title}</h1>

                {/* Теглайн, якщо він є */}
                {movie.tagline && <p className="details-tagline">"{movie.tagline}"</p>}

                <h3 className="details-section-title">Overview</h3>
                <p>{movie.overview}</p>

                <h3 className="details-section-title">Genres</h3>
                <div className="genres-list">
                    {movie.genres.map(genre => (
                        <Link
                            key={genre.id}
                            href={{ pathname: '/movies', query: { genre: genre.id.toString() } }}
                            className="genre-item"
                        >
                            {genre.name}
                        </Link>
                    ))}
                </div>

                <h3 className="details-section-title">Rating</h3>
                <div className="flex items-center gap-4">
                    <StarsRatingComponent rating={movie.vote_average} />
                    <p className="m-0">{movie.vote_average.toFixed(1)} / 10 ({movie.vote_count.toLocaleString()} votes)</p>
                </div>

                <h3 className="details-section-title">Additional Details</h3>
                <ul className="details-list">
                    <li><strong>Release Date:</strong> {movie.release_date}</li>
                    <li><strong>Runtime:</strong> {movie.runtime} minutes</li>
                    <li><strong>Budget:</strong> ${movie.budget.toLocaleString()}</li>
                    <li><strong>Revenue:</strong> ${movie.revenue.toLocaleString()}</li>
                    <li><strong>Status:</strong> {movie.status}</li>
                </ul>

                <div className="details-links">
                    {movie.homepage && <a href={movie.homepage} target="_blank" rel="noopener noreferrer">Website</a>}
                    {movie.imdb_id && <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noopener noreferrer">IMDb Page</a>}
                </div>
            </div>
        </div>
    );
};
