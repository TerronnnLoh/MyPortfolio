/* ============================================================
   DESIGN: Glassmorphic Dark SaaS — Projects Section
   - Grid of project cards with hover lift + glow
   - Gradient accent on card top border
   - Tech tags per project
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Layers, Cpu, FileText, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "RPA Automation",
    description:
      "Automating tasks such as data scraping, email operations, debugging processes, and DataTable data handling to improve efficiency and reduce manual effort.",
    icon: Layers,
    color: "#06b6d4",
    tech: ["UiPath", "Workflow Automation", "Data Extraction"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Java Menu Console App",
    description:
      "Menu-driven Java console application demonstrating fundamental programming concepts including arithmetic operations, conditional logic, loops, and OOP.",
    icon: Cpu,
    color: "#3b82f6",
    tech: ["Java", "OOP", "Core Programming"],
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Student Report Management System",
    description:
      "Secure Django-based system with role-based access control, data classification, watermarking, and data masking to protect sensitive academic records.",
    icon: MessageSquare,
    color: "#8b5cf6",
    tech: ["Python", "Django", "Security"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "EcoWheels",
    description:
      "Secure electric vehicle e-commerce web application implementing OWASP principles, input validation, authentication, rate limiting, and security logging.",
    icon: FileText,
    color: "#06b6d4",
    tech: ["Python", "OWASP", "E-commerce"],
    gradient: "from-cyan-500/20 to-teal-500/20",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass-card overflow-hidden group cursor-default"
      style={{ transition: "box-shadow 0.3s ease, transform 0.3s ease" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${project.color}20`;
        (e.currentTarget as HTMLElement).style.borderColor = `${project.color}30`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      {/* Top gradient bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      <div className="p-6">
        {/* Icon + title */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${project.color}18`, border: `1px solid ${project.color}30` }}
          >
            <Icon size={18} style={{ color: project.color }} />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-white leading-tight" style={{ fontFamily: "Syne, sans-serif" }}>
              {project.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="skill-tag"
              style={{
                background: `${project.color}10`,
                borderColor: `${project.color}25`,
                color: project.color === "#8b5cf6" ? "#c4b5fd" : project.color === "#3b82f6" ? "#93c5fd" : "#67e8f9",
                fontSize: "0.65rem",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label mb-3 block">04 / Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl" style={{ fontFamily: "Inter, sans-serif" }}>
            Real-world engineering work from my internship at DBS Bank, spanning backend systems,
            API development, and enterprise integrations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* CTA to portfolio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="https://docs.google.com/document/d/1-lPfbcQFQ03Mhe9fm_zxQBhjl-7j8mUerdS562Sa_S4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            View full portfolio <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
