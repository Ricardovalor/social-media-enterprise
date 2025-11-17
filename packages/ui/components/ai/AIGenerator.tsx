import React, { useState } from 'react';

export const AIGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const generateContent = async () => {
    setLoading(true);
    // Simular geração de conteúdo
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    alert('Conteúdo gerado com sucesso!');
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🤖 Gerador de Conteúdo IA</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Descreva o conteúdo que deseja gerar..."
        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
        rows={3}
      />
      <button
        onClick={generateContent}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Gerando...' : 'Gerar Conteúdo'}
      </button>
    </div>
  );
};
