import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';

const App: React.FC = () => {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <Header />
      
      <Hero />
      <Services />
      <Solutions />
      <Blog />
      <Contact />
      
      <Footer />
      
      {/* Floating Elements */}
      <AIChatbot />
    </main>
  );
};

export default App;
