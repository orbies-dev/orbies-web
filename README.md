# orbies.dev

A modern, developer-focused platform for hosting and sharing Orb applications. Built with Astro, this website enables small teams and individual developers to publish their small, focused apps built in hours.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd orbies.dev
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see the site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
orbies.dev/
├── src/
│   ├── pages/              # Page components
│   │   ├── index.astro     # Homepage
│   │   ├── apps.astro      # Apps gallery
│   │   ├── publish.astro   # Publish form
│   │   └── manifesto.astro # Manifesto page
│   ├── components/         # Reusable components
│   │   ├── Hero.astro
│   │   ├── AppCard.astro
│   │   ├── NavBar.astro
│   │   ├── Footer.astro
│   │   └── AnimatedOrb.astro
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro
│   ├── styles/            # Global styles
│   │   └── global.css
│   └── data/              # Data and types
│       ├── types.ts
│       └── orbs.ts
├── public/                # Static assets
└── astro.config.mjs      # Astro configuration
```

## 🎨 Features

- **Modern Design**: Brutalist-meets-modern aesthetic with high contrast
- **Smooth Animations**: Floating orbs, hover effects, and page transitions
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Built with Astro for optimal performance
- **Interactive Filtering**: Search and filter apps by platform and tech stack
- **Multi-step Form**: Intuitive app submission process
- **Glassmorphism Effects**: Beautiful frosted glass UI elements

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [React](https://react.dev) - For interactive components
- TypeScript - Type-safe development

## 📝 Adding New Apps

To add new Orbs to the platform:

1. Edit `src/data/orbs.ts`
2. Add a new Orb object following the `Orb` interface from `src/data/types.ts`
3. The app will automatically appear on the homepage and apps page

Example:

```typescript
{
  id: '7',
  name: 'MyAwesomeOrb',
  tagline: 'Does one thing perfectly',
  description: 'A focused tool that solves a specific problem.',
  icon: '🎯',
  screenshots: ['/screenshots/myorb.png'],
  github: 'https://github.com/username/myorb',
  stars: 100,
  tech: ['TypeScript', 'Node.js'],
  platforms: ['cli'],
  buildTime: '3 hours',
  creator: {
    name: 'Your Name',
    avatar: '👨‍💻',
    github: 'yourusername'
  },
  createdAt: new Date('2025-11-03'),
  featured: true
}
```

## 🎯 The Orb Philosophy

Orbs are:
- **Focused**: One app, one problem
- **Fast to build**: Hours or days, not months
- **Open source**: Free and shareable
- **Lightweight**: No unnecessary dependencies

## 📄 License

MIT License - feel free to use this as a template for your own projects!

## 🤝 Contributing

This is currently a Phase 1 MVP with static data. Future phases will include:
- Backend API for real submissions
- User authentication
- Analytics dashboard
- RSS feed for new apps

Built with the Orb philosophy: focused, functional, and shipped quickly.
