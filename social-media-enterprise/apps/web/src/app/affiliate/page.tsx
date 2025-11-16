"use client";

import { AffiliateLink } from '@/components/AffiliateLink';
import { AffiliateStats } from '@/components/AffiliateStats';

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Sistema de Afiliados</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <AffiliateLink />
          <AffiliateStats />
        </div>
      </div>
    </div>
  );
}
