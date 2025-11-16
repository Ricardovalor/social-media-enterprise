"use client";

import { AffiliateStats } from '../types';

interface AffiliateDashboardProps {
  stats: AffiliateStats;
  onGenerateLink: () => void;
}

export function AffiliateDashboard({ stats, onGenerateLink }: AffiliateDashboardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard de Afiliados</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">R$ {stats.totalCommissions.toFixed(2)}</div>
          <div className="text-sm text-blue-800">Comissões Totais</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-600">R$ {stats.pendingCommissions.toFixed(2)}</div>
          <div className="text-sm text-yellow-800">Pendentes</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">{stats.referrals}</div>
          <div className="text-sm text-green-800">Indicações</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">{stats.conversionRate}%</div>
          <div className="text-sm text-purple-800">Conversão</div>
        </div>
      </div>

      <button
        onClick={onGenerateLink}
        className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
      >
        Gerar Link de Indicação
      </button>
    </div>
  );
}
