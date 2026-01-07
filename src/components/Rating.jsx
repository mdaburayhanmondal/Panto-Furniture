import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';

const Rating = ({ rating }) => {
  const totalStars = 5;

  return (
    <span className="flex gap-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const number = index + 0.5;
        return (
          <span key={index} className="cursor-pointer">
            {rating >= index + 1 ? (
              <FaStar className="text-yellow-500" />
            ) : rating >= number ? (
              <FaStarHalfAlt className="text-yellow-500" />
            ) : (
              <CiStar className="text-gray-400" />
            )}
          </span>
        );
      })}
    </span>
  );
};

export default Rating;
