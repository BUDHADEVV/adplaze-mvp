import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dummyAdSpaces } from '../assets/AdSpaces';

const AdSpacePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const adSpace = dummyAdSpaces.find(space => space._id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!adSpace) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold mb-2">Ad Space Not Found</h2>
          <button
            className="px-6 py-3 bg-black text-white rounded-lg font-semibold text-base hover:bg-gray-900 transition"
            onClick={() => navigate('/ad-spaces')}
          >
            Back to Listings
          </button>
        </div>
      </div>
    );
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? adSpace.image.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === adSpace.image.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-8" style={{height: 'min-content'}}>
        {/* Image Carousel */}
        <div className="w-full md:w-[480px] flex flex-col items-center">
          <div className="w-full h-80 bg-gray-100 rounded-xl overflow-hidden relative">
            <img
              src={adSpace.image[currentImageIndex]}
              alt={`${adSpace.name} - ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            {adSpace.image.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition"
                  aria-label="Previous Image"
                >
                  &#8592;
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition"
                  aria-label="Next Image"
                >
                  &#8594;
                </button>
              </>
            )}
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Image {currentImageIndex + 1} of {adSpace.image.length}
          </div>
        </div>

        {/* Main Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">{adSpace.type}</span>
              <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">{adSpace.place}</span>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{adSpace.name}</h1>
            <div className="flex items-center text-base text-gray-500 mb-2">
              <svg className="w-5 h-5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              {adSpace.location?.landmark}
            </div>
            <div className="text-lg text-gray-600 mb-4">{adSpace.description}</div>
            <div className="flex items-center gap-6 mb-6">
              <span className="text-2xl font-bold text-green-600">{'\u20B9'}{adSpace.offerPrice || adSpace.price}</span>
              {adSpace.offerPrice && (
                <span className="text-lg text-gray-500 line-through">{'\u20B9'}{adSpace.price}</span>
              )}
              <span className="text-gray-500 text-base">/day</span>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Features</h3>
              <ul className="flex flex-wrap gap-3">
                {adSpace.features.map((feature, idx) => (
                  <li key={idx} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm">{feature}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <div className="text-gray-700 text-base">
                <strong>Area:</strong> {adSpace.location?.area}<br />
                <strong>Landmark:</strong> {adSpace.location?.landmark}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reviews</h3>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-yellow-400 text-xl">★</span>
                <span className="font-bold text-lg">{adSpace.rating}</span>
                <span className="text-gray-500">({adSpace.reviews} reviews)</span>
              </div>
              <div className="text-gray-500 text-sm">User reviews coming soon.</div>
            </div>
          </div>
          {/* Only Book Now Button */}
          <div className="mt-8">
                      <button
                          className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold text-base hover:bg-green-700 transition w-full md:w-auto"
                          onClick={() => {
                              const message = `Hello, I am interested in booking the ad space: ${adSpace.name} located at ${adSpace.place} priced at ₹${adSpace.offerPrice || adSpace.price}. Please provide more details.`;
                              const encodedMessage = encodeURIComponent(message);
                              const whatsappUrl = `https://wa.me/918592983978?text=${encodedMessage}`;
                              window.open(whatsappUrl, '_blank');
                          }}
                      >
                          Book Now
                      </button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default AdSpacePage;
