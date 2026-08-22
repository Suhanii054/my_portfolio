import React, { useState, useRef, useEffect } from 'react'

const COMMANDS = ['whoami', 'skills', 'experience', 'education', 'projects', 'achievements', 'contact', 'resume', 'clear', 'help']

const buildOutput = (raw, { navigate }) => {
  const cmd = raw.trim().toLowerCase()

  switch (cmd) {
    case 'help':
      return [
        'Available commands:',
        '  whoami        — quick bio',
        '  skills        — technical stack',
        '  experience    — internships',
        '  education     — academic background',
        '  projects      — featured builds',
        '  achievements  — awards & recognition',
        '  contact       — how to reach me',
        '  resume        — open the PDF',
        '  clear         — clear the terminal',
      ]
    case 'whoami':
      return [
        'suhani_acharya — B.Tech Artificial Intelligence, NIT Surat (CGPA 7.62/10)',
        'Full-stack engineer + applied ML. Currently building agentic AI systems',
        'and production web platforms. Based in Surat, India.',
      ]
    case 'skills':
      return [
        'LANGUAGES & CORE CS   C++, Python, JavaScript · OOP, DBMS, OS, CN',
        'AI / ML & DATA        Machine Learning, Deep Learning, GenAI, LLMs',
        'FULL-STACK & TOOLS    MERN, REST APIs, FastAPI, Django, Git',
      ]
    case 'experience':
      return [
        '[MAY 2026 — JUL 2026]  Software Engineering & ML Intern @ Kolsite Group of Industries',
        '[JUN 2025 — APR 2026]  AI Research & Engineering Intern @ IIM Bangalore',
      ]
    case 'education':
      return [
        'NIT Surat — B.Tech Artificial Intelligence (2023–2027), CGPA 7.62/10',
        'Kendriya Vidyalaya, Vadodara — Class 12, 90.4%',
        'Gujarat Public School, Vadodara — Class 10, 95.6%',
      ]
    case 'projects':
      return [
        'FutureLens            — Agentic AI forecasting platform (Prophet + LightGBM + Gemini)',
        'Fake Face Detection    — ViT deepfake classifier, 91.5% accuracy, LoRA fine-tuned',
        'Kashvi Creations       — Full-stack MERN e-commerce platform',
        'EEG Depression Detect. — Published research, ComSIA 2026 (Springer LNNS), 96.2% acc.',
        "→ scroll to 'Curated Projects' for details, or run 'contact' for GitHub.",
      ]
    case 'achievements':
      return [
        '★ Amazon ML Summer School 2026 — selected from 1,30,000+ applicants',
        '★ Published research paper — ComSIA 2026, Springer LNNS',
        '★ Winner, Web Wonders Hackathon (Nexus, SVNIT) — 1st / 10 teams',
        '★ Flipkart Grid — top 1,600 of 10,000+ teams',
        '★ 2nd Runner-Up, Adani AI Hackathon',
      ]
    case 'contact':
      return [
        'email    suhaniach25@gmail.com',
        'github   github.com/Suhanii054',
        'linkedin linkedin.com/in/suhani-acharya-0678342a9',
        "→ run 'sudo hire me' if you mean business.",
      ]
    case 'resume':
      window.open('/Suhani_Acharya_Resume.pdf', '_blank')
      return ['Opening resume.pdf in a new tab...']
    case 'sudo hire me':
      navigate('#contact')
      return ['Permission granted. Redirecting to #contact...']
    case '':
      return []
    default:
      return [`command not found: ${raw}. Type 'help' for available commands.`]
  }
}

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: 'output', lines: ["Welcome to SUHANI_ACHARYA v1.0.4. Type 'help' to see available commands."] },
  ])
  const [input, setInput] = useState('')
  const [cmdLog, setCmdLog] = useState([])
  const [logIndex, setLogIndex] = useState(-1)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  const navigate = (hash) => {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const runCommand = (raw) => {
    const trimmed = raw.trim()
    const lines = buildOutput(trimmed, { navigate })

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([])
      return
    }

    setHistory((h) => [
      ...h,
      { type: 'input', lines: [trimmed] },
      ...(lines.length ? [{ type: 'output', lines }] : []),
    ])
    if (trimmed) {
      setCmdLog((log) => [...log, trimmed])
      setLogIndex(-1)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!cmdLog.length) return
      const nextIndex = logIndex === -1 ? cmdLog.length - 1 : Math.max(0, logIndex - 1)
      setLogIndex(nextIndex)
      setInput(cmdLog[nextIndex])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (logIndex === -1) return
      const nextIndex = logIndex + 1
      if (nextIndex >= cmdLog.length) {
        setLogIndex(-1)
        setInput('')
      } else {
        setLogIndex(nextIndex)
        setInput(cmdLog[nextIndex])
      }
    }
  }

  return (
    <div
      className="w-full h-full flex flex-col cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-edge shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-edge" />
        <span className="w-2.5 h-2.5 rounded-full bg-edge" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
        <span className="ml-2 font-mono text-[11px] text-gray-500 tracking-widest">suhani@dev:~</span>
      </div>

      {/* Output */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 font-mono text-[12px] leading-relaxed">
        {history.map((entry, i) => (
          <div key={i} className="mb-1">
            {entry.lines.map((line, j) =>
              entry.type === 'input' ? (
                <p key={j} className="text-white">
                  <span className="text-accent">➜ </span>
                  {line}
                </p>
              ) : (
                <p key={j} className="text-gray-400 whitespace-pre-wrap">
                  {line}
                </p>
              )
            )}
          </div>
        ))}

        {/* Input line */}
        <div className="flex items-center gap-2 text-white">
          <span className="text-accent">➜</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck="false"
            className="flex-1 bg-transparent outline-none font-mono text-[12px] text-white placeholder:text-gray-600"
            placeholder="type a command..."
          />
        </div>
      </div>

      {/* Suggestion chips */}
      <div className="flex flex-wrap gap-1.5 px-4 py-2.5 border-t border-edge shrink-0">
        {COMMANDS.map((cmd) => (
          <button
            key={cmd}
            onClick={(e) => {
              e.stopPropagation()
              runCommand(cmd)
              inputRef.current?.focus()
            }}
            className="px-2 py-0.5 text-[10px] font-mono rounded-sm border border-edge text-gray-500 hover:border-accent hover:text-accent transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Terminal
