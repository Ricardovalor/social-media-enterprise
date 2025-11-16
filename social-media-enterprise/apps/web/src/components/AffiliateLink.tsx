"use client";

import { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { useAffiliate } from '@/hooks/useAffiliate';

export function AffiliateLink() {
  const [copied, setCopied] = useState(false);
  const { link } = useAffiliate();

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">Seu Link de Afiliado</h2>
      <p className="text-gray-600 mb-4">
        Compartilhe este link e ganhe comissões por cada venda.
      </p>
      <div className="flex space-x-2">
        <input 
          type="text" 
          readOnly 
          value={link} 
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-gray-600"
        />
        <Button onClick={copyToClipboard}>
          {copied ? 'Copiado!' : 'Copiar'}
        </Button>
      </div>
    </Card>
  );
}
