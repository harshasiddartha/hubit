'use client';

import React, { useState } from 'react';

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

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              {/* Logo Icon */}
              <img src="/hublogo.svg" alt="Hubit Logo" className="w-18 h-8" />
              {/* Logo Text */}
              <span className="font-medium text-gray-900 text-lg">Hubit</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center bg-white rounded-xl border border-gray-200 px-1 py-0.5">
            <div
              className="relative"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 transition-colors bg-white focus:outline-none"
                type="button"
                tabIndex={0}
                style={{
                  border: '1px solid #eee',
                  boxShadow: 'none',
                  marginRight: '0.25rem'
                }}
              >
                <span className="transition-colors">All Pages</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                  <div className="p-6">
                    <div className="flex gap-8">
                      {/* Promotional Card */}
                      <div className="flex-1 bg-gradient-to-r from-blue-100 to-orange-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">All Access Club</h3>
                        <p className="text-gray-700 mb-4">Get 65+ Templates & 200+ Components with a single payment</p>
                        <div className="flex flex-wrap gap-2">
                          {/* Sample UI mockups */}
                          <div className="w-12 h-8 bg-white rounded border shadow-sm"></div>
                          <div className="w-12 h-8 bg-white rounded border shadow-sm"></div>
                          <div className="w-12 h-8 bg-white rounded border shadow-sm"></div>
                          <div className="w-12 h-8 bg-white rounded border shadow-sm"></div>
                        </div>
                      </div>

                      {/* Page Links */}
                      <div className="flex-2">
                        <div className="grid grid-cols-3 gap-6">
                          <div>
                            <ul className="space-y-3">
                              <li>
                                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                                  Homepage
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                                  About
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                                  Pricing
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                                  Product Feature
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                                  Contact
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul className="space-y-3">
                              <li>
                                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                                  Blog
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                                  Blog Details
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                                  Case Study
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                                  Case Study Details
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                                  Integration
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul className="space-y-3">
                              <li>
                                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                                  Changelog
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                                  Terms
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                                  Privacy
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                                  404
                                </a>
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

            <a href="#" className="px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 transition-colors">
              About
            </a>
            <a href="#" className="px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 transition-colors">
              Pricing
            </a>
            <a href="#" className="px-4 py-2 rounded-lg text-gray-700  hover:text-orange-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
              Sign In
            </a>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Start 14 Days Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-orange-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
