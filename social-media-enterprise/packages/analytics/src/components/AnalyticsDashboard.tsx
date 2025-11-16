"use client";

export function AnalyticsDashboard() {
  const metrics = [
    { name: 'Engajamento', value: '15.2%', change: '+2.1%' },
    { name: 'Crescimento', value: '1.2K', change: '+15%' },
    { name: 'Conversão', value: '8.7%', change: '+3.2%' },
    { name: 'Receita', value: 'R$ 3.2K', change: '+12%' }
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-6">📊 Analytics</h3>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
            <div className="text-sm text-gray-600">{metric.name}</div>
            <div className="text-sm text-green-600">{metric.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
