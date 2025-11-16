import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the API client
const apiKey = process.env.API_KEY || ''; 
// Note: In a real production app, you'd handle the missing key more gracefully or via a backend proxy.
// Since we cannot ask user for key in UI, we assume env is set or we fail gracefully.

let ai: GoogleGenAI | null = null;

try {
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI", error);
}

let chatSession: Chat | null = null;

export const initializeChat = async () => {
  if (!ai) return null;
  
  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `Você é o assistente virtual da LogicInfo, uma empresa de tecnologia especializada em I.A., robótica e desenvolvimento de software.
        Seu tom deve ser profissional, futurista, conciso e prestativo.
        Responda a perguntas sobre os serviços da LogicInfo: Agentes de IA, Desenvolvimento de Apps, Data Science, Treinamentos e Soluções Prontas (SmartPOS, Vendas IA, etc).
        Se perguntarem preços, peça para entrarem em contato pelo formulário no site.
        Mantenha as respostas curtas (máximo 3 parágrafos).`,
      },
    });
    return chatSession;
  } catch (e) {
    console.error("Error creating chat session", e);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) return "Configuração de API não encontrada. Por favor, verifique as variáveis de ambiente.";
  
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "Desculpe, o sistema de I.A. está temporariamente indisponível.";
  }

  try {
    const result: GenerateContentResponse = await chatSession.sendMessage({ message });
    return result.text || "Não consegui processar sua resposta.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Ocorreu um erro ao conectar com a inteligência artificial.";
  }
};
