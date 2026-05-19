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
      background: "#1e1b4b", // Dark Indigo matching our theme
      color: "#ffffff",
      fontFamily: "var(--font-outfit), sans-serif",
      fontSize: "1.1rem",
      fontWeight: 500,
    }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <div style={{
          width: "42px",
          height: "42px",
          border: "4px solid rgba(255, 255, 255, 0.1)",
          borderTop: "4px solid #a855f7", // Accent purple
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }} />
        <span>Memuat Portal Kiosk SPMB...</span>
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
