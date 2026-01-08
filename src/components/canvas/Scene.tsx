"use client";

import { Canvas } from "@react-three/fiber";
import { Preload, ScrollControls, Scroll, Stars } from "@react-three/drei";
import { Suspense, useState } from "react";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

export default function Scene({ children, ...props }: any) {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 10], fov: 30 }}
        {...props}
      >
        <Suspense fallback={null}>
          <color attach="background" args={["#050505"]} />
          {/* Global Effects */}
          {/* Stars for parallax background */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          {/* Fog for depth */}
          <fog attach="fog" args={["#050505", 10, 25]} />

          {/* Scroll Controls handles the main layout */}
          {children}

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
