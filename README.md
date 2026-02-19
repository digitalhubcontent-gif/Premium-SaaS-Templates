# 🚀 Premium Templates Suite

> **Enterprise-grade template collection: 3D Website + B2B SaaS Platform**

**Status**: Production-Ready | **Marketplace Value**: $100-200+ per template | **Latest**: SaaS with Optional R3F 3D Hero

---

## 📋 What's Included

### 1️⃣ **Premium 3D Website Template** ($99+)

A production-ready, 3D-first website template built with React, Three.js, and React Three Fiber.

- **3 Complete 3D Scenes** (Hero, Features, Outro)
- **Scroll-Driven Animations** with parallax effects
- **Mobile-Optimized** performance (60fps target)
- **Fully Responsive** design
- **TypeScript Strict Mode**
- **ESLint + Documentation**

**Tech**: React 18, Three.js r157, React Three Fiber, Framer Motion, Next.js 14

### 2️⃣ **B2B SaaS Template** ($100+) - NEW!

A dark-first, enterprise-grade B2B SaaS landing page template with **optional React Three Fiber 3D hero**.

- **15 Production Components** (Header, Hero, Features, Pricing, Testimonials, etc.)
- **Optional 3D Hero** (animated orbs/waves - toggleable)
- **Dark-First UI** with full light mode support
- **Generic B2B Theming** (Analytics, Project Management, AI platforms)
- **Enterprise-Ready** architecture
- **JSON-Driven Content** (easy customization)
- **Scroll-Triggered Animations** with Framer Motion

**Tech**: React 18, Next.js 14, Framer Motion, Tailwind CSS, React Three Fiber (optional)

---

## 🎯 Quick Start

### SaaS Template (Recommended for B2B)

```bash
cd SaaS-Template
npm install
npm run dev
```

Visit `http://localhost:3000`

**Features**:
- ✅ Dark mode default
- ✅ Optional 3D hero
- ✅ 3-tier pricing
- ✅ Mobile responsive
- ✅ Production-ready

### 3D Website Template

```bash
cd 3D-Template  # or root folder
npm install
npm run dev
```

**Features**:
- ✅ Full 3D rendering
- ✅ Scroll animations
- ✅ WebGL optimized
- ✅ Marketplace-ready

---

## 📦 Tech Stack (All Templates)

### Core
- **React 18+** - UI framework with strict TypeScript
- **Next.js 14** - App Router, SSR, static export
- **TypeScript** - Type safety (strict mode)

### Styling & Animation
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Entrance, scroll, and transition effects
- **CSS Modules** - Scoped component styles

### 3D (Optional in SaaS, Required in 3D Template)
- **Three.js r157** - 3D graphics engine
- **React Three Fiber v8.14** - React abstraction for Three.js
- **@react-three/drei v9.88** - Helpers (scroll, camera, models)

### Development
- **ESLint** - Code quality
- **TypeScript strict mode** - Type checking
- **Prettier** - Code formatting

---

## 🌐 Architecture Overview

### SaaS Template

```
src/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
│
├── components/               # 15 Components
│   ├── Header.tsx
│   ├── HeroSection.tsx       # + Optional 3D Canvas
│   ├── HeroCanvas.tsx        # React Three Fiber wrapper
│   ├── AnimatedOrbs.tsx      # 3D orbs
│   ├── AnimatedWaves.tsx     # 3D waves
│   ├── FeaturesSection.tsx
│   ├── PricingSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── CaseStudiesSection.tsx
│   ├── FAQSection.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Badge.tsx
│
├── data/                     # Content (JSON)
│   ├── features.json
│   ├── pricing.json
│   ├── testimonials.json
│   ├── caseStudies.json
│   └── faq.json
│
├── hooks/                    # Custom Hooks
│   ├── useTheme.ts          # Dark/light mode
│   ├── useScrollAnimation.ts # Intersection Observer
│   └── useMobileMenu.ts     # Mobile menu state
│
├── styles/
│   ├── theme.ts             # Design tokens
│   └── Button.module.css
│
└── utils/
    └── helpers.ts           # Utilities
```

### 3D Template

```
src/
├── app/
├── components/              # Canvas, Camera, Lights, Models
├── scenes/                  # HeroScene, FeatureScene, OutroScene
├── hooks/                   # useScrollProgress, useMouseParallax
└── utils/                   # Constants, animation helpers
```

---

## ✨ Key Features Comparison

| Feature | SaaS Template | 3D Template |
|---------|---|---|
| **Components** | 15 production | 3 scenes |
| **3D Rendering** | Optional (toggleable) | Required (100%) |
| **Dark/Light Mode** | ✅ Both | ✅ Both |
| **Responsive** | ✅ Full | ✅ Full |
| **B2B Focused** | ✅ Yes | ❌ Generic |
| **Animation** | Framer Motion + scroll | Scroll + Three.js |
| **Content** | JSON files | 3D models |
| **Performance** | LH 95+ | 60fps target |
| **Use Case** | B2B Landing | Agency/Creative |

---

## 🎨 Design System

### Colors (Dark-First for SaaS)

```
Primary:     #6366f1 (Indigo)
Secondary:  #a855f7 (Violet)
Accent:     #ec4899 (Pink)
Background: #111827 (Gray-900)
Text:       #f3f4f6 (Gray-100)
```

### Typography

- **Headings**: Inter, 700 weight
- **Body**: Inter, 400 weight
- **Code**: Space Mono

### Responsive

- Mobile: 320px–640px
- Tablet: 641px–1024px
- Desktop: 1025px+

---

## 🚀 Production Deployment

### Vercel (Recommended)

```bash
vercel
```

### Docker

```bash
docker build -t template .
docker run -p 3000:3000 template
```

### Self-Hosted

```bash
npm run build
npm start
```

---

## 📚 Documentation

### SaaS Template

- `SaaS-Template/README.md` - Quick start & features
- `SaaS-Template/B2B_CONFIGURATION.md` - Enterprise customization
- `SaaS-Template/DEPLOYMENT.md` - Production deployment

### 3D Template

- `README.md` - Architecture & quick start
- `DEVELOPMENT_GUIDE.md` - Workflows & patterns
- `PROJECT_STRUCTURE.md` - File organization

### Global

- `.github/copilot-instructions.md` - AI agent guidance
- `COMPLIANCE_VERIFICATION.md` - Requirements checklist

---

## 🎯 Use Cases

### Choose SaaS Template For:
✅ B2B landing pages  
✅ Startup marketing sites  
✅ Analytics platforms  
✅ Project management tools  
✅ AI platforms  
✅ Collaboration software  
✅ Enterprise SaaS

### Choose 3D Template For:
✅ Creative agencies  
✅ Web3/blockchain sites  
✅ Gaming platforms  
✅ Educational tech  
✅ Immersive brand experiences  
✅ Portfolio websites  
✅ Premium portfolios

---

## 🔒 Security & Compliance

✅ **TypeScript strict mode** - Type safety  
✅ **ESLint configured** - Code quality  
✅ **No external APIs** - Static-first  
✅ **GDPR ready** - No tracking by default  
✅ **WCAG 2.1 AA** - Accessibility compliant  
✅ **Security headers** - CORS, CSP ready  
✅ **Performance optimized** - LH 95+

---

## 📊 Marketplace Value

| Template | Base | With Customization | Enterprise |
|----------|------|-----------------|-----------|
| SaaS | $100 | $200-400 | Custom pricing |
| 3D | $99 | $150-300 | Custom pricing |
| Bundle | $150 | $350-700 | Custom pricing |

---

## 🆘 Support

### Documentation
- SaaS: See `SaaS-Template/B2B_CONFIGURATION.md`
- 3D: See `DEVELOPMENT_GUIDE.md`

### Common Issues
- **3D not showing**: Check Three.js dependencies
- **Dark mode broken**: Clear cache, verify ThemeProvider
- **Performance slow**: Disable 3D hero, optimize images
- **Build fails**: Run `npm install` and `npm run build`

---

## 📝 License

MIT - Use freely, commercially

---

## 🎓 Getting Started

### 1. Choose Template
- SaaS (B2B focus) or 3D (Creative focus)

### 2. Install
```bash
cd SaaS-Template  # or 3D-Template
npm install
```

### 3. Customize
- Edit JSON files for content
- Update theme.ts for colors
- Modify components as needed

### 4. Deploy
```bash
npm run build
vercel  # or your hosting
```

---

**Build Date**: February 2026 | **Status**: Production-Ready | **Next**: Iterate & customize for your platform


├── components/            # Core R3F components
│   ├── SceneCanvas.tsx    # Canvas wrapper & scroll setup
│   ├── CameraRig.tsx      # Camera controller
│   ├── Lights.tsx         # Lighting setup
│   └── Loader.tsx         # Loading UI
│
├── scenes/                # 3D experiences
│   ├── HeroScene.tsx      # Landing (0-33% scroll)
│   ├── FeatureScene.tsx   # Features (33-66% scroll)
│   └── OutroScene.tsx     # CTA (66-100% scroll)
│
├── models/                # 3D asset handling
│   ├── Model.tsx          # GLTF loader
│   └── materials.ts       # Material presets
│
├── animations/            # Animation utilities
│   ├── scrollAnimations.ts
│   └── cameraAnimations.ts
│
├── hooks/                 # Custom hooks
│   ├── useScrollProgress.ts
│   └── useMouseParallax.ts
│
├── utils/                 # Helpers
│   ├── constants.ts
│   └── math.ts
│
└── styles/
    └── globals.css        # Base reset only
```

## 🎨 Key Patterns

### Scroll-Driven 3D Animation
```tsx
const scroll = useScrollProgress();

useFrame(() => {
  mesh.rotation.y = scroll.offset * Math.PI * 2;
});
```

### Overlay Text Sync
```tsx
<motion.div animate={{ opacity: 1 - scroll.offset * 0.5 }}>
  Content synced with scroll
</motion.div>
```

### Model Loading
```tsx
<Suspense fallback={<Loader />}>
  <Model path="/models/hero.glb" scale={2} />
</Suspense>
```

## 🎮 Features

- ✅ Fully 3D-rendered UI (no HTML layout)
- ✅ Scroll-driven camera & object animations
- ✅ Mouse parallax effects
- ✅ Mobile-safe performance limits
- ✅ Optimized lighting (no real-time shadows)
- ✅ Lazy-loaded models with Suspense
- ✅ Framer Motion overlay text
- ✅ TypeScript support
- ✅ Production-ready performance

## 📊 Performance

- **Target**: 60fps on modern devices
- **Mobile**: Clamped camera FOV & reduced effects
- **Optimization**: Baked shadows, no per-vertex calculations
- **Bundle**: ~200KB (React + Three.js)

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Static Export (Framer/Webflow)
```bash
npm run export
# Deploy output/ folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🛠️ Common Tasks

### Add a new 3D scene
1. Create file in `src/scenes/YourScene.tsx`
2. Import in `src/app/page.tsx` and wrap with `<Suspense>`
3. Add overlay with Framer Motion if needed

### Load a 3D model
1. Place `.glb` in `public/models/`
2. Compress with Blender or Draco
3. Use `<Model path="/models/file.glb" />`

### Customize lighting
Edit `src/components/Lights.tsx` or pass props to override defaults

### Debug canvas
Set `debug={true}` on `<SceneCanvas>` to enable stats overlay

## ⚠️ Important Notes

- **Scroll Container**: Ensure `data-scroll-container` exists (added by SceneCanvas)
- **Model Size**: Keep total under 10MB for marketplace viability
- **Mobile Testing**: Use `?mobile=true` to test mobile camera limits
- **State Management**: Use React hooks only, avoid Redux
- **No localStorage**: For better Framer export compatibility

## 📚 Resources

- [Three.js Docs](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Drei Components](https://github.com/pmndrs/drei)
- [Framer Motion](https://www.framer.com/motion/)

## 📄 License

This template is provided as-is for commercial use. Modify and sell freely.

---

**Build premium 3D experiences with confidence.** 🚀
