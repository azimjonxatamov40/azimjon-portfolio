"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const COLORS = ["#8b7bff", "#4fd8e0", "#ff7bb0"];

function Shape({
  position,
  geometry,
  color,
  speed,
  scale,
}: {
  position: [number, number, number];
  geometry: "icosahedron" | "torus" | "octahedron";
  color: string;
  speed: number;
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed * 0.25;
    ref.current.rotation.y += delta * speed * 0.35;
  });

  return (
    <Float speed={1.4 * speed} rotationIntensity={0.4} floatIntensity={1.6}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry === "icosahedron" && <icosahedronGeometry args={[1.1, 0]} />}
        {geometry === "torus" && <torusGeometry args={[0.8, 0.28, 16, 60]} />}
        {geometry === "octahedron" && <octahedronGeometry args={[1, 0]} />}
        <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
      </mesh>
    </Float>
  );
}

function Rig() {
  useFrame((state) => {
    const { pointer, camera } = state;
    camera.position.x += (pointer.x * 1.2 - camera.position.x) * 0.02;
    camera.position.y += (pointer.y * 0.8 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Hero3D() {
  const shapes = useMemo(() => {
    const geos: Array<"icosahedron" | "torus" | "octahedron"> = ["icosahedron", "torus", "octahedron"];
    return Array.from({ length: 8 }).map((_, i) => {
      // keep a clear band down the middle free so headline text stays readable
      const side = i % 2 === 0 ? -1 : 1;
      const x = side * (4.2 + Math.random() * 4.5);
      return {
        position: [x, (Math.random() - 0.5) * 8, -6 - Math.random() * 5] as [number, number, number],
        geometry: geos[i % geos.length],
        color: COLORS[i % COLORS.length],
        speed: 0.4 + Math.random() * 0.7,
        scale: 0.32 + Math.random() * 0.38,
      };
    });
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
      className="!absolute inset-0"
    >
      <Rig />
      <Sparkles count={60} scale={[14, 9, 6]} size={2} speed={0.25} color="#8b7bff" opacity={0.5} />
      {shapes.map((s, i) => (
        <Shape key={i} {...s} />
      ))}
    </Canvas>
  );
}
