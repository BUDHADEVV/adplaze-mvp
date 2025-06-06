import React from 'react';

const How = () => {
  const steps = [
    {
      id: 1,
      title: "SEARCH",
      description: "Select your location & ad format filters",
      icon: "search",
      color: "blue"
    },
    {
      id: 2,
      title: "SELECT",
      description: "Pick and bundle spaces that fit your campaign",
      icon: "select",
      color: "green"
    },
    {
      id: 3,
      title: "BOOK & PAY",
      description: "Complete checkout— secure payment in seconds",
      icon: "payment",
      color: "purple"
    },
    {
      id: 4,
      title: "MONITOR",
      description: "Track real-time performance & analytics",
      icon: "analytics",
      color: "orange"
    }
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getStepColors = (color) => {
    const colors = {
      blue: {
        gradient: "from-blue-500 to-blue-600",
        bg: "from-blue-50 to-blue-100",
        text: "text-blue-600",
        border: "border-blue-200"
      },
      green: {
        gradient: "from-green-500 to-green-600",
        bg: "from-green-50 to-green-100",
        text: "text-green-600",
        border: "border-green-200"
      },
      purple: {
        gradient: "from-purple-500 to-purple-600",
        bg: "from-purple-50 to-purple-100",
        text: "text-purple-600",
        border: "border-purple-200"
      },
      orange: {
        gradient: "from-orange-500 to-orange-600",
        bg: "from-orange-50 to-orange-100",
        text: "text-orange-600",
        border: "border-orange-200"
      }
    };
    return colors[color] || colors.blue;
  };

  // Enhanced SVG Icons with better styling
  const StepIcon = ({ type, className, color }) => {
    const stepColors = getStepColors(color);
    
    const icons = {
      search: (
        <svg className={className} viewBox="0 0 200 140" fill="none">
          <defs>
            <linearGradient id={`search-grad-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
          {/* Location Pin Shadow */}
          <ellipse cx="62" cy="112" rx="18" ry="6" fill="rgba(0,0,0,0.1)"/>
          {/* Location Pin */}
          <circle cx="60" cy="70" r="28" fill={`url(#search-grad-${color})`}/>
          <circle cx="60" cy="70" r="18" fill="white"/>
          <circle cx="60" cy="70" r="10" fill={`url(#search-grad-${color})`}/>
          <path d="M60 42 L60 98" stroke={`url(#search-grad-${color})`} strokeWidth="3"/>
          
          {/* Magnifying Glass */}
          <circle cx="140" cy="60" r="22" fill="none" stroke={`url(#search-grad-${color})`} strokeWidth="6"/>
          <circle cx="140" cy="60" r="14" fill="none" stroke={`url(#search-grad-${color})`} strokeWidth="3"/>
          <path d="M157 77 L178 98" stroke={`url(#search-grad-${color})`} strokeWidth="6" strokeLinecap="round"/>
          <circle cx="180" cy="100" r="4" fill="rgba(0,0,0,0.1)"/>
        </svg>
      ),
      select: (
        <svg className={className} viewBox="0 0 200 140" fill="none">
          <defs>
            <linearGradient id={`select-grad-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          {/* Person Shadow */}
          <ellipse cx="102" cy="132" rx="25" ry="6" fill="rgba(0,0,0,0.1)"/>
          {/* Person */}
          <circle cx="100" cy="35" r="22" fill="#FFB74D"/>
          <rect x="78" y="57" width="44" height="52" rx="12" fill={`url(#select-grad-${color})`}/>
          <rect x="83" y="109" width="12" height="25" rx="6" fill="#FFB74D"/>
          <rect x="105" y="109" width="12" height="25" rx="6" fill="#FFB74D"/>
          
          {/* Enhanced Checkmarks */}
          <circle cx="50" cy="50" r="14" fill={`url(#select-grad-${color})`} opacity="0.9"/>
          <circle cx="50" cy="50" r="11" fill="white"/>
          <path d="M44 50 L48 54 L56 46" stroke={`url(#select-grad-${color})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          
          <circle cx="150" cy="50" r="14" fill={`url(#select-grad-${color})`} opacity="0.9"/>
          <circle cx="150" cy="50" r="11" fill="white"/>
          <path d="M144 50 L148 54 L156 46" stroke={`url(#select-grad-${color})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          
          <circle cx="50" cy="90" r="14" fill={`url(#select-grad-${color})`} opacity="0.9"/>
          <circle cx="50" cy="90" r="11" fill="white"/>
          <path d="M44 90 L48 94 L56 86" stroke={`url(#select-grad-${color})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          
          <circle cx="150" cy="90" r="14" fill={`url(#select-grad-${color})`} opacity="0.9"/>
          <circle cx="150" cy="90" r="11" fill="white"/>
          <path d="M144 90 L148 94 L156 86" stroke={`url(#select-grad-${color})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      payment: (
        <svg className={className} viewBox="0 0 200 140" fill="none">
          <defs>
            <linearGradient id={`payment-grad-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          {/* Card Shadow */}
          <rect x="42" y="42" width="120" height="75" rx="12" fill="rgba(0,0,0,0.1)"/>
          {/* Credit Card */}
          <rect x="40" y="40" width="120" height="75" rx="12" fill={`url(#payment-grad-${color})`}/>
          <rect x="45" y="45" width="110" height="65" rx="8" fill="white"/>
          <rect x="45" y="55" width="110" height="15" fill={`url(#payment-grad-${color})`}/>
          <rect x="55" y="85" width="40" height="8" rx="4" fill="#E5E7EB"/>
          <rect x="55" y="98" width="25" height="6" rx="3" fill="#E5E7EB"/>
          <rect x="130" y="85" width="20" height="6" rx="3" fill="#E5E7EB"/>
          
          {/* Enhanced Checkmark */}
          <circle cx="170" cy="30" r="20" fill="rgba(255,152,0,0.2)"/>
          <circle cx="170" cy="30" r="16" fill="#FF9800"/>
          <circle cx="170" cy="30" r="12" fill={`url(#payment-grad-${color})`}/>
          <path d="M164 30 L168 34 L176 26" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      analytics: (
        <svg className={className} viewBox="0 0 200 140" fill="none">
          <defs>
            <linearGradient id={`analytics-grad-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          {/* Person Shadow */}
          <ellipse cx="62" cy="97" rx="20" ry="4" fill="rgba(0,0,0,0.1)"/>
          {/* Person */}
          <circle cx="60" cy="25" r="17" fill="#FFB74D"/>
          <rect x="43" y="42" width="34" height="38" rx="10" fill={`url(#analytics-grad-${color})`}/>
          <rect x="48" y="80" width="10" height="22" rx="5" fill="#FFB74D"/>
          <rect x="62" y="80" width="10" height="22" rx="5" fill="#FFB74D"/>
          
          {/* Enhanced Chart Bars */}
          <rect x="118" y="87" width="14" height="27" rx="4" fill={`url(#analytics-grad-${color})`} opacity="0.7"/>
          <rect x="136" y="77" width="14" height="37" rx="4" fill={`url(#analytics-grad-${color})`} opacity="0.8"/>
          <rect x="154" y="67" width="14" height="47" rx="4" fill={`url(#analytics-grad-${color})`} opacity="0.9"/>
          <rect x="172" y="57" width="14" height="57" rx="4" fill={`url(#analytics-grad-${color})`}/>
          
          {/* Enhanced Arrow */}
          <path d="M100 42 L165 22" stroke={`url(#analytics-grad-${color})`} strokeWidth="5" strokeLinecap="round"/>
          <path d="M155 20 L165 22 L163 32" stroke={`url(#analytics-grad-${color})`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Data points */}
          <circle cx="125" cy="100" r="3" fill={`url(#analytics-grad-${color})`}/>
          <circle cx="143" cy="95" r="3" fill={`url(#analytics-grad-${color})`}/>
          <circle cx="161" cy="90" r="3" fill={`url(#analytics-grad-${color})`}/>
          <circle cx="179" cy="85" r="3" fill={`url(#analytics-grad-${color})`}/>
        </svg>
      )
    };

    return icons[type] || icons.search;
  };

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-orange-300 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent text-lg font-bold tracking-wider uppercase">
              Simple Process
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            How AdPlaze Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get your advertising campaign live in just four simple steps
          </p>
        </div>

        {/* Enhanced Steps Grid with Fixed Heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((step, index) => {
            const stepColors = getStepColors(step.color);
            return (
              <div
                key={step.id}
                className="group relative h-full"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-10 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
                )}
                
                {/* Step Card with Fixed Height */}
                <div className={`flex flex-col h-full relative bg-white rounded-3xl p-8 md:p-10 text-center border-2 ${stepColors.border} hover:border-opacity-100 border-opacity-50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 z-10`}>
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stepColors.bg} rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Content with Flex Layout */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Step Number */}
                    <div className="mb-8">
                      <div className={`w-20 h-20 bg-gradient-to-br ${stepColors.gradient} text-white rounded-2xl flex items-center justify-center mx-auto text-2xl font-black shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                        {step.id}
                      </div>
                    </div>
                    
                    {/* Step Title */}
                    <h3 className={`text-2xl md:text-3xl font-black mb-6 tracking-tight ${stepColors.text} group-hover:scale-105 transition-transform duration-300`}>
                      {step.title}
                    </h3>
                    
                    {/* Step Description - Takes up available space */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-10 font-medium flex-1">
                      {step.description}
                    </p>
                    
                    {/* Step Icon - Fixed at bottom */}
                    <div className="flex justify-center mt-auto">
                      <div className="w-36 h-28 transform group-hover:scale-110 transition-all duration-500">
                        <StepIcon type={step.icon} className="w-full h-full" color={step.color} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${stepColors.gradient} blur-xl`}></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action - Green Button with Scroll to Top */}
        <div className="text-center mt-20">
          <button 
            onClick={scrollToTop}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-600 to-green-700 text-white text-xl font-bold rounded-2xl hover:from-green-700 hover:to-green-800 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Started Today
            <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default How;
