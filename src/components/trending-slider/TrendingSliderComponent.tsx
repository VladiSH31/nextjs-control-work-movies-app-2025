'use client'
import {type FC} from 'react';
import {IMovie} from "@/models/IMovie";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import './TrendingSliderComponent.css';
import Link from "next/link";

type TrendingMoviesProps = {
    trendingMovies: IMovie[];
}


const TrendingSliderComponent: FC<TrendingMoviesProps> = ({trendingMovies}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{clickable: true}}
            loop={true}
            className="mySwiper">
            {
                trendingMovies.map(movie =>
                    <SwiperSlide key={movie.id} className={"slide"}>
                        <Link href={`/movies/${movie.id}`} className={"slideLink"}>
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                alt={`${movie.title}`}
                                className={"slideImage"}
                            />

                            <div className={"slideContent"}>
                                <h2 className={"slideTitle"}>{movie.title}</h2>
                            </div>
                        </Link>
                    </SwiperSlide>)
            }
        </Swiper>
    );
};

export default TrendingSliderComponent;