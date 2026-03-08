/* ============================================================
   DESIGN: Glassmorphic Dark SaaS — Contact Section
   - Split layout: contact info left, form right
   - Glass form inputs
   - Social links (email, phone, GitHub placeholder, LinkedIn placeholder)
   ============================================================ */

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "terronlohanderson@gmail.com",
    href: "mailto:terronlohanderson@gmail.com",
    color: "#06b6d4",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+65 8499 0823",
    href: "tel:+6584990823",
    color: "#3b82f6",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "https://github.com/TerronnnLoh",
    href: "#",
    color: "#8b5cf6",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/terron-loh-a19b922b3/",
    href: "#",
    color: "#06b6d4",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    // Simulate form submission (no backend in static site)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "0.5rem",
    color: "#e2e8f0",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.875rem",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section id="contact" className="py-24 relative">
  <div
    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none"
    style={{ background: 'radial-gradient(rgba(59, 130, 246, 0.06) 0%, transparent 70%)' }}
  ></div>
  <div className="container mx-auto px-6 max-w-7xl">
    <div className="mb-12" style={{ opacity: 1, transform: 'none' }}>
      <span className="section-label mb-3 block">07 / Contact</span>
      <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <p className="text-slate-400 mt-3 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
        Open to internship opportunities, full-time roles, and interesting collaborations. Feel free to reach out!
      </p>
    </div>
    <div>
      <div className="space-y-4" style={{ opacity: 1, transform: 'none' }}>
        <a
          href="mailto:terronlohanderson@gmail.com"
          rel="noopener noreferrer"
          className="glass-card p-4 flex items-center gap-4 hover:border-white/15 transition-all duration-200 group block"
          style={{ textDecoration: 'none' }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(6, 182, 212, 0.094)', border: '1px solid rgba(6, 182, 212, 0.19)' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail"
              style={{ color: 'rgb(6, 182, 212)' }}
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </div>
          <div>
            <div
              className="text-xs text-slate-500 mb-0.5"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              Email
            </div>
            <div
              className="text-sm text-slate-200 group-hover:text-white transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              terronlohanderson@gmail.com
            </div>
          </div>
        </a>
        <a
          href="https://github.com/TerronnnLoh"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-4 flex items-center gap-4 hover:border-white/15 transition-all duration-200 group block"
          style={{ textDecoration: 'none' }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(139, 92, 246, 0.094)', border: '1px solid rgba(139, 92, 246, 0.19)' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
              style={{ color: 'rgb(139, 92, 246)' }}
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </div>
          <div>
            <div
              className="text-xs text-slate-500 mb-0.5"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              GitHub
            </div>
            <div
              className="text-sm text-slate-200 group-hover:text-white transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              github.com/terronloh
            </div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/terron-loh-a19b922b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-4 flex items-center gap-4 hover:border-white/15 transition-all duration-200 group block"
          style={{ textDecoration: 'none' }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(6, 182, 212, 0.094)', border: '1px solid rgba(6, 182, 212, 0.19)' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin"
              style={{ color: 'rgb(6, 182, 212)' }}
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
          <div>
            <div
              className="text-xs text-slate-500 mb-0.5"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              LinkedIn
            </div>
            <div
              className="text-sm text-slate-200 group-hover:text-white transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              linkedin.com/in/terronloh
            </div>
          </div>
        </a>
        <div className="glass-card p-5 mt-4">
          <p className="text-slate-400 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            <span className="text-cyan-400 font-medium">Currently available</span> for internship extensions,
            graduate roles, and freelance backend engineering projects.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
