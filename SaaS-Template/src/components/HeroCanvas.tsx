/**
 * 3D Hero Canvas Component
 * Optional React Three Fiber hero with animated orbs & waves
 * Performance-first, low visual noise, enterprise-ready
 */

'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { AnimatedOrbs } from './AnimatedOrbs';
import { AnimatedWaves } from './AnimatedWaves';

interface HeroCanvasProps {
  enabled?: boolean;
  variant?: 'orbs' | 'waves' | 'combined';
}

/**
 * Canvas loading fallback
 */
function CanvasFallback() {
  return null;
}

/**
 * 3D Canvas wrapper for hero section
 * Lightweight R3F setup with performance optimizations
 */
export const HeroCanvas: React.FC<HeroCanvasProps> = ({ 
  enabled = true, 
  variant = 'orbs' 
}) => {
  if (!enabled) return null;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <Canvas
        dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 1.5) : 1}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        camera={{
          position: [0, 0, 30],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <Suspense fallback={<CanvasFallback />}>
          {/* Minimal lighting for performance */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />

          {/* Render based on variant */}
          {(variant === 'orbs' || variant === 'combined') && <AnimatedOrbs />}
          {(variant === 'waves' || variant === 'combined') && <AnimatedWaves />}
        </Suspense>
      </Canvas>
    </div>
  );
};
