import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Tokenomics slices
const slices = [
  { value: 30, color: "#b28e23" }, // Community & Ecosystem
  { value: 30, color: "#0056b3" }, // Liquidity & Market Stability
  { value: 15, color: "#1f6e3a" }, // Development & Infrastructure
  { value: 10, color: "#4b2e7c" }, // Team (Vested)
  { value: 10, color: "#c55b00" }, // Treasury / DAO Reserve
  { value: 5,  color: "#a71d2a" }, // Marketing & Partnerships
];

// Pie slice component
function PieSlice({ startAngle, endAngle, color }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Hover effect: slightly pop out
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.z = hovered ? 0.1 : 0;
    }
  });

  const radius = 2;  // larger radius
  const height = 0.4;

  return (
    <mesh
      ref={meshRef}
      rotation-x={Math.PI / 2}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <cylinderGeometry
        args={[0, radius, height, 64, 1, false, startAngle, endAngle - startAngle]}
      />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// Main component
export default function Tokenomics3D() {
  let accumulatedAngle = 0;

  return (
    <Canvas
      style={{ width: "100%", height: "auto", background: "transparent" }}
      camera={{ position: [0, 0, 4] }}
    >
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Group to scale all slices */}
      <group scale={[1.5, 1.5, 1.5]}>
        {slices.map((slice, i) => {
          const start = accumulatedAngle;
          const end = accumulatedAngle + (slice.value / 100) * Math.PI * 2;
          accumulatedAngle = end;
          return (
            <PieSlice key={i} startAngle={start} endAngle={end} color={slice.color} />
          );
        })}
      </group>

      {/* Orbit controls for rotation */}
      <OrbitControls target={[0, 0, 0]} enableZoom={false} />
    </Canvas>
  );
}
