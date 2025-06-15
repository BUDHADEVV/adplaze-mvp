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
    screens: 18,                 // 18 Kozhikode digital screens[1]
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
              onClick={() => {
                onClose();
                navigate(`/${b.id}`);
              }}
              className="cursor-pointer border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{b.desc}</p>

              {/* NEW meta-row */}
              <p className="text-xs text-gray-500 mb-2">
                {b.screens} screens &nbsp;•&nbsp; {b.type} &nbsp;•&nbsp; {b.visits}
              </p>

              <span className="text-green-600 font-bold">{b.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BundlesModal;
