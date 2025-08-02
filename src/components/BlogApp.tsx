import React, { useState } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navbar from './Navbar';
import BlogHero from './BlogHero';
import BlogContent from './BlogContent';
import Testimonials from './Testimonials';
import Plans from './Plans';
import FAQ from './FAQ';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import CadastroModal from './CadastroModal';

function BlogApp() {
  const [isCadastroModalOpen, setIsCadastroModalOpen] = useState(false);

  const handleDirectRedirect = () => {
    setIsCadastroModalOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="font-sans text-gray-800 overflow-x-hidden bg-white min-h-screen">
        <Navbar />
        
        {/* 1. HERO ESTILO BLOG - Título como artigo investigativo */}
        <BlogHero onRedirect={handleDirectRedirect} />
        
        {/* 2. CONTEÚDO PRINCIPAL - Formato de artigo com CTAs estratégicos */}
        <BlogContent onRedirect={handleDirectRedirect} />
        
        {/* 3. PROVA SOCIAL - Depoimentos integrados naturalmente */}
        <Testimonials />
        
        {/* 4. OFERTA - Apresentada como "solução descoberta" */}
        <Plans onRedirect={handleDirectRedirect} />
        
        {/* 5. FAQ - Dúvidas finais */}
        <FAQ />
        
        {/* 6. FOOTER */}
        <Footer />
        
        {/* WhatsApp Button */}
        <WhatsAppButton />
        
        {/* Cadastro Modal */}
        <CadastroModal 
          isOpen={isCadastroModalOpen} 
          onClose={() => setIsCadastroModalOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
}

export default BlogApp;