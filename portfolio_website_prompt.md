# Portfolio Website — Build Prompt

Use this as a single, complete prompt for an AI coding tool (Claude Code, v0, Cursor, Lovable, etc.) or hand it to a developer. It contains the full design direction and real content pulled from the resume — no placeholder "Lorem Ipsum."

---

## PROMPT (copy everything below into your build tool)

Build a single-page developer portfolio website for a Salesforce Developer. The site should feel like a real developer's personal site — clean, dark, confident — not a generic template.

### Overall Style
- **Theme:** Dark navy background (`#0A0E1A` or similar deep navy), high-contrast white/off-white text, one accent color — Salesforce blue (`#0176D3`) or an electric blue — used sparingly for highlights, glows, and CTAs.
- **Typography:** Modern sans-serif (e.g., Inter, Sora, or Space Grotesk) for a technical/confident feel. Large, bold type in the hero.
- **Vibe:** Minimal, spacious, developer-portfolio aesthetic. Avoid corporate-template look — no generic stock icons, no boxed-in Bootstrap feel. Subtle animations/glow effects are welcome, but performance and readability come first.
- **Responsive:** Must work cleanly on mobile — horizontal scroll section should degrade to vertical on small screens.

### 1. Hero Section
- **Left side:**
  - Large name: **Saurabh Gaikwad**
  - Bold tagline directly below: **"Building Salesforce solutions for real business problems."**
  - Short, crisp subtext (1 line): e.g., "Salesforce Developer · 4.5 Years · Apex, LWC & Field Service"
  - Two buttons: **"View My Work"** (scrolls to Projects) and **"Connect on LinkedIn"** (links to `linkedin.com/in/saurabh-sanjay-gaikwad-02916a1b2`)
- **Right side:**
  - Photo placeholder in a neat rounded/circular frame, with a subtle blue glow effect behind it (soft box-shadow or blurred radial gradient in accent blue).

### 2. Journey Section (horizontal scroll timeline)
A horizontally scrollable timeline (falls back to vertical stack on mobile) with these milestones, in order:

1. **2021 — B.E. Computer Engineering**, JSPM's Imperial College of Engineering and Research
2. **Jul 2021 — Joined Cognizant Technology Solutions** as Salesforce Developer
3. **Sales Cloud & Veeva CRM** — Pharmaceutical domain project: Apex, Triggers, LWC, Flows, Validation Rules, data migration
4. **Mar 2026 — Field Service (FSL)** — Moved onto Bayer's global Field Service implementation, Manufacturing domain
5. **Today** — Still learning, still building

Each milestone: short label + 1-line description. Keep it scannable, not a wall of text.

### 3. Projects Section — 2 Project Cards
Do NOT dump the full resume. Each card = short summary + 4 key bullets + tech tags + a "View Details" expand/link (can be a modal or expandable accordion — doesn't need to link externally).

**Card 1 — Salesforce Field Service (Bayer, Manufacturing Domain)**
- Summary: Contributing to a global Field Service (FSL) implementation, building and enhancing solutions across the core FSL object model.
- 4 bullets:
  - Developed and enhanced Lightning Web Components (LWC) to improve Field Service user experience
  - Implemented Apex Classes and Triggers across Work Orders, Assets, Equipment, and Service Appointments
  - Built Record-Triggered Flows and Validation Rules to automate business processes and improve data quality
  - Optimized SOQL queries and Apex logic following governor limit best practices
- Tags: `Apex` `LWC` `Flows` `SOQL` `Field Service (FSL)`

**Card 2 — Sales Cloud & Veeva CRM (Pharmaceutical Domain)**
- Summary: Built and automated core sales processes for a pharmaceutical-domain implementation on Sales Cloud and Veeva CRM.
- 4 bullets:
  - Developed Apex, Triggers, and Lightning Web Components for Sales Cloud and Veeva CRM
  - Configured business process automation using Flows and Validation Rules
  - Performed bulk data migration using Data Loader with high data accuracy
  - Mentored junior developers and contributed to technical discussions and code reviews
- Tags: `Apex` `LWC` `Data Loader` `Veeva CRM`

### 4. Certifications Section (prominent)
Five badge-style cards in a row/grid:
1. Salesforce Certified Platform Developer I
2. Salesforce Certified Administrator
3. Salesforce Certified Sales Cloud Consultant
4. Salesforce Certified Agentforce Specialist
5. Salesforce Certified AI Associate

Each card: certification name + a "Verify" link. Link all cards to the Trailblazer profile for now: `https://www.salesforce.com/trailblazer/sgaikwad1997` (swap in individual credential verify links later if/when available).

### 5. Skills Section (interactive categories, not a boring list)
Present as clickable/tabbed categories — clicking a category reveals its skills as chips/tags. Categories:

- **Platform:** Sales Cloud, Service Cloud, Salesforce Field Service (FSL), Veeva CRM
- **Development:** Apex, Lightning Web Components (LWC), JavaScript, SOQL, SOSL
- **Automation:** Flows, Triggers, Validation Rules, Workflow Rules, Process Builder
- **Integration:** REST API, JSON, Postman
- **Tools:** Git, Salesforce DX, VS Code, Data Loader, Workbench, Salesforce Inspector

### 6. "What I'm Learning Now" Section (small, forward-looking)
A short, low-key section — 2-3 lines, not a bullet dump:
- Advanced/asynchronous Apex patterns
- AI in the Salesforce ecosystem (Agentforce)
- Continuing to build on Agentforce Specialist and AI Associate certifications

### 7. Contact Section (end)
- Strong closing line: **"Let's build something useful."**
- Links: LinkedIn (`linkedin.com/in/saurabh-sanjay-gaikwad-02916a1b2`), Trailhead (`salesforce.com/trailblazer/sgaikwad1997`), Email (`saurabhgaikwad2097@gmail.com`)
- Keep it to icon links or simple buttons — no long contact form needed unless you want one.

### Tech Notes
- Build as a single-page site (one scrollable page with anchor-linked sections), fully responsive.
- Use semantic HTML/CSS structure regardless of framework (React, plain HTML/CSS/JS, etc. — your choice).
- Keep animations subtle (fade-ins on scroll, hover glows) — prioritize fast load and clean readability over heavy motion.
- No fabricated metrics, testimonials, or projects beyond what's listed above — everything here is sourced directly from the resume.

---

**Note:** Consider whether you want your phone number on a public-facing portfolio site — it wasn't included above by default; add it back if you want it visible.
