<div align="center">

# 🪐 COSMICA

### 🚀 A Cinematic Window Into Deep Space

> Explore NASA's universe through a real-time WebGL black hole  
> and the **Astronomy Picture of the Day** archive.

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Styled Components](https://img.shields.io/badge/styled--components-6-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)](https://styled-components.com/)
[![pnpm](https://img.shields.io/badge/pnpm-9-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<br/>

[![NASA API](https://img.shields.io/badge/Powered_by-NASA_Open_API-0B3D91?style=for-the-badge&logo=nasa&logoColor=white)](https://api.nasa.gov/)

<br/>

**🌌 `NASA` · `WEBGL` · `ASTRONOMY` · `APOD` · `NEXT.JS` · `TYPESCRIPT`**

</div>

---

# 🌠 Mission Brief

**Cosmica** is a cinematic space-exploration experience built around
NASA's **Astronomy Picture of the Day (APOD)** archive.

The experience begins with a **real-time ray-marched black hole rendered
entirely in WebGL**, then opens into a searchable archive of NASA's
daily astronomical discoveries.

It is designed to feel less like an API demonstration and more like
a **premium space exploration interface**.

### ✦ Core Systems

- 🌌 Real-time ray-marched black hole
- 🛰️ NASA Astronomy Picture of the Day archive
- 🔍 Instant client-side search
- ⏱️ 24-hour server-side caching
- 🎬 Image and video APOD support
- 📱 Responsive space-themed interface
- ♿ Reduced-motion accessibility support
- ⚡ Next.js App Router + Turbopack

---

# 🕳️ Black Hole Engine

The homepage hero isn't a video or a static image.

It is a **real-time WebGL simulation** rendered directly in the browser.

The shader calculates:

- gravitational lensing
- accretion disk rendering
- relativistic beaming
- bloom
- depth and lighting effects
- camera movement

The result is a living black hole that responds to the viewing environment.

> **Zero video. Zero static background. Pure WebGL.**

---

# 🔭 NASA APOD Explorer

Cosmica connects directly to NASA's **Astronomy Picture of the Day API**.

Every APOD entry can be explored through:

```text
Homepage
   │
   ├── Featured APOD
   │
   └── Explore
        │
        ├── Search
        │
        ├── APOD Archive
        │
        └── /explore/[date]
                 │
                 └── APOD Details
```

The gallery supports both:

**🖼️ Images**

and

**🎥 NASA-hosted videos**

without breaking the experience.

---

# ⚡ Features

| Feature             | Description                                 |
| ------------------- | ------------------------------------------- |
| 🌌 WebGL Black Hole | Real-time ray-marched black hole simulation |
| 🛰️ NASA APOD       | Astronomy Picture of the Day integration    |
| 🔍 Instant Search   | Search by title, date and keywords          |
| ⏱️ Smart Caching    | NASA requests are cached for 24 hours       |
| 🎬 Media Support    | Handles both images and videos              |
| 💀 Error States     | Custom loading, empty and error experiences |
| 📱 Responsive       | Optimized for desktop and mobile            |
| ♿ Accessible        | Supports `prefers-reduced-motion`           |

---

# 🧬 Technology Stack

<div align="center">

### 🚀 Frontend

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### 🎨 UI

![Tailwind](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)

### 🌌 Space & Data

![NASA](https://img.shields.io/badge/NASA_APOD-0B3D91?style=for-the-badge&logo=nasa&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=webgl&logoColor=white)

### ☁️ Infrastructure

![pnpm](https://img.shields.io/badge/pnpm-9-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

# 🛠️ Getting Started

## 01 — Clone

```bash
git clone https://github.com/<your-username>/cosmica.git
cd cosmica
```

## 02 — Install Dependencies

```bash
pnpm install
```

## 03 — Configure NASA API

Create:

```text
.env.local
```

Add:

```env
NASA_API_KEY=your_real_key_here
```

Get your free NASA API key from:

🌐 [https://api.nasa.gov/](https://api.nasa.gov/)

Cosmica can also fall back to NASA's `DEMO_KEY` for quick testing,
although a personal key is recommended for regular usage.

---

# 🚀 Launch

### Development

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

### Production

```bash
pnpm build
pnpm start
```

---

# 🛰️ Data Architecture

All NASA communication is isolated inside:

```text
lib/nasa.ts
```

### Available services

```text
getAPOD()
     ↓
Today's Astronomy Picture

getAPODByDate(date)
     ↓
Specific APOD

getRecentAPODs(days)
     ↓
Recent APOD archive
```

Requests use Next.js caching:

```ts
fetch(url, {
  next: {
    revalidate: 86400
  }
})
```

### Result

```text
1 NASA request
      │
      ▼
24 hour cache
      │
      ▼
Multiple page loads
      │
      ▼
No unnecessary NASA requests
```

---

# 🗂️ Project Structure

```text
cosmica/
│
├── app/
│   ├── page.tsx
│   │
│   └── explore/
│       ├── page.tsx
│       └── [date]/
│           └── page.tsx
│
├── components/
│   ├── ui/
│   │   └── loader-4.tsx
│   │
│   ├── BlackHoleHeroSection.tsx
│   ├── StyledComponentsRegistry.tsx
│   ├── Logo.tsx
│   ├── Navbar.tsx
│   ├── HeroContent.tsx
│   ├── SearchBar.tsx
│   ├── APODCard.tsx
│   ├── APODGrid.tsx
│   ├── GallerySection.tsx
│   ├── LoadingState.tsx
│   ├── EmptyState.tsx
│   ├── ErrorState.tsx
│   └── Footer.tsx
│
├── lib/
│   └── nasa.ts
│
├── public/
│
├── .env.local
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

# 🎨 Component Architecture

Cosmica keeps its components separated into two categories.

### `components/`

Application-specific components:

```text
Navbar
Hero
APOD Cards
Gallery
Search
Footer
```

### `components/ui/`

Reusable or third-party UI components:

```text
Loaders
Interactive UI
Drop-in components
```

This keeps the codebase modular and easy to extend.

---

# ☁️ Deployment

Cosmica is designed to deploy directly to **Vercel**.

### Deployment flow

```text
GitHub
   │
   ▼
Vercel
   │
   ├── Install dependencies
   ├── Build Next.js
   └── Deploy
```

Add the environment variable:

```env
NASA_API_KEY=your_nasa_api_key
```

Then deploy.

---

# 🔐 Environment Variables

```env
NASA_API_KEY=your_nasa_api_key
```

Never commit `.env.local`.

Add it to your environment locally and inside your Vercel project settings.

---

# 🪐 Design Philosophy

Cosmica follows three principles:

### 01 — Minimal

Nothing unnecessary.

### 02 — Cinematic

Space should feel enormous, dark and immersive.

### 03 — Technical

The visuals aren't fake screenshots.

The black hole is **actually rendered in WebGL** and NASA data comes
from the real **APOD API**.

---

# 🌌 Future Missions

Potential future upgrades:

```text
◉ Star Map Explorer
◉ More NASA datasets
◉ Interactive celestial map
◉ Nebula visualizations
◉ Deep-space object explorer
◉ Advanced astronomy filters
```

---

<div align="center">

# 🌑 LOOK DEEPER.

### Explore the universe, one image at a time.

<br/>

**Built with ❤️ and curiosity using NASA Open APIs**

<br/>

`Not affiliated with or endorsed by NASA.`

<br/>

⭐ **Star the repository if you enjoyed exploring Cosmica.**

</div>
