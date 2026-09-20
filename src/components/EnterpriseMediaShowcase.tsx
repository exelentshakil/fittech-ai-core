'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Sparkles,
  ExternalLink,
  Layers,
} from 'lucide-react';
import { mediaConfig } from '@/config/media';
import { siteConfig } from '@/config/site';

export function EnterpriseMediaShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-16 sm:py-24 border-t border-[var(--color-border)] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">

        {/* Part 1: Ambient Video Infrastructure Banner (Stripe Section 3 Standard) */}
        <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[#0A0D14] shadow-xl">
          {/* Background Ambient Video Stream */}
          <div className="relative h-[360px] sm:h-[440px] w-full overflow-hidden">
            <video
              ref={videoRef}
              src={mediaConfig.ambientVideo.videoUrl}
              poster={mediaConfig.ambientVideo.posterUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-65 scale-105 transition-transform duration-1000"
            />
            {/* Cinematic Gradient Overlays for Stripe Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14]/90 via-[#0A0D14]/50 to-transparent" />
          </div>

          {/* Foreground Copy & Control Bar */}
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between z-10">
            {/* Top Bar: Live Status & Controls */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-mono text-white border border-white/15">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D924] animate-pulse" />
                <span>Live High-Throughput Node</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause ambient video" : "Play ambient video"}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all border border-white/15 cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all border border-white/15 cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Bottom Copy: High-Signal Statement */}
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#7A68FF] font-semibold">
                Autonomous Execution Engine
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Building the economic &amp; operational infrastructure for {siteConfig.name}.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Cryptographically verifiable event streams, deterministic fallbacks, and real-time sub-50ms data pipelines running at production scale.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: High-Resolution Photographic Case Study Banner (Stripe Section 5 Standard) */}
        <div>
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mb-1">
              Field-Tested Architecture
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Powering operations of all sizes.
              <span className="text-[var(--color-text-secondary)] font-normal block sm:inline sm:ml-2">
                Built to adapt seamlessly from rapid technical spikes to 100K+ concurrent scale.
              </span>
            </h3>
          </div>

          {/* Master Full-Bleed Case Study Card */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-2xs group mb-6">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[var(--color-panel-subtle)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mediaConfig.caseStudyPhoto.url}
                alt={mediaConfig.caseStudyPhoto.alt}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-80" />
              
              {/* Floating Stat Pill on Image */}
              <div className="absolute bottom-4 left-4 sm:left-6 flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-[4px] bg-[#0D1738]/90 text-white backdrop-blur-md text-xs font-mono font-bold border border-white/15">
                  Production Case Study
                </span>
                <span className="px-3 py-1 rounded-[4px] bg-white/95 dark:bg-slate-900/90 text-[var(--color-text-primary)] backdrop-blur-md text-xs font-mono font-semibold border border-[var(--color-border)] shadow-xs">
                  Sub-50ms P99 Latency
                </span>
              </div>
            </div>

            {/* Case Study Meta Strip */}
            <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-[var(--color-border)]">
              <div className="space-y-1">
                <div className="text-base sm:text-lg font-bold text-[var(--color-text-primary)]">
                  Enterprise Infrastructure Consolidation
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] opacity-85">
                  Eliminated Replit cold starts and socket timeouts through Cloudflare CDN edges and automated fallback circuit breakers.
                </p>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono text-[var(--color-text-secondary)] shrink-0">
                <div>
                  <div className="text-lg font-bold text-[var(--color-text-primary)]">99.999%</div>
                  <div className="text-[10px] opacity-75">SLA Uptime</div>
                </div>
                <div className="h-8 w-[1px] bg-[var(--color-border)]" />
                <div>
                  <div className="text-lg font-bold text-[#533AFD] dark:text-[#7A68FF]">100K+</div>
                  <div className="text-[10px] opacity-75">Scale Tested</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Column Editorial Photography Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaConfig.editorialPhotos.map((photo, idx) => {
              const titles = [
                'Autonomous Lead Discovery & CRM Sync',
                'Cryptographic Entitlement Validation',
                'Deterministic Fallback Circuit Breakers',
              ];
              const tags = ['Inngest Queue', 'StoreKit 2 JWS', 'Dual LLM Failover'];

              return (
                <div
                  key={photo.id}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-[var(--color-panel-subtle)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded-[4px] bg-[#0D1738]/85 text-white backdrop-blur-md text-[10px] font-mono font-semibold border border-white/10">
                        {tags[idx % tags.length]}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[#533AFD] dark:group-hover:text-[#7A68FF] transition-colors">
                      {titles[idx % titles.length]}
                    </h4>
                    <p className="text-xs text-[var(--color-text-secondary)] opacity-80 leading-relaxed">
                      Engineered to isolate third-party rate limits and API downtime from core system operation.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
