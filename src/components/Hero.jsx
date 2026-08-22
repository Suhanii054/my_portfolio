import React from 'react'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import Terminal from './Terminal'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Left Side - Text */}
        <div>
          {/* Breadcrumb */}
          <p className="font-mono text-xs md:text-sm text-accent tracking-widest mb-6">
            SUHANI_ACHARYA / AI_ENGINEER_V1.0
          </p>

          {/* Heading */}
          <h1 className="text-glow text-4xl md:text-6xl font-display font-extrabold uppercase leading-[1.05] mb-6 text-accent">
            Engineering Intelligent<br />
            Systems &amp; Software
          </h1>

          {/* Description */}
          <p className="text-gray-300 font-body text-base md:text-lg mb-8 max-w-lg leading-relaxed border-l-2 border-accent/50 pl-4">
            B.Tech AI candidate at NIT Surat building full-stack platforms and
            applied ML systems — from agentic forecasting pipelines to
            vision-transformer deepfake detection.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-sm bg-accent text-ink font-display font-extrabold text-sm uppercase tracking-wide shadow-[0_0_15px_rgba(255,176,202,0.3)] hover:shadow-[0_0_25px_rgba(255,176,202,0.5)] hover:bg-white transition-all duration-300"
            >
              Explore Work
              <FaArrowRight />
            </a>
            <a
              href="https://github.com/Suhanii054"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-sm border border-edge text-gray-300 font-mono text-sm uppercase tracking-wider hover:border-accent hover:text-accent transition-colors duration-300"
            >
              <FaGithub />
              View Source
            </a>
          </div>
        </div>

        {/* Right Side - Abstract technical panel */}
        <div className="relative flex items-center justify-center">
          <div className="tech-panel relative w-full max-w-xl h-[420px] sm:h-[460px] md:h-[520px] overflow-hidden">
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent z-10 pointer-events-none"></div>

            <Terminal />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
