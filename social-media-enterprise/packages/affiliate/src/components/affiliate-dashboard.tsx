import React from 'react';

export interface AffiliateStats {
  totalCommissions: number;
  pendingCommissions: number;
  referrals: number;
  conversionRate: number;
}

interface AffiliateDashboardProps {
  stats: AffiliateStats;
  onGenerateLink: () => void;
}

export const AffiliateDashboard: React.FC<AffiliateDashboardProps> = ({
  stats,
  onGenerateLink
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Dashboard de Afiliados</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-600">Comissões Totais</p>
          <p className="text-2xl font-bold">R$ {stats.totalCommissions.toFixed(2)}</p>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-sm text-yellow-600">Comissões Pendentes</p>
          <p className="text-2xl font-bold">R$ {stats.pendingCommissions.toFixed(2)}</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-600">Indicações</p>
          <p className="text-2xl font-bold">{stats.referrals}</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-purple-600">Taxa de Conversão</p>
          <p className="text-2xl font-bold">{stats.conversionRate}%</p>
        </div>
      </div>
      
      <button 
        onClick={onGenerateLink} 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Gerar Link de Indicação
      </button>
    </div>
  );
};
