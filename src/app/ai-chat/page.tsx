"use client";

import { useState } from "react";

export default function AIChatPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;
    
    const userMessage = { role: "user", content };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simular resposta da IA
    setTimeout(() => {
      const aiResponse = {
        role: "assistant", 
        content: `Entendi seu pedido sobre: "${content}". Vou ajudar você a criar conteúdo viral! 🚀`
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Assistente de IA para Redes Sociais</h1>
        <p className="text-muted-foreground">
          Gere conteúdo viral, hooks engajadores e estratégias de monetização
        </p>
      </div>
      
      <div className="border rounded-lg h-[600px] flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              <p>Comece uma conversa com a IA...</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div key={index} className={`flex mb-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg px-4 py-2 max-w-[80%] ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {message.content}
                </div>
              </div>
            ))
          )}
        </div>
        <div className="border-t p-4">
          <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); }} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 border rounded-lg px-3 py-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
