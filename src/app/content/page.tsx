"use client";

import { AIGenerator } from "../../../packages/ui/components/ai/AIGenerator";

export default function ContentPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Gerador de Conteúdo com IA</h1>
        <p className="text-muted-foreground">
          Crie conteúdo viral para suas redes sociais com a ajuda da IA
        </p>
      </div>
      
      <AIGenerator />
    </div>
  );
}
