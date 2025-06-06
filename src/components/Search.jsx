import React, { useState, useEffect } from 'react';

const Search = () => {
  const [location, setLocation] = useState('');
  const [adType, setAdType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const locations = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'
  ];

  const adTypes = [
    'Billboard', 'Digital Display', 'Bus Stop', 'Metro Station', 'Mall Display', 'Cinema Hall'
  ];

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search with:', { location, adType, fromDate, toDate });
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-2">
      <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6">
        
        {/* Mobile-First Responsive Container */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
          
          {/* Location Input */}
          <div className="flex-1 min-w-0">
            <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Location
            </label>
            <input
              list="locations"
              type="text"
              className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-white border border-gray-300 rounded-lg text-sm sm:text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Select location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <datalist id="locations">
              {locations.map((loc) => (
                <option key={loc} value={loc} />
              ))}
            </datalist>
          </div>

          {/* Ad Type Input */}
          <div className="flex-1 min-w-0">
            <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              Ad Type
            </label>
            <input
              list="adTypes"
              type="text"
              className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-white border border-gray-300 rounded-lg text-sm sm:text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Select ad type"
              value={adType}
              onChange={(e) => setAdType(e.target.value)}
              required
            />
            <datalist id="adTypes">
              {adTypes.map((type) => (
                <option key={type} value={type} />
              ))}
            </datalist>
          </div>

          {/* From Date Input */}
          <div className="flex-1 min-w-0">
            <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              From Date
            </label>
            <input
              type="date"
              className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-white border border-gray-300 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 light-calendar"
              value={fromDate}
              onChange={(e) => {
                setFromDate(e.target.value);
                if (toDate && e.target.value > toDate) {
                  setToDate('');
                }
              }}
              min={getTodayDate()}
              required
            />
          </div>

          {/* To Date Input */}
          <div className="flex-1 min-w-0">
            <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              To Date
            </label>
            <input
              type="date"
              className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-white border border-gray-300 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 light-calendar"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              min={fromDate || getTodayDate()}
              required
            />
          </div>

          {/* Search Button */}
          <div className="flex-shrink-0 self-end">
            <button
              type="submit"
              className="w-full sm:w-auto h-10 sm:h-12 px-6 sm:px-8 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              Search
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Search;
