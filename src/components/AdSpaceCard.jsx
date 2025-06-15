// src/components/AdSpaceCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdSpaceCard = ({ space }) => {
  const navigate = useNavigate();
  if (!space) return null;

  const {
    _id,
    name,
    image,
    location,
    place,
    type,
    rating,
    reviews
  } = space;

  return (
    <div
      onClick={() => navigate(`/ad-space/${_id}`)}
      className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-200 
                 cursor-pointer flex flex-col h-full overflow-hidden"
    >
      {/* Image */}
      <div className="w-full h-40 bg-gray-100 overflow-hidden">
        <img
          src={image?.[0]}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content - no pricing */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>

        <p className="text-sm text-gray-600 mb-2">
          {location?.landmark}
          {location?.area ? `, ${location.area}` : ''}
        </p>

        <p className="text-xs text-blue-600 font-medium mb-3">{type}</p>

        {/* Rating only */}
        <div className="flex items-center text-xs text-gray-500 mt-auto">
          <span className="text-yellow-500">★</span>
          <span className="ml-1">{rating} ({reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default AdSpaceCard;
