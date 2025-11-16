import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🏥 Mediicoss – Generative AI Medical Chatbot',
    desc: 'A medical chatbot built using LangChain and Phi-3 (via Ollama) with a RAG-based architecture. Integrated Pinecone for semantic search to provide accurate, context-aware health responses. Deployed on AWS EC2 with a Flask frontend.',
    ss: '/mamo.png',
    tech: ['Flask', 'LangChain', 'Pinecone', 'AWS', 'Python', 'RAG', 'Phi-3'],
    live: '#',
    code: 'https://github.com/harshtiwariiii/Mediicoss.git'
  },
  {
    title: '🏠 Interior Design Platform',
    desc: 'A full-stack interior-design platform with quizzes, AI-based design feedback, portfolios, and admin CMS. Implemented token authentication, secure uploads, caching, and optimized SQL queries to boost performance.',
    ss: '/ISL.png',
    tech: ['Flask', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    live: '#',
    code: 'https://github.com/harshtiwariiii/Interior-Design.git'
  },
  {
    title: '🍽️ Recipe Website (Django + REST APIs)',
    desc: 'A scalable recipe-sharing web app with authentication, CRUD, search, category filters, and pagination. Built REST APIs using Django REST Framework and improved performance significantly.',
    ss: '/portfolio.jpg',
    tech: ['Django', 'REST Framework', 'HTML', 'CSS', 'JavaScript'],
    live: '#',
    code: 'https://github.com/harshtiwariiii/Receipe.git'
  },
  {
    title: '🎬 Movie Recommendation System (SVD-based)',
    desc: 'Built during ML/AI internship. Processed large datasets, performed preprocessing, and implemented collaborative filtering using SVD, improving accuracy by 15%.',
    ss: '/mentalhealth.jpg',
    tech: ['Python', 'NumPy', 'Pandas', 'Scikit-Learn', 'SVD'],
    live: '#',
    code: '#'
  },
  {
    title: '🧭 AI Career Compass',
    desc: 'Built a full-stack career-guidance platform for AI/ML professionals, integrating a dedicated frontend, backend, data-analysis module and ML-based recommendation engine to help users map their skills, find growth paths and receive tailored suggestions.',
    ss: '/mamo.png',
    tech: ['Python', 'API Development', 'Frontend Web UI', 'Data Analytics', 'Machine Learning', 'Full-stack Architecture'],
    live: '#',
    code: 'https://github.com/harshtiwariiii/ai-career-compass.git'
  },
  {
    title: '🐔 Automated Poultry Counter',
    desc: 'A smart real-time system built to detect and count poultry (hens) using computer vision and deep learning. Uses YOLO-style object detection trained on a custom dataset with Roboflow, tracks them through frames to avoid double-counting, and logs counts via CSV. Designed for poultry-farm automation and monitoring.',
    ss: '/ISL.png',
    tech: ['Python', 'YOLO', 'PyTorch', 'OpenCV', 'NumPy', 'Data Logging', 'Edge-device'],
    live: '#',
    code: 'https://github.com/harshtiwariiii/Automated-Poultry-Counter.git'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — Full-stack development, AI/ML innovation, and cloud deployment.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
