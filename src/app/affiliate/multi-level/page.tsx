export default function MultiLevelAffiliatePage() {
  const commissionLevels = [
    { level: 1, percentage: 10, totalCommissions: 5000, affiliates: 50 },
    { level: 2, percentage: 5, totalCommissions: 2500, affiliates: 25 },
    { level: 3, percentage: 3, totalCommissions: 1500, affiliates: 15 },
    { level: 4, percentage: 2, totalCommissions: 1000, affiliates: 10 },
    { level: 5, percentage: 1, totalCommissions: 500, affiliates: 5 },
  ]

  const affiliates = [
    { id: '1', name: 'João Silva', email: 'joao@email.com', level: 1, totalSales: 10000, commissions: 1000, joinDate: '2023-01-15' },
    { id: '2', name: 'Maria Santos', email: 'maria@email.com', level: 2, totalSales: 5000, commissions: 250, joinDate: '2023-02-20' },
    { id: '3', name: 'Pedro Costa', email: 'pedro@email.com', level: 1, totalSales: 7500, commissions: 750, joinDate: '2023-03-10' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Afiliados Multi-Nível</h1>
          <p className="text-gray-600 mt-2">Gerencie sua rede de afiliados e comissões em múltiplos níveis</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Comissões por Nível</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {commissionLevels.map((level) => (
              <div key={level.level} className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <h3 className="text-lg font-bold text-gray-900">Nível {level.level}</h3>
                <p className="text-2xl font-bold text-blue-600 mt-2">{level.percentage}%</p>
                <p className="text-sm text-gray-600 mt-1">R$ {level.totalCommissions}</p>
                <p className="text-sm text-gray-600">{level.affiliates} afiliados</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Rede de Afiliados</h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Afiliado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nível</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vendas Totais</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Comissões</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data de Entrada</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {affiliates.map((affiliate) => (
                  <tr key={affiliate.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{affiliate.name}</div>
                      <div className="text-sm text-gray-500">{affiliate.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Nível {affiliate.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      R$ {affiliate.totalSales}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      R$ {affiliate.commissions}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(affiliate.joinDate).toLocaleDateString('pt-BR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
