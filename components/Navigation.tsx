'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">FF</span>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Fit<span className="text-orange-500">Force</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-orange-500 font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-orange-500 font-medium transition-colors duration-300 px-2 py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 text-center transition-colors duration-300"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}