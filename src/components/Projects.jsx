import React from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaFilePdf,
  FaTrophy,
} from 'react-icons/fa6'
import {
  ForecastIcon,
  VisionIcon,
  CartIcon,
  WaveIcon,
  GridIcon,
  TrafficIcon,
  CloudIcon,
  GraphIcon,
} from './ProjectIcons'

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
      live: 'https://futurelens.streamlit.app/',
    },
    {
      title: 'Adani AI Energy Forecasting',
      subtitle: 'Multi-Agent Energy Decision-Support Dashboard',
      tag: 'AGENTIC AI',
      Icon: GridIcon,
      award: '2nd Runner-Up · Adani AI Hackathon',
      description:
        'End-to-end electricity-demand forecasting dashboard pairing a LightGBM engine (Fourier seasonality, 1h–336h lag features) with a strict 4-agent LLM pipeline (Gemini + Groq Llama-3) that explains the "why" behind each forecast. Includes What-If simulation, context-aware range chat, and a live 3D grid digital twin.',
      stack: ['Next.js 14', 'FastAPI', 'LightGBM', 'Three.js'],
      github: 'https://github.com/Suhanii054/Zero-Gravity',
      live: 'https://zerogravity-energy-forecasting-gw3c.vercel.app/',
    },
    {
      title: 'Flipkart Gridlock',
      subtitle: 'Traffic Violation Prediction — Flipkart GRiD',
      tag: 'ML / GEOSPATIAL',
      Icon: TrafficIcon,
      award: 'Top 1,600 / 10,000+ Teams · Flipkart GRiD',
      description:
        'Bengaluru traffic-violation heatmap with two complementary LightGBM engines: a Poisson model ranking expected violation count and a Tweedie model ranking expected severity score (vehicle PCU × road weight × hazard class). FastAPI backend with explainable per-location predictions over 6,300+ locations.',
      stack: ['LightGBM', 'FastAPI', 'Pandas', 'JavaScript'],
      github: 'https://github.com/Suhanii054/Flipkart-Gridlock-Traffic-Prediction',
      live: 'https://frontend-grid-380107538485.us-central1.run.app/',
    },
    {
      title: 'Cortex',
      subtitle: 'Industrial Knowledge Intelligence — Hybrid GraphRAG',
      tag: 'GRAPHRAG',
      Icon: GraphIcon,
      description:
        'Safety-first knowledge platform for heavy-asset plants that fuses OEM manuals, SOPs, and incident RCAs into a structurally-aware Neo4j knowledge graph. Hybrid retrieval (dense + BM25 + graph, RRF-fused) with a deterministic Safety Veto, a Contradiction Sentinel that flags conflicting parameters across sources, and traceable decision-replay of every graph traversal. 100% on-device embeddings.',
      stack: ['FastAPI', 'Neo4j', 'React 18', 'Groq Llama-3'],
      github: 'https://github.com/Suhanii054/Cortex-AI',
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
      paper:
        'https://drive.google.com/file/d/16evxkGjavMhc2aovZOndYMXe7Ah-SKgp/view',
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
      paper:
        'https://drive.google.com/file/d/1i_Sgd8rKhIYAIblTwFJgUOYoAgMqlnjK/view',
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
      live: 'https://www.kashvicreations.me/',
    },
    {
      title: 'Cloud-Based AI Quiz System',
      subtitle: 'Serverless Multi-Cloud Quiz Platform',
      tag: 'CLOUD',
      Icon: CloudIcon,
      description:
        'Serverless quiz platform spanning AWS and Google Cloud with no backend server — the React SPA talks directly to Firebase Auth/Firestore and AWS DynamoDB via official SDKs. Gemini 1.5 Flash generates balanced 10-question quizzes on any topic, with a live cloud-activity panel and real-time Firestore leaderboard.',
      stack: ['React 19', 'Firebase', 'AWS DynamoDB', 'Gemini API'],
      github: 'https://github.com/Suhanii054/Cloud-Based-Online-Quiz-System',
    },
  ]

  const isRepo = (url) => /github\.com\/[^/]+\/.+/.test(url)

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
                <div className="absolute top-4 right-5 flex items-center gap-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="text-gray-500 hover:text-accent transition-colors bg-ink/70 p-2"
                    >
                      <FaArrowUpRightFromSquare className="text-base" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="text-gray-500 hover:text-accent transition-colors bg-ink/70 p-2"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                </div>
                {project.award && (
                  <span className="absolute bottom-4 left-5 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-ink bg-accent rounded-sm px-2 py-1">
                    <FaTrophy className="text-[11px]" />
                    {project.award}
                  </span>
                )}
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

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-mono text-white hover:text-accent transition-colors"
                  >
                    {isRepo(project.github) ? 'View Repository' : 'View GitHub'}
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-mono text-white hover:text-accent transition-colors"
                    >
                      Live Demo
                      <FaArrowUpRightFromSquare className="text-xs" />
                    </a>
                  )}
                  {project.paper && (
                    <a
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-mono text-white hover:text-accent transition-colors"
                    >
                      Read Paper
                      <FaFilePdf className="text-xs" />
                    </a>
                  )}
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
