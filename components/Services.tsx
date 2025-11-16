import React from 'react';
import { SERVICES } from '../constants';
import { Bot, Smartphone, BarChart, GraduationCap } from 'lucide-react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';

const iconMap: { [key: string]: React.ElementType } = {
  Bot,
  Smartphone,
  BarChart,
  GraduationCap
};

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-neutral-950 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Nossos Serviços</h2>
          <div className="h-1 w-20 bg-white mb-4"></div>
          <p className="text-neutral-400 max-w-2xl">
            Expertise técnica avançada para resolver problemas complexos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Bot;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="mb-6 text-white p-3 bg-neutral-800 w-fit rounded-lg group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <Icon size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
