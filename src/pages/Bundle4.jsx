// src/pages/Bundle4Page.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyAdSpaces } from '../assets/AdSpaces';
import AdSpaceCard from '../components/AdSpaceCard';

const Bundle4Page = () => {
  const navigate = useNavigate();

  // Filter all 18 digital screens in Kozhikode
  const kozhikodeScreens = dummyAdSpaces.filter(
    space => space.type === 'Digital Screens' && space.place === 'Kozhikode'
  );

  // WhatsApp booking function
  const handleBookingClick = () => {
    const message = "Hi! I'm interested in booking Bundle 4 - City-Wide Package (₹49,999) with all 18 digital screens across Kozhikode. Please provide more details.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918592983978?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Top booking button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleBookingClick}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
        >
          Book This Bundle
        </button>
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline flex items-center text-sm"
      >
        ← Back to Bundles
      </button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          City-Wide Bundle (Bundle 3)
        </h1>
        
        {/* Bundle Description */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Bundle Description</h2>
          <p className="text-gray-600 text-lg mb-4">
          Complete coverage with <span className="font-semibold">all 18 premium digital screens</span> across Kozhikode for one week.
        </p>
          
                  <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                      <span className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {kozhikodeScreens.length} Digital Screens
                      </span>
                      <span className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          ≈250K visits / week
                      </span>
                      <span className="flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                          ₹49,999 total package
                      </span>
                  </div>
        </div>

        
        
        {/* Bundle stats */}
        
      </div>

      {/* Screens info */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Your ad will appear on all {kozhikodeScreens.length} digital screens shown below:
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Click any screen below to view location details and specifications.
        </p>
      </div>

      {/* Screens grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {kozhikodeScreens.map(space => (
          <AdSpaceCard key={space._id} space={space} />
        ))}
      </div>

      {/* Package info */}
      <div className="mt-12 bg-green-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          City-Wide Bundle (Bundle 4) Includes:
        </h3>
        <ul className="text-green-700 space-y-1 mb-4">
          <li>• All 18 digital screens across Kozhikode simultaneously</li>
          <li>• 7-day campaign duration on every screen</li>
          <li>• Content scheduling & synchronized rotation</li>
          <li>• Real-time performance analytics</li>
          <li>• Premium time slot allocation</li>
          <li>• Dedicated account manager</li>
          <li>• City-wide brand dominance</li>
        </ul>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">₹49,999</span>
          <button
            onClick={handleBookingClick}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Book This Bundle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bundle4Page;
