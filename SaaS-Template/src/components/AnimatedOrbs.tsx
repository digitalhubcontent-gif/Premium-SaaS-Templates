/**
 * Animated Orbs Component
 * React Three Fiber orbs with subtle animations
 * Low performance impact, enterprise aesthetic
 */

'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Individual animated orb
 */
interface OrbProps {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  radius: number;
}

function Orb({ position, scale, color, speed, radius }: OrbProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const pathRef = useRef(0);

  useFrame(() => {
    if (meshRef.current) {
      // Smooth orbital motion
      pathRef.current += speed * 0.01;
      const x = position[0] + Math.cos(pathRef.current) * radius;
      const y = position[1] + Math.sin(pathRef.current * 0.7) * (radius * 0.5);
      const z = position[2] + Math.sin(pathRef.current * 0.5) * radius;

      meshRef.current.position.set(x, y, z);

      // Subtle pulsing
      const pulse = Math.sin(pathRef.current * 0.5) * 0.1 + 1;
      meshRef.current.scale.multiplyScalar(pulse);
    }
  });

  return (
    <group>
      <Sphere
        ref={meshRef}
        args={[scale, 32, 32]}
        position={position}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>
    </group>
  );
}

/**
 * Animated orbs container
 * Multiple orbs with staggered animations
 */
export function AnimatedOrbs() {
  // const { viewport } = useThree(); // Not currently used

  // Orb configuration
  const orbs = useMemo(
    () => [
      {
        position: [-15, 10, -20] as [number, number, number],
        scale: 1.5,
        color: '#6366f1', // Indigo
        speed: 0.5,
        radius: 8,
      },
      {
        position: [15, -8, -15] as [number, number, number],
        scale: 1.2,
        color: '#a855f7', // Violet
        speed: 0.7,
        radius: 6,
      },
      {
        position: [0, 5, -25] as [number, number, number],
        scale: 1,
        color: '#ec4899', // Pink
        speed: 0.3,
        radius: 10,
      },
      {
        position: [10, 15, -18] as [number, number, number],
        scale: 0.8,
        color: '#06b6d4', // Cyan
        speed: 0.6,
        radius: 5,
      },
    ],
    []
  );

  return (
    <group>
      {orbs.map((orb, idx) => (
        <Orb key={idx} {...orb} />
      ))}
    </group>
  );
}
