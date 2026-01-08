"use client";

import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  useScroll,
  Float,
  Stars,
  Text,
  MeshDistortMaterial,
  Icosahedron,
  Box,
  Torus,
  Cylinder,
  Sphere,
} from "@react-three/drei";
import * as THREE from "three";

// We'll use standard refs and useFrame for 3d animation based on scroll data.

const SectionDistance = 20;

function CameraRig() {
  const scroll = useScroll();
  const { camera } = useThree();

  useFrame((state, delta) => {
    // Scroll offset is 0 to 1
    // We want to map it to Z position
    // Total distance = (Pages - 1) * SectionDistance
    // Total pages = 5. Max Z displacement = 4 * 20 = 80 units

    // Smooth camera movement
    const targetZ = 5 - scroll.offset * (SectionDistance * 4);

    // Lerp camera position
    state.camera.position.z = THREE.MathUtils.lerp(
      state.camera.position.z,
      targetZ,
      2 * delta
    );

    // Add mouse parallax
    const { x, y } = state.pointer;
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      -x * 2,
      2 * delta
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      -y * 2,
      2 * delta
    );

    // Look a bit ahead of time
    state.camera.lookAt(0, 0, targetZ - 10);
  });

  return null;
}

function HeroIsland() {
  return (
    <group position={[0, 0, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Icosahedron args={[1.5, 0]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#bd00ff"
            speed={3}
            distort={0.4}
            roughness={0.2}
            metalness={0.8}
          />
        </Icosahedron>
      </Float>
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Torus args={[2.8, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#00f3ff" />
        </Torus>
        <Torus args={[2.5, 0.05, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#bd00ff" />
        </Torus>
      </Float>
      {/* Data Particles */}
      {[...Array(20)].map((_, i) => (
        <Float
          key={i}
          speed={2}
          floatIntensity={4}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5,
          ]}
        >
          <mesh>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial
              color={Math.random() > 0.5 ? "#00f3ff" : "#bd00ff"}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function AboutAssets() {
  return (
    <group position={[0, 0, -SectionDistance]}>
      {/* Floating Avatar / Tech Cloud */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <group position={[3, 0, 0]}>
          <Box args={[1, 1, 1]} rotation={[0, 0, 0]}>
            <meshStandardMaterial color="#333" wireframe />
          </Box>
          <Text
            position={[0, 1.5, 0]}
            fontSize={0.5}
            color="#bd00ff"
            outlineWidth={0.02}
            outlineColor="#000"
          >
            CREATIVITY
          </Text>
        </group>
        <group position={[-3, 1, 1]}>
          <Sphere args={[0.8, 16, 16]}>
            <meshStandardMaterial color="#333" wireframe />
          </Sphere>
          <Text
            position={[0, 1.5, 0]}
            fontSize={0.5}
            color="#00f3ff"
            outlineWidth={0.02}
            outlineColor="#000"
          >
            LOGIC
          </Text>
        </group>
      </Float>
    </group>
  );
}

function ExperienceAssets() {
  return (
    <group position={[0, 0, -SectionDistance * 2]}>
      {/* Timeline connectors */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[-4, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 20, 16]} />
        <meshStandardMaterial
          color="#00f3ff"
          emissive="#00f3ff"
          emissiveIntensity={0.5}
        />
      </mesh>

      {[0, 1, 2].map((i) => (
        <Float
          key={i}
          speed={1}
          floatIntensity={0.5}
          position={[-4, (i - 1) * 3, 0]}
        >
          <Box args={[0.5, 0.5, 0.5]} rotation={[0, Math.PI / 4, 0]}>
            <meshStandardMaterial color="#bd00ff" />
          </Box>
        </Float>
      ))}
    </group>
  );
}

function ProjectsAssets() {
  return (
    <group position={[0, 0, -SectionDistance * 3]}>
      <group position={[0, 0, 0]}>
        {/* Gallery of screens */}
        <Float
          speed={2}
          rotationIntensity={0.2}
          floatIntensity={0.5}
          position={[-3, 2, 0]}
        >
          <Box args={[3, 2, 0.2]}>
            <meshStandardMaterial color="#111" />
          </Box>
          <Box args={[2.8, 1.8, 0.05]} position={[0, 0, 0.1]}>
            <meshBasicMaterial color="#222" />
          </Box>
        </Float>
        <Float
          speed={2.5}
          rotationIntensity={0.2}
          floatIntensity={0.5}
          position={[3, -1, 1]}
        >
          <Box args={[3, 2, 0.2]}>
            <meshStandardMaterial color="#111" />
          </Box>
          <Box args={[2.8, 1.8, 0.05]} position={[0, 0, 0.1]}>
            <meshBasicMaterial color="#222" />
          </Box>
        </Float>
      </group>
    </group>
  );
}

function ContactAssets() {
  return (
    <group position={[0, 0, -SectionDistance * 4]}>
      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <mesh>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#00f3ff" wireframe />
        </mesh>
      </Float>
      <pointLight distance={10} intensity={20} color="#00f3ff" />
    </group>
  );
}

function CursorLight() {
  const light = useRef<THREE.PointLight>(null as any);
  useFrame(({ pointer, viewport }) => {
    const x = (pointer.x * viewport.width) / 2;
    const y = (pointer.y * viewport.height) / 2;
    if (light.current) {
      light.current.position.set(x, y, 2);
    }
  });
  return (
    <pointLight ref={light} color="#bd00ff" intensity={20} distance={10} />
  );
}

export default function ThreeContent() {
  return (
    <>
      <CameraRig />
      <CursorLight />

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={10} color="#ffffff" />

      {/* Sections */}
      <HeroIsland />
      <AboutAssets />
      <ExperienceAssets />
      <ProjectsAssets />
      <ContactAssets />
    </>
  );
}
