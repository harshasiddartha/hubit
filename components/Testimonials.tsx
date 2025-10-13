'use client';

import React from 'react';
import Image from 'next/image';

const imageMap: { [key: number]: string } = {
  1: '/p1.png',
  2: '/p2.png',
  3: '/p3.png',
  4: '/p1.png',
  5: '/p2.png',
  6: '/p3.png',
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Founder, B2B SaaS",
      quote: "As a solo founder, I booked demos within 48 hours of a funding alert. LeadSprint.AI does the prospecting for me.",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Agency Owner",
      quote: "We run intent → enrichment → outreach across 12 clients automatically. Reporting makes renewals easy.",
      rating: 5
    },
    {
      id: 3,
      name: "Jennifer Kim",
      title: "Sales Director, TechCorp",
      quote: "LeadSprint.AI has transformed our sales process. We're hitting quota 40% faster with AI-personalized outreach that actually gets responses.",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      title: "VP Sales, StartupXYZ",
      quote: "The real-time intent signals are game-changing. We catch buying moments as they happen, not weeks later.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Marketing Director, ScaleUp",
      quote: "Finally, a tool that understands our ICP and scores leads with clear explanations. Our conversion rates have doubled.",
      rating: 5
    },
    {
      id: 6,
      name: "Alex Johnson",
      title: "CEO, GrowthCo",
      quote: "LeadSprint.AI replaced our entire SDR team's prospecting work. The AI outreach is more personalized than our manual emails.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <svg
        key={i}
        className="w-4 h-4 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-amber-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">

          {/* Social Proof Badge */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-800 font-inter shadow-sm">
              <svg
                className="w-5 h-5 text-orange-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Social Proof
            </span>
          </div>
        
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-inter">
            Trusted by founders, agencies, and sales teams
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            >
              {/* Profile Picture and User Info */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src={imageMap[testimonial.id]}
                    alt={testimonial.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 truncate font-inter">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm truncate font-inter">
                    {testimonial.title}
                  </p>
                </div>  
              </div>

              {/* Quote */}
              <blockquote className="text-gray-900 mb-4 leading-relaxed font-inter">
                {testimonial.quote}
              </blockquote>

              {/* Star Rating */}
              <div className="flex items-center space-x-1">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
