"use client";

import { MetricsDashboard } from "../../../packages/ui/components/dashboard/MetricsDashboard";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">📊 Analytics Avançado</h1>
        <p className="text-gray-600 text-lg">
          Métricas em tempo real e insights para otimizar sua estratégia
        </p>
      </div>

      <MetricsDashboard />
    </div>
  );
}
