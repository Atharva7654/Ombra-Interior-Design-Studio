# Ombra — Interior Design Studio

A website for **Ombra**, an independent interior design studio in Mumbai creating calm, tactile homes with natural materials, honest craft, and carefully composed light.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, **GSAP**, and **Drizzle ORM**.

---

## 📁 Project Architecture & File Structure

```text
ombra-interior-design/
├── public/                       # Static public assets served from root
│   ├── images/                   # Curated interior imagery (studio, projects, services, journal)
│   └── videos/                   # Looping hero ambient film and poster
│
├── src/
│   ├── app/                      # Next.js App Router pages and routes
│   │   ├── (legal)/
│   │   │   ├── privacy/          # Privacy policy page
│   │   │   └── terms/            # Terms of service page
│   │   ├── api/
│   │   │   └── health/           # System health check route (/api/health)
│   │   ├── contact/              # Interactive enquiry form & server actions
│   │   ├── journal/[slug]/       # Dynamic journal article pages (SSG)
│   │   ├── globals.css           # Global typography, color tokens & design system
│   │   ├── layout.tsx            # Root layout with fonts, navigation & footer
│   │   ├── page.tsx              # Homepage
│   │   ├── robots.ts             # SEO robots.txt generator
│   │   └── sitemap.ts            # Dynamic sitemap.xml generator
│   │
│   ├── components/               # Reusable React components
│   │   ├── layout/               # Global shell: Navbar, Footer, PageHeader
│   │   ├── motion/               # GSAP scroll animations & motion provider
│   │   ├── sections/             # Homepage sections: Hero, About, Services, Projects, etc.
│   │   └── ui/                   # Shared UI primitives: Cards, Buttons, Icons, Badges
│   │
│   ├── db/                       # PostgreSQL database layer
│   │   ├── index.ts              # Resilient Drizzle ORM client with lazy connection
│   │   └── schema.ts             # Database schema (enquiries table)
│   │
│   └── lib/
│       └── content.ts            # Centralized site content, project data, articles & metadata
│
├── .env.example                  # Template for required environment variables
├── .gitignore                    # Standard Git ignore rules for Next.js & Node
├── drizzle.config.json           # Drizzle Kit migration configuration
├── next.config.ts                # Next.js configuration
├── package.json                  # Scripts & dependencies
└── tsconfig.json                 # TypeScript compiler options
```

---

## 🛠️ Quick Start & Development

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment (Optional for DB)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
*Note: If `DATABASE_URL` is omitted, the site will still run and build normally with full static prerendering.*

### 3. Run development server
```bash
npm run dev
# or on a specific port:
npm run dev -- -p 3001
```

Visit [http://localhost:3000](http://localhost:3000) (or your chosen port) in your browser.

---

## 🧪 Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| **`npm run dev`** | `next dev` | Start development server with Turbopack |
| **`npm run build`** | `next build` | Create optimized production bundle |
| **`npm run start`** | `next start` | Run production server |
| **`npm run typecheck`** | `tsc --noEmit` | Validate TypeScript types |
| **`npm run lint`** | `eslint .` | Lint codebase with ESLint |

---

## ✏️ How to Modify Content

All copy, project portfolios, services, and journal articles are centralized in **[`src/lib/content.ts`](src/lib/content.ts)**:

* **Studio Details:** Edit `site` object (name, description, address, email, hours).
* **Projects:** Add or edit items in the `projects` array.
* **Services:** Modify items in the `services` array.
* **Journal / Blog:** Add or edit articles in the `articles` array.
* **Images:** References are mapped in the `images` dictionary pointing to `/images/...`.
