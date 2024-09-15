"use client";

import React, { useState, useRef, Suspense } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
// @ts-ignore
import * as THREE from "three"; // three.js import

const StarBackground = (props: any) => {
  const ref = useRef<THREE.Group>(null);

  // Spheres positions generation
  const [sphere] = useState(() => {
    const positions = [];
    for (let i = 0; i < 5000; i++) {
      const theta = Math.random() * 2 * Math.PI; // 0 to 2*PI for full rotation
      const phi = Math.acos(2 * Math.random() - 1); // correct range for phi

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);

      positions.push(x, y, z);
    }
    return new Float32Array(positions); // Return positions as Float32Array
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} ref={ref}>
      <Points positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="absolute w-full h-full inset-0 z-[-1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
