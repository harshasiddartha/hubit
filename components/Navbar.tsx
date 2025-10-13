'use client';

import React, { useState } from 'react';

const fontStyle: React.CSSProperties = {
  fontFamily: 'sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  color: 'rgb(0, 0, 0)',
  fontSize: '17px',
  lineHeight: 'normal',
};

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Open dropdown on mouse enter
  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  // Close dropdown on mouse leave
  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  // Toggle for click (optional, keeps click accessible)
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav
      className="bg-white shadow-sm border-b border-gray-100 h-20  font-inter"
      style={fontStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center ">
            <div className="flex items-center space-x-10">
              {/* Logo Icon */}
              <img src="/leadsprintlogo.png" alt="Hubit Logo" className="w-35 h-28" style={fontStyle} />
              {/* Logo Text */}
              {/* <span className="font-medium text-gray-900 text-lg">Hubit</span> */}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center bg-white rounded-xl border border-gray-200 px-1 py-1.5 ml-35 font-inter" style={fontStyle}>
            <div
              className="relative"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
              style={fontStyle}
            >
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors bg-white focus:outline-none"
                type="button"
                tabIndex={0}
                style={{
                  ...fontStyle,
                  boxShadow: 'none',
                  marginRight: '0.25rem'
                }}
              >
                <span className="transition-colors font-inter" style={fontStyle}>All Pages</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={fontStyle}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-lg border border-gray-200 z-50" style={fontStyle}>
                  <div className="p-6">
                    <div className="flex gap-8">
                      {/* Promotional Card */}
                      <div className="flex-1 bg-gradient-to-r from-blue-100 to-orange-200 rounded-lg p-6" style={fontStyle}>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 font-inter" style={fontStyle}>All Access Club</h3>
                        <p className="text-gray-700 mb-4 font-inter" style={fontStyle}>Get 65+ Templates & 200+ Components with a single payment</p>
                        <div className="flex flex-wrap gap-2">
                          {/* Sample UI mockups */}
                          <div className="w-12 h-8 bg-white rounded border shadow-sm" style={fontStyle}></div>
                          <div className="w-12 h-8 bg-white rounded border shadow-sm" style={fontStyle}></div>
                          <div className="w-12 h-8 bg-white rounded border shadow-sm" style={fontStyle}></div>
                          <div className="w-12 h-8 bg-white rounded border shadow-sm" style={fontStyle}></div>
                        </div>
                      </div>

                      {/* Page Links */}
                      <div className="flex-2" style={fontStyle}>
                        <div className="grid grid-cols-3 gap-6">
                          <div>
                            <ul className="space-y-3" style={fontStyle}>
                              <li>
                                <button 
                                  onClick={() => scrollToSection('home')}
                                  className="text-gray-700 hover:text-orange-600 transition-colors font-inter" 
                                  style={fontStyle}
                                >
                                  Home
                                </button>
                              </li>
                              <li>
                                <button 
                                  onClick={() => scrollToSection('personas')}
                                  className="text-gray-700 hover:text-orange-600 transition-colors font-inter" 
                                  style={fontStyle}
                                >
                                  Who It&apos;s For
                                </button>
                              </li>
                              <li>
                                <button 
                                  onClick={() => scrollToSection('pricing')}
                                  className="text-gray-700 hover:text-orange-600 transition-colors font-inter" 
                                  style={fontStyle}
                                >
                                  Pricing
                                </button>
                              </li>
                              <li>
                                <button 
                                  onClick={() => scrollToSection('features')}
                                  className="text-gray-700 hover:text-orange-600 transition-colors font-inter" 
                                  style={fontStyle}
                                >
                                  Features
                                </button>
                              </li>
                              <li>
                                <button 
                                  onClick={() => scrollToSection('testimonials')}
                                  className="text-gray-700 hover:text-orange-600 transition-colors font-inter" 
                                  style={fontStyle}
                                >
                                  Reviews
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul className="space-y-3" style={fontStyle}>
                              <li>
                                <button 
                                  onClick={() => scrollToSection('how-it-works')}
                                  className="text-gray-700 hover:text-orange-600 transition-colors font-inter" 
                                  style={fontStyle}
                                >
                                  How It Works
                                </button>
                              </li>
                              <li>
                                <button 
                                  onClick={() => scrollToSection('outcomes')}
                                  className="text-gray-700 hover:text-orange-600 transition-colors font-inter" 
                                  style={fontStyle}
                                >
                                  Outcomes
                                </button>
                              </li>
                              <li>
                                <button 
                                  onClick={() => scrollToSection('use-cases')}
                                  className="text-gray-700 hover:text-orange-600 transition-colors font-inter" 
                                  style={fontStyle}
                                >
                                  Use Cases
                                </button>
                              </li>
                              <li>
                                <button 
                                  onClick={() => scrollToSection('why-leadsprint')}
                                  className="text-gray-700 hover:text-orange-600 transition-colors font-inter" 
                                  style={fontStyle}
                                >
                                  Why LeadSprint
                                </button>
                              </li>
                              <li>
                                <button 
                                  onClick={() => scrollToSection('customers')}
                                  className="text-gray-700 hover:text-orange-600 transition-colors font-inter" 
                                  style={fontStyle}
                                >
                                  Customers
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul className="space-y-3" style={fontStyle}>
                              <li>
                                <button 
                                  onClick={() => scrollToSection('partners')}
                                  className="text-gray-700 hover:text-orange-600 transition-colors font-inter" 
                                  style={fontStyle}
                                >
                                  Partners
                                </button>
                              </li>
                              <li>
                                <button 
                                  onClick={() => scrollToSection('faq')}
                                  className="text-gray-700 hover:text-orange-600 transition-colors font-inter" 
                                  style={fontStyle}
                                >
                                  FAQ
                                </button>
                              </li>
                              <li>
                                <button 
                                  onClick={() => scrollToSection('home')}
                                  className="text-gray-700 hover:text-orange-600 transition-colors font-inter" 
                                  style={fontStyle}
                                >
                                  Get Started
                                </button>
                              </li>
                              <li>
                                <button 
                                  onClick={() => scrollToSection('testimonials')}
                                  className="text-gray-700 hover:text-orange-600 transition-colors font-inter" 
                                  style={fontStyle}
                                >
                                  Success Stories
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollToSection('features')}
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 transition-colors font-inter" 
              style={fontStyle}
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 transition-colors font-inter" 
              style={fontStyle}
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 transition-colors font-inter" 
              style={fontStyle}
            >
              Pricing
            </button>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4" style={fontStyle}>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-inter" 
              style={fontStyle}
            >
              Help
            </button>
            <button 
              onClick={() => scrollToSection('home')}
              className="bg-[#201E1C] text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors font-inter-button" 
              style={{...fontStyle, color: "white"}}
            >
              Start Free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" style={fontStyle}>
            <button className="text-gray-700 hover:text-orange-600" style={fontStyle}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={fontStyle}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
