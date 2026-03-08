# Design Brainstorm — Terron Loh Portfolio

## Approach A — Cyberpunk Terminal
<response>
<text>
**Design Movement:** Cyberpunk / Hacker Terminal Aesthetic
**Core Principles:**
- Monospace code-like typography for headings; clean sans-serif for body
- Neon green / cyan glows on dark charcoal backgrounds
- Scanline textures and subtle CRT noise overlays
- Typewriter animation for hero text

**Color Philosophy:** Deep black (#0a0a0a) base, electric cyan (#00f5ff) primary accent, neon green (#39ff14) secondary, with magenta highlights. Evokes a hacker terminal — powerful and technical.

**Layout Paradigm:** Full-bleed terminal-style hero with ASCII art borders; content sections use left-rail timeline for experience; skill grid uses monospace tags.

**Signature Elements:** Blinking cursor, glowing borders with box-shadow, scanline overlay on hero.

**Interaction Philosophy:** Hover states reveal "typed" text; buttons have glitch-flash effect on hover.

**Animation:** Typewriter effect on hero name; section reveals with a "decryption" scramble; subtle scanline flicker.

**Typography System:** `JetBrains Mono` for headings/code; `Inter` for body text.
</text>
<probability>0.07</probability>
</response>

## Approach B — Brutalist Dark Tech
<response>
<text>
**Design Movement:** Neo-Brutalism meets Developer Portfolio
**Core Principles:**
- High-contrast hard edges, no rounded corners
- Bold oversized typography with tight tracking
- Stark black/white with a single electric blue accent
- Grid-breaking asymmetric layouts

**Color Philosophy:** #0d0d0d background, pure white text, electric blue (#2563eb) as the only accent. Minimalism taken to an extreme — every element earns its place.

**Layout Paradigm:** Newspaper-style column grid; hero uses a split layout (left: huge name, right: animated code block); experience uses a horizontal scrolling timeline.

**Signature Elements:** Thick 2px border lines as dividers; oversized section numbers (01, 02, 03); monospace code snippets as decorative elements.

**Interaction Philosophy:** Hover reveals underlines that "draw" across text; cards lift with a hard drop shadow (no blur).

**Animation:** Staggered slide-in from left on scroll; number counters animate on enter.

**Typography System:** `Space Grotesk` for headings; `IBM Plex Mono` for code/labels; `Inter` for body.
</text>
<probability>0.08</probability>
</response>

## Approach C — Glassmorphic Dark SaaS (CHOSEN)
<response>
<text>
**Design Movement:** Modern Dark SaaS / Glassmorphism
**Core Principles:**
- Deep navy/slate dark background with subtle blue-purple gradient mesh
- Frosted glass cards with backdrop-blur and translucent borders
- Smooth, fluid animations with spring physics
- Layered depth using shadows and gradients

**Color Philosophy:** Background: #0a0f1e (deep navy). Card surfaces: rgba(255,255,255,0.04). Accent gradient: cyan (#06b6d4) → blue (#3b82f6) → purple (#8b5cf6). Text: #e2e8f0 primary, #94a3b8 secondary. Creates a premium, futuristic enterprise feel — perfect for a DBS Bank intern.

**Layout Paradigm:** Asymmetric hero with floating code-snippet card on the right; skills section uses a masonry-style grouped grid; experience uses a vertical timeline with connector lines.

**Signature Elements:** Gradient text on name/headings; glowing dot indicators on timeline; skill tags with subtle glow on hover.

**Interaction Philosophy:** Cards tilt slightly on hover (3D perspective); buttons have gradient shimmer on hover; section transitions use fade + slide-up.

**Animation:** Framer Motion entrance animations; floating particles in hero background; gradient border animation on cards.

**Typography System:** `Syne` (bold, geometric) for headings; `Inter` for body; `JetBrains Mono` for code snippets and tech tags.
</text>
<probability>0.09</probability>
</response>

---

## Selected Approach: C — Glassmorphic Dark SaaS

Deep navy background with glassmorphic card surfaces, cyan-blue-purple gradient accents, Syne + Inter typography, and fluid Framer Motion animations. This creates a premium, enterprise-grade portfolio that aligns with Terron's DBS Bank experience and cybersecurity background.
