"use client";

import { AffiliateDashboard, AffiliateStats } from '@enterprise/affiliate';

export default function AffiliatePage() {
  const stats: AffiliateStats = {
    totalCommissions: 1520.50,
    pendingCommissions: 320.75,
    referrals: 23,
    conversionRate: 15
  };

  const handleGenerateLink = () => {
    alert('Link de afiliado gerado: https://empresa.com/afiliado/ricar');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Programa de Afiliados</h1>
        <AffiliateDashboard stats={stats} onGenerateLink={handleGenerateLink} />
        
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Como funciona?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Indique clientes e ganhe 30% de comissão</li>
            <li>Links de rastreamento personalizados</li>
            <li>Pagamentos semanais via Stripe</li>
            <li>Dashboard em tempo real</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
