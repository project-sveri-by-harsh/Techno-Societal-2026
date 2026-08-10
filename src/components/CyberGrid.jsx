import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from '../context/ThemeContext';
import * as THREE from 'three';

function MovingGrid({ isDark }) {
  const gridRef = useRef();

  useFrame((state, delta) => {
    if (gridRef.current) {
      gridRef.current.position.z += delta * 4;
      // Loop: grid size is 200, divisions is 200, so each grid square is 1 unit.
      // Reset when it moves 1 unit to create seamless infinite scroll.
      if (gridRef.current.position.z > 1) {
        gridRef.current.position.z %= 1;
      }
    }
  });

  const mainColor = isDark ? '#00f0ff' : '#3b82f6';
  const subColor = isDark ? '#7000ff' : '#93c5fd';

  return (
    <group ref={gridRef}>
      <gridHelper 
        args={[200, 200, mainColor, subColor]} 
        position={[0, -2, -90]} 
        rotation={[0, 0, 0]} 
      />
    </group>
  );
}

function FloatingParticles({ isDark }) {
  const particlesRef = useRef();
  
  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.1;
      particlesRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  // Generate random positions (done once)
  const count = 150;
  const positions = useRef(new Float32Array(count * 3));
  
  if (positions.current[0] === 0 && positions.current[1] === 0) {
    for (let i = 0; i < count; i++) {
      positions.current[i * 3] = (Math.random() - 0.5) * 40; // x
      positions.current[i * 3 + 1] = (Math.random() * 10) - 2; // y
      positions.current[i * 3 + 2] = (Math.random() - 0.5) * 40 - 10; // z
    }
  }

  const color = isDark ? '#ff00ea' : '#2563eb';

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.15} color={color} transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

export default function CyberGrid() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // These MUST perfectly match body background colors in index.css
  const fogColor = isDark ? '#050814' : '#f8fafc';

  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 1, 5], fov: 75 }}>
        <fog attach="fog" args={[fogColor, 2, 25]} />
        <ambientLight intensity={0.5} />
        <MovingGrid isDark={isDark} />
        <FloatingParticles isDark={isDark} />
      </Canvas>
    </div>
  );
}
