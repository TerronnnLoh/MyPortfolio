/* ============================================================
   DESIGN: Glassmorphic Dark SaaS — Footer
   - Minimal dark footer with gradient separator
   ============================================================ */

import { Code2, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-slate-500 text-xs flex items-center gap-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
          Terron Loh | Diploma in CyberSecurity & Digital Forensics
        </p>

        {/* Nav links */}
        <div className="flex gap-4">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
