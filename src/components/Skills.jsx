import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaGitAlt,
  FaHtml5, FaCss3Alt, FaJs 
} from 'react-icons/fa'
import { 
  SiDjango, SiTensorflow, SiPytorch, SiMongodb, SiPostgresql, 
  SiTailwindcss, SiExpress, SiRedux
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-neon-blue to-cyan-400',
      skills: [
        { name: 'React', icon: FaReact, level: 90 },
        { name: 'JavaScript', icon: FaJs, level: 85 },
        { name: 'HTML/CSS', icon: FaHtml5, level: 95 },
        { name: 'Tailwind', icon: SiTailwindcss, level: 88 },
        { name: 'Redux', icon: SiRedux, level: 80 },
      ],
    },
    {
      title: 'Backend',
      color: 'from-neon-purple to-purple-400',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 85 },
        { name: 'Django', icon: SiDjango, level: 82 },
        { name: 'Express', icon: SiExpress, level: 80 },
        { name: 'Python', icon: FaPython, level: 90 },
      ],
    },
    {
      title: 'Database',
      color: 'from-neon-pink to-pink-400',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 85 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 80 },
        { name: 'SQL', icon: FaDatabase, level: 82 },
      ],
    },
    {
      title: 'ML/DL & Tools',
      color: 'from-neon-green to-green-400',
      skills: [
        { name: 'TensorFlow', icon: SiTensorflow, level: 75 },
        { name: 'PyTorch', icon: SiPytorch, level: 72 },
        { name: 'Docker', icon: FaDocker, level: 70 },
        { name: 'Git', icon: FaGitAlt, level: 88 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glow-border rounded-xl p-6 bg-gray-900/50 backdrop-blur-sm"
            >
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className={`text-2xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills