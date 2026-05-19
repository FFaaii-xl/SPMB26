import { motion } from "framer-motion";
import { ketentuanKhusus } from "../data/spmb";

export default function SpecialRules() {
  return (
    <section className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-pill">Regulasi</span>
        <h2 className="section-title">Ketentuan Khusus SPMB</h2>
      </motion.div>

      {/* Grid Ketentuan Khusus langsung ditampilkan secara permanen */}
      <div className="special-content-body">
        <div className="rules-grid">
          {ketentuanKhusus.map((item, i) => (
            <motion.div
              key={item.id}
              className="rule-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="rule-icon-wrap">
                <span className="rule-icon">{item.icon}</span>
              </div>
              <div className="rule-body">
                <h3 className="rule-label">{item.label}</h3>
                <p className="rule-isi">{item.isi}</p>
              </div>
              <div className="rule-number">0{i + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
