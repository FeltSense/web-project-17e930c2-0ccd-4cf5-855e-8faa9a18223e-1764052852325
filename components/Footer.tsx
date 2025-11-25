import { Dumbbell, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-600 p-2 rounded-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">FitForce</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transform your body, elevate your mind. Join the ultimate fitness community.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-600 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Programs', href: '#programs' },
                { label: 'Classes', href: '#classes' },
                { label: 'Trainers', href: '#trainers' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'About Us', href: '#about' },
                { label: 'Success Stories', href: '#testimonials' }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="hover:text-orange-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-600 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-600 -mb-2"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <span className="group-hover:text-white transition-colors duration-300">
                  123 Fitness Street<br />New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <a href="tel:+15551234567" className="group-hover:text-orange-500 transition-colors duration-300">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <a href="mailto:info@fitforce.com" className="group-hover:text-orange-500 transition-colors duration-300">
                  info@fitforce.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & CTA */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Gym Hours
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-600 -mb-2"></span>
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Mon - Fri</p>
                  <p className="text-gray-400">5:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Sat - Sun</p>
                  <p className="text-gray-400">7:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
            <a 
              href="#pricing"
              className="block w-full bg-orange-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/50 hover:scale-105"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} FitForce Gym. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}