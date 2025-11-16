import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Grid Background with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"
      />
      
      {/* Subtle Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />

      <motion.div 
        className="container mx-auto px-6 relative z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span 
          className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-mono text-neutral-400 mb-6 bg-white/5 backdrop-blur-md"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          SYSTEM_READY: ONLINE
        </motion.span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6">
          INTELIGÊNCIA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-500 to-neutral-800">
            ALÉM DO CÓDIGO.
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl mb-10 font-light leading-relaxed">
          Transformamos negócios através de Agentes de IA, Robótica e Soluções Digitais de Alta Performance.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black px-8 py-4 rounded-none font-bold tracking-widest hover:bg-neutral-200 transition-colors uppercase text-sm"
          >
            Nossos Serviços
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-none font-bold tracking-widest hover:bg-white/10 transition-colors uppercase text-sm"
          >
            Fale Conosco
          </button>
        </div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
