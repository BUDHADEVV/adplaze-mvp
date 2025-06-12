import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { dummyAdSpaces } from '../assets/AdSpaces';

const PLACES = [
  { id: 'Kochi', name: 'Kochi' },
  { id: 'Kozhikode', name: 'Kozhikode' },
  { id: 'NIT Calicut', name: 'NIT Calicut' }
];

const AD_TYPES = [
  { id: 'Billboard', name: 'Billboard' },
  { id: 'Digital Screens', name: 'Digital Screens' },
  { id: 'Transit Ads', name: 'Transit Ads' },
  { id: 'Mall Displays', name: 'Mall Displays' }
];

const SORT_OPTIONS = [
  { id: 'newest', name: 'Newest First' },
  { id: 'price-low', name: 'Price Low to High' },
  { id: 'price-high', name: 'Price High to Low' },
  { id: 'rating', name: 'Highest Rated' }
];

const AdSpaceListing = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const typeFromQuery = params.get('type');

  const [filters, setFilters] = useState({
    places: [],
    adTypes: typeFromQuery ? [typeFromQuery] : [],
    sortBy: 'newest'
  });
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeFromQuery) {
      setFilters((prev) => ({
        ...prev,
        adTypes: [typeFromQuery]
      }));
    }
  }, [typeFromQuery]);

  const filteredSpaces = useMemo(() => {
    let filtered = [...dummyAdSpaces];
    if (filters.places.length > 0) {
      filtered = filtered.filter(space => filters.places.includes(space.place));
    }
    if (filters.adTypes.length > 0) {
      filtered = filtered.filter(space => filters.adTypes.includes(space.type));
    }
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => (a.offerPrice || a.price) - (b.offerPrice || b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => (b.offerPrice || b.price) - (a.offerPrice || a.price));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return filtered;
  }, [filters]);

  const handlePlace = (place) => {
    setFilters((prev) => ({
      ...prev,
      places: prev.places.includes(place)
        ? prev.places.filter(p => p !== place)
        : [...prev.places, place]
    }));
  };

  const handleType = (type) => {
    setFilters((prev) => ({
      ...prev,
      adTypes: prev.adTypes.includes(type)
        ? prev.adTypes.filter(t => t !== type)
        : [...prev.adTypes, type]
    }));
  };

  const handleSort = (sortBy) => {
    setFilters((prev) => ({ ...prev, sortBy }));
  };

  const handleClear = () => {
    setFilters({ places: [], adTypes: [], sortBy: 'newest' });
  };

  // Updated Minimal Checkbox with tick mark
  const MinimalCheckbox = ({ checked, onChange, label }) => (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="appearance-none w-4 h-4 border border-gray-300 rounded-sm checked:border-black focus:ring-0 transition-all duration-200"
        />
        {checked && (
          <svg 
            className="absolute top-0 left-0 w-4 h-4 text-black pointer-events-none"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={3} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        )}
      </div>
      <span className="text-gray-700">{label}</span>
    </label>
  );

  // Updated Minimal Radio with dot
  const MinimalRadio = ({ checked, onChange, label }) => (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input
          type="radio"
          checked={checked}
          onChange={onChange}
          className="appearance-none w-4 h-4 border border-gray-300 rounded-full checked:border-black focus:ring-0 transition-all duration-200"
        />
        {checked && (
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        )}
      </div>
      <span className="text-gray-700">{label}</span>
    </label>
  );

  const AdSpaceCard = ({ space }) => (
  <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-3 h-full">
    <div
      className="w-full h-40 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer"
      onClick={() => navigate(`/ad-space/${space._id}`)}
      title={space.name}
    >
      <img src={space.image[0]} alt={space.name} className="w-full h-full object-cover" />
    </div>
    <div className="flex-1 flex flex-col">
      <div>
        <div
          className="text-lg font-bold text-gray-900 mb-1 cursor-pointer hover:underline"
          onClick={() => navigate(`/ad-space/${space._id}`)}
          title={space.name}
        >
          {space.name}
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          {space.location?.landmark}
        </div>
        <div className="text-sm text-gray-600 mb-2">{space.description}</div>
      </div>
      <div className="mt-auto flex items-center justify-between">
        <div>
          <span className="text-lg font-bold text-green-600">₹{space.offerPrice || space.price}</span>
          <span className="ml-1 text-gray-500 text-sm">/day</span>
        </div>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold text-sm hover:bg-green-700 transition"
            onClick={() => navigate(`/ad-space/${space._id}`)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  </div>
);


  const FilterPanel = (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-semibold text-gray-900">Filters</h3>
        <button
          onClick={handleClear}
          className="text-gray-400 text-sm font-light hover:text-gray-600 transition"
        >
          Clear
        </button>
      </div>
      <div className="mb-6">
        <div className="text-xs font-semibold text-gray-500 mb-3">Place</div>
        <div className="flex flex-col gap-2">
          {PLACES.map((p) => (
            <MinimalCheckbox
              key={p.id}
              checked={filters.places.includes(p.name)}
              onChange={() => handlePlace(p.name)}
              label={p.name}
            />
          ))}
        </div>
      </div>
      <div className="mb-6">
        <div className="text-xs font-semibold text-gray-500 mb-3">Ad Type</div>
        <div className="flex flex-col gap-2">
          {AD_TYPES.map((t) => (
            <MinimalCheckbox
              key={t.id}
              checked={filters.adTypes.includes(t.name)}
              onChange={() => handleType(t.name)}
              label={t.name}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="text-xs font-semibold text-gray-500 mb-3">Sort By</div>
        <div className="flex flex-col gap-2">
          {SORT_OPTIONS.map((s) => (
            <MinimalRadio
              key={s.id}
              checked={filters.sortBy === s.id}
              onChange={() => handleSort(s.id)}
              label={s.name}
            />
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col lg:flex-row gap-8">
        <aside
          className="bg-white rounded-xl shadow p-6 w-full lg:w-72 h-fit hidden sm:block"
          style={{
            position: 'sticky',
            top: 32,
            alignSelf: 'flex-start',
            zIndex: 10,
            maxHeight: 'calc(100vh - 64px)'
          }}
        >
          {FilterPanel}
        </aside>
        <main
          className="flex-1 flex flex-col gap-6 overflow-y-auto hide-scrollbar"
          style={{ maxHeight: 'calc(100vh - 64px)' }}
        >
          <div className="mobile-sticky-header px-1 sm:px-0 mb-4 flex items-center justify-between" style={{minHeight:'3.5rem'}}>
            <h1 className="text-2xl font-bold text-gray-900">Ad Spaces</h1>
            <button
              className="sm:hidden px-4 py-2 rounded-full bg-black text-white font-semibold shadow transition-all duration-200"
              onClick={() => setShowMobileFilter(true)}
            >
              Filters
            </button>
          </div>
          <p className="text-gray-500 text-sm">{filteredSpaces.length} of {dummyAdSpaces.length} spaces shown</p>
          {filteredSpaces.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-8 text-center text-gray-400">
              No ad spaces found. Try changing your filters.
            </div>
          ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredSpaces.map(space => (
                  <AdSpaceCard key={space._id} space={space} />
                ))}
              </div>

          )}
        </main>
      </div>

      {showMobileFilter && (
        <div className="mobile-filter-overlay sm:hidden" onClick={() => setShowMobileFilter(false)}>
          <div className="mobile-filter-panel" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg text-gray-900">Filters</span>
              <button
                className="text-gray-400 text-2xl font-light hover:text-gray-600 transition"
                onClick={() => setShowMobileFilter(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            {FilterPanel}
            <div className="mt-6">
              <button
                className="w-full py-3 bg-black text-white rounded-lg font-semibold"
                onClick={() => setShowMobileFilter(false)}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdSpaceListing;
