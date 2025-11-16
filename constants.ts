import { ServiceItem, SolutionItem, BlogPost } from './types';

export const COMPANY_NAME = "LogicInfo";

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-agents',
    title: 'Agentes de I.A. & Robótica',
    description: 'Desenvolvimento de agentes autônomos e integração robótica para automatizar processos físicos e digitais complexos.',
    icon: 'Bot'
  },
  {
    id: 'app-dev',
    title: 'Desenvolvimento de Apps',
    description: 'Criação de ecossistemas digitais completos: Web, Mobile (iOS/Android) e APIs escaláveis de alta performance.',
    icon: 'Smartphone'
  },
  {
    id: 'data-science',
    title: 'Analytics & Data Science',
    description: 'Transformação de dados brutos em inteligência de negócio através de machine learning e visualização avançada.',
    icon: 'BarChart'
  },
  {
    id: 'training',
    title: 'Treinamentos Corporativos',
    description: 'Capacitação tecnológica para equipes, focada em novas tecnologias, segurança e eficiência operacional.',
    icon: 'GraduationCap'
  }
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'sales-ai',
    title: 'Equipe de Vendas I.A.',
    category: 'Automação',
    description: 'Agentes inteligentes que prospectam, qualificam e dão suporte 24/7, aumentando a conversão sem aumentar o headcount.',
    features: ['Atendimento 24/7', 'Integração CRM', 'Aprendizado Contínuo']
  },
  {
    id: 'smart-pos',
    title: 'SmartPOS & Gestão',
    category: 'Varejo',
    description: 'Sistema completo para restaurantes e varejo com cardápio digital, pedidos na mesa e gestão financeira integrada.',
    features: ['Cardápio QR Code', 'Controle de Estoque', 'Relatórios em Tempo Real']
  },
  {
    id: 'omni-comm',
    title: 'OmniChat Bot',
    category: 'Atendimento',
    description: 'Automação de atendimento via Voz e WhatsApp. Entenda áudios e textos naturais dos seus clientes.',
    features: ['Processamento de Linguagem Natural', 'Transbordo Humano', 'Whatsapp API Oficial']
  },
  {
    id: 'condo-manager',
    title: 'Gestão de Condomínios',
    category: 'Administração',
    description: 'Plataforma para administração de condomínios, reservas de áreas comuns, portaria virtual e comunicação.',
    features: ['App Morador', 'Controle de Acesso', 'Financeiro Automatizado']
  },
  {
    id: 'ecommerce-pro',
    title: 'E-commerce Full',
    category: 'Vendas',
    description: 'Loja virtual completa, otimizada para SEO, com gestão de estoque consignado e integração logística.',
    features: ['Checkout Transparente', 'Gestão de Consignado', 'Dashboard de Vendas']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'O Futuro dos Agentes Autônomos',
    excerpt: 'Como a próxima geração de I.A. não vai apenas responder perguntas, mas executar tarefas complexas por você.',
    date: '12 Out, 2023',
    readTime: '5 min',
    category: 'Inteligência Artificial',
    image: 'https://picsum.photos/600/400?grayscale'
  },
  {
    id: '2',
    title: 'Automação Robótica na Indústria 4.0',
    excerpt: 'Estudo de caso sobre como reduzimos o tempo de produção em 40% utilizando braços robóticos colaborativos.',
    date: '28 Set, 2023',
    readTime: '8 min',
    category: 'Robótica',
    image: 'https://picsum.photos/600/401?grayscale'
  },
  {
    id: '3',
    title: 'Por que sua empresa precisa de um Data Lake',
    excerpt: 'Centralize seus dados para permitir análises preditivas que realmente impactam o ROI.',
    date: '15 Set, 2023',
    readTime: '6 min',
    category: 'Data Science',
    image: 'https://picsum.photos/600/402?grayscale'
  }
];
