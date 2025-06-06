import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();
  const categories = [
    {
      id: 1,
      name: "Billboard",
      display: "Billboard Ads",
      description: "Outdoor advertising displays",
      icon: "billboard",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      id: 2,
      name: "Digital Screens",
      display: "Digital Screens",
      description: "LED and digital displays",
      icon: "digital",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      id: 3,
      name: "Transit Ads",
      display: "Transit Ads",
      description: "Bus, metro, and vehicle ads",
      icon: "transit",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50"
    },
    {
      id: 4,
      name: "Mall Displays",
      display: "Mall Displays",
      description: "Shopping center displays",
      icon: "mall",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  const handleCategoryClick = (category) => {
    // Use the actual type name used in your ad space data!
    navigate(`/ad-spaces?type=${encodeURIComponent(category.name)}`);
  };

  // SVG Icons (unchanged)
  const CategoryIcon = ({ type, className, gradient }) => {
    const icons = {
      billboard: (
        <svg className={className} viewBox="0 0 200 140" fill="none">
          <defs>
            <linearGradient id={`billboard-grad-${gradient}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
          <rect x="22" y="22" width="156" height="76" rx="8" fill="rgba(0,0,0,0.1)"/>
          <rect x="20" y="20" width="156" height="76" rx="8" fill={`url(#billboard-grad-${gradient})`}/>
          <rect x="28" y="28" width="140" height="60" rx="4" fill="white"/>
          <rect x="38" y="38" width="120" height="40" rx="2" fill="#F3F4F6"/>
          <rect x="95" y="96" width="10" height="35" fill={`url(#billboard-grad-${gradient})`}/>
          <ellipse cx="100" cy="135" rx="25" ry="4" fill="rgba(0,0,0,0.1)"/>
        </svg>
      ),
      digital: (
        <svg className={className} viewBox="0 0 200 140" fill="none">
          <defs>
            <linearGradient id={`digital-grad-${gradient}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <rect x="32" y="17" width="136" height="86" rx="12" fill="rgba(0,0,0,0.1)"/>
          <rect x="30" y="15" width="136" height="86" rx="12" fill={`url(#digital-grad-${gradient})`}/>
          <rect x="38" y="23" width="120" height="70" rx="6" fill="white"/>
          <rect x="48" y="33" width="100" height="50" rx="4" fill="#F3F4F6"/>
          <circle cx="98" cy="58" r="8" fill={`url(#digital-grad-${gradient})`} opacity="0.8"/>
          <rect x="58" y="68" width="80" height="3" rx="1" fill="#E5E7EB"/>
          <rect x="58" y="75" width="60" height="3" rx="1" fill="#E5E7EB"/>
        </svg>
      ),
      transit: (
        <svg className={className} viewBox="0 0 200 140" fill="none">
          <defs>
            <linearGradient id={`transit-grad-${gradient}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <ellipse cx="100" cy="125" rx="80" ry="8" fill="rgba(0,0,0,0.1)"/>
          <rect x="20" y="35" width="160" height="55" rx="25" fill={`url(#transit-grad-${gradient})`}/>
          <rect x="35" y="48" width="22" height="18" rx="3" fill="white"/>
          <rect x="65" y="48" width="22" height="18" rx="3" fill="white"/>
          <rect x="95" y="48" width="22" height="18" rx="3" fill="white"/>
          <rect x="125" y="48" width="22" height="18" rx="3" fill="white"/>
          <rect x="155" y="48" width="15" height="18" rx="3" fill="white"/>
          <circle cx="55" cy="105" r="12" fill="#374151"/>
          <circle cx="55" cy="105" r="8" fill="#6B7280"/>
          <circle cx="145" cy="105" r="12" fill="#374151"/>
          <circle cx="145" cy="105" r="8" fill="#6B7280"/>
        </svg>
      ),
      mall: (
        <svg className={className} viewBox="0 0 200 140" fill="none">
          <defs>
            <linearGradient id={`mall-grad-${gradient}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
          </defs>
          <rect x="42" y="42" width="116" height="76" rx="10" fill="rgba(0,0,0,0.1)"/>
          <rect x="40" y="40" width="116" height="76" rx="10" fill={`url(#mall-grad-${gradient})`}/>
          <rect x="48" y="48" width="100" height="60" rx="5" fill="white"/>
          <rect x="58" y="58" width="25" height="20" rx="2" fill="#F3F4F6"/>
          <rect x="93" y="58" width="25" height="20" rx="2" fill="#F3F4F6"/>
          <rect x="128" y="58" width="15" height="20" rx="2" fill="#F3F4F6"/>
          <rect x="85" y="88" width="25" height="20" fill={`url(#mall-grad-${gradient})`} opacity="0.3"/>
          <circle cx="97" cy="98" r="1" fill="white"/>
        </svg>
      )
    };
    return icons[type] || icons.billboard;
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* ...background and section header... */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of advertising solutions
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {categories.map((category, index) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className={`group relative bg-gradient-to-br ${category.bgGradient} rounded-3xl p-8 md:p-10 text-center cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-white transform hover:-translate-y-2`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-8 flex justify-center">
                  <div className="w-28 h-28 flex items-center justify-center bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <CategoryIcon 
                      type={category.icon} 
                      className="w-24 h-24" 
                      gradient={category.id}
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {category.display}
                </h3>
                <p className="text-gray-600 text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">
                  {category.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <div className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    Explore More
                    <svg className="ml-1 w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r ${category.gradient} blur-xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
