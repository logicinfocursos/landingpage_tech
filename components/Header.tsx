import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { SectionId } from '../types';
import { COMPANY_NAME } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Serviços', id: SectionId.SERVICES },
    { label: 'Soluções', id: SectionId.SOLUTIONS },
    { label: 'Blog', id: SectionId.BLOG },
    { label: 'Contato', id: SectionId.CONTACT },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="bg-white text-black p-1 rounded-sm group-hover:scale-110 transition-transform">
            <Terminal size={24} />
          </div>
          <span className="font-mono text-xl font-bold tracking-tighter text-white">
            {COMPANY_NAME.toLowerCase()}
            <span className="animate-pulse">_</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors uppercase tracking-widest relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-black z-30 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '70px' }} // Below header
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="text-2xl font-light text-white hover:text-neutral-400 uppercase tracking-widest"
          >
            {link.label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
