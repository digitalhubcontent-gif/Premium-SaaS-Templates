/**
 * Animated Waves Component
 * React Three Fiber wave mesh with subtle animations
 * Elegant, low-noise, enterprise aesthetic
 */

'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Animated wave mesh
 * Creates subtle wave effect with vertex shader
 */
export function AnimatedWaves() {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  // Generate wave geometry
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const indices: number[] = [];

    const width = 40;
    const height = 40;
    const widthSegments = 64;
    const heightSegments = 64;

    const xOffset = width / -2;
    const yOffset = height / -2;

    // Create vertices
    for (let i = 0; i <= heightSegments; i++) {
      for (let j = 0; j <= widthSegments; j++) {
        const x = (j / widthSegments) * width + xOffset;
        const y = (i / heightSegments) * height + yOffset;
        const z = 0;

        vertices.push(x, y, z);
      }
    }

    // Create indices
    for (let i = 0; i < heightSegments; i++) {
      for (let j = 0; j < widthSegments; j++) {
        const a = i * (widthSegments + 1) + j;
        const b = a + widthSegments + 1;

        indices.push(a, b, a + 1);
        indices.push(b, b + 1, a + 1);
      }
    }

    geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
    geom.setIndex(new THREE.BufferAttribute(new Uint32Array(indices), 1));
    geom.computeVertexNormals();

    return geom;
  }, []);

  // Update waves on each frame
  useFrame(() => {
    if (meshRef.current) {
      timeRef.current += 0.002;

      const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
      const originalPositions = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions[i];
        const y = originalPositions[i + 1];

        // Wave calculation
        const wave1 = Math.sin((x + timeRef.current) * 0.1) * 0.5;
        const wave2 = Math.sin((y + timeRef.current * 0.7) * 0.08) * 0.3;
        const wave3 = Math.cos((x + y + timeRef.current * 0.5) * 0.06) * 0.2;

        positions[i + 2] = wave1 + wave2 + wave3;
      }

      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        geometry={geometry}
        position={[0, 0, -15]}
        rotation={[0.3, 0.5, 0.1]}
      >
        <meshStandardMaterial
          color="#6366f1"
          emissive="#4f46e5"
          emissiveIntensity={0.1}
          wireframe={false}
          roughness={0.6}
          metalness={0.3}
          opacity={0.6}
          transparent
        />
      </mesh>

      {/* Secondary wave layer for depth */}
      <mesh
        geometry={geometry}
        position={[0, 0, -20]}
        rotation={[0.5, 0.2, 0.3]}
      >
        <meshStandardMaterial
          color="#a855f7"
          emissive="#9333ea"
          emissiveIntensity={0.08}
          wireframe={false}
          roughness={0.7}
          metalness={0.2}
          opacity={0.4}
          transparent
        />
      </mesh>
    </group>
  );
}
