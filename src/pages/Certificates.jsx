import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Certificates data (added URLs for View button)
const CERTS = {
  tech: [
    {
      title: "AWS Certified Cloud Practitioner Essentials",
      org: "AWS",
      date: "2025",
      img: "/certs/aws-cloud-practitioner.png",
      link: "/certs/aws-cloud-practitioner.png",
    },
    {
      title: "The Complete Python Developer",
      org: "Udemy",
      date: "2025",
      img: "/certs/udemy-python-developer.png",
      link: "/certs/udemy-python-developer.png",
    },
    {
      title: "Getting Started with Docker",
      org: "Simplilearn SkillUp",
      date: "2025",
      img: "/certs/docker-simplilearn.png",
      link: "/certs/docker-simplilearn.png",
    },
    {
      title: "Certificate of Internship - Full Stack Development",
      org: "Naiyo24 Private Limited",
      date: "2025",
      img: "/certs/naiyo24-internship.png",
      link: "/certs/naiyo24-internship.png",
    },
    {
      title: "AWS Innovate Week",
      org: "CloudThat & UPES",
      date: "2025",
      img: "/certs/aws-innovate-week.png",
      link: "/certs/aws-innovate-week.png",
    },
    {
      title: "Career Development Workshop",
      org: "CloudThat & UPES",
      date: "2025",
      img: "/certs/career-development-workshop.png",
      link: "/certs/career-development-workshop.png",
    },
    {
      title: "Data Science, Machine Learning and AI using Python",
      org: "Diginique TechLabs",
      date: "2024",
      img: "/certs/diginique-datascience-ml-ai.png",
      link: "/certs/diginique-datascience-ml-ai.png",
    },
  ],
  other: [],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech" : "Others"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.95)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
              cursor: "pointer",
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                onError={(e) => {
                  e.target.src = "/certs/cert1.svg"; // Fallback image
                  console.error("Image not found:", selectedCert.img);
                }}
                style={{
                  maxWidth: "100%",
                  maxHeight: "90vh",
                  borderRadius: 10,
                  boxShadow: "0 0 40px rgba(255,255,255,0.3)",
                  objectFit: "contain",
                  cursor: "default",
                }}
              />
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "0",
                  background: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  fontSize: "24px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#000",
                  fontWeight: "bold",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
