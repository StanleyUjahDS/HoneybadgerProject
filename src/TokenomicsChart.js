import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const slices = [
  { label: "Burn (Initial)", value: 10, color: "#e53935" },
  { label: "Presale", value: 25, color: "#b28e23" },
  { label: "Liquidity", value: 20, color: "#0056b3" },
  { label: "Development", value: 15, color: "#7b1fa2" },
  { label: "Team", value: 5, color: "#c55b00" },
  { label: "Listings", value: 5, color: "#00838f" },
  { label: "Marketing", value: 5, color: "#43a047" },
  { label: "Ecosystem", value: 5, color: "#6d4c41" },
  { label: "Treasury", value: 10, color: "#37474f" },
];

function PieSlice({ startAngle, endAngle, color }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.z += (
        (hovered ? 0.18 : 0) - meshRef.current.position.z
      ) * 0.15;
    }
  });

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
          2,
          0.35,
          64,
          1,
          false,
          startAngle,
          endAngle - startAngle,
        ]}
      />
      <meshStandardMaterial
        color={color}
        roughness={0.3}
        metalness={0.2}
      />
    </mesh>
  );
}

export default function Tokenomics3D() {
  let accumulatedAngle = 0;

  return (
    <div className="TokenomicsChart">
      <Canvas camera={{ position: [0, 3.5, 6], fov: 50 }}>
        <ambientLight intensity={1} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
        />

        <directionalLight
          position={[-5, 5, -5]}
          intensity={1}
        />

        <group rotation={[0.9, 0, 0]} scale={[1.25, 1.25, 1.25]}>
          {slices.map((slice, index) => {
            const start = accumulatedAngle;

            const end =
              accumulatedAngle +
              (slice.value / 100) * Math.PI * 2;

            accumulatedAngle = end;

            return (
              <PieSlice
                key={index}
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
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}