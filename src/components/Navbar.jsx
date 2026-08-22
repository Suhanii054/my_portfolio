import React, { useState, useEffect } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const menuItems = ['Skills', 'Projects', 'Contact']

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled || menuOpen ? 'bg-ink/95 backdrop-blur-md border-edge' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-xl md:text-2xl font-display font-extrabold uppercase text-accent tracking-tighter"
          >
            Suhani Acharya
          </a>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-8 font-mono text-sm uppercase tracking-wider">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-accent transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href="/Suhani_Acharya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block px-6 py-2 rounded-sm bg-accent text-ink font-display text-sm font-extrabold uppercase tracking-wide hover:bg-white transition-colors duration-300"
          >
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden text-accent border border-accent rounded-sm p-2.5"
          >
            {menuOpen ? <FaXmark className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden overflow-hidden border-t border-edge bg-ink/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-6 py-4 flex flex-col gap-1 font-mono text-sm uppercase tracking-wider">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-accent py-3 border-b border-edge/60"
            >
              {item}
            </a>
          ))}
          <a
            href="/Suhani_Acharya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-center px-6 py-3 rounded-sm bg-accent text-ink font-display font-extrabold uppercase tracking-wide"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
