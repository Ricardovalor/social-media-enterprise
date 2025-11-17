import React from 'react';

export const AnalyticsDashboard: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Analytics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600">Visualizações</p>
          <p className="text-2xl font-bold text-blue-600">45.2K</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-600">Engajamento</p>
          <p className="text-2xl font-bold text-green-600">12.5%</p>
        </div>
      </div>
    </div>
  );
};
