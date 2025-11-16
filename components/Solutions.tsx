import React from 'react';
import { SOLUTIONS } from '../constants';
import { SectionId } from '../types';
import { Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Solutions: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id={SectionId.SOLUTIONS} className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Background Text */}
      <motion.div 
        style={{ x }}
        className="absolute top-20 left-0 whitespace-nowrap text-[200px] font-black text-white/5 pointer-events-none select-none font-mono"
      >
        SOLUTIONS AUTOMATION AI ROBOTICS
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-right">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Soluções Prontas</h2>
          <div className="h-1 w-20 bg-white mb-4 ml-auto"></div>
          <p className="text-neutral-400 max-w-2xl ml-auto">
            Produtos desenvolvidos para acelerar resultados imediatos.
          </p>
        </div>

        <div className="space-y-20">
          {SOLUTIONS.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row gap-12 items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Abstract Visual Representation */}
              <div className="w-full md:w-1/2 h-80 bg-neutral-900 relative border border-neutral-800 overflow-hidden group">
                 {/* This would ideally be a specific product screenshot, using geometric CSS art here for "Tech Vibe" */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#333,transparent_70%)]" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full group-hover:scale-125 transition-transform duration-700 delay-75" />
                 <div className="absolute top-6 right-6 font-mono text-xs text-neutral-500">
                   ID: {solution.id.toUpperCase()}
                 </div>
                 <div className="absolute bottom-6 left-6 font-mono text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                   {String(index + 1).padStart(2, '0')}
                 </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="text-xs font-mono text-neutral-500 mb-2 uppercase tracking-wider">
                  {solution.category}
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">{solution.title}</h3>
                <p className="text-neutral-300 mb-8 text-lg font-light">
                  {solution.description}
                </p>
                <ul className="space-y-3">
                  {solution.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-neutral-400">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
