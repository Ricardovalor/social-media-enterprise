"use client";

import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function ComponentsTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Teste de Componentes (Local)</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold mb-4">Card Básico</h2>
            <p className="text-gray-600">
              Este é um exemplo de card usando o componente Card local.
            </p>
            <Button>Botão no Card</Button>
          </Card>
          <Card className="bg-blue-50 border border-blue-200">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Card com Estilo Customizado</h2>
            <p className="text-blue-700">
              Cards podem receber classes customizadas via className.
            </p>
            <Button variant="secondary">Botão Secundário</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
