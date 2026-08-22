import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Cursor Light Effect */}
      <div
        className="cursor-light"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />

      {/* Dot Grid Background */}
      <div className="fixed inset-0 grid-background -z-10"></div>

      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-edge">
        <p className="text-gray-500 text-sm font-mono">
          © 2026 SUHANI ACHARYA. ENGINEERED WITH PRECISION.
        </p>
      </footer>
    </div>
  )
}

export default App
