'use client';

/**
 * @deprecated RETIRED in Milestone 6.
 * All 58 comparison routes have been migrated to bespoke Framer Motion interactive demos:
 * - GeneralAiBatchADemos.tsx
 * - GeneralAiBatchBDemos.tsx
 * - and prior domain-specific bespoke demo components.
 * 
 * 0 references remain in src/.
 */

import React from 'react';

export interface CompetitorDemoConfig {
  slug: string;
  name: string;
  archetype: 'stopwatch' | 'manifest' | 'billing' | 'camera_bot' | 'static_bank';
  priceLabel: string;
  versionOrDomain: string;
  keyFlawBadge: string;
  keyFlawHeadline: string;
  keyFlawDetail: string;
  forensicEvidence: string[];
  latencySeconds: number;
  annualCostEstimate: number;
}

export const COMPETITOR_DEMO_CONFIGS: Record<string, CompetitorDemoConfig> = {};

export function CompetitorInteractiveDemo({ slug }: { slug: string }) {
  return null;
}

export function CompetitorMotionDemo({ slug }: { slug: string }) {
  return null;
}

export default CompetitorMotionDemo;
