'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, Users, Trophy, TrendingUp, Clock, Award, Zap, ChevronRight } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('classes');

  const classes = [
    {
      name: 'HIIT Bootcamp',
      time: '6:00 AM',
      instructor: 'Sarah Chen',
      spots: 3,
      intensity: 'High',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80'
    },
    {
      name: 'Power Yoga',
      time: '9:30 AM',
      instructor: 'Mike Torres',
      spots: 7,
      intensity: 'Medium',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80'
    },
    {
      name: 'CrossFit Elite',
      time: '5:00 PM',
      instructor: 'Alex Rivera',
      spots: 2,
      intensity: 'High',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80'
    },
    {
      name: 'Spin & Burn',
      time: '7:00 PM',
      instructor: 'Emma Davis',
      spots: 5,
      intensity: 'High',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80'
    }
  ];

  const trainers = [
    {
      name: 'Marcus Johnson',
      specialty: 'Strength & Conditioning',
      certifications: ['NASM-CPT', 'CSCS', 'Olympic Lifting'],
      experience: '12 years',
      avatar: 'https://i.pravatar.cc/300?img=12',
      clients: 150
    },
    {
      name: 'Jessica Park',
      specialty: 'Weight Loss & Nutrition',
      certifications: ['ACE-CPT', 'Precision Nutrition', 'TRX'],
      experience: '8 years',
      avatar: 'https://i.pravatar.cc/300?img=45',
      clients: 200
    },
    {
      name: 'David Kim',
      specialty: 'Athletic Performance',
      certifications: ['NSCA-CPT', 'FMS', 'Sports Nutrition'],
      experience: '10 years',
      avatar: 'https://i.pravatar.cc/300?img=33',
      clients: 175
    }
  ];

  const memberships = [
    {
      name: 'Starter',
      price: 49,
      features: ['Gym access (off-peak)', '2 group classes/week', 'Basic equipment', 'Locker rental'],
      highlight: false
    },
    {
      name: 'Pro',
      price: 89,
      features: ['24/7 gym access', 'Unlimited group classes', 'All equipment & amenities', '1 PT session/month', 'Nutrition guide'],
      highlight: true
    },
    {
      name: 'Elite',
      price: 149,
      features: ['Everything in Pro', '4 PT sessions/month', 'Custom meal plans', 'Recovery zone access', 'Guest passes (2/month)', 'Priority booking'],
      highlight: false
    }
  ];

  const transformations = [
    {
      name: 'Tom Richards',
      result: '-45 lbs in 6 months',
      before: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
      quote: 'FitForce changed my life. The trainers pushed me beyond what I thought possible.'
    },
    {
      name: 'Rachel Martinez',
      result: 'Marathon ready in 4 months',
      before: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1550259979-ed79b48d2a30?w=800&q=80',
      quote: 'From couch to marathon finisher. The community here is unmatched.'
    },
    {
      name: 'Chris Anderson',
      result: '+20 lbs muscle gain',
      before: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
      quote: 'Built strength I never knew I had. The Elite program is worth every penny.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-600/10 text-orange-500 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">WHAT WE OFFER</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to <span className="text-orange-500">Dominate</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From cutting-edge classes to expert trainers, we've built the ultimate fitness ecosystem
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: 'classes', label: 'Live Classes', icon: Calendar },
            { id: 'trainers', label: 'Expert Trainers', icon: Users },
            { id: 'membership', label: 'Membership Tiers', icon: Trophy },
            { id: 'results', label: 'Success Stories', icon: TrendingUp }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Classes Tab */}
        {activeTab === 'classes' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((classItem, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-orange-600/20 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={classItem.image}
                    alt={classItem.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {classItem.intensity}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">{classItem.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>{classItem.time}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-300 text-sm">{classItem.instructor}</span>
                    <div className="flex items-center gap-1 text-orange-500 text-sm font-semibold">
                      <Users className="w-4 h-4" />
                      <span>{classItem.spots} spots</span>
                    </div>
                  </div>
                  <button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 rounded-lg transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trainers Tab */}
        {activeTab === 'trainers' && (
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:shadow-2xl hover:shadow-orange-600/20 transition-all duration-300 group"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={trainer.avatar}
                    alt={trainer.name}
                    fill
                    className="rounded-full object-cover ring-4 ring-orange-600 group-hover:ring-orange-500 transition-all"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-orange-600 text-white rounded-full p-2">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-1">{trainer.name}</h3>
                <p className="text-orange-500 font-semibold text-center mb-4">{trainer.specialty}</p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>{trainer.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span>{trainer.clients}+ clients trained</span>
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-4 mb-4">
                  <p className="text-xs text-gray-500 mb-2 font-semibold">CERTIFICATIONS</p>
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-900 text-orange-500 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2 group">
                  <span>View Profile</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Membership Tab */}
        {activeTab === 'membership' && (
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {memberships.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-orange-600 to-orange-700 shadow-2xl shadow-orange-600/40 scale-105'
                    : 'bg-gray-800 hover:shadow-xl hover:shadow-orange-600/10'
                }`}
              >
                {plan.highlight && (
                  <div className="bg-white text-orange-600 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.highlight ? 'text-white' : 'text-orange-500'}`}>
                    ${plan.price}
                  </span>
                  <span className={`${plan.highlight ? 'text-orange-100' : 'text-gray-400'}`}>/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className={`rounded-full p-1 mt-0.5 ${plan.highlight ? 'bg-white/20' : 'bg-orange-600/20'}`}>
                        <ChevronRight className={`w-3 h-3 ${plan.highlight ? 'text-white' : 'text-orange-500'}`} />
                      </div>
                      <span className={`text-sm ${plan.highlight ? 'text-white' : 'text-gray-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full font-semibold py-3 rounded-lg transition-all ${
                    plan.highlight
                      ? 'bg-white text-orange-600 hover:bg-gray-100'
                      : 'bg-orange-600 text-white hover:bg-orange-500'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Results Tab */}
        {activeTab === 'results' && (
          <div className="grid md:grid-cols-3 gap-8">
            {transformations.map((story, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-orange-600/20 transition-all duration-300 group"
              >
                <div className="grid grid-cols-2 gap-1 relative">
                  <div className="relative h-64">
                    <Image
                      src={story.before}
                      alt={`${story.name} before`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-gray-900/80 text-white text-xs font-bold px-2 py-1 rounded">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src={story.after}
                      alt={`${story.name} after`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">
                      AFTER
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{story.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className="w-5 h-5 text-orange-500" />
                    <span className="text-orange-500 font-bold">{story.result}</span>
                  </div>
                  <p className="text-gray-400 italic text-sm leading-relaxed">"{story.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Transformation?
          </h3>
          <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
            Join 5,000+ members who are crushing their fitness goals at FitForce
          </p>
          <button className="bg-white text-orange-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">
            Claim Your Free Week Trial
          </button>
        </div>
      </div>
    </section>
  </div>);
}
