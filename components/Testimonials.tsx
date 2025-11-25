'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Marcus Johnson",
      role: "Lost 45 lbs in 6 months",
      image: "https://i.pravatar.cc/150?img=12",
      quote: "I've tried every gym in the city, but FitForce is different. The trainers don't just show you exercises—they push you past limits you didn't know you had. The energy here is contagious, and the results speak for themselves.",
      achievement: "45 lbs lost",
      timeframe: "6 months"
    },
    {
      name: "Sarah Chen",
      role: "Marathon Finisher",
      image: "https://i.pravatar.cc/150?img=45",
      quote: "After my knee injury, I thought my running days were over. The team at FitForce created a recovery program that not only got me back on track but made me stronger than before. I just completed my first marathon!",
      achievement: "1st Marathon",
      timeframe: "8 months"
    },
    {
      name: "David Rodriguez",
      role: "Strength Athlete",
      image: "https://i.pravatar.cc/150?img=33",
      quote: "FitForce transformed my entire approach to fitness. It's not just about lifting heavy—it's about proper form, nutrition, and consistency. I've gained 20 lbs of muscle and feel more confident than ever in my 40s.",
      achievement: "+20 lbs muscle",
      timeframe: "1 year"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-wider px-4 py-2 bg-orange-600/10 rounded-full">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real People. Real Results.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it—hear from members who've transformed their lives at FitForce
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Card */}
              <div className={`
                bg-gray-800 rounded-2xl p-8 h-full flex flex-col
                border-2 border-gray-700
                transition-all duration-300
                ${hoveredIndex === index ? 'border-orange-600 shadow-2xl shadow-orange-600/20 -translate-y-2' : ''}
              `}>
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg 
                    className={`w-10 h-10 transition-colors duration-300 ${hoveredIndex === index ? 'text-orange-600' : 'text-orange-600/30'}`}
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote */}
                <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Achievement Badge */}
                <div className="mb-6 flex gap-3">
                  <div className={`
                    px-4 py-2 rounded-lg transition-colors duration-300
                    ${hoveredIndex === index ? 'bg-orange-600' : 'bg-gray-700'}
                  `}>
                    <p className="text-white font-bold text-sm">{testimonial.achievement}</p>
                  </div>
                  <div className="px-4 py-2 bg-gray-700 rounded-lg">
                    <p className="text-gray-300 text-sm">{testimonial.timeframe}</p>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className={`
                      absolute inset-0 rounded-full transition-all duration-300
                      ${hoveredIndex === index ? 'bg-orange-600 scale-110 blur-sm' : 'bg-transparent'}
                    `}></div>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-gray-700 relative z-10"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-orange-600 text-sm font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className={`
                absolute -top-2 -right-2 w-20 h-20 rounded-full
                transition-all duration-300
                ${hoveredIndex === index ? 'bg-orange-600/20 scale-100' : 'bg-transparent scale-0'}
              `}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of members who've already transformed their lives. Your journey starts today.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-xl">
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}