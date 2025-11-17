export default function AutomationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Automação de Marketing</h1>
        <p className="text-gray-600 mt-2">Gerencie seus workflows de automação de marketing</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Workflows Ativos</h3>
            <p className="text-gray-600 mt-2">12 workflows em execução</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Estatísticas</h3>
            <p className="text-gray-600 mt-2">94% taxa de sucesso</p>
          </div>
        </div>
      </div>
    </div>
  )
}
