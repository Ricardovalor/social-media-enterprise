"use client";

import { AffiliateLink } from '@/components/AffiliateLink';
import { AffiliateStats } from '@/components/AffiliateStats';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function AffiliateDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard do Afiliado</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:col-span-2">
            <AffiliateLink />
          </div>
          <AffiliateStats />
          <Card className="lg:col-span-3">
            <h2 className="text-xl font-semibold mb-4">Histórico de Comissões</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">Venda #1234</p>
                  <p className="text-sm text-gray-600">15 Nov 2023</p>
                </div>
                <p className="text-green-600 font-bold">+ R$ 50,00</p>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">Venda #1235</p>
                  <p className="text-sm text-gray-600">14 Nov 2023</p>
                </div>
                <p className="text-green-600 font-bold">+ R$ 75,00</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
