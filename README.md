## 📖 Project Description

This is my **personal blog and portfolio website**, built to share my thoughts, projects, and journey as a developer. The site is powered by **Jekyll** for static site generation and deployed on **Cloudflare Pages**, making it fast, globally distributed, and secure with free SSL by default.

The design and structure draw inspiration from my earlier **Next.js portfolio site**, re-imagined for Jekyll. It combines minimal styling, smooth navigation, and Markdown-based content management for effortless writing and publishing.

The blog is meant to serve as:

* ✍️ A space to write blog posts and reflections in Markdown
* 💻 A portfolio showcase for my work and projects
* 🌗 A theme with **light/dark mode** support
* 🎨 A clean UI with responsive design

---

## ⚙️ Tech Stack

* **Framework / Generator**: [Jekyll](https://jekyllrb.com/) – static site generator for blogs and content.
* **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) – edge-deployed, globally distributed static hosting.
* **Styling**:

  * Custom CSS (drawing from TailwindCSS-inspired utilities).
  * ThemeContext for light/dark mode (ported from my Next.js design).
* **Frontend Design Features**:

  * Responsive layout with modern typography (Outfit & Ovo fonts).
  * Smooth animations (simplified from Motion.js setup in Next.js).
  * Accessible color contrast (WCAG-friendly palette).
* **Content**:

  * Written in Markdown (`.md` files) for easy formatting.
  * Front matter (`YAML`) metadata for posts (title, date, tags).
* **Pages & Sections**:

  * **Home** – quick intro + navigation
  * **About Me** – background and skills
  * **Portfolio/Work** – project showcase
  * **Blog** – long-form posts in Markdown
  * **Contact** – links and contact info

---

## 🚀 Roadmap

* [ ] Support comments (via Staticman, Giscus, or Disqus)
* [ ] SEO optimizations (sitemap, Open Graph tags, structured data)
* [ ] Cloudflare Workers integration for dynamic features (API-driven projects section, analytics)
