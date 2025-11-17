import React, { useState } from 'react';

export const SmartScheduler: React.FC = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['tiktok', 'instagram']);
  const [scheduleTime, setScheduleTime] = useState('');
  const [content, setContent] = useState('');

  const platforms = [
    { id: 'tiktok', name: 'TikTok', icon: '🎵' },
    { id: 'instagram', name: 'Instagram', icon: '📸' },
    { id: 'youtube', name: 'YouTube Shorts', icon: '🎥' },
    { id: 'twitter', name: 'Twitter', icon: '🐦' }
  ];

  const bestTimes = [
    { time: '09:00', description: '🌅 Início do dia' },
    { time: '12:00', description: '🍽️ Horário de almoço' },
    { time: '18:00', description: '🏠 Fim do dia' },
    { time: '21:00', description: '🌙 Noite' }
  ];

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platformId)
        ? prev.filter(p => p !== platformId)
        : [...prev, platformId]
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">⏰ Agendamento Inteligente</h2>
      
      {/* Seleção de Plataformas */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Plataformas:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {platforms.map(platform => (
            <button
              key={platform.id}
              onClick={() => togglePlatform(platform.id)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                selectedPlatforms.includes(platform.id)
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300'
              }`}
            >
              <div className="text-xl mb-1">{platform.icon}</div>
              <div className="text-sm font-medium">{platform.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Horários Recomendados */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">⏱️ Horários Recomendados:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {bestTimes.map((time, index) => (
            <button
              key={index}
              onClick={() => setScheduleTime(time.time)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                scheduleTime === time.time
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300'
              }`}
            >
              <div className="font-bold text-lg">{time.time}</div>
              <div className="text-xs">{time.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Input de Conteúdo */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-3 text-gray-700">
          📝 Conteúdo para Publicar:
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Digite o conteúdo que deseja agendar..."
          rows={4}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        />
      </div>

      {/* Ações */}
      <div className="flex gap-3">
        <button
          disabled={!content || selectedPlatforms.length === 0 || !scheduleTime}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          🚀 Agendar Publicação
        </button>
        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
          💾 Salvar Rascunho
        </button>
      </div>

      {/* Resumo */}
      {selectedPlatforms.length > 0 && scheduleTime && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800 text-sm">
            📋 <strong>Resumo:</strong> Publicar em {selectedPlatforms.length} plataforma(s) 
            às {scheduleTime} - {content.length} caracteres
          </p>
        </div>
      )}
    </div>
  );
};
