"use client";
import dynamic from "next/dynamic";

// Load the heavy, highly-interactive client Kiosk App dynamically
// This eliminates hydration mismatches and optimizes server pre-rendering of the layout shell.
const App = dynamic(() => import("../App"), {
  ssr: false,
  loading: () => (
    <div style={{
      display: "flex",
      height: "100vh",
      width: "100vw",
      alignItems: "center",
      justifyContent: "center",
      background: "radial-gradient(circle at top left, rgba(168, 85, 247, 0.28), transparent 26%), radial-gradient(circle at 85% 15%, rgba(245, 158, 11, 0.16), transparent 20%), linear-gradient(135deg, #1e1b4b 0%, #2e1065 55%, #3b0764 100%)",
      color: "#ffffff",
      fontFamily: "var(--font-outfit), sans-serif",
      fontSize: "1.05rem",
      fontWeight: 500,
      letterSpacing: "0.01em",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.9rem",
        padding: "1.4rem 1.8rem",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "1.25rem",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(14px)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.22)",
      }}>
        <div style={{
          width: "46px",
          height: "46px",
          border: "4px solid rgba(255, 255, 255, 0.12)",
          borderTop: "4px solid #f59e0b",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
          boxShadow: "0 0 24px rgba(245, 158, 11, 0.18)",
        }} />
        <span style={{ fontWeight: 700 }}>Memuat Portal Kiosk SPMB...</span>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}} />
      </div>
    </div>
  )
});

export default function Home() {
  return <App />;
}
