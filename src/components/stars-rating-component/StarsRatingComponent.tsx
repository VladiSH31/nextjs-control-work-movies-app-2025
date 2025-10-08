"use client";

import {type FC, useEffect, useState} from 'react';
import StarRatings from 'react-star-ratings';

type StarRatingProps = {
    rating: number
}

const StarsRatingComponent:FC<StarRatingProps> = ({ rating }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const ratingStars = rating / 2;

    return (
        <div>
            {isClient && (
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