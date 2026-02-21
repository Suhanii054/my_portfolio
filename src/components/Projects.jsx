import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython, FaBrain, FaServer } from 'react-icons/fa'
import { SiDjango, SiTensorflow, SiMongodb, SiPostgresql } from 'react-icons/si'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Full Stack Platform',
      description:
        'Production-ready MERN e-commerce platform with secure authentication, payment integration, and admin analytics dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      icons: [FaReact, FaServer, SiMongodb],
      gradient: 'from-neon-blue to-cyan-500',
      github: '#',
      demo: '#',
    },
    {
      title: 'oTree Experimental Platform (IIM Bangalore)',
      description:
        'Behavioral economics experiment framework built using Django and oTree with structured participant logging, treatment randomization, and PostgreSQL-backed data pipelines.',
      tags: ['Django', 'Python', 'PostgreSQL', 'oTree'],
      icons: [SiDjango, FaPython, SiPostgresql],
      gradient: 'from-neon-purple to-purple-500',
      github: '#',
      demo: '#',
    },
    {
      title: 'EEG-Based Depression Detection (Published)',
      description:
        'Research-driven EEG classification system using the 128-channel MODMA dataset. Combined signal preprocessing with ML benchmarking and a 1D CNN–BiLSTM hybrid, achieving 96.2% accuracy and 0.95 balanced F1-score (ComSIA 2026, Springer LNNS).',
      tags: ['Python', 'Signal Processing', 'XGBoost', 'CNN-BiLSTM'],
      icons: [FaPython, FaBrain],
      gradient: 'from-neon-pink to-pink-500',
      github: '#',
      demo: '#',
    },
    {
      title: 'Fake Face Detection using Vision Transformers',
      description:
        'Deepfake detection pipeline leveraging pretrained Vision Transformers and parameter-efficient fine-tuning (LoRA). Achieved 91.5% test accuracy with structured model comparison and visual explainability analysis.',
      tags: ['PyTorch', 'ViT', 'CLIP', 'LoRA'],
      icons: [FaPython, FaBrain],
      gradient: 'from-yellow-400 to-orange-500',
      github: '#',
      demo: '#',
    },
    {
      title: 'Smart Traffic Signal Control (Computer Vision)',
      description:
        'AI-powered adaptive traffic control system using YOLOv8 for real-time vehicle detection and density-based signal optimization. Designed modular state-machine logic for multi-intersection scalability.',
      tags: ['Python', 'OpenCV', 'YOLOv8', 'Computer Vision'],
      icons: [FaPython, FaBrain],
      gradient: 'from-neon-green to-green-500',
      github: '#',
      demo: '#',
    },
    {
      title: 'Real-Time Chat Application',
      description:
        'WebSocket-driven chat system with authentication, room-based messaging, typing indicators, and persistent message storage.',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      icons: [FaReact, FaServer, SiMongodb],
      gradient: 'from-indigo-400 to-purple-600',
      github: '#',
      demo: '#',
    },
  ]
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my full-stack web development and machine learning projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glow-border rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm group"
            >
              {/* Project Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6">
                {/* Icons */}
                <div className="flex gap-3 mb-4">
                  {project.icons.map((Icon, i) => (
                    <Icon key={i} className={`text-3xl bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} />
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-neon-purple transition-colors"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Suhanii054"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300"
          >
            <FaGithub className="text-xl" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects