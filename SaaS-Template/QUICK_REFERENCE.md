# 🚀 SaaS Template - Quick Reference Card

> **B2B SaaS Template with Optional React Three Fiber 3D Hero | Dark-First | Production-Ready**

---

## ⚡ Quick Commands

```bash
# Development
npm install
npm run dev

# Production
npm run build
npm start

# Deploy
vercel

# Check quality
npm run lint
npm run type-check
```

---

## 🎨 Customization (Most Common Tasks)

### 1. Update Features
```
File: src/data/features.json
Edit: Add/remove/update 6 features
```

### 2. Change Pricing
```
File: src/data/pricing.json
Edit: Update prices and tiers
```

### 3. Toggle 3D Hero
```
File: src/components/HeroSection.tsx
Line 32: const enable3D = false;  // Toggle
```

### 4. Change Colors
```
File: tailwind.config.js
Edit: Update primary/secondary colors
```

### 5. Update Testimonials
```
File: src/data/testimonials.json
Edit: Add customer testimonials
```

### 6. Change Theme Default
```
File: src/hooks/useTheme.ts
Line 8: Change 'dark' to 'light'
```

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Main landing page |
| `src/components/HeroSection.tsx` | Hero section + 3D toggle |
| `src/data/*.json` | Content data |
| `src/styles/theme.ts` | Design tokens |
| `tailwind.config.js` | Tailwind config |
| `package.json` | Dependencies |

---

## 🎬 Components (17 Total)

**Layout**: Header, Footer
**Sections**: Hero, Features, Pricing, Testimonials, CaseStudies, FAQ, CTA
**Utilities**: Button, Card, Badge
**Providers**: Theme, Scroll
**3D** (Optional): HeroCanvas, AnimatedOrbs, AnimatedWaves

---

## 🌐 B2B Positioning Examples

### Analytics Platform
- Hero: "Enterprise Analytics That Works"
- CTA: "Request a Demo"
- Features: Dashboards, Export, Collaboration

### Project Management
- Hero: "Work Together, Move Faster"
- CTA: "Start Free Trial"
- Features: Tasks, Timeline, Integrations

### AI Platform
- Hero: "AI Infrastructure Built for Scale"
- CTA: "Explore Docs"
- Features: Training, API, Monitoring

---

## 🌗 Dark/Light Mode

- **Default**: Dark mode
- **Toggle**: Header top-right (sun/moon icon)
- **Persistence**: Saves to localStorage
- **System Detection**: Respects OS preference

---

## 📱 Responsive

- Mobile: 320px–640px
- Tablet: 641px–1024px
- Desktop: 1025px+

---

## 🔧 3D Configuration

### Enable 3D Hero
```tsx
// src/components/HeroSection.tsx
const enable3D = true;
const variant3D = 'orbs';  // 'orbs' | 'waves' | 'combined'
```

### Performance Impact
- Size: +150KB (three.js)
- FPS: 60 target
- Mobile: Optional disable

---

## 🎯 Performance

- Lighthouse: 95+
- Bundle: ~325KB (with 3D)
- FPS: 60 target
- Mobile: Optimized

---

## 🚀 Deploy Steps

1. **Vercel (1 minute)**:
   ```bash
   vercel
   ```

2. **Custom Domain**:
   - Buy domain
   - Add to Vercel DNS
   - Wait 10-60 min

3. **Add Analytics**:
   - Google Analytics
   - Segment
   - Mixpanel

---

## 🔒 Security

- TypeScript strict
- ESLint configured
- No external APIs
- GDPR ready
- Security headers

---

## 📊 Content Updates

### Adding Feature
```json
// src/data/features.json
{
  "title": "New Feature",
  "description": "Description",
  "icon": "🎯"
}
```

### Adding Testimonial
```json
// src/data/testimonials.json
{
  "quote": "Customer quote",
  "author": "Name",
  "company": "Company",
  "role": "Role",
  "rating": 5
}
```

---

## 🆘 Troubleshooting

**3D not showing**
→ Check `enable3D = true`
→ Verify Three.js installed: `npm ls three`

**Dark mode broken**
→ Clear cache (Ctrl+Shift+Del)
→ Check ThemeProvider in layout.tsx

**Slow performance**
→ Disable 3D: `enable3D = false`
→ Check bundle: `npm run bundle-analyze`

**Theme toggle not working**
→ Verify useTheme hook usage
→ Check CSS variables in globals.css

---

## 📚 Full Docs

- **README.md** - Overview
- **B2B_CONFIGURATION.md** - Enterprise guide
- **DEPLOYMENT.md** - Production setup
- **ITERATION_SUMMARY.md** - What's included

---

## 🎁 What's Included

✅ 17 production components
✅ 5 JSON data files
✅ Dark/light mode system
✅ Optional R3F 3D hero
✅ Framer Motion animations
✅ TypeScript strict mode
✅ ESLint + Prettier
✅ Responsive design
✅ Mobile menu
✅ Comprehensive docs

---

**Status**: Production-Ready | **Value**: $100+ | **Date**: Feb 2026

