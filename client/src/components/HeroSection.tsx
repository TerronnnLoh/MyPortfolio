/* ============================================================
   DESIGN: Glassmorphic Dark SaaS — Hero Section
   - Full-viewport hero with generated background image
   - Typewriter role animation
   - Gradient text on name
   - Three CTA buttons
   - Floating code snippet card
   ============================================================ */

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail, ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663405271432/bvPaoL2qCfEr8E3PSKemh4/hero-bg-4Fjh3WCciLfgC5MicKDFQV.webp";

const roles = [
  "Backend Engineering Intern @ DBS Bank",
  "Cybersecurity & Digital Forensics Student",
  "Distributed Systems Enthusiast",
  "DevOps & Cloud Explorer",
];

function useTypewriter(texts: string[], speed = 60, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">("typing");
  const charIdx = useRef(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const current = texts[roleIdx];
    if (phase === "typing") {
      if (charIdx.current < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx.current + 1));
          charIdx.current++;
        }, speed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "pausing") {
      setPhase("erasing");
    } else {
      if (charIdx.current > 0) {
        timeout = setTimeout(() => {
          charIdx.current--;
          setDisplayed(current.slice(0, charIdx.current));
        }, speed / 2);
      } else {
        setRoleIdx((i) => (i + 1) % texts.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIdx, texts, speed, pause]);

  return displayed;
}

// Floating particles
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.id % 3 === 0 ? "#06b6d4" : p.id % 3 === 1 ? "#3b82f6" : "#8b5cf6",
            opacity: 0.4,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const role = useTypewriter(roles);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: "#0a0f1e",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(10,15,30,0.7) 0%, rgba(10,15,30,0.4) 50%, rgba(10,15,30,0.8) 100%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, #0a0f1e)",
        }}
      />

      <Particles />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-4 block">👋 Hello, I'm</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              <span className="gradient-text">Terron</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="h-8 mb-6"
            >
              <span
                className="text-lg text-cyan-400 font-medium"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                {role}
                <span className="animate-pulse text-cyan-300">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Looking to learn more about Cybersecurity, DevSecOps, Cloud Infrastructure
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollToSection("#projects")}
                className="btn-gradient flex items-center gap-2"
              >
                View Projects <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg border text-slate-200 hover:text-white hover:bg-white/5 transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.15)", fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                <Mail size={16} /> Contact Me
              </button>
              <a
                href="https://docs.google.com/document/d/1-lPfbcQFQ03Mhe9fm_zxQBhjl-7j8mUerdS562Sa_S4/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 transition-all duration-200"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "0.875rem" }}
              >
                <Download size={16} /> View Portfolio
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex gap-8"
            >
              {[
                { value: "1+", label: "Year at DBS Bank" },
                { value: "4+", label: "Projects Built" },
                { value: "15+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold gradient-text" style={{ fontFamily: "Syne, sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating code card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            {/* Glow orb behind card */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)", zIndex: 0 }}
            />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card p-6 max-w-md ml-auto relative"
              style={{ zIndex: 1, boxShadow: "0 0 60px rgba(59, 130, 246, 0.1), 0 0 120px rgba(139, 92, 246, 0.05)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-slate-500" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  KafkaProducer.java
                </span>
              </div>
              <pre className="text-sm leading-relaxed overflow-x-auto" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                <code>
                  <span className="text-purple-400">public class</span>
                  <span className="text-blue-300"> KafkaProducer </span>
                  <span className="text-white">{'{'}</span>
                  {`
`}
                  <span className="text-slate-500">{'  // DBS Bank — Internship'}</span>
                  {`
`}
                  <span className="text-cyan-400">{'  @Autowired'}</span>
                  {`
`}
                  <span className="text-purple-400">{'  private'}</span>
                  <span className="text-blue-300">{' KafkaTemplate'}</span>
                  <span className="text-white">{'<String, Object> kafka;'}</span>
                  {`

`}
                  <span className="text-purple-400">{'  public void'}</span>
                  <span className="text-yellow-300">{' sendMessage'}</span>
                  <span className="text-white">{'('}</span>
                  {`
`}
                  <span className="text-blue-300">{'    String'}</span>
                  <span className="text-white">{' topic,'}</span>
                  {`
`}
                  <span className="text-blue-300">{'    Object'}</span>
                  <span className="text-white">{' payload) {'}</span>
                  {`
`}
                  <span className="text-slate-400">{'    kafka.send(topic, payload);'}</span>
                  {`
`}
                  <span className="text-white">{'  }'}</span>
                  {`
`}
                  <span className="text-white">{'}'}</span>
                </code>
              </pre>
            </motion.div>

            {/* Tech badges floating */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="mt-4 flex justify-end gap-2"
            >
              {["Java", "Kafka", "OpenShift", "Docker"].map((tech) => (
                <span key={tech} className="skill-tag">{tech}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 cursor-pointer"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection("#about")}
      >
        <span className="text-xs" style={{ fontFamily: "JetBrains Mono, monospace" }}>scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
