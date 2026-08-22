import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      window.location.href = `mailto:suhaniach25@gmail.com?subject=${encodeURIComponent(
        formData.subject || `Portfolio message from ${formData.name}`
      )}&body=${encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`)}`
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || `Portfolio message from ${formData.name}`,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
    }
  }

  const fields = [
    { id: 'name', label: '01 // IDENTIFIER', type: 'text', placeholder: 'Your name' },
    { id: 'email', label: '02 // NETWORK ADDRESS', type: 'email', placeholder: 'you@example.com' },
  ]

  const network = [
    { label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/suhani-acharya-0678342a9/' },
    { label: 'GitHub Repositories', href: 'https://github.com/Suhanii054' },
    { label: 'LeetCode', href: 'https://leetcode.com/' },
  ]

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            INITIATE <span className="text-accent">CONNECTION</span>
          </h2>
          <p className="font-mono text-xs md:text-sm text-accent tracking-widest">
            TRANSMIT YOUR COORDINATES. ESTABLISH DIRECT SECURE COMMUNICATION.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 tech-panel p-6 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {fields.map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block font-mono text-xs text-gray-500 tracking-widest mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-sm bg-ink border border-edge focus:border-accent focus:outline-none transition-all text-white font-mono text-sm"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="subject" className="block font-mono text-xs text-gray-500 tracking-widest mb-2">
                  03 // TRANSMISSION SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-sm bg-ink border border-edge focus:border-accent focus:outline-none transition-all text-white font-mono text-sm"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs text-gray-500 tracking-widest mb-2">
                  04 // PAYLOAD
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-sm bg-ink border border-edge focus:border-accent focus:outline-none transition-all text-white font-mono text-sm resize-none"
                  placeholder="Enter your transmission data here..."
                />
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-sm bg-accent text-ink font-display font-extrabold text-sm uppercase tracking-wide shadow-[0_0_15px_rgba(255,176,202,0.3)] hover:shadow-[0_0_25px_rgba(255,176,202,0.5)] hover:bg-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Transmitting...' : 'Transmit Data'}
                  <FaPaperPlane className="text-xs" />
                </motion.button>

                {status === 'success' && (
                  <span className="font-mono text-xs text-accent">
                    ✓ TRANSMISSION RECEIVED. I'll get back to you soon.
                  </span>
                )}
                {status === 'error' && (
                  <span className="font-mono text-xs text-red-400">
                    ✗ TRANSMISSION FAILED. Email me directly instead.
                  </span>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="tech-panel p-6">
              <p className="font-mono text-xs text-gray-500 tracking-widest mb-2">DIRECT LINE</p>
              <a
                href="mailto:suhaniach25@gmail.com"
                className="text-white hover:text-accent transition-colors break-all"
              >
                suhaniach25@gmail.com
              </a>
            </div>

            <div className="tech-panel p-6">
              <p className="font-mono text-xs text-gray-500 tracking-widest mb-4">GLOBAL NETWORK</p>
              <div className="space-y-3">
                {network.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-accent hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="tech-panel p-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-mono uppercase tracking-wide">Open to opportunities</span>
              </div>
              <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                Seeking full-time software / ML roles and internships.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
