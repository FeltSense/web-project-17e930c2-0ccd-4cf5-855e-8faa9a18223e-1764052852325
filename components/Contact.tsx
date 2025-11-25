'use client'

import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const formObject: any = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: '17e930c2-0ccd-4cf5-855e-8faa9a18223e',
          founder_id: '',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) { 
      setStatus('error'); 
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: '123 Fitness Avenue, Downtown',
      subDetail: 'City, State 12345'
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '(555) 123-4567',
      subDetail: 'Mon-Fri 6AM-10PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'info@fitforce.com',
      subDetail: 'We reply within 24hrs'
    },
    {
      icon: Clock,
      title: 'Hours',
      detail: 'Mon-Fri: 6AM-10PM',
      subDetail: 'Sat-Sun: 8AM-8PM'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-orange-600">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your fitness journey? Reach out and let's make it happen together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-orange-600/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                      <p className="text-gray-300 text-sm">{info.detail}</p>
                      <p className="text-gray-500 text-xs mt-1">{info.subDetail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email and Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email <span className="text-orange-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone <span className="text-gray-500 text-sm">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message <span className="text-orange-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all resize-none"
                    placeholder="Tell us about your fitness goals..."
                  ></textarea>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="flex items-center space-x-3 p-4 bg-green-600/10 border border-green-600/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <p className="text-green-500 text-sm">Message sent successfully! We'll get back to you soon.</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center space-x-3 p-4 bg-red-600/10 border border-red-600/50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-orange-600/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-8 py-6">
            <p className="text-gray-300 mb-3">
              Prefer to visit in person? <span className="text-orange-600 font-semibold">Drop by for a free tour!</span>
            </p>
            <p className="text-gray-500 text-sm">
              Our team is ready to show you around and answer all your questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
