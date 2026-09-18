# Cafe Blues

Cafe Blues is a fictional premium urban cafe website built as a polished React/Vite concept. It presents specialty coffee, seasonal food, a considered atmosphere, and simple hospitality workflows without claiming a real business or connecting to a backend.

## Features

- Responsive Home, Menu, About, and Contact routes
- Data-driven menu with category filters and vegetarian badges
- Mobile navigation with active route state and scroll styling
- Reservation modal and contact form with client-side validation and demo success states
- Scroll reveal motion, reduced-motion support, hover treatments, and back-to-top links
- Semantic headings, labeled fields, focus states, meaningful image alt text, and metadata
- Centralized image and menu data for easy content replacement

## Tech stack

- React + TypeScript
- Vite
- React Router
- Custom CSS design system for the editorial visual language
- lucide-react icons
- Framer Motion for lightweight reveal animations

## Installation

```bash
npm install
npm run dev
```

The development server runs at the local URL printed by Vite.

## Commands

```bash
npm run dev
npm run build
npm run preview
```

`npm run build` runs the strict TypeScript project check before producing the optimized Vite bundle.

## Deployment

Build the project with `npm run build` and deploy the generated `dist` directory to any static host such as Netlify, Vercel, Cloudflare Pages, or GitHub Pages. Configure the host to fall back to `index.html` for client-side routes.

## Replacing images and content

- Menu items and their image URLs live in `src/data/menu.ts`.
- Home gallery image URLs and alt text live in `src/data/gallery.ts`.
- Page copy and fictional team content live in the relevant files under `src/pages/`.
- Replace each remote URL with a hosted image URL or local asset while keeping meaningful `alt` text.

All forms are intentionally UI-only. They show local success states and do not submit data to a server.
