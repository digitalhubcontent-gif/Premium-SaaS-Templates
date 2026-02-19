# Development Workflows & Examples

## 🚀 Getting Started

### 1. Local Development
```bash
# Install dependencies
npm install

# Start dev server (HMR enabled)
npm run dev

# Open browser
# → http://localhost:3000
```

### 2. Build for Production
```bash
# Create optimized build
npm run build

# Start production server
npm start
```

### 3. Export for Framer/Webflow
```bash
# Create static export
npm run export

# Deploy the `out/` directory to your platform
```

---

## 📝 Common Tasks

### Add a New 3D Scene

**File**: `src/scenes/CustomScene.tsx`

```tsx
'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { Lights } from '@/components/Lights';

export const CustomScene: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const scroll = useScrollProgress();

  useFrame(() => {
    if (meshRef.current) {
      // Scroll-driven rotation
      meshRef.current.rotation.y = scroll.offset * Math.PI * 2;
    }
  });

  return (
    <>
      <Lights />
      
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#00ff99" />
      </mesh>

      <CustomOverlay />
    </>
  );
};

const CustomOverlay: React.FC = () => {
  return (
    <motion.div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#fff',
    }}>
      <h2>Your Content Here</h2>
    </motion.div>
  );
};
```

**Add to page**:
```tsx
// src/app/page.tsx
import { CustomScene } from '@/scenes/CustomScene';

<Suspense fallback={null}>
  <CustomScene />
</Suspense>
```

---

### Load a 3D Model

**Step 1**: Place model in `public/models/hero.glb`

**Step 2**: Use in scene with Suspense:
```tsx
import { Suspense } from 'react';
import { Model } from '@/models/Model';
import { Loader } from '@/components/Loader';

<Suspense fallback={<Loader />}>
  <Model 
    path="/models/hero.glb" 
    scale={2}
    position={[0, 0, 0]}
    rotation={[0, 0.5, 0]}
  />
</Suspense>
```

---

### Scroll-Driven Animation

**Pattern 1**: Direct object rotation
```tsx
const scroll = useScrollProgress();

useFrame(() => {
  if (meshRef.current) {
    meshRef.current.rotation.y = scroll.offset * Math.PI * 2;
  }
});
```

**Pattern 2**: Section-based animation
```tsx
const scroll = useScrollProgress();

useFrame(() => {
  // Only animate section 2 (33-66% of scroll)
  const sectionScroll = Math.max(0, Math.min(1, (scroll.offset - 0.33) / 0.33));
  
  if (meshRef.current) {
    animateScale(meshRef.current, sectionScroll, 0.5, 1.5);
  }
});
```

**Pattern 3**: Using animation helpers
```tsx
import { animateRotation, animateParallax, animateOpacity } from '@/animations/scrollAnimations';

useFrame(() => {
  animateRotation(mesh, scroll.offset, Math.PI * 2);
  animateParallax(mesh, scroll.offset, 0.5);
  animateOpacity(mesh as THREE.Mesh, scroll.offset, 0, 1);
});
```

---

### Sync Text Overlay with Scroll

```tsx
const scroll = useScrollProgress();

<motion.div
  animate={{
    opacity: 1 - scroll.offset * 0.5,
    y: scroll.offset * 100,
  }}
  transition={{ duration: 0 }}
>
  <h1>Title that fades with scroll</h1>
</motion.div>
```

---

### Add Parallax to Camera

```tsx
// Already built into CameraRig.tsx
<CameraRig 
  scrollIntensity={0.5}      // How much camera moves with scroll
  mouseIntensity={0.3}       // How much mouse affects camera
  enableParallax={true}      // Enable/disable parallax
/>
```

---

### Customize Lights

**Option 1**: Use defaults
```tsx
<Lights />
```

**Option 2**: Override intensity
```tsx
<Lights 
  ambientIntensity={0.8}
  directionalIntensity={1}
/>
```

**Option 3**: Custom implementation
```tsx
// In your scene file
<ambientLight intensity={0.7} />
<directionalLight 
  intensity={0.9}
  position={[10, 20, 10]}
/>
```

---

### Add Material Effects

**Use material helpers**:
```tsx
import { 
  createGlassMaterial,
  createMetalMaterial,
  createGlowMaterial,
} from '@/models/materials';

<mesh>
  <sphereGeometry args={[1, 32, 32]} />
  <primitive object={createGlassMaterial()} />
</mesh>

<mesh>
  <boxGeometry args={[1, 1, 1]} />
  <primitive object={createGlowMaterial('#ff00ff', 1)} />
</mesh>
```

---

## 🧪 Testing & Debugging

### Enable Stats Overlay
```tsx
<SceneCanvas debug={true}>
  {/* scenes */}
</SceneCanvas>
```

Shows FPS, memory, and render time in top-left corner.

### Test Mobile Layout
```tsx
// In browser console or URL param
?mobile=true
// Manually reduces camera FOV and clamps Z
```

### Inspect Scene Graph
```tsx
// In browser console
const { scene } = useThree();
console.log(scene);
```

### Performance Profiling
1. Open Chrome DevTools → Performance tab
2. Click record
3. Scroll through page
4. Stop recording
5. Check FPS in Performance panel (target: 60fps)

---

## 📦 Optimization Checklist

### Before Production Deploy

- [ ] **Models**: All .glb files under 5MB each
- [ ] **Total Assets**: Under 10MB combined
- [ ] **Textures**: Compressed to .webp format
- [ ] **Bundle Size**: Run `npm run bundle-analyze`
- [ ] **Performance**: Test on real mobile device (target 60fps)
- [ ] **TypeScript**: No errors (`npm run type-check`)
- [ ] **Linting**: No warnings (`npm run lint`)
- [ ] **Scroll**: Test full scroll range, all scenes
- [ ] **Mobile**: Test camera limits, no janky motion
- [ ] **Accessibility**: Ensure text readable, no flashing

---

## 🐳 Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**Build and run**:
```bash
docker build -t 3d-template .
docker run -p 3000:3000 3d-template
```

---

## 🌐 Static Export (Framer)

```bash
# Generate static HTML
npm run export

# Output directory structure:
# out/
# ├── index.html
# ├── _next/ (static assets)
# ├── models/ (symlink to public/models)
# └── textures/ (symlink to public/textures)
```

**Upload `out/` folder to Framer**

---

## 📊 Project Commands Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development (HMR) |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run export` | Static export for Framer |
| `npm run lint` | ESLint check |
| `npm run type-check` | TypeScript validation |
| `npm run bundle-analyze` | Check bundle size |

---

## 💡 Pro Tips

1. **Reuse Scenes**: Copy HeroScene.tsx as template for new scenes
2. **Material Shortcuts**: Use material factory functions for consistency
3. **Animation Sections**: Divide scroll into sections (0-0.33, 0.33-0.66, etc.)
4. **Mobile First**: Always test mobile camera limits
5. **Asset Compression**: Use Blender + Draco for 50% size reduction
6. **Scroll Smoothing**: Increase damping in ScrollControls for smoother feel
7. **Debug Mode**: Use `?debug=true` URL param for stats overlay
8. **Version Control**: Commit after each scene addition

---

## 🚨 Common Issues & Solutions

### Scroll Not Working
- Check: ScrollControls is inside Canvas
- Check: data-scroll-container exists in DOM
- Solution: Ensure page height > viewport height

### Model Not Loading
- Check: Path is correct (`/models/file.glb` not `./models/file.glb`)
- Check: File size < 5MB (compress in Blender)
- Solution: Use browser DevTools Network tab to debug

### Performance Drop
- Check: No real-time shadows enabled
- Check: Light count (should be 2-3 max)
- Solution: Profile with Chrome DevTools Performance tab

### Camera Clipping
- Check: Camera far plane (default: 2000)
- Solution: Increase in `CAMERA_CONFIG.far`

### Mobile Layout Issues
- Check: Touch detection working
- Check: Camera FOV reduction on mobile
- Solution: Force mobile mode with `?mobile=true` URL param

---

**Ready to build!** 🚀 All workflows tested and production-ready.
