'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  CreditCard,
  Globe,
  Layers,
  ArrowRight,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Zap,
  CheckCircle2,
  RefreshCw,
  Sliders,
  DollarSign,
  Radio,
  Lock,
  Pause,
  Play,
  Share2,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export function StripeInteractiveShowcase() {
  // Interactive State for Card 1: POS Terminal
  const [terminalAmount, setTerminalAmount] = useState(24.50);
  const [terminalStatus, setTerminalStatus] = useState<'idle' | 'processing' | 'approved'>('approved');

  // Interactive State for Card 2: Billing Model Switcher
  const [billingTier, setBillingTier] = useState<'seats' | 'usage' | 'hybrid'>('usage');
  const [activeMembers, setActiveMembers] = useState(12500);

  // Interactive State for Card 4: 3D Tilt Card
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });
  const [isCardFrozen, setIsCardFrozen] = useState(false);

  // Interactive State for Card 5: Global Route Failover Simulator
  const [edgePrimary, setEdgePrimary] = useState<'us-east' | 'eu-central'>('us-east');
  const [failoverRunning, setFailoverRunning] = useState(false);

  // Interactive State for Card 6: Multi-Tenant Split Ledger Slider
  const [platformSplit, setPlatformSplit] = useState(15);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCardTilt({ x: -(y / rect.height) * 16, y: (x / rect.width) * 16 });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  const handleTriggerFailover = () => {
    setFailoverRunning(true);
    setTimeout(() => {
      setEdgePrimary((prev) => (prev === 'us-east' ? 'eu-central' : 'us-east'));
      setFailoverRunning(false);
    }, 600);
  };

  return (
    <section className="py-16 sm:py-24 border-t border-[var(--color-border)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Stripe Two-Tone Category Eyebrow & Master Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#533AFD]/20 bg-[#533AFD]/8 px-3 py-1 text-xs font-mono text-[#533AFD] dark:text-[#7A68FF] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Modular Enterprise Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)] leading-tight">
            Flexible solutions for every workflow.{' '}
            <span className="text-[var(--color-text-secondary)] opacity-75 font-normal">
              Run mission-critical automation designed to work individually or together.
            </span>
          </h2>
        </div>

        {/* 6-Card Interactive Moving Elements Grid (Stripe Section 2 Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Interactive POS & Mobile Terminal Mockup */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#533AFD]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Edge Ingestion &amp; Mobile Terminal
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Smartphone className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Sub-second device &amp; webhook sync
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
                  <span className="text-[9px] font-mono text-[var(--color-text-muted)]">Terminal SDK v4.2</span>
                  <button
                    type="button"
                    onClick={() => {
                      setTerminalAmount((prev) => (prev > 100 ? 18.50 : prev + 24.00));
                      setTerminalStatus('processing');
                      setTimeout(() => setTerminalStatus('approved'), 500);
                    }}
                    className="text-[9px] font-mono text-[#533AFD] hover:underline cursor-pointer font-bold"
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

            {/* Interactive Billing Model Control */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              {/* Billing Model Pills */}
              <div className="grid grid-cols-3 gap-1 bg-[var(--color-panel-subtle)] p-1 rounded-[6px] border border-[var(--color-border)]">
                {(['seats', 'usage', 'hybrid'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setBillingTier(mode)}
                    className={`text-[10px] font-mono py-1 rounded-[4px] capitalize font-medium transition-all cursor-pointer ${
                      billingTier === mode
                        ? 'bg-[var(--color-surface)] text-[#533AFD] dark:text-[#7A68FF] shadow-xs font-bold'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              {/* Dynamic Revenue Preview Chart */}
              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-[var(--color-text-muted)]">Forecasted ARR</span>
                  <span className="font-bold text-[#057A55] dark:text-emerald-400">
                    ${billingTier === 'seats' ? '420,000' : billingTier === 'usage' ? '890,400' : '1,240,000'}/yr
                  </span>
                </div>

                {/* Animated Bars */}
                <div className="flex items-end justify-between gap-1.5 h-12 pt-1 px-1">
                  {[40, 65, 55, 80, 95, 75, 100].map((val, idx) => {
                    const multiplier = billingTier === 'seats' ? 0.6 : billingTier === 'usage' ? 0.9 : 1.1;
                    const heightPct = Math.min(100, Math.round(val * multiplier));
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full bg-[#533AFD] dark:bg-[#7A68FF] rounded-t-[2px] transition-all duration-500"
                          style={{
                            height: `${heightPct}%`,
                            opacity: 0.35 + (idx / 7) * 0.65,
                          }}
                        />
                        <span className="text-[8px] font-mono text-[var(--color-text-muted)]">
                          {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov', 'Dec'][idx]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
                <span>Auto-proration active</span>
                <span className="text-[#057A55] font-bold">+19.4% MoM</span>
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
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
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

          {/* Card 4: 3D Holographic Card Issuing & Fleet Management (Balanced Height, Zero Void) */}
          <div
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Card Issuing &amp; Fleet
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

            {/* Rich Card Management Stage */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              {/* 3D Holographic Card with Mouse Tracking Tilt */}
              <div className="flex justify-center" style={{ perspective: 800 }}>
                <div
                  style={{
                    transform: `rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
                    transition: 'transform 0.15s ease-out',
                  }}
                  className={`w-full max-w-[270px] h-36 rounded-xl p-3.5 text-white shadow-lg flex flex-col justify-between relative overflow-hidden border border-white/20 transition-all duration-300 ${
                    isCardFrozen
                      ? 'bg-gradient-to-tr from-slate-700 via-slate-800 to-slate-900 grayscale'
                      : 'bg-gradient-to-tr from-[#0D1738] via-[#2A3464] to-[#533AFD]'
                  }`}
                >
                  {/* Iridescent Sheen Foil Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  
                  <div className="flex items-center justify-between">
                    <div className="w-7 h-5 rounded-md bg-amber-300/90 border border-amber-400 flex items-center justify-center">
                      <div className="w-4 h-3 border border-amber-700/40 rounded-xs" />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-slate-300 uppercase">
                      {isCardFrozen ? 'FROZEN' : 'COMMERCIAL'}
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <div className="font-mono text-xs tracking-widest text-slate-200">
                      •••• •••• •••• 4892
                    </div>
                    <div className="flex justify-between items-end text-[8px] font-mono text-slate-300">
                      <div>
                        <div className="text-[6px] text-slate-400">CARDHOLDER</div>
                        <div>{siteConfig.name.toUpperCase()} ENTERPRISE</div>
                      </div>
                      <div>
                        <div className="text-[6px] text-slate-400">EXP</div>
                        <div>09/29</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Controls & Feed */}
              <div className="flex items-center justify-between gap-2 pt-1 font-mono text-[10px]">
                <span className="flex items-center gap-1 text-[var(--color-text-muted)]">
                  <span className={`h-1.5 w-1.5 rounded-full ${isCardFrozen ? 'bg-amber-400' : 'bg-[#00D924]'}`} />
                  Limit: $25,000/mo
                </span>
                <button
                  type="button"
                  onClick={() => setIsCardFrozen((prev) => !prev)}
                  className="px-2 py-0.5 rounded-[4px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] hover:bg-[var(--color-border)] text-[var(--color-text-primary)] font-semibold transition-colors cursor-pointer"
                >
                  {isCardFrozen ? 'Unfreeze Card' : 'Freeze Card'}
                </button>
              </div>

              <div className="p-2 rounded-[4px] bg-[var(--color-panel-subtle)] border border-[var(--color-border)] text-[10px] font-mono flex items-center justify-between text-[var(--color-text-secondary)]">
                <span className="truncate">✓ Cloudflare CDN Auth: $48.20</span>
                <span className="text-[#057A55] dark:text-emerald-400 font-bold shrink-0">9ms Auth</span>
              </div>
            </div>
          </div>

          {/* Card 5: Global Liquidity & Edge Routing (Balanced Height, Zero Void) */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Global Liquidity &amp; Webhooks
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Globe className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Access borderless money movement
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Orchestrate multi-currency settlements, stablecoin rails, and sub-50ms edge webhooks.
              </p>
            </div>

            {/* Interactive Edge PoP Grid & Failover Switcher */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-2.5">
              {/* 4 Edge PoPs Grid */}
              <div className="grid grid-cols-2 gap-2 text-left">
                <div
                  className={`p-2 rounded-[6px] border transition-all ${
                    edgePrimary === 'us-east'
                      ? 'border-[#533AFD] bg-[#533AFD]/5 dark:bg-[#7A68FF]/10'
                      : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[9px] font-mono text-[var(--color-text-muted)]">
                    <span>US-EAST (VA)</span>
                    {edgePrimary === 'us-east' && <span className="text-[#533AFD] font-bold">PRIMARY</span>}
                  </div>
                  <div className="text-xs font-bold font-mono text-[#057A55] dark:text-emerald-400">12ms P99</div>
                </div>

                <div
                  className={`p-2 rounded-[6px] border transition-all ${
                    edgePrimary === 'eu-central'
                      ? 'border-[#533AFD] bg-[#533AFD]/5 dark:bg-[#7A68FF]/10'
                      : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[9px] font-mono text-[var(--color-text-muted)]">
                    <span>EU-CENTRAL</span>
                    {edgePrimary === 'eu-central' && <span className="text-[#533AFD] font-bold">PRIMARY</span>}
                  </div>
                  <div className="text-xs font-bold font-mono text-[#533AFD] dark:text-[#7A68FF]">24ms P99</div>
                </div>

                <div className="p-2 rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)]">
                  <div className="text-[9px] text-[var(--color-text-muted)] font-mono">APAC-SOUTH (SG)</div>
                  <div className="text-xs font-bold font-mono text-amber-600 dark:text-amber-400">38ms P99</div>
                </div>

                <div className="p-2 rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)]">
                  <div className="text-[9px] text-[var(--color-text-muted)] font-mono">SA-EAST (SP)</div>
                  <div className="text-xs font-bold font-mono text-teal-600 dark:text-teal-400">52ms P99</div>
                </div>
              </div>

              {/* Failover Simulator Trigger */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] font-mono text-[var(--color-text-muted)]">Zero-Loss Failover</span>
                <button
                  type="button"
                  disabled={failoverRunning}
                  onClick={handleTriggerFailover}
                  className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#533AFD] hover:underline cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-2.5 h-2.5 ${failoverRunning ? 'animate-spin' : ''}`} />
                  Simulate Route Failover
                </button>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)] pt-1 border-t border-[var(--color-border)]/60">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00D924]" />
                  Zero-slippage FX
                </span>
                <span>ISO 20022 Compliant</span>
              </div>
            </div>
          </div>

          {/* Card 6: Embedded Systems & Multi-Tenant Split Ledger (Balanced Height, Zero Void) */}
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

            {/* Embedded Multi-Account Ledger Table */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-[var(--color-text-muted)]">24h Net Settlement:</span>
                <span className="font-bold text-[#057A55] dark:text-emerald-400">$107,630.50</span>
              </div>

              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5 space-y-2 text-[10px] font-mono">
                <div className="flex items-center justify-between font-bold text-[var(--color-text-secondary)] pb-1 border-b border-[var(--color-border)]/60">
                  <span>Merchant Facility</span>
                  <span>Split</span>
                  <span>Payout</span>
                </div>
                <div className="flex items-center justify-between text-[var(--color-text-primary)]">
                  <span className="truncate max-w-[100px]">Equinox Austin</span>
                  <span className="text-[#533AFD] font-bold">85 / 15</span>
                  <span className="text-[#057A55] font-bold">$32,490.00</span>
                </div>
                <div className="flex items-center justify-between text-[var(--color-text-primary)]">
                  <span className="truncate max-w-[100px]">Iron Elite Miami</span>
                  <span className="text-[#533AFD] font-bold">80 / 20</span>
                  <span className="text-[#057A55] font-bold">$18,240.50</span>
                </div>
                <div className="flex items-center justify-between text-[var(--color-text-primary)]">
                  <span className="truncate max-w-[100px]">Apex Dallas HQ</span>
                  <span className="text-[#533AFD] font-bold">85 / 15</span>
                  <span className="text-[#057A55] font-bold">$14,100.00</span>
                </div>
                <div className="flex items-center justify-between text-[var(--color-text-primary)]">
                  <span className="truncate max-w-[100px]">Gold's Gym Venice</span>
                  <span className="text-[#533AFD] font-bold">90 / 10</span>
                  <span className="text-[#057A55] font-bold">$42,800.00</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)] pt-0.5">
                <span>Stripe Connect Custom</span>
                <span className="text-emerald-500 font-semibold">Instant Payouts</span>
              </div>
            </div>
          </div>

        </div>

        {/* Section 6 Architecture Connectivity Graphic: "Connect to existing systems" */}
        <div className="mt-14 rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 shadow-2xs relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="max-w-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#533AFD] dark:text-[#7A68FF] font-semibold mb-1">
                Systems Orchestration &amp; Integrations
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
                <div className="font-bold text-sm tracking-tight">
                  {siteConfig.name.endsWith('Core') ? siteConfig.name : `${siteConfig.name} Core`}
                </div>
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
