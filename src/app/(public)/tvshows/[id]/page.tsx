import './SingleTvShowPage.css'
import Link from 'next/link';
import StarsRatingComponent from "@/components/stars-rating-component/StarsRatingComponent";
import {tvShowsService} from "@/services/global.api.service";
import { Metadata } from 'next';

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const {id} = await params;
    const tvShow = await tvShowsService.getById(id);

    return {
        title: tvShow?.name ? `${tvShow.name} | Watch Me` : 'TV Show Details | Watch Me',
        description: tvShow?.overview || 'Detailed information about the TV show.',
        keywords: tvShow?.genres?.map(g => g.name).concat(["TV show", "series", "details", "Watch Me"]) || ["TV show", "series", "details", "Watch Me"],
    };
}

export default async function SingleTvShowPage ({params}: Props) {

    const {id} = await params;
    const tvShowDetails = await tvShowsService.getById(id)

    const imageUrl = process.env.NEXT_PUBLIC_API_IMAGE_BASE_URL + tvShowDetails.poster_path;
    return (
        <div className="details-container">
            {/* Ліва колонка з постером */}
            <div className="details-poster-wrapper">
                <img src={imageUrl} alt={`Poster for ${tvShowDetails.name}`} className="details-poster-img" />
            </div>

            {/* Права колонка з інформацією */}
            <div className="details-info-wrapper">
                <h1 className="details-title">{tvShowDetails.name}</h1>

                {/* Теглайн, якщо він є */}
                {tvShowDetails.tagline && <p className="details-tagline">"{tvShowDetails.tagline}"</p>}

                <h3 className="details-section-title">Overview</h3>
                <p>{tvShowDetails.overview}</p>

                <h3 className="details-section-title">Genres</h3>
                <div className="genres-list">
                    {tvShowDetails.genres.map(genre => (
                        <Link
                            key={genre.id}
                            href={{ pathname: "/tvshows", query: { genre: genre.id.toString() } }}
                            className="genre-item"
                        >
                            {genre.name}
                        </Link>
                    ))}
                </div>

                <h3 className="details-section-title">Rating</h3>
                <div className="flex items-center gap-4">
                    <StarsRatingComponent rating={tvShowDetails.vote_average} />
                    <p className="m-0">{tvShowDetails.vote_average.toFixed(1)} / 10 ({tvShowDetails.vote_count.toLocaleString()} votes)</p>
                </div>

                <h3 className="details-section-title">Additional Details</h3>
                <ul className="details-list">
                    <li><strong>First Air Date:</strong> {tvShowDetails.first_air_date}</li>
                    {tvShowDetails.episode_run_time && tvShowDetails.episode_run_time[0] && (
                        <li><strong>Episode Runtime:</strong> {tvShowDetails.episode_run_time[0]} minutes</li>
                    )}
                    <li><strong>Seasons:</strong> {tvShowDetails.number_of_seasons}</li>
                    <li><strong>Episodes:</strong> {tvShowDetails.number_of_episodes}</li>
                    <li><strong>Status:</strong> {tvShowDetails.status}</li>
                </ul>

                <div className="details-links">
                    {tvShowDetails.homepage && <a href={tvShowDetails.homepage} target="_blank" rel="noopener noreferrer" className="details-link-item">Website</a>}
                </div>
            </div>
        </div>
    );
};