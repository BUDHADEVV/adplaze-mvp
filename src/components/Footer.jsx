import React from 'react';

const Footer = () => {
  const footerLinks = {
    about: [
      { name: 'Company', href: '/company' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' }
    ],
    resources: [
      { name: 'Help Center', href: '/help' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Guides', href: '/guides' }
    ],
    support: [
      { name: 'Contact', href: '/contact' },
      { name: 'Status', href: '/status' },
      { name: 'Privacy', href: '/privacy' }
    ],
    legal: [
      { name: 'Privacy', href: '/privacy-policy' },
      { name: 'Terms', href: '/terms' }
    ]
  };

  const handleLinkClick = (href, linkName) => {
    console.log(`Navigate to: ${href} (${linkName})`);
    // Add your navigation logic here
  };

  const handleSocialClick = (platform) => {
    console.log(`Open ${platform} social media`);
    // Add your social media navigation logic here
  };

  // Social Media SVG Icons
  const TwitterIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.015.43c-.526.233-.978.549-1.325.895-.347.347-.662.799-.895 1.325-.226.505-.348 1.079-.382 2.026C2.378 6.024 2.378 6.431 2.378 12.017s.013 5.993.048 6.941c.034.947.156 1.521.382 2.026.233.526.549.978.895 1.325.347.347.799.662 1.325.895.505.226 1.079.348 2.026.382.948.035 1.355.048 6.941.048s5.993-.013 6.941-.048c.947-.034 1.521-.156 2.026-.382.526-.233.978-.549 1.325-.895.347-.347.662-.799.895-1.325.226-.505.348-1.079.382-2.026.035-.948.048-1.355.048-6.941s-.013-5.993-.048-6.941c-.034-.947-.156-1.521-.382-2.026-.233-.526-.549-.978-.895-1.325-.347-.347-.799-.662-1.325-.895-.505-.226-1.079-.348-2.026-.382C18.01.013 17.603 0 12.017 0zm0 2.158c3.525 0 3.945.013 5.337.048.868.04 1.338.185 1.652.307.416.162.713.355 1.025.667.312.312.505.609.667 1.025.122.314.267.784.307 1.652.035 1.392.048 1.812.048 5.337s-.013 3.945-.048 5.337c-.04.868-.185 1.338-.307 1.652-.162.416-.355.713-.667 1.025-.312.312-.609.505-1.025.667-.314.122-.784.267-1.652.307-1.392.035-1.812.048-5.337.048s-3.945-.013-5.337-.048c-.868-.04-1.338-.185-1.652-.307-.416-.162-.713-.355-1.025-.667-.312-.312-.505-.609-.667-1.025-.122-.314-.267-.784-.307-1.652-.035-1.392-.048-1.812-.048-5.337s.013-3.945.048-5.337c.04-.868.185-1.338.307-1.652.162-.416.355-.713.667-1.025.312-.312.609-.505 1.025-.667.314-.122.784-.267 1.652-.307 1.392-.035 1.812-.048 5.337-.048z"/>
      <circle cx="12.017" cy="12.017" r="3.708"/>
      <circle cx="17.99" cy="6.042" r="1.042"/>
    </svg>
  );

  return (
    <footer className="bg-gray-100 py-16 md:py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                AdPlaze
              </h2>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* About Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6 tracking-wide">
                  ABOUT
                </h3>
                <ul className="space-y-4">
                  {footerLinks.about.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLinkClick(link.href, link.name)}
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6 tracking-wide">
                  RESOURCES
                </h3>
                <ul className="space-y-4">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLinkClick(link.href, link.name)}
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6 tracking-wide">
                  SUPPORT
                </h3>
                <ul className="space-y-4">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLinkClick(link.href, link.name)}
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6 tracking-wide">
                  LEGAL
                </h3>
                <ul className="space-y-4">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLinkClick(link.href, link.name)}
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            
            {/* Social Media Icons */}
            <div className="flex space-x-6 mb-6 md:mb-0">
              <button
                onClick={() => handleSocialClick('Twitter')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </button>
              <button
                onClick={() => handleSocialClick('Facebook')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </button>
              <button
                onClick={() => handleSocialClick('LinkedIn')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </button>
              <button
                onClick={() => handleSocialClick('Instagram')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </button>
            </div>

            {/* Copyright */}
            <div className="text-gray-600">
              © 2024 AdPlaze
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
