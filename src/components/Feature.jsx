import React from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyAdSpaces } from '../assets/AdSpaces';

const Feature = () => {
  const navigate = useNavigate();
  
  // Get first 4 ad spaces as featured (you can customize this logic)
  const featuredSpaces = dummyAdSpaces.slice(0, 4).map(space => ({
    ...space,
    badge: space.offerPrice ? 'Featured' : space.rating > 4.7 ? 'Premium' : space.rating > 4.5 ? 'Popular' : 'New'
  }));

  const handleViewAll = () => {
    navigate('/ad-spaces');
  };

  const handleCardClick = (space) => {
    navigate(`/ad-space/${space._id}`);
  };

  const getBadgeColor = (badge) => {
    return 'bg-black text-white';
  };

  return (
    <section className="bg-white py-16 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Ad Spaces
          </h2>
          <button
            onClick={handleViewAll}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-lg transition-colors duration-200"
          >
            View All
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Featured Spaces Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSpaces.map((space) => (
            <div
              key={space._id}
              onClick={() => handleCardClick(space)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={space.image[0]}
                  alt={space.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Badge - Now black background with white text */}
                <div className={`absolute top-3 left-3 ${getBadgeColor(space.badge)} text-xs px-2 py-1 rounded-full font-medium`}>
                  {space.badge}
                </div>

                {/* Discount Badge - Also black background with white text */}
                {space.offerPrice && (
                  <div className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded-full font-medium">
                    {Math.round(((space.price - space.offerPrice) / space.price) * 100)}% OFF
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-200">
                  {space.name}
                </h3>
                
                {/* Ad Type & Location */}
                <p className="text-gray-500 text-sm mb-1 font-medium">
                  {space.type}
                </p>
                <p className="text-gray-400 text-xs mb-4">
                  📍 {space.place}
                </p>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      ₹{space.offerPrice || space.price}
                    </span>
                    {space.offerPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ₹{space.price}
                      </span>
                    )}
                    <span className="text-sm font-normal text-gray-600 ml-1 block">
                      per day
                    </span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-sm text-gray-600 ml-1">{space.rating}</span>
                  <span className="text-xs text-gray-400 ml-1">({space.reviews} reviews)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
