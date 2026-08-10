import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from '../context/ThemeContext';
import * as THREE from 'three';

function DataHelix({ isDark }) {
  const groupRef = useRef();
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const count = 500; // per strand

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Slowly rotate the entire helix structure
      groupRef.current.rotation.y += delta * 0.15;
    }
    
    if (meshRef.current) {
      let i = 0;
      const time = state.clock.elapsedTime;
      
      // Strand 1
      for (let j = 0; j < count; j++) {
        const t = (j / count) * Math.PI * 12; // 6 full turns
        const y = (j / count) * 40 - 20; // Height spread from -20 to 20
        const radius = 2.5 + Math.sin(t * 0.5 + time) * 0.5; // Undulating radius
        
        // Helical coordinates
        const x = Math.cos(t - time * 0.5) * radius;
        const z = Math.sin(t - time * 0.5) * radius;
        
        dummy.position.set(x, y, z);
        
        // Spin individual cubes
        dummy.rotation.set(time * 0.5, time * 0.5, 0);
        
        // Pulsing size
        const scale = 0.3 + Math.sin(j * 0.1 + time * 3) * 0.2;
        dummy.scale.set(scale, scale, scale);
        
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i++, dummy.matrix);
      }
      
      // Strand 2 (Offset by PI)
      for (let j = 0; j < count; j++) {
        const t = (j / count) * Math.PI * 12 + Math.PI; 
        const y = (j / count) * 40 - 20; 
        const radius = 2.5 + Math.sin(t * 0.5 + time) * 0.5;
        
        const x = Math.cos(t - time * 0.5) * radius;
        const z = Math.sin(t - time * 0.5) * radius;
        
        dummy.position.set(x, y, z);
        dummy.rotation.set(-time * 0.5, time * 0.5, 0);
        
        const scale = 0.3 + Math.sin(j * 0.1 + time * 3) * 0.2;
        dummy.scale.set(scale, scale, scale);
        
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i++, dummy.matrix);
      }
      
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  const baseColor = isDark ? '#7000ff' : '#93c5fd';
  const glowColor = isDark ? '#00f0ff' : '#2563eb';

  return (
    <group ref={groupRef} position={[0, 0, -8]} rotation={[0.1, 0, -0.1]}>
      <instancedMesh ref={meshRef} args={[null, null, count * 2]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial 
          color={baseColor} 
          emissive={glowColor}
          emissiveIntensity={0.6}
          transparent 
          opacity={0.8} 
        />
      </instancedMesh>
    </group>
  );
}

function FloatingDataParticles({ isDark }) {
  const particlesRef = useRef();
  
  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y -= delta * 0.05;
      particlesRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 1;
    }
  });

  const count = 300;
  const positions = useRef(new Float32Array(count * 3));
  
  if (positions.current[0] === 0 && positions.current[1] === 0) {
    for (let i = 0; i < count; i++) {
      positions.current[i * 3] = (Math.random() - 0.5) * 60; // x
      positions.current[i * 3 + 1] = (Math.random() - 0.5) * 40; // y
      positions.current[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5; // z
    }
  }

  const color = isDark ? '#ff00ea' : '#1d4ed8';

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
      <pointsMaterial size={0.08} color={color} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

export default function CyberGrid() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const fogColor = isDark ? '#050814' : '#f8fafc';

  return (
    <div className="absolute inset-0 z-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <fog attach="fog" args={[fogColor, 5, 25]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color={isDark ? '#00f0ff' : '#ffffff'} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color={isDark ? '#ff00ea' : '#3b82f6'} />
        
        <DataHelix isDark={isDark} />
        <FloatingDataParticles isDark={isDark} />
      </Canvas>
    </div>
  );
}
