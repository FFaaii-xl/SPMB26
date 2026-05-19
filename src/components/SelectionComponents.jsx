import { motion } from "framer-motion";
import { komponenSeleksi } from "../data/spmb";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function SelectionComponents() {
  return (
    <section className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-pill">Seleksi</span>
        <h2 className="section-title">Komponen Seleksi Utama</h2>
        <p className="section-desc">
          Tiga komponen penilaian resmi yang menentukan kelulusan peserta SPMB
        </p>
      </motion.div>

      <div className="cards-grid">
        {komponenSeleksi.map((item, i) => (
          <motion.div
            key={item.id}
            className="seleksi-card"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            style={{ "--card-color": item.warna, "--card-glow": item.warnaGlow }}
          >
            {/* Glow orb */}
            <div className="card-glow-orb" />

            {/* Icon circle */}
            <div className="card-icon-wrap">
              <span className="card-icon">{item.icon}</span>
              <div className="card-icon-ring" />
            </div>

            {/* Step number */}
            <div className="card-step">{String(i + 1).padStart(2, "0")}</div>

            <h3 className="card-title">{item.judul}</h3>

            <div className="card-divider" />

            <p className="card-keterangan">
              <strong>Keterangan:</strong> {item.keterangan}
            </p>

            {/* Bottom accent bar */}
            <div className="card-accent-bar" />
          </motion.div>
        ))}

        {/* Rumus Nilai Akhir Card */}
        <motion.div
          className="formula-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <div className="formula-accent-line" />
          <div className="formula-header">
            <span className="formula-icon-circle">⚖️</span>
            <h3 className="formula-title">Rumus Penilaian Nilai Akhir (NA)</h3>
          </div>
          <div className="formula-math-box">
            <code className="formula-code">NA = (50% × NR) + (50% × NTKA) + NK + NO</code>
          </div>
          <div className="formula-legend-grid">
            <div className="formula-legend-item">
              <span className="legend-label">NR</span>
              <span className="legend-desc">Rerata Rapor Smt 1-5</span>
            </div>
            <div className="formula-legend-item">
              <span className="legend-label">NTKA</span>
              <span className="legend-desc">Rerata Tes Akademik</span>
            </div>
            <div className="formula-legend-item">
              <span className="legend-label">NK</span>
              <span className="legend-desc">Nilai Piagam Kejuaraan</span>
            </div>
            <div className="formula-legend-item">
              <span className="legend-label">NO</span>
              <span className="legend-desc">Nilai Ketua Organisasi</span>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
