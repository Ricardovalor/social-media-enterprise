"use client";

import { useState } from 'react';
import { AffiliateStats } from '../types';

interface AdvancedAffiliateDashboardProps {
  stats: AffiliateStats;
  onGenerateLink: () => void;
}

export function AdvancedAffiliateDashboard({ stats, onGenerateLink }: AdvancedAffiliateDashboardProps) {
  const [referralCode, setReferralCode] = useState('RICARDO123');
  const [activeTab, setActiveTab] = useState('overview');
  
  const copyReferralLink = () => {
    const link = `https://empresa.com/afiliado/${referralCode}`;
    navigator.clipboard.writeText(link);
    alert('Link copiado para a área de transferência!');
  };

  const referralHistory = [
    { name: 'João Silva', date: '2024-01-15', status: 'Ativo', commission: 'R$ 150,00' },
    { name: 'Maria Santos', date: '2024-01-10', status: 'Pendente', commission: 'R$ 75,00' },
    { name: 'Pedro Costa', date: '2024-01-05', status: 'Ativo', commission: 'R$ 200,00' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header com Abas */}
      <div className="border-b">
        <div className="flex space-x-1 bg-gray-50 p-4">
          {['overview', 'links', 'referrals', 'payouts'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab === 'overview' && '📊 Visão Geral'}
              {tab === 'links' && '🔗 Meus Links'}
              {tab === 'referrals' && '👥 Indicações'}
              {tab === 'payouts' && '💰 Pagamentos'}
            </button>
          ))}
        </div>
      </div>

      {/* Conteúdo das Abas */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Métricas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">R$ {stats.totalCommissions.toFixed(2)}</div>
                <div className="text-sm opacity-90">Comissões Totais</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">R$ {stats.pendingCommissions.toFixed(2)}</div>
                <div className="text-sm opacity-90">Pendentes</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">{stats.referrals}</div>
                <div className="text-sm opacity-90">Indicações</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">{stats.conversionRate}%</div>
                <div className="text-sm opacity-90">Conversão</div>
              </div>
            </div>

            {/* Link de Afiliado */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3 flex items-center">
                🔗 Seu Link de Afiliado
              </h3>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={`https://empresa.com/afiliado/${referralCode}`}
                  readOnly
                  className="flex-1 p-3 border border-gray-300 rounded-lg bg-white font-mono text-sm"
                />
                <button 
                  onClick={copyReferralLink}
                  className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  📋 Copiar
                </button>
              </div>
            </div>

            {/* Ações Rápidas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                <span>📊</span>
                <span>Ver Relatórios</span>
              </button>
              <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <span>👥</span>
                <span>Gerenciar Indicações</span>
              </button>
              <button className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                <span>💰</span>
                <span>Solicitar Saque</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'referrals' && (
          <div>
            <h3 className="font-semibold mb-4">👥 Histórico de Indicações</h3>
            <div className="space-y-3">
              {referralHistory.map((referral, index) => (
                <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">{referral.name}</div>
                    <div className="text-sm text-gray-500">{referral.date}</div>
                  </div>
                  <div className="text-right">
                    <div className={`font-semibold ${
                      referral.status === 'Ativo' ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {referral.status}
                    </div>
                    <div className="text-sm text-gray-500">{referral.commission}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
