/**
 * FitTech AI Core - Enterprise Backend Stabilization & 100K Scale Cockpit
 * Central Schema & Data Provider for Video Streaming, AI Fallback, IAP Sync, and Onboarding.
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
  subtext: string;
  badge: string;
}

export interface TableRow {
  id: string;
  entityName: string;
  category: string;
  status: 'active' | 'verified' | 'queued' | 'flagged';
  latency: string;
  provider: string;
  updatedAt: string;
  payload: Record<string, unknown>;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: 'stripe' | 'linear' | 'notion' | 'lovable' | 'bloomberg' | 'apple';
  primaryNav: NavItem[];
  metrics: MetricItem[];
  workflow: {
    badge: string;
    title: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    defaultInput: string;
    buttonLabel: string;
    sampleResponse: Record<string, unknown>;
  };
  table: {
    badge: string;
    title: string;
    description: string;
    columns: { key: string; label: string }[];
    rows: TableRow[];
  };
}

export const siteConfig: SiteConfig = {
  slug: 'fittech-ai-core',
  name: 'FitTech Core',
  badge: 'v1.0 Production Cockpit',
  tagline: 'Backend Stabilization, Video CDN & 100K Scale Engine',
  description: 'Production-hardened backend architecture built to audit, stabilize, and scale FitTech AI to 100,000 members. Features sub-50ms HLS video delivery, zero-hang AI workout fallback circuit breakers, and cryptographically verified Apple StoreKit 2 IAP sync.',
  archetype: 'stripe',
  primaryNav: [
    { id: 'cockpit', label: 'Operations Cockpit' },
    { id: 'pipeline', label: 'Stabilization Engine' },
    { id: 'records', label: 'Entitlements & Sessions' },
  ],
  metrics: [
    {
      id: 'video-cdn',
      title: 'Video Playback P99',
      value: '42ms Latency',
      change: '-89% vs Replit Direct',
      trend: 'up',
      subtext: 'HLS Adaptive Bitrate • Cloudflare CDN',
      badge: 'Zero Buffering',
    },
    {
      id: 'ai-workout-sla',
      title: 'AI Workout Fallback SLA',
      value: '99.98% Available',
      change: '<12ms Circuit Breaker',
      trend: 'up',
      subtext: 'GPT-4o -> 180+ Local Template Bank',
      badge: 'Zero Hang Guarantee',
    },
    {
      id: 'iap-sync',
      title: 'Apple StoreKit 2 Sync',
      value: '100% Reconciled',
      change: '0 Dropped Purchases',
      trend: 'up',
      subtext: 'JWS Receipt Validation • Promo Codes',
      badge: 'Idempotent Queue',
    },
    {
      id: 'member-scale',
      title: '100K Scale Readiness',
      value: '100,000 Members',
      change: 'PgBouncer + Redis Cache',
      trend: 'up',
      subtext: 'Member • Trainer • Gym Admin Multi-Tenant',
      badge: 'Production Hardened',
    },
  ],
  workflow: {
    badge: 'Shipment Audit & Chaos Lab',
    title: 'End-to-End System Audit & Entitlement Validator',
    description: 'Execute deep audit simulation across video CDN streaming buffers, AI workout generation circuit breakers, Apple IAP webhook idempotency, and multi-role onboarding flows.',
    inputLabel: 'Audit Trigger: Member Profile, Workout Prompt, or IAP Receipt Webhook',
    inputPlaceholder: 'Enter custom test scenario or run default shipment audit...',
    defaultInput: 'Member #MBR-9041 (Gym: Equinox Austin) requesting High-Volume Hypertrophy AI Workout. Verifying Apple StoreKit 2 Annual Pro subscription receipt and stress-testing HLS video playback under simulated 5,000 concurrent user load.',
    buttonLabel: 'Run Full Shipment Audit & Chaos Test',
    sampleResponse: {
      audit_status: 'STABILIZED_AND_VERIFIED',
      target_readiness: '100,000 Members Scalable',
      video_streaming_subsystem: {
        architecture: 'Cloudflare Stream + HLS Adaptive Multi-Bitrate',
        p99_latency_ms: 38.4,
        replit_raw_socket_bottleneck_fixed: true,
        cache_hit_ratio: '99.4%',
        zero_buffering_sla: 'GUARANTEED'
      },
      ai_workout_pipeline: {
        primary_llm: 'OpenAI GPT-4o (Realtime Synthesizer)',
        circuit_breaker: 'ACTIVE (1500ms Threshold)',
        fallback_target: 'Local Seed Template Bank (180+ Curated Routines)',
        fallback_latency_ms: 8.6,
        user_hang_probability: '0.000%'
      },
      apple_iap_and_promos: {
        protocol: 'StoreKit 2 App Store Server Notifications v2',
        signature_check: 'JWS Cryptographic Validation Verified',
        promo_code_deduplication: 'Atomic PostgreSQL Transactions',
        idempotent_webhook_queue: 'PASS'
      },
      multi_role_onboarding: {
        member_signup_flow: 'VERIFIED (JWT Session + Refresh Rotation)',
        trainer_dashboard_access: 'VERIFIED (RBAC Tier 2)',
        gym_admin_claim_flow: 'VERIFIED (HMAC-SHA256 Signed Invite Codes)'
      }
    },
  },
  table: {
    badge: 'Live Telemetry & Audits',
    title: 'Entitlement, Role & Workout Session Registry',
    description: 'Real-time telemetry showing live workout session states, Apple IAP entitlement receipts, promo code redemptions, and Gym Admin claim verifications.',
    columns: [
      { key: 'entityName', label: 'User / Organization' },
      { key: 'category', label: 'Role & Tier' },
      { key: 'provider', label: 'Engine / Provider' },
      { key: 'latency', label: 'P99 Latency' },
      { key: 'status', label: 'Audit Status' },
    ],
    rows: [
      {
        id: 'MBR-9041',
        entityName: 'Marcus Vance',
        category: 'Member • Pro Annual ($199/yr)',
        status: 'verified',
        latency: '24ms',
        provider: 'Apple StoreKit 2 (JWS)',
        updatedAt: '12s ago',
        payload: {
          gym: 'Equinox Austin',
          role: 'Member',
          plan: 'Pro Annual ($199.99/yr)',
          transaction_id: '100000084920194',
          original_purchase_date: '2026-09-18T14:22:10Z',
          ai_workout: 'High-Volume Hypertrophy (GPT-4o)',
          video_playback_format: 'HLS 1080p (24ms buffer)',
          onboarding_status: 'Complete (Step 4/4)',
          promo_applied: 'None',
        },
      },
      {
        id: 'TRN-4012',
        entityName: 'Elena Rostova',
        category: 'Trainer • Pro Coach ($49/mo)',
        status: 'active',
        latency: '18ms',
        provider: 'Cloudflare Stream HLS',
        updatedAt: '45s ago',
        payload: {
          gym: 'Iron Elite Miami',
          role: 'Trainer / Coach',
          plan: 'Trainer Pro ($49/mo)',
          clients_managed: 28,
          video_library_storage: '4.2 GB / 25 GB',
          onboarding_status: 'Verified Credentials',
          invite_codes_issued: 35,
          invite_redemptions: 28,
        },
      },
      {
        id: 'GYM-1088',
        entityName: 'Apex Performance HQ',
        category: 'Gym Admin • Enterprise Claim',
        status: 'verified',
        latency: '12ms',
        provider: 'Cryptographic HMAC Invite',
        updatedAt: '2m ago',
        payload: {
          gym: 'Apex Performance Dallas',
          role: 'Gym Administrator',
          plan: 'Commercial Facility Tier',
          claim_verification: 'Domain DNS + Tax EIN Match',
          signed_invite_token: 'hmac_sha256_948a201bcf44',
          active_member_roster: 480,
          trainers_onboarded: 14,
        },
      },
      {
        id: 'MBR-9044',
        entityName: 'David Kim',
        category: 'Member • Monthly ($19.99)',
        status: 'active',
        latency: '9ms',
        provider: '180+ Local Template Cache',
        updatedAt: '4m ago',
        payload: {
          gym: "Gold's Gym Venice",
          role: 'Member',
          plan: 'Monthly Pass ($19.99)',
          ai_workout_status: 'Circuit Breaker Fallback Active',
          reason: 'OpenAI API 504 Gateway Timeout (Simulated)',
          fallback_template: 'Upper Body Push Compound v4',
          hang_prevented: true,
          video_format: 'HLS 720p Adaptive',
        },
      },
      {
        id: 'MBR-9045',
        entityName: 'Chloe Bennet',
        category: 'Member • Promo Entitlement',
        status: 'verified',
        latency: '31ms',
        provider: 'Apple Promo Code Engine',
        updatedAt: '6m ago',
        payload: {
          gym: 'MetroFit NYC',
          role: 'Member',
          promo_code: 'FITTECH100_VIP',
          entitlement_duration: '90 Days Full Access',
          apple_redemption_id: 'PROMO_99214018',
          fraud_prevention_check: 'Passed (Single Device Fingerprint)',
          onboarding_status: 'Complete',
        },
      },
    ],
  },
};
