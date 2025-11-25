import Image from 'next/image'

export default function Hero() {
  const stats = [
    { value: '5000+', label: 'Active Members' },
    { value: '50+', label: 'Expert Trainers' },
    { value: '24/7', label: 'Gym Access' }
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Fitness training"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70"></div>
      </div>

      {/* Accent Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-orange-600/20 border border-orange-500/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span className="text-orange-400 font-semibold text-sm">
                #1 Rated Gym in the City
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Unleash Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Inner Strength
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Transform your body, elevate your mind, and dominate your goals with FitForce. 
                <span className="text-orange-400 font-semibold"> Start your 7-day free trial</span> today—no credit card required.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500/40 transform hover:scale-105 transition-all duration-300 text-center"
              >
                Claim Free Trial
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
              <a
                href="#services"
                className="bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-gray-700 hover:border-orange-500 hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 text-center"
              >
                Explore Programs
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80"
                  alt="Strength training"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold">
                  Strength Training
                </div>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=1920&q=80"
                  alt="Cardio workout"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold">
                  Cardio Excellence
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="relative h-80 rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80"
                  alt="Personal training"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold">
                  Personal Training
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&q=80"
                  alt="Group fitness"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold">
                  Group Classes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-gray-400 text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}