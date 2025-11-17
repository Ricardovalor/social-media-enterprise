import React from 'react';
import { AffiliateStats } from '../types';

interface AdvancedAffiliateDashboardProps {
  stats: AffiliateStats;
}

export const AdvancedAffiliateDashboard: React.FC<AdvancedAffiliateDashboardProps> = ({ stats }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Dashboard de Afiliados</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded">
          <p className="text-lg font-semibold">Comissões Totais</p>
          <p className="text-2xl">R$ {stats.totalCommissions}</p>
        </div>
        <div className="p-4 bg-green-50 rounded">
          <p className="text-lg font-semibold">Comissões Pendentes</p>
          <p className="text-2xl">R$ {stats.pendingCommissions}</p>
        </div>
        <div className="p-4 bg-yellow-50 rounded">
          <p className="text-lg font-semibold">Referências</p>
          <p className="text-2xl">{stats.referrals}</p>
        </div>
        <div className="p-4 bg-purple-50 rounded">
          <p className="text-lg font-semibold">Taxa de Conversão</p>
          <p className="text-2xl">{stats.conversionRate}%</p>
        </div>
      </div>
    </div>
  );
};
