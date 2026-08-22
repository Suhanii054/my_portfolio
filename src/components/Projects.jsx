import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { ForecastIcon, VisionIcon, CartIcon, WaveIcon } from './ProjectIcons'

const Projects = () => {
  const projects = [
    {
      title: 'FutureLens',
      subtitle: 'Agentic AI Forecasting Platform',
      tag: 'AGENTIC AI',
      Icon: ForecastIcon,
      description:
        'Decision-intelligence system forecasting time-series metrics with a Prophet + LightGBM quantile ensemble. Agentic pipeline (Groq + Gemini) with 10 structured tools for anomaly detection, SHAP root-cause analysis, and scenario simulation.',
      stack: ['Python', 'FastAPI', 'Streamlit', 'Gemini API'],
      github: 'https://github.com/Suhanii054',
    },
    {
      title: 'Fake Face Detection',
      subtitle: 'Vision Transformer Deepfake Classifier',
      tag: 'COMPUTER VISION',
      Icon: VisionIcon,
      description:
        'Deepfake detection system on pretrained vision transformers achieving 91.5% test accuracy and 0.93 F1-score. LoRA-based fine-tuning on CLIP-ViT cut trainable parameters by 80% without losing performance.',
      stack: ['PyTorch', 'CLIP ViT-B/16', 'LoRA', 'Grad-CAM'],
      github: 'https://github.com/Suhanii054',
    },
    {
      title: 'Kashvi Creations',
      subtitle: 'Full-Stack E-Commerce Platform',
      tag: 'FULL-STACK',
      Icon: CartIcon,
      description:
        'Production MERN e-commerce platform with 10+ REST APIs for listings, cart, and checkout. Role-based admin dashboard with 8+ modules — bulk messaging, real-time order tracking, and Cloudinary media management.',
      stack: ['React.js', 'Node.js', 'MongoDB', 'JWT'],
      github: 'https://github.com/Suhanii054',
    },
    {
      title: 'EEG Depression Detection',
      subtitle: 'Published Research — ComSIA 2026, Springer LNNS',
      tag: 'RESEARCH',
      Icon: WaveIcon,
      description:
        'EEG-based classification system combining signal preprocessing with a 1D CNN–BiLSTM hybrid architecture, achieving 96.2% accuracy. Accepted and published at ComSIA 2026.',
      stack: ['Python', 'Signal Processing', 'CNN-BiLSTM'],
      github: 'https://github.com/Suhanii054',
    },
  ]

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-accent tracking-widest mb-3">
            EXECUTION // IMPACT // PRECISION
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            CURATED <span className="text-accent">PROJECTS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="tech-panel group"
            >
              {/* Visual header */}
              <div className="relative h-40 border-b border-edge overflow-hidden grid-background flex items-center justify-center">
                <project.Icon className="w-24 h-24 text-accent/50 group-hover:text-accent/80 transition-colors duration-300" />
                <span className="absolute top-4 left-5 font-mono text-[10px] tracking-widest text-accent border border-accent/50 rounded-sm px-2 py-1 bg-ink/70">
                  {project.tag}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-5 text-gray-500 hover:text-accent transition-colors bg-ink/70 p-2"
                >
                  <FaGithub className="text-lg" />
                </a>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-accent text-sm font-mono mb-4">{project.subtitle}</p>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-mono text-gray-400 border border-edge rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-white hover:text-accent transition-colors"
                >
                  View Repository
                  <FaArrowUpRightFromSquare className="text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/Suhanii054"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-sm bg-accent text-ink font-display font-extrabold text-sm uppercase tracking-wide hover:bg-white transition-colors duration-300"
          >
            <FaGithub className="text-lg" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
