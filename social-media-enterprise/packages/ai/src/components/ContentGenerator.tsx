"use client";

import { useState } from 'react';

export function ContentGenerator() {
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');

  const generateContent = () => {
    if (!topic.trim()) return;
    setContent(`Conteúdo gerado para: ${topic} - [Sistema IA em desenvolvimento]`);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">🤖 Gerador de Conteúdo IA</h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Digite o tópico..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
        <button
          onClick={generateContent}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full"
        >
          Gerar Conteúdo
        </button>
        {content && (
          <div className="p-4 bg-gray-50 rounded-lg">
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
}
