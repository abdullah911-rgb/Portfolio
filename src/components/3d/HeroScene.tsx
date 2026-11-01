import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Outer Faceted Wireframe Icosahedron (Warm Bronze)
    const icoGeometry = new THREE.IcosahedronGeometry(2.1, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xb89b6f,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icoWireframe = new THREE.Mesh(icoGeometry, wireframeMaterial);
    mainGroup.add(icoWireframe);

    // 2. Inner Crystalline Polyhedron (Mineral Moss)
    const innerGeometry = new THREE.OctahedronGeometry(1.2, 0);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x363f3a,
      emissive: 0xb89b6f,
      emissiveIntensity: 0.22,
      roughness: 0.2,
      metalness: 0.85,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // 3. Orbiting Gyro Rings
    const ring1Geom = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x52ffb8,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(3.1, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xb89b6f,
      transparent: true,
      opacity: 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 4. Floating 3D Starfield / Particle Cloud
    const particleCount = 700;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorGold = new THREE.Color(0xb89b6f);
    const colorSage = new THREE.Color(0x66726b);
    const colorCream = new THREE.Color(0xe2d2b8);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14;

      const rnd = Math.random();
      const chosenColor = rnd > 0.6 ? colorGold : rnd > 0.3 ? colorSage : colorCream;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xb89b6f, 3, 20);
    goldLight.position.set(4, 3, 5);
    scene.add(goldLight);

    const neonLight = new THREE.PointLight(0x52ffb8, 2.5, 20);
    neonLight.position.set(-4, -3, 3);
    scene.add(neonLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = elapsed * 0.25 + targetX * 0.6;
      mainGroup.rotation.x = Math.sin(elapsed * 0.3) * 0.15 + targetY * 0.4;
      mainGroup.position.y = Math.sin(elapsed * 0.8) * 0.12 - scrollY * 0.0012;

      innerMesh.rotation.y = -elapsed * 0.4;
      innerMesh.rotation.z = Math.cos(elapsed * 0.3) * 0.3;

      ring1.rotation.z = elapsed * 0.35;
      ring2.rotation.x = elapsed * 0.25;

      particles.rotation.y = elapsed * 0.04;
      particles.rotation.x = Math.sin(elapsed * 0.02) * 0.1;

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
