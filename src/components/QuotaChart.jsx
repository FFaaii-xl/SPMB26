"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { kuotaJalur } from "../data/spmb";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div className="chart-tooltip">
        <p className="tooltip-name">{d.name}</p>
        <p className="tooltip-value">{d.value}%</p>
        <p className="tooltip-min">{d.minimum}</p>
      </div>
    );
  }
  return null;
};

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central"
      style={{ fontWeight: 800, fontSize: "0.78rem" }}>
      {value}%
    </text>
  );
};

export default function QuotaChart() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="section section-dark">
      <div className="section-bg-decor" />

      <div className="quota-layout">
        {/* Row Atas: Judul di Kiri, Diagram di Kanan */}
        <div className="quota-chart-row">
          <motion.div
            className="quota-title-side"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-pill">Kuota</span>
            <h2 className="section-title">Pembagian Kuota Jalur</h2>
            <p className="section-desc">
              Distribusi persentase kuota resmi berdasarkan regulasi SPMB Jawa Tengah.
            </p>
          </motion.div>

          <motion.div
            className="chart-wrap"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={kuotaJalur}
                  cx="50%"
                  cy="50%"
                  innerRadius={52}
                  outerRadius={82}
                  paddingAngle={3}
                  dataKey="value"
                  labelLine={false}
                  label={CustomLabel}
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {kuotaJalur.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={entry.color}
                      opacity={activeIndex === null || activeIndex === index ? 1 : 0.55}
                      stroke={activeIndex === index ? "#fff" : "transparent"}
                      strokeWidth={2}
                      style={{ cursor: "pointer", filter: activeIndex === index ? `drop-shadow(0 0 10px ${entry.color})` : "none" }}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>

            {/* Label Tengah Kompak */}
            <div className="chart-center-label">
              <span className="chart-center-sub" style={{ fontSize: "0.5rem", letterSpacing: "0.2px" }}>KUOTA SPMB</span>
              <span className="chart-center-year" style={{ fontSize: "0.85rem", color: "var(--accent-gold)", fontWeight: 900 }}>2026</span>
            </div>
          </motion.div>
        </div>

        {/* Legend Cards */}
        <div className="quota-legend">
          {kuotaJalur.map((item, i) => (
            <motion.div
              key={item.name}
              className="quota-card"
              style={{ "--quota-color": item.color }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.02, x: 4 }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="quota-header-row">
                <div className="quota-card-left">
                  <div className="quota-icon">{item.icon}</div>
                  <div>
                    <p className="quota-name">{item.name}</p>
                    <p className="quota-minimum">{item.minimum}</p>
                  </div>
                </div>
                <div className="quota-percent">{item.value}%</div>
              </div>
              
              <div className="quota-desc-wrap">
                <p className="quota-desc">{item.deskripsi}</p>
              </div>
              <div className="quota-bar">
                <motion.div
                  className="quota-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
