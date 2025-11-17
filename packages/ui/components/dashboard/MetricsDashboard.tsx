import React from 'react';

export const MetricsDashboard: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📈 Métricas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="font-semibold text-gray-800">Seguidores</p>
          <p className="text-green-600 text-2xl font-bold">124.5K</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="font-semibold text-gray-800">Engajamento</p>
          <p className="text-blue-600 text-2xl font-bold">8.5%</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
          <p className="font-semibold text-gray-800">Crescimento</p>
          <p className="text-purple-600 text-2xl font-bold">+12%</p>
        </div>
      </div>
    </div>
  );
};
