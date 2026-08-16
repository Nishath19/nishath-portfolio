# Nishath Tarannum — Portfolio

Personal portfolio site. **React 18 + TypeScript + Vite.**

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script            | Does                                  |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Dev server with hot reload            |
| `npm run build`   | Type-check, then build to `dist/`     |
| `npm run preview` | Serve the production build locally    |
| `npm run typecheck` | Type-check only, no build           |

## Structure

```
src/
  types.ts              All shared interfaces
  data/                 Content — edit these, not the components
    profile.ts          Name, contact links, roles, stats, nav
    services.ts         "What I do" cards
    skills.ts           Skill bars + toolbox chips
    timeline.ts         Experience, education, certifications
    projects.ts         Project cards
  hooks/
    useTyping.ts        Hero typing animation
    useReveal.ts        Scroll-triggered reveals
    useActiveSection.ts Nav highlighting
    useScrolled.ts      Navbar background on scroll
    useSmoothScroll.ts  Anchor click handler
  components/           One file per section
  styles/globals.css    All styles, scoped under .site
```

**To change content, edit `src/data/`.** The components read from those arrays,
so you rarely need to touch JSX.

## Deploy

**Vercel** (easiest) — push to GitHub, import the repo, accept the detected
Vite defaults. Nothing to configure.

**Netlify** — build command `npm run build`, publish directory `dist`.

**GitHub Pages** — set `base: "/<repo-name>/"` in `vite.config.ts`, then:

```bash
npm run build
npx gh-pages -d dist
```

## Notes

- Styling is plain CSS, not Tailwind, so there's no build-time class generation
  and no config to maintain. Everything lives under `.site` and uses CSS custom
  properties — change the palette in one place at the top of `globals.css`.
- The contact form opens the visitor's mail client via `mailto:`. To send
  server-side instead, replace `send()` in `src/components/Contact.tsx` with a POST
  to an AWS Lambda behind API Gateway using SES.
- Reduced-motion is respected throughout; animations are disabled for users who
  ask for that in their OS settings.
