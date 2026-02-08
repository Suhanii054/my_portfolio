import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython, FaBrain, FaServer } from 'react-icons/fa'
import { SiDjango, SiTensorflow, SiMongodb, SiPostgresql } from 'react-icons/si'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Full Stack Platform',
      description: 'A complete e-commerce solution with payment integration, user authentication, and admin dashboard. Built with MERN stack.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      icons: [FaReact, FaServer, SiMongodb],
      gradient: 'from-neon-blue to-cyan-500',
      github: '#',
      demo: '#',
    },
    {
      title: 'oTree Experimental Platform',
      description: 'Behavioral economics experiments platform developed during IIM Bangalore internship using Django and oTree framework.',
      tags: ['Django', 'Python', 'PostgreSQL', 'oTree'],
      icons: [SiDjango, FaPython, SiPostgresql],
      gradient: 'from-neon-purple to-purple-500',
      github: '#',
      demo: '#',
    },
    {
      title: 'Image Classification CNN',
      description: 'Deep learning model for multi-class image classification using Convolutional Neural Networks with 95% accuracy.',
      tags: ['Python', 'TensorFlow', 'CNN', 'Deep Learning'],
      icons: [FaPython, SiTensorflow, FaBrain],
      gradient: 'from-neon-pink to-pink-500',
      github: '#',
      demo: '#',
    },
    {
      title: 'Real-time Chat Application',
      description: 'WebSocket-based real-time chat app with rooms, authentication, and message history. Features include typing indicators and online status.',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      icons: [FaReact, FaServer, SiMongodb],
      gradient: 'from-neon-green to-green-500',
      github: '#',
      demo: '#',
    },
    {
      title: 'Sentiment Analysis API',
      description: 'NLP-powered sentiment analysis tool using LSTM networks. Deployed as REST API with real-time text analysis capabilities.',
      tags: ['Python', 'PyTorch', 'NLP', 'FastAPI'],
      icons: [FaPython, FaBrain],
      gradient: 'from-yellow-400 to-orange-500',
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with Kanban boards, team collaboration, and progress tracking features.',
      tags: ['React', 'Django', 'PostgreSQL', 'Redis'],
      icons: [FaReact, SiDjango, SiPostgresql],
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
            href="https://github.com/RudraSuthar09"
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