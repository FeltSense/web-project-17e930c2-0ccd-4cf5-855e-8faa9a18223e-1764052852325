'use client';

import { Check, Zap, Crown, Star } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-500 px-4 py-2 rounded-full mb-6 border border-orange-600/30">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">LIMITED TIME OFFER</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Life for
            <span className="text-orange-600"> Less Than a Coffee</span>
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            Join thousands of members crushing their fitness goals
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-orange-600 border-2 border-gray-900"></div>
              <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-gray-900"></div>
              <div className="w-8 h-8 rounded-full bg-orange-400 border-2 border-gray-900"></div>
            </div>
            <span className="text-sm">2,847 members joined this month</span>
          </div>
        </div>
      </section>

      {/* Main Pricing Card */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                <Crown className="w-4 h-4" />
                MOST POPULAR PLAN
              </div>
            </div>

            {/* Main Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border-2 border-orange-600 shadow-2xl relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Left Column - Price & CTA */}
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      All-Access Membership
                    </h2>
                    <p className="text-gray-400 mb-8">
                      Everything you need to succeed
                    </p>

                    {/* Price Display */}
                    <div className="mb-8">
                      <div className="flex items-baseline justify-center md:justify-start gap-2 mb-2">
                        <span className="text-gray-500 line-through text-2xl">$79</span>
                        <span className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">SAVE 63%</span>
                      </div>
                      <div className="flex items-baseline justify-center md:justify-start gap-1">
                        <span className="text-6xl font-bold text-white">$29</span>
                        <span className="text-2xl text-gray-400">/month</span>
                      </div>
                      <p className="text-orange-500 font-semibold mt-2">
                        That's just $0.96 per day!
                      </p>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                      className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-orange-600/50 mb-4 text-lg"
                    >
                      Start Your Transformation
                    </button>
                    <p className="text-sm text-gray-400">
                      ✓ Cancel anytime • No hidden fees • Instant access
                    </p>

                    {/* Trust Indicators */}
                    <div className="mt-8 pt-8 border-t border-gray-700">
                      <div className="flex items-center justify-center md:justify-start gap-1 text-orange-500 mb-2">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <span className="text-white font-bold ml-2">4.9/5</span>
                      </div>
                      <p className="text-sm text-gray-400">
                        Based on 12,483 member reviews
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Features */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-orange-600" />
                      Everything Included:
                    </h3>
                    <ul className="space-y-4">
                      {[
                        'Unlimited access to all gym locations',
                        '500+ group fitness classes monthly',
                        'Personal training session (1x/month)',
                        'State-of-the-art equipment',
                        'Nutrition coaching & meal plans',
                        'Mobile app with workout tracking',
                        'Sauna, steam room & recovery zone',
                        '24/7 facility access',
                        'Guest passes (2x/month)',
                        'No commitment - cancel anytime'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Compare What You're <span className="text-orange-600">Really Getting</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { item: 'Personal Trainer', market: '$200/mo', fitforce: 'Included' },
              { item: 'Nutrition Coaching', market: '$150/mo', fitforce: 'Included' },
              { item: 'Gym Membership', market: '$60/mo', fitforce: 'Included' },
              { item: 'Group Classes', market: '$120/mo', fitforce: 'Included' },
              { item: 'Recovery Facilities', market: '$80/mo', fitforce: 'Included' },
              { item: 'Mobile App', market: '$15/mo', fitforce: 'Included' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-white font-bold mb-4">{item.item}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">Market Price:</span>
                  <span className="text-gray-500 line-through">{item.market}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">FitForce:</span>
                  <span className="text-orange-600 font-bold">{item.fitforce}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center bg-gradient-to-r from-orange-600/20 to-orange-500/20 border border-orange-600/30 rounded-2xl p-8">
            <p className="text-gray-400 mb-2">Total Market Value:</p>
            <p className="text-4xl font-bold text-white mb-2">
              <span className="line-through text-gray-600">$625</span> per month
            </p>
            <p className="text-2xl text-orange-600 font-bold">
              You Pay: $29/month
            </p>
            <p className="text-gray-300 mt-4">
              That's over <span className="text-orange-600 font-bold">95% savings</span> on premium fitness services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Can I really cancel anytime?',
                a: 'Yes! No contracts, no cancellation fees. Cancel online in 30 seconds.'
              },
              {
                q: 'Is this price guaranteed?',
                a: 'Your $29/month rate is locked in as long as you remain a member.'
              },
              {
                q: 'Are there any hidden fees?',
                a: 'Absolutely not. $29/month is all you pay. No enrollment fees, no annual fees.'
              },
              {
                q: 'When can I start?',
                a: 'Immediately! Get instant access to our mobile app and visit any location today.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-white font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Become the <span className="text-orange-600">Best Version</span> of Yourself?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join FitForce today and start your transformation journey
          </p>
          <button
            onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-6 px-12 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-orange-600/50 text-xl"
          >
            Get Started for $29/month
          </button>
          <p className="text-sm text-gray-500 mt-6">
            Over 50,000 members trust FitForce with their fitness journey
          </p>
        </div>
      </section>
    </div>
  );
}
