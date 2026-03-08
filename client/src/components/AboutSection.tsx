/* ============================================================
   DESIGN: Glassmorphic Dark SaaS — About Section
   - Split layout: text left, isometric server illustration right
   - Career interest tags
   - Entrance animations on scroll
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Shield, Cloud, GitBranch } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663405271432/bvPaoL2qCfEr8E3PSKemh4/about-visual-A9fKzSy8MZbgTinieQUtyj.webp";

const interests = [
  { icon: Server, label: "Backend Engineering", color: "#06b6d4" },
  { icon: GitBranch, label: "DevOps & CI/CD", color: "#3b82f6" },
  { icon: Shield, label: "Cybersecurity", color: "#8b5cf6" },
  { icon: Cloud, label: "Cloud Infrastructure", color: "#06b6d4" },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <FadeIn>
              <span className="section-label mb-3 block">01 / About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "Syne, sans-serif" }}>
                Building Systems That{" "}
                <span className="gradient-text">Scale & Secure</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-base leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                I'm <strong className="text-slate-200">Terron Loh Jing Rong</strong>, a Year 3 student at{" "}
                <strong className="text-cyan-400">Nanyang Polytechnic</strong> pursuing a Diploma in{" "}
                Cybersecurity &amp; Digital Forensics. My passion lies in building secure, scalable enterprise systems and exploring the intersection of security and DevOps.
              </p>
              <p className="text-slate-400 text-base leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                During my internship at DBS Bank, I gained hands-on experience with enterprise backend systems, Kafka messaging pipelines, API development, and CI/CD automation. I've worked with cutting-edge technologies like Red Hat OpenShift, DRONE CI/CD, and various enterprise platforms.
                <br /><br />
                I'm particularly interested in DevOps engineering, cybersecurity architecture, and cloud infrastructure. I enjoy solving complex problems and contributing to systems that protect and scale enterprise operations.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider"
                style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem" }}>
                Career Interests
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="glass-card p-3 flex items-center gap-3 hover:border-white/15 transition-all duration-200"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                    >
                      <Icon size={15} style={{ color }} />
                    </div>
                    <span className="text-sm text-slate-300" style={{ fontFamily: "Inter, sans-serif" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: Illustration */}
          <FadeIn delay={0.3}>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.12) 0%, transparent 70%)" }}
              />
              <img
                src={ABOUT_IMG}
                alt="Distributed systems illustration"
                className="w-full max-w-md mx-auto rounded-2xl"
                style={{ filter: "brightness(0.9) saturate(1.1)" }}
              />
              {/* Floating info card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 glass-card p-4"
                style={{ boxShadow: "0 0 30px rgba(6, 182, 212, 0.15)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <div>
                    <div className="text-xs text-slate-400" style={{ fontFamily: "JetBrains Mono, monospace" }}>Currently at</div>
                    <div className="text-sm font-semibold text-white" style={{ fontFamily: "Syne, sans-serif" }}>DBS Bank</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
