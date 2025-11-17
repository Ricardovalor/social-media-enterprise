"use client";

import { MetricsDashboard } from "../../packages/ui/components/dashboard/MetricsDashboard";
import { AIGenerator } from "../../packages/ui/components/ai/AIGenerator";
import { MonetizationDashboard } from "../../packages/monetization/src/components/MonetizationDashboard";
import { AnalyticsDashboard } from "../../packages/analytics/src/components/AnalyticsDashboard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">🚀</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Social Media AI Master</h1>
              <p className="text-gray-600 text-sm">Plataforma para Criadores</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <MetricsDashboard />
        <AnalyticsDashboard />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <AIGenerator />
          <MonetizationDashboard />
        </div>
      </div>
    </div>
  );
}
