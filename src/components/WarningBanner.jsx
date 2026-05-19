import { motion } from "framer-motion";

export default function WarningBanner() {
  return (
    <section className="warning-section">
      <motion.div
        className="warning-banner"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated shimmer */}
        <div className="warning-shimmer" />

        <div className="warning-content">
          <motion.div
            className="warning-icon"
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
          >
            ⚠️
          </motion.div>

          <div className="warning-text">
            <span className="warning-label">PERINGATAN RESMI</span>
            <p className="warning-message">
              Proses SPMB{" "}
              <strong className="warning-highlight">100% GRATIS!</strong>{" "}
              <strong className="warning-highlight">BEBAS PUNGUTAN!</strong>
            </p>
            <p className="warning-sub">
              Laporkan jika ada pungutan kepada pihak berwenang
            </p>
          </div>

          <motion.div
            className="warning-badge"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            GRATIS
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
