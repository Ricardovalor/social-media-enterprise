export default function ComponentsTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Teste de Componentes</h1>
          <p className="text-gray-600 mt-2">Página para testar todos os componentes do sistema</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Componentes de Automação</h3>
            <p className="text-gray-600">Teste dos componentes de automação e workflows</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Componentes de Afiliados</h3>
            <p className="text-gray-600">Teste dos componentes do sistema de afiliados</p>
          </div>
        </div>
      </div>
    </div>
  )
}
