import React from 'react'
import { motion } from 'framer-motion'
import { FaUniversity, FaLaptopCode, FaRocket } from 'react-icons/fa'

const About = () => {
  const experiences = [
    {
      icon: FaUniversity,
      title: 'IIM Bangalore Intern',
      description: 'Working on experimental economics projects using oTree and Django framework.',
      color: 'text-neon-blue',
    },
    {
      icon: FaLaptopCode,
      title: 'Full-Stack Developer',
      description: 'Built multiple end-to-end web applications using modern tech stacks.',
      color: 'text-neon-purple',
    },
    {
      icon: FaRocket,
      title: 'ML/DL Projects',
      description: 'Developed various machine learning and deep learning models for real-world problems.',
      color: 'text-neon-pink',
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm an aspiring software developer with a passion for creating innovative solutions 
              that bridge the gap between cutting-edge technology and real-world applications. 
              My journey in tech is driven by curiosity and a desire to constantly learn and evolve.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Currently, I'm diving deep into the worlds of <span className="text-neon-blue font-semibold">Machine Learning</span> and 
              <span className="text-neon-purple font-semibold"> Deep Learning</span>, exploring how AI can transform 
              the way we solve complex problems. From neural networks to full-stack applications, 
              I love the challenge of bringing ideas to life through code.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new frameworks, contributing to open-source 
              projects, or learning about the latest developments in AI and software engineering.
            </p>
          </motion.div>

          {/* Right - Experience Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="glow-border rounded-lg p-6 bg-gray-900/50 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <exp.icon className={`text-4xl ${exp.color} mt-1`} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About