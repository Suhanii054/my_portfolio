import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
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

      {/* Animated Background */}
      <div className="fixed inset-0 grid-background -z-10"></div>
      
      {/* Gradient Orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-800">
        <p className="text-gray-500">
          © 2026 Rudra Suthar. Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  )
}

export default App