import React from 'react';

export const MonetizationDashboard: React.FC = () => {
  const revenueData = [
    { platform: 'TikTok', amount: 3247, growth: '+15%' },
    { platform: 'YouTube', amount: 1876, growth: '+8%' },
    { platform: 'Instagram', amount: 5420, growth: '+22%' }
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">💰 Monetização</h2>
      <div className="space-y-3">
        {revenueData.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="font-semibold">{item.platform}</span>
            <div className="text-right">
              <p className="text-green-600 font-bold">R$ {item.amount.toLocaleString()}</p>
              <p className="text-green-500 text-sm">{item.growth}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
