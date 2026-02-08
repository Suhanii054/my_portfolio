import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaBrain } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span
              className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink 
              bg-clip-text text-transparent
              drop-shadow-[0_0_8px_rgba(184,41,252,0.35)]"
            >
              Suhani Acharya
            </span>
          </motion.h1>

          {/* Education Highlight */}
          <motion.div
            className="flex flex-wrap gap-3 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="px-4 py-1.5 text-sm md:text-base rounded-full 
              border border-neon-blue/50 text-neon-blue
              bg-neon-blue/5 backdrop-blur-sm">
              NIT Surat <span className="text-gray-400">(2023–2027)</span>
            </span>

            <span className="px-4 py-1.5 text-sm md:text-base rounded-full
              bg-gradient-to-r from-neon-purple/20 to-neon-pink/20
              text-neon-purple border border-neon-purple/40">
              Artificial Intelligence
            </span>
          </motion.div>

          {/* Roles */}
          <motion.div
            className="text-xl md:text-2xl text-gray-400 mb-6 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="flex items-center gap-2">
              <FaCode className="text-neon-blue" />
              Aspiring Software Developer
            </p>
            <p className="flex items-center gap-2">
              <FaBrain className="text-neon-purple" />
              ML & Deep Learning Enthusiast
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-gray-300 text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Currently interning at{' '}
            <span className="text-neon-blue font-semibold">IIM Bangalore</span>, 
            working on oTree and Django projects. Passionate about building full-stack 
            applications and exploring the frontiers of AI/ML.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: FaGithub, link: 'https://github.com/Suhanii054', color: 'hover:text-neon-blue' },
              { icon: FaLinkedin, link: 'https://www.linkedin.com/in/suhani-acharya-0678342a9/', color: 'hover:text-neon-purple' },
              { icon: FaEnvelope, link: '#contact', color: 'hover:text-neon-pink' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`text-3xl text-gray-400 ${social.color} transition-colors duration-300`}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-neon-purple rounded-lg font-semibold hover:bg-neon-purple/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Photo with Animated Border */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:flex items-center justify-center"
        >
          <div className="relative w-96 h-96 lg:w-[450px] lg:h-[450px]">
            
            {/* Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-2 border-neon-blue/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-2 border-neon-purple/30 rounded-full m-6"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-2 border-neon-pink/30 rounded-full m-12"
            />

            {/* Photo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute inset-0 m-16 rounded-full overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #00f3ff, #b829fc, #ff2e97, #00f3ff)',
                backgroundSize: '300% 300%',
                animation: 'gradient-rotate 4s ease infinite',
                padding: '4px',
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 relative">
                <img
                  src="/photobang.jpeg"
                  alt="Suhani Acharya"
                  className="w-full h-full object-cover scale-80"
                  style={{ objectPosition: 'center 70%' }}
                />
              </div>
            </motion.div>

            {/* Floating Icons */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 right-8 bg-gray-900 p-4 rounded-full border-2 border-neon-blue shadow-lg shadow-neon-blue/50 z-10"
            >
              <FaCode className="text-3xl text-neon-blue" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-8 -left-2 bg-gray-900 p-4 rounded-full border-2 border-neon-purple shadow-lg shadow-neon-purple/50 z-10"
            >
              <FaBrain className="text-3xl text-neon-purple" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
