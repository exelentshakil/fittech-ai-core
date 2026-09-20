'use client';

import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  CreditCard,
  Zap,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
  Sliders,
  Layers,
  Globe,
  Radio,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Cell,
} from 'recharts';
import { siteConfig } from '@/config/site';

export function StripeInteractiveShowcase() {
  const [mounted, setMounted] = useState(false);
  
  // Interactive State for Card 1: POS Terminal
  const [terminalAmount, setTerminalAmount] = useState(24.50);
  const [terminalStatus, setTerminalStatus] = useState<'ready' | 'processing' | 'approved'>('approved');

  // Interactive State for Card 2: Billing Model Switcher
  const [billingModel, setBillingModel] = useState<'seats' | 'usage' | 'hybrid'>('usage');

  // Interactive State for Card 4: 3D Tilt Card
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    // Subtle ambient terminal status cycle
    const timer = setInterval(() => {
      setTerminalStatus((prev) => {
        if (prev === 'ready') return 'processing';
        if (prev === 'processing') return 'approved';
        return 'ready';
      });
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  // Billing Model Datasets
  const billingDataMap = {
    seats: [
      { name: 'Jan', val: 4200 },
      { name: 'Feb', val: 5600 },
      { name: 'Mar', val: 6800 },
      { name: 'Apr', val: 8100 },
      { name: 'May', val: 9900 },
      { name: 'Jun', val: 12400 },
    ],
    usage: [
      { name: 'Jan', val: 2800 },
      { name: 'Feb', val: 4900 },
      { name: 'Mar', val: 7800 },
      { name: 'Apr', val: 11200 },
      { name: 'May', val: 15400 },
      { name: 'Jun', val: 19800 },
    ],
    hybrid: [
      { name: 'Jan', val: 5100 },
      { name: 'Feb', val: 6900 },
      { name: 'Mar', val: 9200 },
      { name: 'Apr', val: 13500 },
      { name: 'May', val: 17800 },
      { name: 'Jun', val: 23400 },
    ],
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCardTilt({
      x: -y / 12,
      y: x / 12,
    });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  return (
    <section className="py-16 sm:py-24 border-t border-[var(--color-border)] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header: Stripe Signature Two-Tone Typography */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] bg-[#533AFD]/8 border border-[#533AFD]/20 text-[#533AFD] dark:bg-[#7A68FF]/15 dark:text-[#7A68FF] text-[11px] font-mono font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modular Enterprise Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.12]">
            Flexible solutions for every workflow.
            <span className="text-[var(--color-text-secondary)] font-normal block sm:inline sm:ml-2">
              Run mission-critical automation designed to work individually or together.
            </span>
          </h2>
        </div>

        {/* 6-Card High-Density Interactive Mosaic Grid (Stripe Section 2 Standard) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Interactive POS & Mobile Terminal Mockup */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#533AFD]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Edge Ingestion & Mobile Terminal
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Smartphone className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Sub-second device & webhook sync
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Accept contactless events, instant tokenization, and multi-tenant ledger settlement.
              </p>
            </div>

            {/* Interactive Terminal Phone Mockup */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70">
              <div className="max-w-[240px] mx-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3 shadow-inner space-y-2.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
                  <span className="flex items-center gap-1">
                    <Radio className="w-2.5 h-2.5 text-[#00D924] animate-pulse" />
                    NFC Connected
                  </span>
                  <span>99.99% Signal</span>
                </div>
                
                <div className="rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] p-3 text-center space-y-1">
                  <div className="text-[10px] text-[var(--color-text-muted)] font-mono">Tap Card or Phone</div>
                  <div className="text-2xl font-bold font-mono text-[var(--color-text-primary)]">
                    ${terminalAmount.toFixed(2)}
                  </div>

                  <div className="pt-2 flex items-center justify-center gap-1.5">
                    {terminalStatus === 'approved' ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#057A55] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        Approved (14ms)
                      </span>
                    ) : terminalStatus === 'processing' ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#533AFD] bg-[#533AFD]/8 px-2 py-0.5 rounded-full">
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        Authorizing...
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                        Ready for customer
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center px-1">
                  <span className="text-[9px] font-mono text-[var(--color-text-muted)]">Stripe Terminal SDK</span>
                  <button
                    onClick={() => {
                      setTerminalAmount((prev) => (prev > 100 ? 18.50 : prev + 24.00));
                      setTerminalStatus('processing');
                      setTimeout(() => setTerminalStatus('approved'), 700);
                    }}
                    className="text-[9px] font-mono text-[#533AFD] hover:underline cursor-pointer"
                  >
                    Simulate Charge
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Dynamic Billing Model Selector */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Revenue Architecture
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <TrendingUp className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Enable any recurring or usage billing
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Seamlessly model tiered seats, consumption meters, and automated proration.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              {/* Interactive Segmented Pill Bar */}
              <div className="flex items-center p-0.5 rounded-[6px] bg-[var(--color-panel-subtle)] border border-[var(--color-border)] text-[11px] font-mono">
                {(['seats', 'usage', 'hybrid'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setBillingModel(m)}
                    className={`flex-1 py-1 px-2 rounded-[4px] font-medium transition-all capitalize cursor-pointer text-center ${
                      billingModel === m
                        ? 'bg-[var(--color-surface)] text-[#533AFD] shadow-2xs font-semibold'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* Dynamic Animated Chart */}
              <div className="h-28 w-full">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={billingDataMap[billingModel]} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                      <XAxis dataKey="name" fontSize={10} stroke="#94a3b8" tickLine={false} axisLine={false} />
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-mono shadow-xs">
                                ${payload[0].value?.toLocaleString()}
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="val" radius={[3, 3, 0, 0]} barSize={18}>
                        {billingDataMap[billingModel].map((_, idx) => (
                          <Cell
                            key={idx}
                            fill="#533AFD"
                            fillOpacity={0.4 + (idx / 6) * 0.6}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[var(--color-text-muted)] pt-1">
                <span>Auto-proration active</span>
                <span className="font-bold text-[#057A55] dark:text-emerald-400">+$19.8k ARR</span>
              </div>
            </div>
          </div>

          {/* Card 3: Autonomous Agentic Commerce Engine */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Autonomous AI Agents
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[#533AFD]">
                  <Cpu className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Monetize agentic commerce
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Allow autonomous LLM agents to negotiate, procure, and execute micro-transactions safely.
              </p>
            </div>

            {/* Live Agent Terminal Box */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70">
              <div className="rounded-[6px] bg-[#0A0D14] text-slate-200 p-3 font-mono text-[11px] space-y-2 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 text-[10px] pb-1 border-b border-slate-800">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Agent #AG-4089
                  </span>
                  <span>OpenAI Tool-Use</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-[#00D4FF]">prompt &gt;</span> procure 2 cloud instances under $150/mo
                </div>
                <div className="rounded bg-slate-900/90 p-2 border border-slate-800/80 space-y-1 text-[10px]">
                  <div className="text-emerald-400 flex items-center justify-between">
                    <span>✓ Budget authorized ($128.00)</span>
                    <span>100% Policy</span>
                  </div>
                  <div className="text-slate-400">
                    Tokenized VCC: <span className="text-slate-200">•••• 9021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: 3D Holographic Card Issuing Mockup */}
          <div
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Card Issuing & Fleet
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <CreditCard className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Instant card issuing program
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Deploy physical, virtual, or single-use burner corporate cards in seconds via API.
              </p>
            </div>

            {/* 3D Holographic Card with Mouse Tracking Tilt */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 flex justify-center py-2" style={{ perspective: 800 }}>
              <div
                style={{
                  transform: `rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
                className="w-64 h-38 rounded-xl bg-gradient-to-tr from-[#0D1738] via-[#2A3464] to-[#533AFD] p-4 text-white shadow-xl flex flex-col justify-between relative overflow-hidden border border-white/20"
              >
                {/* Iridescent Sheen Foil Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                <div className="flex items-center justify-between">
                  <div className="w-8 h-6 rounded-md bg-amber-300/80 border border-amber-400 flex items-center justify-center">
                    <div className="w-5 h-4 border border-amber-700/40 rounded-sm" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-300 uppercase">
                    Commercial
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-mono text-sm tracking-widest text-slate-200">
                    •••• •••• •••• 4892
                  </div>
                  <div className="flex justify-between items-end text-[9px] font-mono text-slate-300">
                    <div>
                      <div className="text-[7px] text-slate-400">CARDHOLDER</div>
                      <div>{siteConfig.name.toUpperCase()} ENTERPRISE</div>
                    </div>
                    <div>
                      <div className="text-[7px] text-slate-400">EXP</div>
                      <div>09/29</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Borderless Money & Global Settlement Ring */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Global Liquidity & Webhooks
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Globe className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Access borderless money movement
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Orchestrate multi-currency settlements, stablecoin rails, and instant fx routing.
              </p>
            </div>

            {/* Global Node Latency Monitor */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-2.5">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-[4px] bg-[var(--color-panel-subtle)] border border-[var(--color-border)]">
                  <div className="text-[9px] text-[var(--color-text-muted)] font-mono">US-EAST</div>
                  <div className="text-xs font-bold font-mono text-[#057A55] dark:text-emerald-400">12ms</div>
                </div>
                <div className="p-2 rounded-[4px] bg-[var(--color-panel-subtle)] border border-[var(--color-border)]">
                  <div className="text-[9px] text-[var(--color-text-muted)] font-mono">EU-CENTRAL</div>
                  <div className="text-xs font-bold font-mono text-[#533AFD] dark:text-[#7A68FF]">24ms</div>
                </div>
                <div className="p-2 rounded-[4px] bg-[var(--color-panel-subtle)] border border-[var(--color-border)]">
                  <div className="text-[9px] text-[var(--color-text-muted)] font-mono">APAC-SOUTH</div>
                  <div className="text-xs font-bold font-mono text-amber-600 dark:text-amber-400">46ms</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)] pt-1">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00D924]" />
                  Zero-slippage FX
                </span>
                <span>ISO 20022 Compliant</span>
              </div>
            </div>
          </div>

          {/* Card 6: Embedded Systems & Multi-Tenant Split Ledger */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Multi-Tenant Platform
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Layers className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Embed workflows into your platform
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Connect thousands of accounts with custom fee splits, instant onboarding, and white-labeling.
              </p>
            </div>

            {/* Embedded Micro Ledger Table */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70">
              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2 space-y-1.5 text-[10px] font-mono">
                <div className="flex items-center justify-between font-bold text-[var(--color-text-secondary)] pb-1 border-b border-[var(--color-border)]/60">
                  <span>Merchant / Entity</span>
                  <span>Split</span>
                  <span>Payout</span>
                </div>
                <div className="flex items-center justify-between text-[var(--color-text-primary)]">
                  <span className="truncate max-w-[90px]">Apex Fitness</span>
                  <span className="text-[#533AFD] font-bold">85 / 15</span>
                  <span className="text-[#057A55] font-bold">$4,890.00</span>
                </div>
                <div className="flex items-center justify-between text-[var(--color-text-primary)]">
                  <span className="truncate max-w-[90px]">Iron Elite Gym</span>
                  <span className="text-[#533AFD] font-bold">80 / 20</span>
                  <span className="text-[#057A55] font-bold">$2,340.50</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section 6 Architecture Connectivity Graphic: "Connect to existing systems" */}
        <div className="mt-14 rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 shadow-2xs relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="max-w-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#533AFD] dark:text-[#7A68FF] font-semibold mb-1">
                Systems Orchestration & Integrations
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                Connect to existing systems with zero downtime
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] opacity-85 mt-1.5 leading-relaxed">
                Orchestrate data pipelines across APIs, databases, webhooks, and third-party tools with automated retry queues and cryptographic verification.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] bg-[#533AFD]/8 text-[#533AFD] border border-[#533AFD]/20">
                <Zap className="w-3.5 h-3.5" />
                135+ Connectors
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] bg-emerald-50 dark:bg-emerald-950/40 text-[#057A55] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5" />
                Zero-Loss Backpressure
              </span>
            </div>
          </div>

          {/* Visual Animated SVG Architecture Node Diagram */}
          <div className="w-full bg-[var(--color-panel-subtle)] rounded-[6px] border border-[var(--color-border)] p-6 sm:p-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 text-center font-mono">
              
              {/* Left Ingestion Sources */}
              <div className="space-y-2">
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  PostgreSQL / DB
                </div>
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  Stripe / Billing
                </div>
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  Webhook Streams
                </div>
              </div>

              {/* Animated Conduits Left -> Center */}
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="w-full h-0.5 bg-gradient-to-r from-slate-300 via-[#533AFD] to-[#533AFD] relative">
                  <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#533AFD] animate-ping" />
                </div>
                <span className="text-[10px] text-[#533AFD] font-bold mt-1">mTLS Pipeline</span>
              </div>

              {/* Core Cockpit Engine (Center Node) */}
              <div className="p-5 rounded-[8px] bg-gradient-to-br from-[#0D1738] to-[#1E2954] text-white shadow-lg border border-[#533AFD]/40 space-y-2">
                <div className="inline-flex p-2 rounded-md bg-[#533AFD] text-white">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="font-bold text-sm tracking-tight">{siteConfig.name} Core</div>
                <div className="text-[10px] text-slate-300">Deterministic Engine &amp; AI Router</div>
                <div className="pt-1 flex items-center justify-center gap-1 text-[9px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  14.2ms P99
                </div>
              </div>

              {/* Animated Conduits Center -> Right */}
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="w-full h-0.5 bg-gradient-to-r from-[#533AFD] via-[#057A55] to-emerald-400 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <span className="text-[10px] text-[#057A55] dark:text-emerald-400 font-bold mt-1">Event DLQ</span>
              </div>

              {/* Right Output Destinations */}
              <div className="space-y-2">
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  Realtime LLM AI
                </div>
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  Inngest Queue
                </div>
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  Enterprise Audit Log
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
