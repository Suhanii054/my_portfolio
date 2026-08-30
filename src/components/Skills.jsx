import React from 'react'
import { motion } from 'framer-motion'
import my_picture from '../assets/my_image_portrait.jpg'

const Skills = () => {
  const skillCategories = [
    { name: 'Languages & Core CS', detail: 'C++, Python, JavaScript, OOP, DBMS, OS, CN', level: 92 },
    { name: 'AI / ML & Data', detail: 'Machine Learning, Deep Learning, GenAI, LLMs', level: 88 },
    { name: 'Full-Stack & Tools', detail: 'MERN, REST APIs, FastAPI, Django, Git', level: 90 },
  ]

  const experience = [
    {
      period: 'MAY 2026 — JUL 2026',
      role: 'Software Engineering & ML Intern',
      org: 'Kolsite Group of Industries',
      description:
        'Built an OCR-based document digitization pipeline with Google Cloud Vision API, cross-platform barcode scanning apps, and a predictive maintenance ML model for IIoT condition monitoring.',
    },
    {
      period: 'JUN 2025 — APR 2026',
      role: 'AI Research & Engineering Intern',
      org: 'Indian Institute of Management Bangalore',
      description:
        'Architected a GenAI-powered behavioral experiment platform (Python, oTree, OpenAI API) launched with 400+ participants; led backend design for real-time dashboards and 10k+ record data pipelines.',
    },
  ]

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-accent tracking-widest mb-3">
            &gt; INITIALIZING BIODATA PROTOCOL...
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            SYSTEM <span className="text-accent">OVERVIEW</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="tech-panel p-6 md:p-8 flex flex-col h-full"
          >
            <p className="font-mono text-xs text-gray-500 tracking-widest mb-4">01_PROFILE.md</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              B.Tech Artificial Intelligence candidate at NIT Surat, building
              production-grade full-stack platforms and applied ML systems —
              from agentic forecasting pipelines to vision-transformer deepfake detection.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Selected for <span className="text-accent font-semibold">Amazon ML Summer
              School 2026</span> from 130,000+ applicants — alongside a published research
              paper (Springer LNNS) and multiple hackathon wins. I care about systems that
              are technically rigorous and genuinely useful.
            </p>
            <div className="flex-1 flex gap-6 min-h-[220px]">
              <div className="w-2/5 shrink-0 overflow-hidden rounded-sm border border-edge">
                <img
                  src={my_picture}
                  alt="Suhani Acharya"
                  className="w-full h-full object-cover"
                  style={{ filter: 'contrast(1.05) saturate(0.9)' }}
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                {[
                  { label: 'NAME', value: 'Suhani Acharya' },
                  { label: 'LOCATION', value: 'Surat, India' },
                  { label: 'EDUCATION', value: "NIT Surat '27" },
                  { label: 'FOCUS', value: 'AI + Full-Stack' },
                ].map((row) => (
                  <div key={row.label} className="border-b border-edge pb-2">
                    <p className="font-mono text-[10px] text-gray-500 tracking-widest mb-1">{row.label}</p>
                    <p className="font-mono text-sm text-white">{row.value}</p>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-[11px] text-accent tracking-wide">OPEN TO WORK</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Skills + Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Skills */}
            <div className="tech-panel p-6 md:p-8">
              <p className="font-mono text-xs text-gray-500 tracking-widest mb-6">M_SKILLS_NOTED</p>
              <div className="space-y-5">
                {skillCategories.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-sm text-white uppercase tracking-wide">{skill.name}</span>
                      <span className="font-mono text-xs text-accent">{skill.level}%</span>
                    </div>
                    <p className="text-gray-500 text-xs mb-2">{skill.detail}</p>
                    <div className="w-full h-1 rounded-sm bg-edge overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="tech-panel p-6 md:p-8">
              <p className="font-mono text-xs text-gray-500 tracking-widest mb-6">02_EXPERIENCE_LOG</p>
              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={i > 0 ? 'pt-6 border-t border-edge' : ''}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-white font-display font-bold">{exp.role}</h3>
                        <p className="text-accent text-sm font-mono">{exp.org}</p>
                      </div>
                      <span className="font-mono text-[10px] md:text-xs text-gray-500 whitespace-nowrap mt-1">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
