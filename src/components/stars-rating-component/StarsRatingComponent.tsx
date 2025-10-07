// src/components/stars-rating-component/StarsRatingComponent.tsx
"use client";

import {type FC, useEffect, useState} from 'react'; // <--- ДОДАЙТЕ useEffect, useState
import StarRatings from 'react-star-ratings';

type StarRatingProps = {
    rating: number
}

const StarsRatingComponent:FC<StarRatingProps> = ({ rating }) => {
    const [isClient, setIsClient] = useState(false); // <--- СТВОРЮЄМО СТАН

    useEffect(() => {
        setIsClient(true); // <--- ВСТАНОВЛЮЄМО isClient В true ПІСЛЯ МОНТУВАННЯ НА КЛІЄНТІ
    }, []);

    const ratingStars = rating / 2;

    return (
        <div>
            {isClient && ( // <--- РЕНДЕРИМО StarRatings ТІЛЬКИ НА КЛІЄНТІ
                <StarRatings
                    rating={ratingStars}
                    starRatedColor="gold"
                    starEmptyColor="grey"
                    numberOfStars={5}
                    name='rating'
                    starDimension="20px"
                    starSpacing="2px"
                />
            )}
        </div>
    );
};

export default StarsRatingComponent;