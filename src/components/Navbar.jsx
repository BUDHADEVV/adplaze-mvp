// Navbar.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 1️⃣  NEW: open the Whatsform link in a new tab
  const handleListSpaceClick = () => {
    window.open('https://whatsform.com/UI-CGR', '_blank');
  };

  const handleShowAdClick = () => {
    navigate('/ad-spaces');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const isAdSpacesPage = location.pathname === '/ad-spaces';

  return (
    <nav className="bg-white border-b border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <h1
              onClick={handleLogoClick}
              className="text-3xl font-bold text-black cursor-pointer hover:transform hover:translate-x-1 transition-transform duration-200"
            >
              AdPlaze
            </h1>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            {!isAdSpacesPage && (
              <button
                onClick={handleShowAdClick}
                className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 font-medium"
              >
                Show Your Ad
              </button>
            )}

            <button
              onClick={handleListSpaceClick}
              className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 font-medium"
            >
              List Your Space
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
