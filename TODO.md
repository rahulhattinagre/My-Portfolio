# TODO - Rahul Hattinagre Portfolio (React + Vite + Tailwind + Framer Motion)

## Step 1 — Repo audit (done)
- Identified existing components: Navbar (top), Hero/About/Skills/Projects/Experience placeholders.
- Confirmed Tailwind theme variables currently don’t match required palette.

## Step 2 — Implement left fixed sidebar (required)
- Create `frontend/src/components/Sidebar/Sidebar.jsx`
- Desktop: fixed sidebar (~240px) with profile + name + icon+text nav
- Mobile: hamburger toggle slide-in drawer
- Add smooth scrolling + active highlight (scroll spy)

## Step 3 — Replace top Navbar usage
- Update `frontend/src/pages/HomePage/HomePage.jsx` to render `<Sidebar />` and remove `<Navbar />`.

## Step 4 — Full Hero rebuild (required)
- Update `frontend/src/components/Hero/Hero.jsx`:
  - Large heading with “Hi, I'm” and colored rectangle around name
  - Typing animation for roles (Framer Motion supported)
  - Intro paragraph copy (your provided text)
  - Social icons + CTA buttons
  - Glassmorphism styling + hover animations

## Step 5 — Implement required sections UI (required)
- Update:
  - `About.jsx` (modern card + profile image placeholder + personal details + Download Resume button)
  - `Experience.jsx` (vertical timeline)
  - `Projects.jsx` (premium cards + badges + GitHub + Live Demo buttons)
  - `Skills.jsx` (grouped grid cards)
  - Create `Education.jsx` (timeline cards)
  - Update `Contact.jsx` (modern form + socials + location)
- Ensure all section ids match sidebar menu items:
  - #home #about #experience #projects #skills #education #contact #resume

## Step 6 — Typography + theme polish
- Update `frontend/index.html` to load Poppins/Inter/Outfit
- Update `frontend/src/styles/global.css` and `frontend/tailwind.config.js`:
  - background: premium dark teal (or #6F9F96 variant)
  - accent: #00C2A8
  - text colors: white + rgba(255,255,255,.85)

## Step 7 — Footer polish
- Update `frontend/src/components/Footer/Footer.jsx`:
  - “© 2026 Rahul Hattinagre”
  - “Built with React + Tailwind CSS”

## Step 8 — Validate
- Run `npm run dev`
- Confirm:
  - smooth scrolling
  - active sidebar highlight on scroll
  - mobile sidebar collapse
  - responsive layout
  - typing animation

