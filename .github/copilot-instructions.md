# Copilot Instructions

This document guides AI agents in being productive within this workspace.

## Workspace Overview

**Status**: Premium Template Suite (Production-Ready)

**Contents**:
1. **3D Template** - High-end 3D website using Three.js + React Three Fiber ($99+)
2. **SaaS Template** - Conversion-focused SaaS landing page template ($100+)

**Tech Stack (All Projects)**: 
- React 18+ with TypeScript (strict mode)
- Next.js 14 (App Router)
- Framer Motion for animations
- Tailwind CSS for styling
- Dark/light mode support
- Component-driven architecture

## Architecture & Key Components

### Core Principle
**All visuals render via WebGL through React Three Fiber's <Canvas />. NO HTML-based layout sections exist.** Text overlays use Framer Motion synchronized with 3D scroll progress.

### Major Components

**Canvas Layer** (`components/SceneCanvas.tsx`)
- Wraps React Three Fiber <Canvas /> with optimized settings
- Handles pixel ratio, antialiasing, and mobile safety
- Enables Drei's scroll and pointer tracking

**Camera System** (`components/CameraRig.tsx`)
- useFrame + useThree for camera motion control
- Responds to useScroll() and mouse input
- Mobile-safe camera limits and frustum culling

**Lighting Setup** (`components/Lights.tsx`)
- Minimal real-time lights (performance-critical)
- Ambient + directional lights only, no per-vertex shadows
- Baked shadows via lightmap textures where needed

**3D Scenes** (`scenes/`)
- **HeroScene.tsx**: Primary landing experience with parallax
- **FeatureScene.tsx**: Product/feature showcase in 3D space
- **OutroScene.tsx**: Call-to-action or transition scene
- Each scene is a self-contained component with local animation state

**Model System** (`models/Model.tsx`)
- useGLTF loader with Suspense boundary
- Lazy-loads compressed .glb assets
- Material composition and shader handling

### Data Flows

```
User Scroll ↓
  ↓
useScroll() (Drei) captures progress [0–1]
  ↓
useScrollProgress() hook distributes scroll state
  ↓
CameraRig adjusts camera position/FOV via useFrame
  ↓
Scenes and objects animate via Framer Motion + R3F animations
  ↓
Overlay text synchronized with scroll via motion.div (Framer)
```

**Interaction Loop**:
1. useFrame runs every render tick
2. Camera position updated via scroll or mouse
3. Objects animate based on camera/scroll state
4. Overlay UI overlays follow scroll progress
5. All transitions run at 60fps target

### Component Reusability
- **Lights.tsx**: Dropped into any scene without modification
- **CameraRig.tsx**: Reusable across multiple scenes with config props
- **Model.tsx**: Generic GLTF wrapper for any 3D model
- **Scenes**: Standalone; can be swapped or combined

## Development Workflows

### Build
```bash
npm run build          # Production build (Next.js optimized)
npm run dev            # Local development with HMR
npm run export         # Static export for Framer/Webflow
```

### Test & Validation
```bash
npm run lint           # ESLint checks
npm run type-check     # TypeScript validation
npm run bundle-analyze # Check build size
```

### Debug
- **Canvas Issues**: Use `useThree()` to inspect scene graph in browser console
- **Scroll Sync**: Check `useScrollProgress()` with console.log; ensure scroll target element exists
- **Performance**: Use Chrome DevTools > Performance tab; target 60fps (16ms per frame)
- **Model Loading**: Verify .glb paths in `public/models/`; check Suspense fallback renders
- **Mobile**: Test with `?mobile=true` query param to trigger mobile camera limits

### Asset Management
- 3D Models: Place .glb files in `public/models/`; optimize with Blender
- Textures: Compress to .webp; store in `public/textures/`
- Keep total model size under 10MB for marketplace viability

## Code Patterns & Conventions

### Naming Conventions
- **Files**: `CamelCase.tsx` for components; `camelCase.ts` for utils/hooks
- **3D Objects**: PrefixScene names (HeroScene, FeatureScene) for clarity
- **Hooks**: Prefix with `use` (useScrollProgress, useMouseParallax)
- **Constants**: `UPPER_SNAKE_CASE` in `constants.ts`

### 3D Animation Patterns

**Scroll-Driven Animation**:
```tsx
const scroll = useScroll();
useFrame(() => {
  if (meshRef.current) {
    meshRef.current.rotation.y = scroll.offset * Math.PI * 2;
  }
});
```

**Framer Motion Overlays**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content synced with scroll
</motion.div>
```

### Error Handling
- Wrap model loading in Suspense with fallback spinner
- Use try-catch for texture loading in materials.ts
- Log performance warnings if FPS drops below 50

### Configuration
- Environment variables: `.env.local` for API endpoints, analytics keys
- Canvas settings: Configure in `SceneCanvas.tsx` (dpr, antialias, shadowMap)
- Scroll sensitivity: Adjust in `useScrollProgress.ts`; test on mobile

## Critical Integration Points

### React Three Fiber (R3F) Patterns
- **Canvas wrapper**: All 3D content must be inside `<Canvas>` component
- **Hooks only**: Use useFrame, useThree, useGLTF, useScroll
- **Suspense**: Wrap async model loading with Suspense boundaries
- **Event handlers**: Camera and object interactions via pointerEvents

### Framer Motion Integration
- Text overlays synchronized with scroll via `useScroll()` + `useViewportScroll()`
- Page transitions use `AnimatePresence` with layout animations
- No mixing Framer Motion with R3F animations on same object

### External Dependencies
- **Three.js**: Pinned version; only use core + official addons
- **@react-three/fiber**: v8.x+; uses latest React 18 features
- **@react-three/drei**: v9.x+; provides scroll, useGLTF, stats helpers
- **Framer Motion**: v10.x+; for overlay text and transitions
- **Next.js**: v13+ for App Router and static export support

## Testing Strategy

- Unit test structure: `src/__tests__/` with `.test.ts` files
- Mock patterns: Mock Three.js objects and useFrame hooks
- Integration test approach: Test scroll-driven animations end-to-end
- Coverage requirements: Minimum 70% for hooks and utilities
- Performance testing: Measure FPS using Three.js stats addon

## Key Files Reference

| File/Directory | Purpose |
|---|---|
| `src/app/page.tsx` | Entry point - Main page component |
| `src/components/SceneCanvas.tsx` | R3F Canvas wrapper with config |
| `src/components/CameraRig.tsx` | Camera motion controller |
| `src/components/Lights.tsx` | Global lighting setup |
| `src/scenes/` | Major 3D experiences (Hero, Feature, Outro) |
| `src/models/Model.tsx` | GLTF loader wrapper with Suspense |
| `src/hooks/useScrollProgress.ts` | Scroll state distribution |
| `src/utils/constants.ts` | Magic numbers, canvas config |
| `src/styles/globals.css` | Base resets only |

## Project-Specific Guidance

### Common Tasks
1. **Adding a new 3D scene**: Create file in `scenes/`, wrap with SceneCanvas, add to main page layout
2. **Loading a new 3D model**: Place .glb in `public/models/`, wrap with Model.tsx + Suspense
3. **Scroll-driven animation**: Use `useScroll()` in useFrame loop; sync overlays via Framer Motion
4. **Debugging canvas rendering**: Inspect `useThree()` scene graph in DevTools console

### Gotchas & Important Notes
- **Scroll not working**: Ensure scroll container is set in SceneCanvas; check `data-scroll` attributes
- **Models not loading**: Verify .glb file size under 5MB; check compression with Draco
- **Camera clipping**: Increase frustum far plane if objects disappear; check mobile limits
- **Performance drop**: Profile with Chrome DevTools Perf tab; reduce light complexity first
- **Mobile layouts**: Always test camera limits; consider disabling advanced effects on mobile
- **Framer export**: Keep all state in hooks; avoid localStorage for better Framer compatibility

## Useful Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)
- [Drei Helpers](https://github.com/pmndrs/drei)
- [Framer Motion Docs](https://www.framer.com/motion/)

## SaaS Template Architecture

### 3D Template Architecture

**Status**: Premium 3D Website Template (Production-Ready)

**Purpose**: A high-end, 3D-first website template built with React, Three.js, and React Three Fiber. Designed for selling as a professional marketplace template ($99+). Every visual element renders through WebGL via React Three Fiber's <Canvas />.

**Tech Stack (3D)**: 
- React 18+ with TypeScript
- Three.js + React Three Fiber (R3F)
- Framer Motion for page transitions
- @react-three/drei for scroll/camera helpers

**Core Principle**: All visuals render via WebGL through React Three Fiber's <Canvas />. NO HTML-based layout sections exist. Text overlays use Framer Motion synchronized with 3D scroll progress.

### SaaS Template (Current Focus)

**Status**: Premium SaaS Landing Page (Production-Ready)

**Purpose**: High-conversion SaaS landing page template with smooth animations, dark/light mode, and responsive design. Ready for marketplace sale ($100+).

**Tech Stack (SaaS)**:
- React 18+ with TypeScript (strict mode)
- Next.js 14 (App Router)
- Framer Motion v10.16 (animations)
- Tailwind CSS (styling)
- Custom hooks (useTheme, useScrollAnimation, useMobileMenu)
- JSON data-driven architecture

**Project Structure**:
```
SaaS-Template/
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # React components (14 total)
│   ├── data/             # JSON data files (5 total)
│   ├── hooks/            # Custom hooks (3 total)
│   ├── utils/            # Utilities and constants
│   └── styles/           # Design tokens and theme
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js optimization
└── README.md             # Documentation
```

**Key Components**:
1. **Header.tsx** - Sticky navigation with mobile menu
2. **HeroSection.tsx** - Landing hero with gradient background
3. **FeaturesSection.tsx** - 6-feature grid with scroll animations
4. **PricingSection.tsx** - 3-tier pricing with monthly/annual toggle
5. **TestimonialsSection.tsx** - Auto-rotating carousel
6. **CaseStudiesSection.tsx** - Success stories showcase
7. **FAQSection.tsx** - Collapsible accordion
8. **CTASection.tsx** - Final conversion CTA
9. **Footer.tsx** - Footer with links and social
10. **Button.tsx** - Multi-variant button component
11. **Card.tsx** - Reusable card container
12. **Badge.tsx** - Status badges
13. **ThemeToggle.tsx** - Dark/light mode toggle
14. **ThemeProvider.tsx** - Theme context

**Data Files** (All JSON-based):
- `features.json` - Feature definitions (6 items)
- `pricing.json` - Pricing tiers (3 tiers)
- `testimonials.json` - Customer testimonials (5 items)
- `caseStudies.json` - Success stories (3 items)
- `faq.json` - FAQ items (6 items)

**Design System** (`src/styles/theme.ts`):
- Color palette (primary/secondary/accent + neutrals)
- Typography scales (h1-h4, body, small)
- Spacing system (xs-huge)
- Border radius (sm-full)
- Shadows (sm-lg)
- Transitions (fast/base/slow)
- Breakpoints (sm/md/lg/xl/2xl)
- Z-index scale

**Animation Patterns**:
- **Scroll-Triggered**: Use `useScrollAnimation` hook with Intersection Observer
- **Entrance Effects**: Framer Motion `initial` → `whileInView` → `transition`
- **Hover Interactions**: `whileHover`, `whileTap` for immediate feedback
- **Page Transitions**: AnimatePresence for smooth page changes
- **Auto-Rotation**: useEffect with setInterval for carousels

**Customization Workflows**:
1. **Change Colors**: Edit `theme.ts` or `tailwind.config.js`
2. **Update Content**: Edit JSON files in `data/` directory
3. **Modify Sections**: Edit component files in `components/`
4. **Add Forms**: Create form component, integrate with backend API
5. **Deploy**: Use Vercel (recommended), Netlify, or self-host

**Performance Optimizations**:
- Suspense boundaries for lazy loading
- CSS Modules for scoped styling
- Image optimization (Next.js <Image>)
- CSS-in-JS minimization via CSS Modules
- Memoization of components
- Dark mode uses CSS selectors (no re-renders)

**Common Tasks**:
1. **Changing pricing**: Edit `data/pricing.json`
2. **Adding testimonials**: Add item to `data/testimonials.json`
3. **Updating colors**: Edit `tailwind.config.js` or `theme.ts`
4. **Modifying header links**: Edit `components/Header.tsx`
5. **Customizing animations**: Edit Framer Motion props in components
6. **Deploying**: Use `npm run build`, then deploy to Vercel/Netlify
7. **Testing locally**: Run `npm run dev` → http://localhost:3000

**Key Files Reference**:

| File/Directory | Purpose |
|---|---|
| `src/app/page.tsx` | Entry point - Main page component |
| `src/app/layout.tsx` | Root layout with metadata |
| `src/app/globals.css` | Global styles and animations |
| `src/components/Header.tsx` | Navigation header |
| `src/components/HeroSection.tsx` | Landing hero |
| `src/components/PricingSection.tsx` | Pricing showcase |
| `src/styles/theme.ts` | Design tokens |
| `src/data/` | All JSON data files |
| `tailwind.config.js` | Tailwind customization |
| `next.config.js` | Next.js optimization |
| `package.json` | Dependencies |
| `README.md` | Documentation |
| `DEPLOYMENT.md` | Deployment guide |

**Gotchas & Important Notes**:
- **useTheme hook**: Must be inside ThemeProvider component
- **useScrollAnimation**: Returns boolean `isInView`; use with motion.div for best results
- **Mobile menu**: Check `useMobileMenu` hook for state management
- **Dark mode**: Applied via `[data-theme='dark']` CSS selector
- **Animations**: All use Framer Motion; avoid mixing with CSS animations
- **Data updates**: Edit JSON files directly; no API calls needed for static content
- **Form submissions**: Placeholder buttons; integrate with API endpoint or service
- **TypeScript**: Strict mode enabled; all props must be typed
- **Performance**: Lighthouse score 95+; keep animations GPU-accelerated

---

**Last Updated**: February 2026  
**Template Suite**: 3D Template + SaaS Template  
**Instructions for AI Agents**: Refer to this document when starting work. Update this file when you discover important patterns or workflows.
