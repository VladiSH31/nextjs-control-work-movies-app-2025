'use client'
import {type FC} from 'react';
import {IMovie} from "@/models/IMovie";
import {Swiper, SwiperSlide} from "swiper/react";
import MovieCardComponent from "@/components/movie-card-component/MovieCardComponent";
import {Navigation} from "swiper/modules";
import './MoviesCarouselComponent.css';


type MovieCarouselProps = {
    title: string,
    movies: IMovie[]

}

const MoviesCarouselComponent:FC<MovieCarouselProps> = ({title, movies}) => {
    return (
        <div>
            <h2 className={"carouselTitle"}>{title}</h2>
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={5}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    480: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 30 },
                    1024: { slidesPerView: 5, spaceBetween: 30 },
                }}
            >
                {
                    movies.map(movie => (
                        <SwiperSlide key={movie.id} className={"slide"}>
                            <MovieCardComponent movie={movie}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default MoviesCarouselComponent;