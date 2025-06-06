import React from 'react';

const Services = () => {
  const handleGetStarted = () => {
    console.log('Navigate to targeting setup');
    alert('Target a Place feature coming soon!');
  };

  const handleViewAnalytics = () => {
    console.log('Navigate to analytics dashboard');
    alert('Analytics feature coming soon!');
  };

  // Enhanced SVG Icons
  const MapIcon = () => (
    <svg className="w-full h-full" viewBox="0 0 240 160" fill="none">
      <defs>
        <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2c3e50" />
          <stop offset="100%" stopColor="#34495e" />
        </linearGradient>
        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8f5e9" />
          <stop offset="100%" stopColor="#c8e6c9" />
        </linearGradient>
      </defs>
      
      <rect x="82" y="22" width="76" height="116" rx="12" fill="rgba(0,0,0,0.1)"/>
      <rect x="80" y="20" width="76" height="116" rx="12" fill="url(#phoneGradient)"/>
      <rect x="84" y="28" width="68" height="100" rx="6" fill="#ffffff"/>
      <rect x="88" y="32" width="60" height="92" rx="4" fill="url(#mapGradient)"/>
      
      <path d="M95 45 L140 45 M100 65 L135 65 M98 85 L142 85 M105 105 L130 105" 
            stroke="#81c784" strokeWidth="1.5" strokeLinecap="round"/>
      
      <circle cx="118" cy="80" r="12" fill="#4caf50" opacity="0.3"/>
      <circle cx="118" cy="80" r="8" fill="#4caf50"/>
      <circle cx="118" cy="80" r="4" fill="white"/>
      <circle cx="118" cy="80" r="2" fill="#4caf50"/>
      
      <rect x="92" y="110" width="12" height="8" rx="1" fill="#a5d6a7"/>
      <rect x="130" y="114" width="10" height="6" rx="1" fill="#a5d6a7"/>
      <circle cx="105" cy="95" r="2" fill="#66bb6a"/>
      <circle cx="132" cy="70" r="2" fill="#66bb6a"/>
    </svg>
  );

  const AnalyticsIcon = () => (
    <svg className="w-full h-full" viewBox="0 0 280 140" fill="none">
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff3e0" />
          <stop offset="100%" stopColor="#ffe0b2" />
        </linearGradient>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4caf50" />
          <stop offset="100%" stopColor="#66bb6a" />
        </linearGradient>
      </defs>
      
      <rect x="22" y="22" width="236" height="96" rx="12" fill="rgba(0,0,0,0.1)"/>
      <rect x="20" y="20" width="236" height="96" rx="12" fill="#ffffff" stroke="#e0e0e0" strokeWidth="2"/>
      <rect x="32" y="32" width="212" height="72" rx="6" fill="url(#chartGradient)"/>
      
      <path d="M40 40 L236 40 M40 56 L236 56 M40 72 L236 72 M40 88 L236 88" 
            stroke="#f5f5f5" strokeWidth="1"/>
      <path d="M60 40 L60 96 M100 40 L100 96 M140 40 L140 96 M180 40 L180 96 M220 40 L220 96" 
            stroke="#f5f5f5" strokeWidth="1"/>
      
      <rect x="55" y="75" width="8" height="17" rx="2" fill="#4caf50" opacity="0.7"/>
      <rect x="95" y="68" width="8" height="24" rx="2" fill="#4caf50" opacity="0.8"/>
      <rect x="135" y="58" width="8" height="34" rx="2" fill="#4caf50" opacity="0.9"/>
      <rect x="175" y="50" width="8" height="42" rx="2" fill="#4caf50"/>
      <rect x="215" y="45" width="8" height="47" rx="2" fill="#66bb6a"/>
      
      <path d="M59 83 L99 76 L139 66 L179 58 L219 53" 
            stroke="url(#lineGradient)" strokeWidth="3" fill="none" 
            strokeLinecap="round" strokeLinejoin="round"/>
      
      <circle cx="59" cy="83" r="3" fill="#4caf50"/>
      <circle cx="99" cy="76" r="3" fill="#4caf50"/>
      <circle cx="139" cy="66" r="3" fill="#4caf50"/>
      <circle cx="179" cy="58" r="3" fill="#4caf50"/>
      <circle cx="219" cy="53" r="3" fill="#66bb6a"/>
    </svg>
  );

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Target a Place Card */}
          <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-100 relative overflow-hidden h-full">
            {/* Coming Soon Badge */}
            <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Coming Soon!
            </div>
            
            {/* Subtle background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">
                  TARGET A PLACE
                </h3>
                
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium mb-6">
                  Bundle ad spaces together and reach audiences in your desired location.
                </p>
                
                <p className="text-orange-600 text-sm font-semibold bg-orange-50 px-4 py-2 rounded-lg inline-block mb-8">
                  🚀 Launching Soon - Stay Tuned!
                </p>
              </div>
              
              {/* Map Illustration */}
              <div className="mb-8 flex justify-center">
                <div className="w-60 h-40 transform group-hover:scale-105 transition-transform duration-500">
                  <MapIcon />
                </div>
              </div>
              
              {/* CTA Button
              <div className="mt-auto">
                <button
                  onClick={handleGetStarted}
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-lg rounded-xl hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Learn More
                </button>
              </div>  */}
            </div>
          </div>

          {/* Analytics Card */}
          <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-100 relative overflow-hidden h-full">
            {/* Coming Soon Badge */}
            <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Coming Soon!
            </div>
            
            {/* Subtle background pattern */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-50 to-transparent rounded-full -translate-y-16 -translate-x-16 opacity-60"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">
                  ANALYTICS
                </h3>
                
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium mb-6">
                  Track your ad performances with our analytics dashboard.
                </p>
                
                <p className="text-orange-600 text-sm font-semibold bg-orange-50 px-4 py-2 rounded-lg inline-block mb-8">
                  📊 Advanced Analytics Coming Soon!
                </p>
              </div>
              
              {/* Analytics Chart Illustration */}
              <div className="mb-8 flex justify-center">
                <div className="w-70 h-35 transform group-hover:scale-105 transition-transform duration-500">
                  <AnalyticsIcon />
                </div>
              </div>
              
              {/* CTA Button
              <div className="mt-auto">
                <button
                  onClick={handleViewAnalytics}
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-lg rounded-xl hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Learn More
                </button>
              </div>  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
