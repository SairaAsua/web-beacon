# Harmonic Beacon — Landing Page

Official landing page for **Harmonic Beacon**, an app that makes the interference pattern of the subtle audible in the material realm. Built on Harmonic Information Theory, it delivers a continuous live stream of natural harmonics alongside curated audio overlays.

## About the Project

The Harmonic Beacon landing page introduces the scientific and experiential foundations of the project, invites users to take part in an ongoing validation process, and provides direct download links to the mobile app.

The design follows the **Ethereal Editorial** brand identity — a minimalist, light, intellectual aesthetic using the **Ambient Violet** design system.

## Sections

| Section | Description |
|---|---|
| **Hero** | Brand entrance with animated harmonic wave visualization |
| **Harmonic Information Theory** | Core theoretical framework: resonance, ratios, and the fractally resonant universe |
| **The Experience** | How the Harmonic Beacon reveals each human field (emotional, cognitive, energetic, spiritual) acoustically |
| **Analysis & Implications** | Ongoing research protocol, neurobiological markers, and the concept of *Harmonically Aware Technology* |
| **App** | Feature overview: Live Stream, Audio Overlays, and Audio Mix |
| **Download** | Call to action — App Store & Google Play |

## Design System — Ambient Violet

| Token | Value | Use |
|---|---|---|
| Primary bg | `#C9B8EB` | Hero, Experience, App, Footer |
| Alternate bg | `#D8CBF0` | Theory, Analysis, CTA |
| Deep accent | `#6B50A0` | Headings, buttons, active states |
| Border | `#B8A8DA` | Dividers, card edges |
| Highlight | `#A78BFA` @ 40% | Marker-style word emphasis |

**Typography:** Space Grotesk (display/headings) · Newsreader (body serif)

## Tech Stack

- **React** + **Vite**
- **Tailwind CSS** — Ambient Violet custom tokens
- **Framer Motion** — scroll animations, nav transitions
- **Lucide React** — wireframe-style icons
- **react-helmet** — per-page SEO metadata
- **i18n** — full English / Spanish translation via `src/i18n/translations.js`

## Getting Started

```bash
npm install
npm run dev        # development server at localhost:3000
npm run build      # production bundle
npx vitest run     # run test suite
```

## Internationalization

All content lives in `src/i18n/translations.js`. Both `en` and `es` objects are fully maintained in sync. Language is toggled via the pill switcher in the nav bar.

## Project Structure

```
src/
├── components/
│   ├── accent/          # HarmonicVisualization (canvas), WaveDivider
│   ├── sections/        # HeroSection, TheoryContentSection, ExperienceSection,
│   │                    # AnalysisSection, AppPreviewSection, FooterCTA
│   ├── FloatingNav.jsx  # Sticky nav (appears after hero)
│   ├── Footer.jsx
│   └── LanguageSwitcher.jsx
├── context/
│   └── LanguageContext.jsx
├── i18n/
│   └── translations.js  # All EN + ES strings
├── pages/
│   └── HomePage.jsx
└── index.css            # Ambient Violet CSS variables + Google Fonts
```
