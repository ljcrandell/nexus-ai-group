'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Nexus AI Group"
            width={160}
            height={62}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-gray-300 hover:text-white text-sm transition-colors">
            Services
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white text-sm transition-colors">
            Contact
          </Link>
          <Link
            href="#contact"
            className="bg-[#00AEEF] hover:bg-[#0096cc] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B1120] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <Link
            href="#services"
            className="text-gray-300 hover:text-white text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="text-gray-300 hover:text-white text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="#contact"
            className="bg-[#00AEEF] text-white text-sm font-semibold px-5 py-2 rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  )
}
