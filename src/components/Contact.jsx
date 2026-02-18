import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here (EmailJS, etc.)
    console.log('Form submitted:', formData)
    alert('Message sent! (This is a demo)')
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'suhaniach25@gmail.com',
      link: 'mailto:suhaniach25@gmail.com',
      color: 'text-neon-blue',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/Suhanii054',
      link: 'https://github.com/Suhanii054',
      color: 'text-neon-purple',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/suhani-acharya-0678342a9/',
      link: 'https://www.linkedin.com/in/suhani-acharya-0678342a9/',
      color: 'text-neon-pink',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Bangalore, India',
      link: null,
      color: 'text-neon-green',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-neon-pink focus:outline-none focus:ring-2 focus:ring-neon-pink/50 transition-all text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glow-border rounded-xl p-8 bg-gray-900/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className={`${info.color} text-2xl mt-1`}>
                      <info.icon />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-neon-blue transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links Card */}
            <div className="glow-border rounded-xl p-8 bg-gray-900/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-white">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: FaGithub, link: 'https://github.com/Suhanii054', color: 'hover:text-neon-blue' },
                  { icon: FaLinkedin, link: 'https://www.linkedin.com/in/suhani-acharya-0678342a9/', color: 'hover:text-neon-purple' },
                  { icon: FaTwitter, link: '#', color: 'hover:text-neon-pink' },
                  { icon: FaEnvelope, link: 'mailto:suhaniach25@gmail.com', color: 'hover:text-neon-green' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`text-3xl text-gray-400 ${social.color} transition-colors duration-300`}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glow-border rounded-xl p-8 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2 text-white">Open to Opportunities</h3>
              <p className="text-gray-300">
                Currently seeking full-time software development roles and exciting freelance projects!
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-neon-green text-sm font-semibold">Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact