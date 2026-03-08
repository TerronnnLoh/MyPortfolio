/* ============================================================
   DESIGN: Glassmorphic Dark SaaS — Education Section
   - Glass card for NYP
   - Coursework tags
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const coursework = [
  "Software Engineering",
  "Database Management Systems",
  "Infocomm Security",
  "Network Technologies",
  "Data Analysis & Visualization",
];

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <section id="education" className="py-24 relative">
  <div
    className="absolute top-1/2 right-0 w-80 h-80 -translate-y-1/2 pointer-events-none"
    style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)' }}
  />
  <div className="container mx-auto px-6 max-w-7xl">
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <span className="section-label mb-3 block">05 / Education</span>
      <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
        Academic <span className="gradient-text">Background</span>
      </h2>
    </motion.div>
    <div className="space-y-6">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        animate={cardInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 max-w-3xl"
        style={{ boxShadow: 'rgba(6, 182, 212, 0.06) 0px 0px 40px' }}
      >
        <div className="flex items-start gap-5">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(6, 182, 212, 0.12)', border: '1px solid rgba(6, 182, 212, 0.25)' }}
          >
            <GraduationCap size={24} className="text-cyan-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
              Nanyang Polytechnic
            </h3>
            <p className="text-cyan-400 font-medium text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              Diploma in Cybersecurity & Digital Forensics
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm mb-5">
              <Calendar size={13} />
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem' }}>2021 – 2026</span>
            </div>
            <div className="pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={14} className="text-slate-400" />
                <span
                  className="text-xs font-semibold text-slate-400 uppercase tracking-wider"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  Relevant Coursework
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="skill-tag"
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      borderColor: 'rgba(139, 92, 246, 0.25)',
                      color: 'rgb(196, 181, 253)'
                    }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card p-8 max-w-3xl"
        style={{ boxShadow: 'rgba(139, 92, 246, 0.06) 0px 0px 40px' }}
      >
        <div className="flex items-start gap-5">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(139, 92, 246, 0.12)', border: '1px solid rgba(139, 92, 246, 0.25)' }}
          >
            <GraduationCap size={24} className="text-purple-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
              Anderson Secondary School
            </h3>
            <p className="text-purple-400 font-medium text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              N Level Certificate
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm mb-5">
              <Calendar size={13} />
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem' }}>2017 – 2021</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span
                className="skill-tag"
                style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  borderColor: 'rgba(139, 92, 246, 0.25)',
                  color: 'rgb(196, 181, 253)'
                }}
              >
                Infocomm Club
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="glass-card p-8 max-w-3xl"
        style={{ boxShadow: 'rgba(16, 185, 129, 0.06) 0px 0px 40px' }}
      >
        <div className="flex items-start gap-5">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)' }}
          >
            <GraduationCap size={24} className="text-emerald-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
              Chong Fu Primary School
            </h3>
            <p className="text-emerald-400 font-medium text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              PSLE Certificate
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Calendar size={13} />
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem' }}>2011 – 2017</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>


  );
}
