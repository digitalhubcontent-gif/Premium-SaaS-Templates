# 3D Assets Directory

## Location for 3D Models and Textures

### /models/
Place optimized `.glb` (glTF binary) 3D models here.

**Best Practices:**
- Use Blender to export models as `.glb` format
- Compress with Draco compression for smaller file sizes
- Keep individual models under 5MB
- Total models directory should stay under 10MB for marketplace viability
- Remove unused materials and textures in Blender before export

**Example:**
```
/models/
  ├── hero.glb (2.5MB)
  ├── feature-01.glb (1.8MB)
  └── outro.glb (1.2MB)
```

### /textures/
Place texture maps (diffuse, normal, metallic, roughness) here.

**Best Practices:**
- Compress textures to `.webp` format for optimal size/quality
- Use power-of-2 dimensions (1024x1024, 2048x2048)
- Store PBR texture sets in organized subdirectories
- Example structure:
  ```
  /textures/
    ├── metal/
    │   ├── diffuse.webp
    │   ├── normal.webp
    │   ├── metallic.webp
    │   └── roughness.webp
    └── wood/
        ├── diffuse.webp
        └── normal.webp
  ```

## Loading Models in React

```tsx
import { Suspense } from 'react';
import { Model } from '@/models/Model';
import { Loader } from '@/components/Loader';

<Suspense fallback={<Loader />}>
  <Model path="/models/hero.glb" scale={2} position={[0, 0, 0]} />
</Suspense>
```

## Performance Optimization

1. **Compression**: Use Draco compression for geometry
2. **LOD**: Create Level-of-Detail versions for complex models
3. **Instancing**: Reuse the same model geometry for multiple meshes
4. **Lazy Loading**: Use Suspense to load models only when needed

## Tools

- **Blender**: Export and optimize 3D models
- **TinyPNG**: Compress textures
- **Squoosh**: WebP conversion and compression
- **gltf-pipeline**: Draco compression
