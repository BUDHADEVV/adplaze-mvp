// src/components/MainBanner.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BundlesModal from './BundlesModal';           //  ← NEW import

const MainBanner = () => {
  const navigate = useNavigate();
  const [showBundles, setShowBundles] = useState(false);   // ← NEW state

  const handleSearchClick = () => navigate('/ad-spaces');
  const handleGetBundleClick = () => setShowBundles(true); // ← open modal

  return (
    <section className="bg-white py-12 md:py-20 relative overflow-hidden my-11">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* ---------- Left text ---------- */}
          <div className="flex-1 lg:w-3/5 text-center lg:text-left z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              BOOK YOUR SPACES
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 font-medium leading-relaxed">
              Find and reserve your ad space in minutes
            </p>

            {/* ---------- Buttons ---------- */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleSearchClick}
                className="inline-flex items-center px-8 py-4 md:px-10 md:py-5 bg-green-600 text-white text-lg md:text-xl font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500/50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Search Ad Spaces
              </button>

              {/* NEW “Get the Bundle” button */}
              <button
                onClick={handleGetBundleClick}
                className="inline-flex items-center px-8 py-4 md:px-10 md:py-5 bg-blue-600 text-white text-lg md:text-xl font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get the Bundle
              </button>
            </div>
          </div>

          {/* ---------- Right image ---------- */}
          <div className="flex-1 lg:w-2/5 relative">
            <div className="relative">
              <img
                src="/banner.png"
                alt="Digital Billboard Advertisement"
                className="w-full h-auto rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300"
              />
              {/* Floating blobs */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-green-400 rounded-full opacity-30 animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-400 rounded-full opacity-40 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Modal injected here ---------- */}
      <BundlesModal isOpen={showBundles} onClose={() => setShowBundles(false)} />
    </section>
  );
};

export default MainBanner;
