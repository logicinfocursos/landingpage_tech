import React from 'react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Vamos construir o futuro.</h2>
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              Tem um projeto ambicioso? Precisa de automação? 
              Entre em contato para agendar uma consultoria técnica.
            </p>
            
            <div className="space-y-4 font-mono text-sm">
              <p className="flex items-center gap-4">
                <span className="w-20 font-bold opacity-50">EMAIL</span>
                <span>contato@logicinfo.com</span>
              </p>
              <p className="flex items-center gap-4">
                <span className="w-20 font-bold opacity-50">PHONE</span>
                <span>+55 11 99999-9999</span>
              </p>
              <p className="flex items-center gap-4">
                <span className="w-20 font-bold opacity-50">HQ</span>
                <span>São Paulo, SP - Brasil</span>
              </p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider opacity-70">Nome</label>
                <input type="text" className="w-full bg-neutral-100 border-b-2 border-neutral-300 p-3 focus:border-black focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider opacity-70">Email</label>
                <input type="email" className="w-full bg-neutral-100 border-b-2 border-neutral-300 p-3 focus:border-black focus:outline-none transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider opacity-70">Mensagem</label>
              <textarea rows={4} className="w-full bg-neutral-100 border-b-2 border-neutral-300 p-3 focus:border-black focus:outline-none transition-colors"></textarea>
            </div>
            <button type="submit" className="bg-black text-white px-10 py-4 font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
