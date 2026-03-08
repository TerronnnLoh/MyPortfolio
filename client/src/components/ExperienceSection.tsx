/* ============================================================
   DESIGN: Glassmorphic Dark SaaS — Experience Section
   - Vertical timeline with glowing connector
   - DBS Bank card with responsibilities list
   - Tech tag pills
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const DBS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663405271432/bvPaoL2qCfEr8E3PSKemh4/dbs-card-bg-2MCMh43ZL2MAJYUAUtF4Re.webp";

const responsibilities = [
  "Developed Java-based Kafka producer testing functions to validate message delivery pipelines.",
  "Implemented dynamic key-value data structures for Kafka payload processing.",
  "Developed a Java-based API POC deployed on OpenShift.",
  "Configuring Unscrambl, Unica modules.",
  "Created SOP documentation for resolving TWS job failures.",
];

const techUsed = ["Java", "Kafka", "REST APIs", "JSON", "Docker", "OpenShift", "MariaDB", "Bitbucket", "DRONE CI/CD", "Kibana", "Jenkins", "Collibra", "Unscrambl", "Unica"];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-24 relative">
  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full pointer-events-none"
    style={{ background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.1), transparent)' }}
  />
  <div className="container mx-auto px-6 max-w-7xl">
    <div className="mb-12" style={{ opacity: 1, transform: 'none' }}>
      <span className="section-label mb-3 block">03 / Experience</span>
      <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
        Work <span className="gradient-text">Experience</span>
      </h2>
    </div>
    <div className="relative">
      <div
        className="absolute left-0 md:left-8 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(rgb(6, 182, 212), rgb(59, 130, 246), rgb(139, 92, 246))' }}
      />
      <div className="space-y-12">
        <div className="pl-8 md:pl-24 relative" style={{ opacity: 1, transform: 'none' }}>
          <div
            className="absolute left-0 md:left-8 top-8 w-4 h-4 rounded-full -translate-x-1/2 border-2"
            style={{
              background: 'rgb(10, 15, 30)',
              borderColor: 'rgb(6, 182, 212)',
              boxShadow: 'rgba(6, 182, 212, 0.5) 0px 0px 12px'
            }}
          />
          <div
            className="glass-card overflow-hidden"
            style={{ boxShadow: 'rgba(59, 130, 246, 0.08) 0px 0px 40px' }}
          >
            <div
              className="relative p-6 md:p-8"
              style={{
                backgroundImage: 'url("https://d2xsxph8kpxj0f.cloudfront.net/310519663405271432/bvPaoL2qCfEr8E3PSKemh4/dbs-card-bg-2MCMh43ZL2MAJYUAUtF4Re.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            >
              <div className="absolute inset-0" style={{ background: 'rgba(10, 15, 30, 0.75)' }} />
              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-briefcase text-cyan-400"
                      >
                        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        <rect width="20" height="14" x="2" y="6" rx="2" />
                      </svg>
                      <span
                        className="text-cyan-400 font-semibold text-sm"
                        style={{ fontFamily: '"JetBrains Mono", monospace' }}
                      >
                        Backend Engineering Intern
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                      DBS Bank
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <span className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-calendar"
                        >
                          <path d="M8 2v4" />
                          <path d="M16 2v4" />
                          <rect width="18" height="18" x="3" y="4" rx="2" />
                          <path d="M3 10h18" />
                        </svg>
                        Apr 2025 – Mar 2026
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-map-pin"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        Singapore
                      </span>
                    </div>
                  </div>
                  <div
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: 'rgba(6, 182, 212, 0.15)',
                      border: '1px solid rgba(6, 182, 212, 0.3)',
                      color: 'rgb(103, 232, 249)',
                      fontFamily: '"JetBrains Mono", monospace'
                    }}
                  >
                    ● Active
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h4
                className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                <li
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', opacity: 1, transform: 'none' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check text-cyan-500 flex-shrink-0 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Developed Java-based Kafka producer testing functions to validate message delivery pipelines.
                </li>
                <li
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', opacity: 1, transform: 'none' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check text-cyan-500 flex-shrink-0 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Implemented dynamic key-value data structures for Kafka payload processing.
                </li>
                <li
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', opacity: 1, transform: 'none' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check text-cyan-500 flex-shrink-0 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Developed a Java-based API POC deployed on OpenShift.
                </li>
                <li
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', opacity: 1, transform: 'none' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check text-cyan-500 flex-shrink-0 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Configuring Unscrambl, Unica modules.
                </li>
                <li
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', opacity: 1, transform: 'none' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check text-cyan-500 flex-shrink-0 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Created SOP documentation for resolving TWS job failures.
                </li>
              </ul>
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <h4
                  className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Kafka</span>
                  <span className="skill-tag">REST APIs</span>
                  <span className="skill-tag">JSON</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">OpenShift</span>
                  <span className="skill-tag">MariaDB</span>
                  <span className="skill-tag">Bitbucket</span>
                  <span className="skill-tag">DRONE CI/CD</span>
                  <span className="skill-tag">Kibana</span>
                  <span className="skill-tag">Jenkins</span>
                  <span className="skill-tag">Collibra</span>
                  <span className="skill-tag">Unscrambl</span>
                  <span className="skill-tag">Unica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-8 md:pl-24 relative" style={{ opacity: 1, transform: 'none' }}>
          <div
            className="absolute left-0 md:left-8 top-8 w-4 h-4 rounded-full -translate-x-1/2 border-2"
            style={{
              background: 'rgb(10, 15, 30)',
              borderColor: 'rgb(139, 92, 246)',
              boxShadow: 'rgba(139, 92, 246, 0.5) 0px 0px 12px'
            }}
          />
          <div
            className="glass-card overflow-hidden"
            style={{ boxShadow: 'rgba(139, 92, 246, 0.08) 0px 0px 40px' }}
          >
            <div
              className="p-6 md:p-8"
              style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(59, 130, 246, 0.04))' }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-briefcase text-purple-400"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      <rect width="20" height="14" x="2" y="6" rx="2" />
                    </svg>
                    <span
                      className="text-purple-400 font-semibold text-sm"
                      style={{ fontFamily: '"JetBrains Mono", monospace' }}
                    >
                      Student Assistant Coach
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                    MakerspaceNYP
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-calendar"
                      >
                        <path d="M8 2v4" />
                        <path d="M16 2v4" />
                        <rect width="18" height="18" x="3" y="4" rx="2" />
                        <path d="M3 10h18" />
                      </svg>
                      Apr 2024 – Aug 2024
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-map-pin"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Singapore
                    </span>
                  </div>
                </div>
                <div
                  className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    color: 'rgb(216, 180, 254)',
                    fontFamily: '"JetBrains Mono", monospace'
                  }}
                >
                  ● Completed
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h4
                className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                <li
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', opacity: 1, transform: 'none' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check text-purple-500 flex-shrink-0 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Provided effective and efficient assistance to all users in Makerspace NYP.
                </li>
                <li
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', opacity: 1, transform: 'none' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check text-purple-500 flex-shrink-0 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Gained technical skills through workshops: Leathercrafts, Laser Painting, Woodworking, 3D Printing, Tufting, Sewing, Cardboard Modelling.
                </li>
                <li
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', opacity: 1, transform: 'none' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check text-purple-500 flex-shrink-0 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Taught users and guided them in the use of various machinery and prototyping tools.
                </li>
                <li
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', opacity: 1, transform: 'none' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check text-purple-500 flex-shrink-0 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Maintained and ensured proper maintenance of various machinery.
                </li>
                <li
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', opacity: 1, transform: 'none' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check text-purple-500 flex-shrink-0 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Demonstrated situational awareness to identify when machines need maintenance or are malfunctioning.
                </li>
                <li
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', opacity: 1, transform: 'none' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check text-purple-500 flex-shrink-0 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Ensured users safely handled machines and tools in Makerspace.
                </li>
              </ul>
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <h4
                  className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  Skills & Techniques
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="skill-tag"
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      borderColor: 'rgba(139, 92, 246, 0.25)',
                      color: 'rgb(216, 180, 254)'
                    }}
                  >
                    Leathercrafts
                  </span>
                  <span
                    className="skill-tag"
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      borderColor: 'rgba(139, 92, 246, 0.25)',
                      color: 'rgb(216, 180, 254)'
                    }}
                  >
                    Laser Painting
                  </span>
                  <span
                    className="skill-tag"
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      borderColor: 'rgba(139, 92, 246, 0.25)',
                      color: 'rgb(216, 180, 254)'
                    }}
                  >
                    Woodworking
                  </span>
                  <span
                    className="skill-tag"
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      borderColor: 'rgba(139, 92, 246, 0.25)',
                      color: 'rgb(216, 180, 254)'
                    }}
                  >
                    3D Printing
                  </span>
                  <span
                    className="skill-tag"
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      borderColor: 'rgba(139, 92, 246, 0.25)',
                      color: 'rgb(216, 180, 254)'
                    }}
                  >
                    Tufting
                  </span>
                  <span
                    className="skill-tag"
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      borderColor: 'rgba(139, 92, 246, 0.25)',
                      color: 'rgb(216, 180, 254)'
                    }}
                  >
                    Sewing
                  </span>
                  <span
                    className="skill-tag"
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      borderColor: 'rgba(139, 92, 246, 0.25)',
                      color: 'rgb(216, 180, 254)'
                    }}
                  >
                    Cardboard Modelling
                  </span>
                  <span
                    className="skill-tag"
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      borderColor: 'rgba(139, 92, 246, 0.25)',
                      color: 'rgb(216, 180, 254)'
                    }}
                  >
                    Machinery Maintenance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

// ...existing code...
  );
}
