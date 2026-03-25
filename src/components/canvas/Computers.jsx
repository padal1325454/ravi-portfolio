import React, { Suspense, useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const video = useMemo(() => {
    const element = document.createElement("video");
    element.src = "/videos/desktop.mp4";
    element.muted = true;
    element.loop = true;
    element.playsInline = true;
    element.crossOrigin = "anonymous";
    element.preload = "auto";
    element.load();
    return element;
  }, []);
  const videoTexture = useMemo(() => {
    const texture = new THREE.VideoTexture(video);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.flipY = false;
    texture.center.set(0.5, 0.5);
    texture.repeat.x = -1;
    texture.repeat.y = -1;
    return texture;
  }, [video]);

  useEffect(() => {
    const tryPlay = () => {
      video.play().catch(() => {});
    };
    video.addEventListener("canplay", tryPlay);
    tryPlay();

    const screenMaterial = computer.materials?.["Material.074_30"];
    if (!screenMaterial) return;
    screenMaterial.map = videoTexture;
    screenMaterial.emissive = new THREE.Color(0xffffff);
    screenMaterial.emissiveMap = videoTexture;
    screenMaterial.emissiveIntensity = 1.2;
    screenMaterial.needsUpdate = true;

    return () => {
      video.removeEventListener("canplay", tryPlay);
    };
  }, [computer.materials, video, videoTexture]);

  useFrame(() => {
    if (video.readyState >= 2) {
      videoTexture.needsUpdate = true;
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ antialias: false, powerPreference: "high-performance" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
