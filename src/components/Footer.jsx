import { motion } from "framer-motion";
import { sekolah } from "../data/spmb";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="var(--footer-bg)"
          />
        </svg>
      </div>

      <div className="footer-content">
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="footer-logo">
            <img src="/logosmkn4.png" alt="Logo SMKN 4" className="footer-logo-img" />
          </div>
          <p className="footer-school">{sekolah.nama}</p>
          <p className="footer-tagline">Unggul · Berkarakter · Berprestasi</p>
        </motion.div>

        <motion.div
          className="footer-contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          <span className="contact-title">📞 Kontak SPMB 2026</span>
          <div className="contact-list">
            <div className="contact-item">
              <span className="contact-label">CP 1</span>
              <a
                href="https://wa.me/6285747871815"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                {sekolah.cp1}
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">CP 2</span>
              <a
                href="https://wa.me/6281914637994"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                {sekolah.cp2}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="footer-info-title">Info Lengkap</p>
          <div className="footer-socmed">
            <span className="socmed-icon">📸</span>
            <span className="socmed-icon">📘</span>
            <span className="socmed-icon">▶️</span>
            <strong className="socmed-handle">{sekolah.sosmed}</strong>
          </div>
          <a
            href={`https://${sekolah.website}`}
            target="_blank"
            rel="noreferrer"
            className="footer-website"
          >
            🌐 {sekolah.website}
          </a>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>
          © {sekolah.tahun} {sekolah.nama} · Informasi SPMB Resmi
        </p>
      </div>
    </footer>
  );
}
