import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          🚀 Social Media Enterprise
        </h1>
        
        <div className="mb-8">
          <Link 
            href="/affiliate" 
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            🤑 Acessar Programa de Afiliados
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Sistema de Monetização</h2>
          <p className="text-gray-600 mb-4">
            Plataforma completa para geração de renda através de mídias sociais.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">💰 Afiliados</h3>
              <p>Comissão de 30% em vendas</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">🤖 IA</h3>
              <p>Automação inteligente</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">📊 Analytics</h3>
              <p>Métricas em tempo real</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
