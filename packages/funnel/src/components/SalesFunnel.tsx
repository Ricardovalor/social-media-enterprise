"use client";

export function SalesFunnel() {
  const stages = [
    { name: 'Leads', value: 1000 },
    { name: 'Interessados', value: 500 },
    { name: 'Clientes', value: 100 },
    { name: 'Recomendam', value: 50 }
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-6">🔄 Funil de Vendas</h3>
      <div className="space-y-4">
        {stages.map((stage, index) => (
          <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
            <span className="font-medium">{stage.name}</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {stage.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
