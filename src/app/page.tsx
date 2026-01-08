"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ScrollControls, Scroll } from "@react-three/drei";

// Dynamic imports to avoid SSR issues with Three.js
const Scene = dynamic(() => import("@/components/canvas/Scene"), {
  ssr: false,
});
const ThreeContent = dynamic(() => import("@/components/canvas/ThreeContent"), {
  ssr: false,
});
const Overlay = dynamic(() => import("@/components/dom/Overlay"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-full w-full bg-[#050505]">
      {/* The generic Scene wrapper handles the Canvas setup */}
      <Scene>
        {/* ScrollControls manages the scroll-driven animation loop */}
        <ScrollControls pages={5} damping={0.2}>
          {/* 3D Content Layer (React Three Fiber) */}
          <ThreeContent />

          {/* DOM Content Layer (HTML Overlay) */}
          <Scroll html style={{ width: "100%", height: "100%" }}>
            <Overlay />
          </Scroll>
        </ScrollControls>
      </Scene>
    </main>
  );
}
