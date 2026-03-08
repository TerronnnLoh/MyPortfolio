/* ============================================================
   DESIGN: Glassmorphic Dark SaaS — Portfolio Section
   - External portfolio link with preview card
   - Gradient CTA button
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe, Layout } from "lucide-react";

export default function PortfolioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)' }}></div>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12" style={{ opacity: 1, transform: 'none' }}>
          <span className="section-label mb-3 block">06 / CCA</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Makers Innovators <span className="gradient-text">Tribe</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            A CCA in MakerspaceNYP. In my 3 years of involvement, I have lead and assisted in various events that combine creativity, sustainability, and community engagement. I also hosted multiple workshops on 3D printing, laser cutting, and woodworking, empowering members to explore and create with the tools available in the makerspace.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 md:p-8 flex flex-col hover:border-white/15 transition-all duration-200 group" style={{ boxShadow: 'rgba(59, 130, 246, 0.06) 0px 0px 40px', opacity: 1, transform: 'none' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200" style={{ background: 'rgba(6, 182, 212, 0.094)', border: '1px solid rgba(6, 182, 212, 0.19)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap" style={{ color: 'rgb(6, 182, 212)' }}>
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>National Day Carnival</h3>
                <p className="text-xs text-slate-500 mt-1" style={{ fontFamily: '"JetBrains Mono", monospace' }}>Event Lead</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              Led the organization of a custom leather bookmark activity inspired by the National Library theme. Participants personalized their bookmarks by stamping chosen designs and took their creations home as unique keepsakes.
            </p>
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(6, 182, 212, 0.082)', color: 'rgb(6, 182, 212)', border: '1px solid rgba(6, 182, 212, 0.19)' }}>2024</span>
            </div>
          </div>
          <div className="glass-card p-6 md:p-8 flex flex-col hover:border-white/15 transition-all duration-200 group" style={{ boxShadow: 'rgba(59, 130, 246, 0.06) 0px 0px 40px', opacity: 1, transform: 'none' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200" style={{ background: 'rgba(139, 92, 246, 0.094)', border: '1px solid rgba(139, 92, 246, 0.19)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hammer" style={{ color: 'rgb(139, 92, 246)' }}>
                  <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"></path>
                  <path d="m18 15 4-4"></path>
                  <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Frightnight</h3>
                <p className="text-xs text-slate-500 mt-1" style={{ fontFamily: '"JetBrains Mono", monospace' }}>Event Co-Lead</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              Organized and built a Haunted House in MakerspaceNYP, utilizing the space's resources to collaboratively design and build structures and props as a team.
            </p>
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(139, 92, 246, 0.082)', color: 'rgb(139, 92, 246)', border: '1px solid rgba(139, 92, 246, 0.19)' }}>2024</span>
            </div>
          </div>
          <div className="glass-card p-6 md:p-8 flex flex-col hover:border-white/15 transition-all duration-200 group" style={{ boxShadow: 'rgba(59, 130, 246, 0.06) 0px 0px 40px', opacity: 1, transform: 'none' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200" style={{ background: 'rgba(16, 185, 129, 0.094)', border: '1px solid rgba(16, 185, 129, 0.19)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award" style={{ color: 'rgb(16, 185, 129)' }}>
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>EcoFest</h3>
                <p className="text-xs text-slate-500 mt-1" style={{ fontFamily: '"JetBrains Mono", monospace' }}>Event Co-Lead</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              Collaborated with MiT to creatively repurpose recycled Taekwondo wood in a follow-up event to 'Adopt a Block' promoting sustainable living. Crafted customized keychains for participants, combining sustainability with practical keepsakes.
            </p>
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(16, 185, 129, 0.082)', color: 'rgb(16, 185, 129)', border: '1px solid rgba(16, 185, 129, 0.19)' }}>2024</span>
            </div>
          </div>
          <div className="glass-card p-6 md:p-8 flex flex-col hover:border-white/15 transition-all duration-200 group" style={{ boxShadow: 'rgba(59, 130, 246, 0.06) 0px 0px 40px', opacity: 1, transform: 'none' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200" style={{ background: 'rgba(245, 158, 11, 0.094)', border: '1px solid rgba(245, 158, 11, 0.19)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users" style={{ color: 'rgb(245, 158, 11)' }}>
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Adopt a Block</h3>
                <p className="text-xs text-slate-500 mt-1" style={{ fontFamily: '"JetBrains Mono", monospace' }}>Event Co-Lead</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              Hosted booths offering personalized keychains made from recycled wood where participants could engrave messages or names. Featured triangle pouches crafted from recycled banner materials, showcasing creative upcycling in action.
            </p>
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(245, 158, 11, 0.082)', color: 'rgb(245, 158, 11)', border: '1px solid rgba(245, 158, 11, 0.19)' }}>2024</span>
            </div>
          </div>
          <div className="glass-card p-6 md:p-8 flex flex-col hover:border-white/15 transition-all duration-200 group" style={{ boxShadow: 'rgba(59, 130, 246, 0.06) 0px 0px 40px', opacity: 1, transform: 'none' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200" style={{ background: 'rgba(6, 182, 212, 0.094)', border: '1px solid rgba(6, 182, 212, 0.19)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap" style={{ color: 'rgb(6, 182, 212)' }}>
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Open House</h3>
                <p className="text-xs text-slate-500 mt-1" style={{ fontFamily: '"JetBrains Mono", monospace' }}>Event Lead</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              Constructed three structures featuring the letters 'NYP' and 'I&E' prominently in the design. Placed in D'Studio, the public engaged by writing messages and placing them inside the structures, creating an interactive and meaningful experience.
            </p>
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(6, 182, 212, 0.082)', color: 'rgb(6, 182, 212)', border: '1px solid rgba(6, 182, 212, 0.19)' }}>2025</span>
            </div>
          </div>
          <div className="glass-card p-6 md:p-8 flex flex-col hover:border-white/15 transition-all duration-200 group" style={{ boxShadow: 'rgba(59, 130, 246, 0.06) 0px 0px 40px', opacity: 1, transform: 'none' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200" style={{ background: 'rgba(139, 92, 246, 0.094)', border: '1px solid rgba(139, 92, 246, 0.19)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award" style={{ color: 'rgb(139, 92, 246)' }}>
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Alumni Day</h3>
                <p className="text-xs text-slate-500 mt-1" style={{ fontFamily: '"JetBrains Mono", monospace' }}>Event Co-Lead</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              Hosted mini activities for participants, providing hand-cut leather bookmarks and a selection of personalized stamps with various designs, allowing users to customize their bookmarks with unique impressions.
            </p>
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(139, 92, 246, 0.082)', color: 'rgb(139, 92, 246)', border: '1px solid rgba(139, 92, 246, 0.19)' }}>2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
     
    
  );
}
