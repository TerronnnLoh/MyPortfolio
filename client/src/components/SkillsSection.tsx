/* ============================================================
   DESIGN: Glassmorphic Dark SaaS — Skills Section
   - Skills grouped by category in glass cards
   - GitHub-style skill tags with glow on hover
   - Staggered entrance animations
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Container, Wrench, Building2 } from "lucide-react";

const skillGroups = [
  {
    category: "Programming Languages",
    icon: Code2,
    color: "#06b6d4",
    skills: ["Java", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Backend & APIs",
    icon: Server,
    color: "#3b82f6",
    skills: ["REST APIs", "JSON", "Kafka Messaging", "System Integration", "MariaDB"],
  },
  {
    category: "DevOps & Infrastructure",
    icon: Container,
    color: "#8b5cf6",
    skills: ["Docker", "Red Hat OpenShift", "CI/CD Pipelines", "DRONE CI/CD", "Bitbucket"],
  },
  {
    category: "Tools & Testing",
    icon: Wrench,
    color: "#06b6d4",
    skills: ["Postman", "Swagger", "GitHub", "Kibana"],
  },
  {
    category: "Enterprise Platforms",
    icon: Building2,
    color: "#3b82f6",
    skills: ["Unica Interact", "Unscrambl", "Adobe Analytics", "ITSM"],
  },
];

function SkillCard({ group, index }: { group: typeof skillGroups[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = group.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 hover:border-white/15 transition-all duration-300 group"
      style={{
        boxShadow: "0 0 0 rgba(0,0,0,0)",
      }}
      whileHover={{
        boxShadow: `0 0 30px ${group.color}18`,
        y: -4,
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ background: `${group.color}18`, border: `1px solid ${group.color}30` }}
        >
          <Icon size={17} style={{ color: group.color }} />
        </div>
        <h3 className="text-sm font-semibold text-slate-200" style={{ fontFamily: "Syne, sans-serif" }}>
          {group.category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="skill-tag"
            style={{
              background: `${group.color}10`,
              borderColor: `${group.color}25`,
              color: group.color === "#8b5cf6" ? "#c4b5fd" : group.color === "#3b82f6" ? "#93c5fd" : "#67e8f9",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 relative">
      <div
        className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label mb-3 block">02 / Technical Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>
            My Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl" style={{ fontFamily: "Inter, sans-serif" }}>
            Technologies and tools I've worked with in production environments and personal projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
