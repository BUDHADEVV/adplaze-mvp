// src/components/BundlesModal.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

/* ----- Bundles with extra metadata ----- */
const bundles = [
  {
    id: 'bundle1',
    title: 'Starter Bundle',
    desc: '3 prime slots on city screens',
    price: '₹9,999',
    screens: 3,
    type: 'Digital Screens',
    visits: '≈30 K / week'
  },
  {
    id: 'bundle2',
    title: 'Growth Bundle',
    desc: '6 slots + social shout-out',
    price: '₹17,999',
    screens: 6,
    type: 'Digital Screens',
    visits: '≈60 K / week'
  },
  {
    id: 'bundle3',
    title: 'City-Wide',
    desc: 'All screens in your city for a week',
    price: '₹49,999',
    screens: 18,
    type: 'Digital Screens',
    visits: '≈250 K / week'
  },
  {
    id: 'bundle4',
    title: 'Pro Bundle',
    desc: '10 slots across tier-1 malls',
    price: '₹29,999',
    screens: 10,
    type: 'Mall Displays',
    visits: '≈120 K / week'
  },
  {
    id: 'bundle5',
    title: 'Festival Blast',
    desc: 'Diwali special – 14-day takeover',
    price: '₹59,999',
    screens: 24,
    type: 'Billboards + Screens',
    visits: '≈400 K / 14 days'
  },
  {
    id: 'bundle6',
    title: 'National Buzz',
    desc: 'Top 5 metros • 1-month rotation',
    price: '₹99,999',
    screens: 40,
    type: 'Mixed Media',
    visits: '≈1 M / month'
  }
];

const BundlesModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleBundleClick = (bundleId) => {
    if (bundleId === 'bundle4') {
      alert('Pro Bundle (Mall Displays) - Coming Soon! \n\nWe are currently setting up partnerships with premium malls. This bundle will be available shortly. \n\nFor early access or more info, please contact us via WhatsApp.');
      return;
    }
    
    if (bundleId === 'bundle5') {
      alert('Festival Blast Bundle - Coming Soon! \n\nThis special festival package with billboards and screens will launch during the upcoming festival season. \n\nStay tuned for updates or contact us for early notifications!');
      return;
    }
    
    if (bundleId === 'bundle6') {
      alert('National Buzz Bundle - Coming Soon! \n\nWe are expanding to multiple metros to bring you this premium national coverage package. \n\nContact us to be notified when this becomes available!');
      return;
    }
    
    onClose();
    navigate(`/bundles/${bundleId}`);
  };

  // Check if bundle is coming soon
  const isComingSoon = (bundleId) => {
    return ['bundle4', 'bundle5', 'bundle6'].includes(bundleId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal box */}
      <div className="relative bg-white w-11/12 max-w-5xl mx-auto rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Choose a Bundle</h2>
          <button
            onClick={onClose}
            className="text-3xl leading-none text-gray-400 hover:text-gray-600"
          >
            &times;
          </button>
        </div>

        {/* Bundle cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bundles.map(b => (
            <div
              key={b.id}
              onClick={() => handleBundleClick(b.id)}
              className={`cursor-pointer border rounded-xl p-6 transition ${
                isComingSoon(b.id)
                  ? 'border-gray-300 bg-gray-50 hover:bg-gray-100' 
                  : 'border-gray-200 hover:shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{b.title}</h3>
                {isComingSoon(b.id) && (
                  <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{b.desc}</p>

              {/* Meta-row */}
              <p className="text-xs text-gray-500 mb-2">
                {b.screens} screens &nbsp;•&nbsp; {b.type} &nbsp;•&nbsp; {b.visits}
              </p>

              <span className={`font-bold ${
                isComingSoon(b.id) ? 'text-gray-500' : 'text-green-600'
              }`}>
                {b.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BundlesModal;

