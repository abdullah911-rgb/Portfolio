import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Main 3D group positioned comfortably in the hero section
    const mainGroup = new THREE.Group();
    // Shift slightly to the right where the 3D developer card is, to complement the layout
    mainGroup.position.set(1.5, 0.2, 0);
    scene.add(mainGroup);

    // 1. Refined Faceted Wireframe Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(1.25, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xb89b6f,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icoWireframe = new THREE.Mesh(icoGeometry, wireframeMaterial);
    mainGroup.add(icoWireframe);

    // 2. Inner Glowing Octahedron
    const innerGeometry = new THREE.OctahedronGeometry(0.75, 0);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x363f3a,
      emissive: 0xb89b6f,
      emissiveIntensity: 0.25,
      roughness: 0.2,
      metalness: 0.9,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // 3. Compact Elegant Orbiting Rings (Sized inside the screen)
    const ring1Geom = new THREE.TorusGeometry(1.55, 0.015, 16, 80);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x52ffb8,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ringMat1);
    ring1.rotation.x = Math.PI / 3.5;
    mainGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(1.85, 0.012, 16, 80);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xb89b6f,
      transparent: true,
      opacity: 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ringMat2);
    ring2.rotation.y = Math.PI / 3;
    mainGroup.add(ring2);

    // 4. Floating 3D Starfield Particles Across Full Screen
    const particleCount = 450;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorGold = new THREE.Color(0xb89b6f);
    const colorSage = new THREE.Color(0x66726b);
    const colorCream = new THREE.Color(0xe2d2b8);
    const colorNeon = new THREE.Color(0x52ffb8);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const rnd = Math.random();
      const chosen = rnd > 0.65 ? colorGold : rnd > 0.4 ? colorSage : rnd > 0.15 ? colorCream : colorNeon;
      colors[i * 3] = chosen.r;
      colors[i * 3 + 1] = chosen.g;
      colors[i * 3 + 2] = chosen.b;
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xb89b6f, 2.5, 15);
    goldLight.position.set(3, 2, 4);
    scene.add(goldLight);

    const neonLight = new THREE.PointLight(0x52ffb8, 2.0, 15);
    neonLight.position.set(-3, -2, 3);
    scene.add(neonLight);

    // Interactive mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      // Adjust position on mobile vs desktop
      if (w < 1024) {
        mainGroup.position.set(0, 0, 0);
        mainGroup.scale.set(0.75, 0.75, 0.75);
      } else {
        mainGroup.position.set(1.5, 0.2, 0);
        mainGroup.scale.set(1, 1, 1);
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = elapsed * 0.22 + targetX * 0.5;
      mainGroup.rotation.x = Math.sin(elapsed * 0.3) * 0.12 + targetY * 0.35;
      mainGroup.position.y = 0.2 + Math.sin(elapsed * 0.7) * 0.1 - scrollY * 0.001;

      innerMesh.rotation.y = -elapsed * 0.35;
      innerMesh.rotation.z = Math.cos(elapsed * 0.25) * 0.25;

      ring1.rotation.z = elapsed * 0.3;
      ring2.rotation.x = elapsed * 0.2;

      particles.rotation.y = elapsed * 0.03;
      particles.rotation.x = Math.sin(elapsed * 0.015) * 0.08;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);

      icoGeometry.dispose();
      wireframeMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ring1Geom.dispose();
      ringMat1.dispose();
      ring2Geom.dispose();
      ringMat2.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    />
  );
};
