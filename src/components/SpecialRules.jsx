import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ketentuanKhusus, jadwalSeleksi } from "../data/spmb";

export default function SpecialRules() {
  const [activeTab, setActiveTab] = useState("rules"); // "rules" or "schedule"

  return (
    <section className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-pill">Regulasi</span>
        <h2 className="section-title">Ketentuan & Jadwal SPMB</h2>
      </motion.div>

      {/* Tab Switcher */}
      <div className="special-tabs-container">
        <button
          onClick={() => setActiveTab("rules")}
          className={`special-tab-btn ${activeTab === "rules" ? "active" : ""}`}
        >
          📜 Ketentuan Khusus
        </button>
        <button
          onClick={() => setActiveTab("schedule")}
          className={`special-tab-btn ${activeTab === "schedule" ? "active" : ""}`}
        >
          📅 Jadwal Kegiatan
        </button>
      </div>

      {/* Dynamic Content Body with AnimatePresence */}
      <div className="special-content-body">
        <AnimatePresence mode="wait">
          {activeTab === "rules" ? (
            <motion.div
              key="rules"
              className="rules-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
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
            </motion.div>
          ) : (
            <motion.div
              key="schedule"
              className="schedule-timeline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {jadwalSeleksi.map((item, i) => (
                <motion.div
                  key={i}
                  className={`timeline-item ${item.status}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="timeline-badge-wrap">
                    <div className="timeline-badge">
                      <span className="timeline-icon">{item.icon}</span>
                    </div>
                    {i < jadwalSeleksi.length - 1 && <div className="timeline-connector-line" />}
                  </div>
                  
                  <div className="timeline-content">
                    <div className="timeline-header-row">
                      <span className="timeline-date">{item.tanggal}</span>
                      {item.status === "active" && (
                        <span className="timeline-badge-active">Sedang Berjalan</span>
                      )}
                      {item.status === "done" && (
                        <span className="timeline-badge-done">Selesai</span>
                      )}
                    </div>
                    <h4 className="timeline-kegiatan">{item.kegiatan}</h4>
                    <p className="timeline-detail">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

