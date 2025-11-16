"use client";

import { Card } from './Card';
import { useAffiliate } from '@/hooks/useAffiliate';

export function AffiliateStats() {
  const { referrals, commission } = useAffiliate();

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">Suas Estatísticas</h2>
      <div className="space-y-4">
        <div>
          <p className="text-gray-600">Total de Referrals</p>
          <p className="text-2xl font-bold">{referrals}</p>
        </div>
        <div>
          <p className="text-gray-600">Comissão Total</p>
          <p className="text-2xl font-bold">R$ {commission.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
        </div>
      </div>
    </Card>
  );
}
