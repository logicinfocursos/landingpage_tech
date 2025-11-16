import React from 'react';
import { COMPANY_NAME } from '../constants';
import { Terminal, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-neutral-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white text-black p-1 rounded-sm">
                <Terminal size={24} />
              </div>
              <span className="font-mono text-xl font-bold tracking-tighter text-white">
                {COMPANY_NAME.toLowerCase()}_
              </span>
            </div>
            <p className="text-neutral-500 max-w-sm font-light">
              Redefinindo o futuro dos negócios através da inteligência artificial e robótica avançada.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Mapa</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Soluções</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900">
          <p className="text-neutral-600 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} LogicInfo. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
