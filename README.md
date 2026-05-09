# Anubhab Karmakar — Portfolio & Engineering Notes Library

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa)](https://web.dev/progressive-web-apps/)
[![Static Export](https://img.shields.io/badge/Deploy-Static_Export-00C853)](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

A high-fidelity, PWA-enabled static site featuring a personal portfolio and an interactive engineering notes library for Mechanical Engineering students.

## 🚀 Live Demo

Visit: [anubhab.dev](https://anubhab.dev) *(coming soon)*

## ✨ Features

- **Portfolio** — 9-section professional portfolio with animated hero, timeline, education, skills, and contact form
- **Notes Library** — Interactive engineering notes covering Diploma (WBSCTE) and B.Tech (MAKAUT) curricula
- **Interactive Diagrams** — SVG diagrams with real-time sliders (beam reactions, force parallelogram, screw threads)
- **KaTeX Rendering** — Beautiful mathematical formulas with LaTeX typesetting
- **Dark Mode** — Full dark mode with localStorage persistence
- **PWA** — Installable as a native app with offline support via Service Worker
- **Pagefind Search** — Full-text search across all notes (⌘K / Ctrl+K)
- **SEO Optimized** — Schema.org JSON-LD, sitemap.xml, Open Graph meta tags
- **Print-Ready** — Clean print CSS for student notes
- **Responsive** — Mobile-first design, works on all screen sizes

## 📚 Content Structure

```
Library
├── Diploma (WBSCTE) — Semester 2
│   ├── Engineering Mechanics (7 units, Unit 3 FULL)
│   ├── Mathematics-II (6 units, Unit 3 FULL)
│   ├── Applied Physics-II (7 units)
│   ├── FEEE (7 units)
│   └── Intro to IT Systems (5 units)
└── B.Tech (MAKAUT) — Semester 4
    ├── Metrology & Measurement (5 units, Unit 5 FULL)
    ├── Strength of Materials (5 units)
    ├── Fluid Mechanics (5 units)
    ├── Applied Thermodynamics (5 units)
    ├── Materials Engineering (5 units)
    └── Numerical Methods (5 units)
```

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 14 | Framework (App Router, Static Export) |
| React 18 | UI Components |
| Tailwind CSS | Utility styling |
| KaTeX | Math formula rendering |
| Framer Motion | Animations |
| Pagefind | Full-text search |
| @ducanh2912/next-pwa | Progressive Web App |
| next-sitemap | SEO sitemap generation |

## 🏗️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Production build (generates static site + sitemap + search index)
npm run build

# Preview production build
npm run serve
```

## 📂 Project Structure

```
├── app/
│   ├── globals.css          # Design system (900+ lines)
│   ├── layout.jsx           # Root layout with SEO & Schema.org
│   ├── page.jsx             # Portfolio homepage
│   ├── not-found.jsx        # Custom 404 page
│   └── library/             # Notes library pages
├── components/              # 20 reusable React components
│   ├── UnitLayout.jsx       # Master page template
│   ├── FormulaBox.jsx       # KaTeX formula renderer
│   ├── WorkedExample.jsx    # Step-by-step solutions
│   ├── BeamReactionDiagram.jsx    # Interactive beam slider
│   ├── ForceParallelogramDiagram.jsx  # Interactive forces
│   ├── ScrewThreadDiagram.jsx     # Interactive thread params
│   └── SearchModal.jsx      # Pagefind search overlay
├── lib/                     # Data & utilities
│   ├── syllabus.js          # Complete curriculum data
│   └── schema.js            # Schema.org generators
├── public/                  # Static assets
│   ├── manifest.json        # PWA manifest
│   ├── sw.js               # Service Worker
│   └── robots.txt          # SEO
└── scripts/
    └── generate-pages.js    # Page scaffolding tool
```

## 👨‍🏫 About

Built by **Anubhab Karmakar**, Mechanical Engineering Lecturer at [NHIT](https://nhit.in/).

- 📧 mailanubhab18@gmail.com
- 📍 Asansol, West Bengal, India

## 📄 License

© 2025 Anubhab Karmakar. All rights reserved.
