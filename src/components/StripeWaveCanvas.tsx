'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface StripeWaveCanvasProps {
  className?: string;
}

export function StripeWaveCanvas({ className = '' }: StripeWaveCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // 1. Feature detection: WebGL availability
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
    if (!gl) {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animationFrameId: number;
    let isVisible = true;

    // 2. Three.js Scene Setup
    const scene = new THREE.Scene();
    
    // Orthographic / Perspective balance for Stripe ribbon depth
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;
    
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 3. Custom Iridescent Ribbon Geometry
    // 120 segments along X, 40 segments along Y for ultra-smooth fluid curves
    const geometry = new THREE.PlaneGeometry(7.5, 4.5, 120, 40);

    // 4. Custom GLSL Shader for Authentic Stripe Iridescent Wave
    const waveUniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      // Stripe 5-stop signature palette: Blurple, Hot Pink, Sunset Coral, Cyan, Violet
      uColor1: { value: new THREE.Color('#533AFD') }, // Stripe Blurple
      uColor2: { value: new THREE.Color('#FF2E93') }, // Hot Magenta
      uColor3: { value: new THREE.Color('#FF7A59') }, // Sunset Coral
      uColor4: { value: new THREE.Color('#00D4FF') }, // Cyan / Electric Blue
      uColor5: { value: new THREE.Color('#7A68FF') }, // Violet
    };

    const material = new THREE.ShaderMaterial({
      uniforms: waveUniforms,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec2 vUv;
        varying float vElevation;
        varying vec3 vNormalVec;

        void main() {
          vUv = uv;
          vec3 pos = position;

          // Harmonic multi-frequency fluid wave deformation (Stripe 3D ribbon effect)
          float wave1 = sin(pos.x * 1.8 + uTime * 0.95) * 0.45;
          float wave2 = cos(pos.y * 2.2 + uTime * 0.8) * 0.35;
          float wave3 = sin((pos.x + pos.y) * 1.5 + uTime * 1.2) * 0.25;
          float mouseInteraction = sin(distance(uv, uMouse) * 6.28 - uTime) * 0.12;

          pos.z += wave1 + wave2 + wave3 + mouseInteraction;
          
          // Gentle S-curve ribbon twist
          pos.y += sin(pos.x * 0.8 + uTime * 0.4) * 0.25;

          vElevation = pos.z;
          vNormalVec = normal;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform vec3 uColor4;
        uniform vec3 uColor5;
        uniform float uTime;
        varying vec2 vUv;
        varying float vElevation;

        void main() {
          // Dynamic iridescent color blending across UV coordinates and wave heights
          float normElevation = (vElevation + 0.8) * 0.6;
          
          // Diagonal color gradient flow
          float t = clamp(vUv.x * 0.7 + vUv.y * 0.3 + normElevation * 0.4, 0.0, 1.0);

          vec3 color = uColor1;
          if (t < 0.25) {
            color = mix(uColor1, uColor2, t / 0.25);
          } else if (t < 0.50) {
            color = mix(uColor2, uColor3, (t - 0.25) / 0.25);
          } else if (t < 0.75) {
            color = mix(uColor3, uColor4, (t - 0.50) / 0.25);
          } else {
            color = mix(uColor4, uColor5, (t - 0.75) / 0.25);
          }

          // Ambient luminous edge highlight (Stripe silk shine)
          float fresnel = 0.4 + 0.6 * pow(1.0 - abs(vElevation * 0.8), 2.0);
          color *= fresnel;

          // Soft organic feathering on borders for seamless blend into canvas
          float edgeAlpha = smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x) *
                           smoothstep(0.0, 0.15, vUv.y) * smoothstep(1.0, 0.85, vUv.y);

          // Alpha curve: vibrant opacity in core, soft fade out at boundary
          float finalAlpha = clamp(0.75 * edgeAlpha * (0.8 + normElevation * 0.3), 0.0, 0.92);

          gl_FragColor = vec4(color, finalAlpha);
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -0.35;
    mesh.rotation.y = 0.25;
    mesh.rotation.z = -0.15;
    scene.add(mesh);

    // 5. Mouse tracking with smooth lerp
    const targetMouse = new THREE.Vector2(0.5, 0.5);
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        targetMouse.x = (e.clientX - rect.left) / rect.width;
        targetMouse.y = 1.0 - (e.clientY - rect.top) / rect.height;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 6. Responsive Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth > 0 && newHeight > 0) {
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 7. Visibility Observer (Zero CPU when scrolled away)
    const intersectionObserver = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0.05 });
    intersectionObserver.observe(container);

    // 8. High-Performance Render Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible || document.hidden) return;

      const delta = clock.getDelta();
      waveUniforms.uTime.value += delta * 0.85;

      // Smooth mouse lerp
      waveUniforms.uMouse.value.lerp(targetMouse, 0.05);

      // Subtle ambient mesh tilt
      mesh.rotation.z = -0.15 + Math.sin(waveUniforms.uTime.value * 0.3) * 0.05;

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Layer 1: Instant CSS/SVG Iridescent Mesh Fallback (Zero CLS, Frame 0 Paint) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-20' : 'opacity-100'
        }`}
      >
        <div className="absolute -top-12 -right-12 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF2E93]/25 via-[#533AFD]/20 to-[#00D4FF]/10 blur-3xl" />
        <svg
          className="absolute right-0 top-0 w-full h-full opacity-60 mix-blend-screen"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200,100 C350,150 450,50 650,180 C850,310 700,550 500,480 C300,410 100,520 50,300 Z"
            fill="url(#stripeMeshFallback)"
          />
          <defs>
            <linearGradient id="stripeMeshFallback" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#533AFD" stopOpacity="0.7" />
              <stop offset="30%" stopColor="#FF2E93" stopOpacity="0.65" />
              <stop offset="60%" stopColor="#FF7A59" stopOpacity="0.6" />
              <stop offset="85%" stopColor="#00D4FF" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#7A68FF" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Layer 2: Real 3D WebGL Three.js Wave Canvas (Exact Stripe Architecture) */}
      {hasWebGL && (
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}
