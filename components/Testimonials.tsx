'use client';

import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Leslie Alexander",
      title: "CEO, CodeWrights",
      quote: "Hubit has revolutionized the way we have manage tasks. The intuitive interface and seamless task organization have made in our workflow smoother than ever.",
      rating: 5
    },
    {
      id: 2,
      name: "Esther Howard",
      title: "CTO, LogicLogix",
      quote: "Thanks to Hubit, our team's productivity has skyrocketed. The collaborative to the features and real-time updates keep it in everyone on the same page. We've cut to down on unnecessary meetings and to in emails, allowing us to focus.",
      rating: 5
  
    },
    {
      id: 3,
      name: "Robert Fox",
      title: "Lead Data Scientist, BitComp",
      quote: "Hubit has revolutionized the way we have manage tasks. The intuitive interface and seamless task organization have made in our workflow smoother than ever.",
      rating: 5
    },
    {
      id: 4,
      name: "Jacob Jones",
      title: "Product Manager, Leap Labs",
      quote: "Hubit has revolutionized the way we have manage tasks. The intuitive interface and seamless task organization have made in our workflow smoother than ever.",
      rating: 5
    },
    {
      id: 5,
      name: "Wade Warren",
      title: "Director, DataSystems LLC",
      quote: "Thanks to Hubit, our team's productivity has skyrocketed. The collaborative to the features and real-time updates keep it in everyone on the same page. We've cut to down on unnecessary meetings and to in emails, allowing us to focus.",
      rating: 5
    },
    {
      id: 6,
      name: "Albert Flores",
      title: "CFO, NumberNerds",
      quote: "Hubit has revolutionized the way we have manage tasks. The intuitive interface and seamless task organization have made in our workflow smoother than ever.",
      rating: 5
    },
    {
      id: 7,
      name: "Eleanor Pena",
      title: "CTO, PlanIt Systems",
      quote: "Hubit has revolutionized the way we have manage tasks. The intuitive interface and seamless task organization have made in our workflow smoother than ever.",
      rating: 5
    },
    {
      id: 8,
      name: "Cody Fisher",
      title: "Founder, ContractCore LLC",
      quote: "Thanks to Hubit, our team's productivity has skyrocketed. The collaborative to the features and real-time updates keep it in everyone on the same page. We've cut to down on unnecessary meetings and to in emails, allowing us to focus.",
      rating: 5
    },
    {
      id: 9,
      name: "Jane Cooper",
      title: "CMO, Purple Pixel Studio",
      quote: "Hubit has revolutionized the way we have manage tasks. The intuitive interface and seamless task organization have made in our workflow smoother than ever.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
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
          <p className="text-gray-600 mb-4">Reviews from people</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Trusted by 23,000+ happy customers
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
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 text-sm font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 truncate">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm truncate">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-900 mb-4 leading-relaxed">
                {testimonial.quote}
              </blockquote>

              {/* Star Rating */}
              <div className="flex items-center space-x-1">
                {renderStars(testimonial.rating || 5)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
