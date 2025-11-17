import { useState } from 'react';

export const useAIGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedContent, setGeneratedContent] = useState('');

  const generateContent = async (prompt: string, platform?: string, tone?: string) => {
    setLoading(true);
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const content = "Conteúdo gerado para " + platform + " com tom " + tone + ": " + prompt;
      setGeneratedContent(content);
    } catch (err) {
      setError('Erro ao gerar conteúdo');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    generatedContent,
    generateContent,
  };
};
