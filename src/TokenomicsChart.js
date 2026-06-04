import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// HBADG Tokenomics
const slices = [
  { label: "Burn (Initial)", value: 10, tokens: "1.0B", color: "#e53935" },
  { label: "Presale", value: 25, tokens: "2.5B", color: "#b28e23" },
  { label: "Liquidity", value: 20, tokens: "2.0B", color: "#0056b3" },
  { label: "Development", value: 15, tokens: "1.5B", color: "#7b1fa2" },
  { label: "Team", value: 5, tokens: "500M", color: "#c55b00" },
  { label: "Listings", value: 5, tokens: "500M", color: "#00838f" },
  { label: "Marketing", value: 5, tokens: "500M", color: "#43a047" },
  { label: "Ecosystem / Rewards", value: 5, tokens: "500M", color: "#6d4c41" },
  { label: "Treasury", value: 10, tokens: "1.0B", color: "#37474f" },
];

function PieSlice({ startAngle, endAngle, color }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.z += ((hovered ? 0.15 : 0) - meshRef.current.position.z) * 0.15;
    }
  });

  const radius = 2;
  const height = 0.3;

  return (
    <mesh
      ref={meshRef}
      rotation-x={Math.PI / 2}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <cylinderGeometry
        args={[
          0,
          radius,
          height,
          64,
          1,
          false,
          startAngle,
          endAngle - startAngle,
        ]}
      />
      <meshStandardMaterial color={color} roughness={0.35} metalness={0.15} />
    </mesh>
  );
}

export default function Tokenomics3D() {
  let accumulatedAngle = 0;

  return (
    <div
      style={{
        width: "100%",
        height: "650px",
        overflow: "visible",
      }}
    >
      <Canvas
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
        camera={{
          position: [0, 3.5, 6.5],
          fov: 50,
        }}
      >
        <ambientLight intensity={0.9} />

        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, 5, -5]} intensity={0.8} />

        <group rotation={[0.9, 0, 0]} scale={[1.25, 1.25, 1.25]}>
          {slices.map((slice, i) => {
            const start = accumulatedAngle;
            const end = accumulatedAngle + (slice.value / 100) * Math.PI * 2;
            accumulatedAngle = end;

            return (
              <PieSlice
                key={i}
                startAngle={start}
                endAngle={end}
                color={slice.color}
              />
            );
          })}
        </group>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
