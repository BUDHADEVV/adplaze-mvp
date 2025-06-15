// src/pages/Bundle2Page.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyAdSpaces } from '../assets/AdSpaces';

const Bundle2Page = () => {
  const navigate = useNavigate();

  // All 18 digital screens from Kozhikode
  const kozhikodeScreens = dummyAdSpaces.filter(
    space => space.type === 'Digital Screens' && space.place === 'Kozhikode'
  );

  // State to track selected spaces
  const [selectedSpaces, setSelectedSpaces] = useState(new Set());

  // Toggle selection
  const toggleSelect = (id) => {
    const newSelected = new Set(selectedSpaces);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedSpaces(newSelected);
  };

  // WhatsApp booking handler
  const handleBookingClick = () => {
    if (selectedSpaces.size === 0) {
      alert('Please select at least one space to book.');
      return;
    }
    
    const selectedNames = kozhikodeScreens
      .filter(s => selectedSpaces.has(s._id))
      .map(s => s.name)
      .join(', ');
    
    const message = `Hi! I want to book the Growth Bundle (Bundle 2 - ₹17,999) with ${selectedSpaces.size} selected spaces: ${selectedNames}. Please provide more details about availability and booking process.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918592983978?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Custom card component for selection (no navigation)
  const SelectableAdSpaceCard = ({ space, isSelected, onToggle }) => {
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
        onClick={() => onToggle(_id)}
        className={`cursor-pointer border-2 rounded-xl overflow-hidden transition-all duration-200 ${
          isSelected 
            ? 'border-green-500 shadow-lg bg-green-50' 
            : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
        }`}
      >
        {/* Selection indicator */}
        <div className={`w-full h-1 ${isSelected ? 'bg-green-500' : 'bg-gray-200'}`} />
        
        {/* Card content */}
        <div className="bg-white">
          {/* Image */}
          <div className="w-full h-40 bg-gray-100 overflow-hidden">
            <img
              src={image?.[0]}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
              {name}
            </h3>

            <p className="text-sm text-gray-600 mb-2">
              {location?.landmark}
              {location?.area ? `, ${location.area}` : ''}
            </p>

            <p className="text-xs text-blue-600 font-medium mb-3">{type}</p>

            {/* Rating */}
            <div className="flex items-center text-xs text-gray-500">
              <span className="text-yellow-500">★</span>
              <span className="ml-1">{rating} ({reviews} reviews)</span>
            </div>
          </div>
        </div>
        
        {/* Selection status */}
        <div className={`text-center py-2 text-sm font-medium ${
          isSelected ? 'text-green-700 bg-green-100' : 'text-gray-500 bg-gray-50'
        }`}>
          {isSelected ? '✓ Selected' : 'Click to select'}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
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
          Growth Bundle (Bundle 2)
        </h1>
        
        {/* Bundle Description */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Bundle Description</h2>
          <p className="text-gray-700 mb-4">
            Perfect for growing businesses looking to expand their reach. The Growth Bundle includes 
            6 premium digital screen slots with social media shout-out to amplify your campaign impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              6 Digital Screens (your choice)
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              ≈60K visits / week
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              ₹17,999
            </div>
          </div>
        </div>

        {/* Selection counter */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <p className="text-blue-800 font-medium">
            {selectedSpaces.size} of 6 spaces selected from {kozhikodeScreens.length} available screens
          </p>
          <p className="text-blue-600 text-sm">
            Select exactly 6 screens from all available options below for your Growth Bundle.
          </p>
          {selectedSpaces.size > 6 && (
            <p className="text-red-600 text-sm mt-1">
              ⚠️ You can select maximum 6 screens for this bundle.
            </p>
          )}
        </div>
      </div>

      {/* Booking button */}
      <button
        onClick={handleBookingClick}
        className="mb-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={selectedSpaces.size === 0 || selectedSpaces.size > 6}
      >
        Book Selected Spaces ({selectedSpaces.size}/6) - ₹17,999
      </button>

      {/* All available screens grid */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Choose 6 screens from all {kozhikodeScreens.length} available digital screens:
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {kozhikodeScreens.map(space => (
            <SelectableAdSpaceCard
              key={space._id}
              space={space}
              isSelected={selectedSpaces.has(space._id)}
              onToggle={(id) => {
                // Prevent selection if already at limit and trying to add more
                if (!selectedSpaces.has(id) && selectedSpaces.size >= 6) {
                  alert('You can select maximum 6 screens for this bundle.');
                  return;
                }
                toggleSelect(id);
              }}
            />
          ))}
        </div>
      </div>

      {/* Bundle info */}
      <div className="mt-12 bg-green-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Growth Bundle (Bundle 2) Includes:
        </h3>
        <ul className="text-green-700 space-y-1 mb-4">
          <li>• Choose any 6 digital screens from all available options</li>
          <li>• 7-day campaign duration on selected screens</li>
          <li>• Content scheduling & rotation</li>
          <li>• Social media shout-out to amplify reach</li>
          <li>• Performance analytics for all selected screens</li>
          <li>• Dedicated campaign manager support</li>
        </ul>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">₹17,999</span>
          <button
            onClick={handleBookingClick}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold disabled:bg-gray-400"
            disabled={selectedSpaces.size === 0 || selectedSpaces.size > 6}
          >
            Book This Bundle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bundle2Page;

