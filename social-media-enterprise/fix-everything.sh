#!/bin/bash

echo "🚀 INICIANDO CORREÇÃO COMPLETA DO PROJETO..."

# 1. Corrigir package.json da home
cd ~
echo "📦 Corrigindo package.json da home..."
cat > package.json << 'JSONEOF'
{
  "name": "home-config",
  "version": "1.0.0", 
  "description": "Configurações do usuário",
  "private": true
}
JSONEOF

# 2. Ir para o projeto
cd ~/social-media-enterprise
echo "📁 Entrando no projeto social-media-enterprise..."

# 3. Recriar estrutura básica
echo "🏗️ Recriando estrutura do projeto..."
mkdir -p apps/web/src/app
mkdir -p packages/ui/src
mkdir -p packages/affiliate/src/components

# 4. Recriar package.json raiz CORRETO
echo "📄 Criando package.json raiz..."
cat > package.json << 'JSONEOF'
{
  "name": "social-media-enterprise",
  "version": "1.0.0",
  "private": true,
  "packageManager": "npm@9.8.1",
  "workspaces": [
    "apps/*",
    "packages/*",
    "services/*"
  ],
  "scripts": {
    "dev": "turbo run dev --parallel",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "clean": "turbo run clean"
  },
  "devDependencies": {
    "turbo": "^2.6.1",
    "typescript": "^5.3.3"
  }
}
JSONEOF

# 5. Recriar turbo.json
echo "⚡ Criando turbo.json..."
cat > turbo.json << 'JSONEOF'
{
  "\$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^build"]
    }
  }
}
JSONEOF

# 6. CONFIGURAR PACOTE UI CORRETAMENTE
echo "🎨 Configurando pacote UI..."
cd packages/ui

# TSConfig correto
cat > tsconfig.json << 'JSONEOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": false,
    "jsx": "react-jsx",
    "declaration": true,
    "outDir": "./dist",
    "strict": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
JSONEOF

# Package.json correto
cat > package.json << 'JSONEOF'
{
  "name": "@enterprise/ui",
  "version": "1.0.0",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch"
  },
  "dependencies": {
    "react": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.37",
    "typescript": "^5.3.3"
  }
}
JSONEOF

# Button component SIMPLIFICADO e FUNCIONAL
cat > src/button.tsx << 'TSEOF'
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = ''
}) => {
  return (
    <button
      className={\`bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors \${disabled ? 'opacity-50 cursor-not-allowed' : ''} \${className}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
TSEOF

# Index do UI
cat > src/index.ts << 'TSEOF'
export { Button } from './button';
TSEOF

cd ../..

# 7. CONFIGURAR PACOTE AFFILIATE CORRETAMENTE
echo "💰 Configurando pacote Affiliate..."
cd packages/affiliate

# TSConfig
cat > tsconfig.json << 'JSONEOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": false,
    "jsx": "react-jsx",
    "declaration": true,
    "outDir": "./dist",
    "strict": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
JSONEOF

# Package.json
cat > package.json << 'JSONEOF'
{
  "name": "@enterprise/affiliate",
  "version": "1.0.0",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch"
  },
  "dependencies": {
    "react": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.37",
    "typescript": "^5.3.3"
  }
}
JSONEOF

# Componente Affiliate SIMPLIFICADO
cat > src/components/affiliate-dashboard.tsx << 'TSEOF'
import React from 'react';

export interface AffiliateStats {
  totalCommissions: number;
  pendingCommissions: number;
  referrals: number;
  conversionRate: number;
}

interface AffiliateDashboardProps {
  stats: AffiliateStats;
  onGenerateLink: () => void;
}

export const AffiliateDashboard: React.FC<AffiliateDashboardProps> = ({
  stats,
  onGenerateLink
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Dashboard de Afiliados</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-600">Comissões Totais</p>
          <p className="text-2xl font-bold">R$ {stats.totalCommissions.toFixed(2)}</p>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-sm text-yellow-600">Comissões Pendentes</p>
          <p className="text-2xl font-bold">R$ {stats.pendingCommissions.toFixed(2)}</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-600">Indicações</p>
          <p className="text-2xl font-bold">{stats.referrals}</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-purple-600">Taxa de Conversão</p>
          <p className="text-2xl font-bold">{stats.conversionRate}%</p>
        </div>
      </div>
      
      <button 
        onClick={onGenerateLink} 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Gerar Link de Indicação
      </button>
    </div>
  );
};
TSEOF

# Index do Affiliate
cat > src/index.ts << 'TSEOF'
export { AffiliateDashboard, type AffiliateStats } from './components/affiliate-dashboard';
TSEOF

cd ../..

# 8. CONFIGURAR APP WEB CORRETAMENTE
echo "🌐 Configurando app Web..."
cd apps/web

# Package.json SIMPLIFICADO
cat > package.json << 'JSONEOF'
{
  "name": "web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "14.0.3"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "typescript": "^5.3.3",
    "eslint": "^8.53.0",
    "eslint-config-next": "14.0.3"
  }
}
JSONEOF

# Next config
cat > next.config.js << 'JSEOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [],
}
module.exports = nextConfig
JSEOF

# TSConfig
cat > tsconfig.json << 'JSONEOF'
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
JSONEOF

# Layout básico
cat > src/app/layout.tsx << 'TSEOF'
export const metadata = {
  title: 'Social Media Enterprise',
  description: 'Plataforma de monetização para mídias sociais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
TSEOF

# Página inicial SIMPLES
cat > src/app/page.tsx << 'TSEOF'
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          🚀 Social Media Enterprise
        </h1>
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
TSEOF

cd ../..

echo "✅ ESTRUTURA CRIADA COM SUCESSO!"
echo ""
echo "📊 VERIFICAÇÃO:"
echo "📦 Package.json raiz: $(test -f package.json && echo '✅ OK' || echo '❌ FALTA')"
echo "🎨 UI Button: $(test -f packages/ui/src/button.tsx && echo '✅ OK' || echo '❌ FALTA')"
echo "💰 Affiliate Dashboard: $(test -f packages/affiliate/src/components/affiliate-dashboard.tsx && echo '✅ OK' || echo '❌ FALTA')"
echo "🌐 Web Page: $(test -f apps/web/src/app/page.tsx && echo '✅ OK' || echo '❌ FALTA')"
echo ""
echo "🚀 PRÓXIMOS PASSOS:"
echo "1. npm install"
echo "2. npm run build"
echo "3. npm run dev"
