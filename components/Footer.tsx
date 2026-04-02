import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <span className="text-white font-semibold text-lg">
              Nexus <span className="text-[#00AEEF]">AI Group</span>
            </span>
            <span className="text-gray-600 hidden md:inline">·</span>
            <span className="text-sm text-gray-500 italic">Connecting Intelligence.</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link href="#services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="#contact" className="text-[#00AEEF] hover:text-white transition-colors font-medium">
              Book a Call
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Nexus AI Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
