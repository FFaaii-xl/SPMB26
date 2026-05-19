import { motion } from "framer-motion";
import { sekolah } from "../data/spmb";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="particle" style={{ "--i": i }} />
        ))}
      </div>

      {/* Decorative top strip */}
      <div className="hero-stripe" />

      <div className="hero-content">
        {/* Logo Image */}
        <motion.div
          className="hero-logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
        >
          <img src="/logosmkn4.png" alt="Logo SMKN 4" className="logo-img" />
        </motion.div>

        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          ✦ Informasi Resmi ✦
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="title-highlight">INFORMASI SPMB</span>
          <span className="title-year">{sekolah.tahun}</span>
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {sekolah.nama}
        </motion.h2>

        <motion.div
          className="hero-portal-link"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a 
            href="https://spmb.jatengprov.go.id" 
            target="_blank" 
            rel="noreferrer" 
            className="portal-link-btn"
          >
            <span className="portal-icon">🌐</span>
            <span className="portal-text-light">Portal Utama SPMB Jateng:</span>
            <span className="portal-text-bold">spmb.jatengprov.go.id</span>
            <span className="portal-arrow">↗</span>
          </a>
        </motion.div>

        <motion.p
          className="hero-dasar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          Berdasarkan {sekolah.dasar}
        </motion.p>

        {/* Animated divider */}
        <motion.div
          className="hero-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
        />

        {/* Stats ribbon */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Jalur Seleksi</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Gratis</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">2026</span>
            <span className="stat-label">Tahun Ajaran</span>
          </div>
        </motion.div>
      </div>

      {/* Wave bottom */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="var(--bg-primary)"
          />
        </svg>
      </div>
    </section>
  );
}
