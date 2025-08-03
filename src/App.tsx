import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Differentials from './components/Differentials';
import About from './components/About';
import TrustSection from './components/TrustSection';
import Testimonials from './components/Testimonials';
import WrittenTestimonials from './components/WrittenTestimonials';
import MembershipBenefits from './components/MembershipBenefits';
import ObjectionsSection from './components/ObjectionsSection';
import Plans from './components/Plans';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import WhatsAppButton from './components/WhatsAppButton';
import CadastroModal from './components/CadastroModal';

function App() {
  const [isCadastroModalOpen, setIsCadastroModalOpen] = useState(false);

  const handleDirectRedirect = () => {
    setIsCadastroModalOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="font-sans text-gray-800 overflow-x-hidden bg-white min-h-screen">
        <Navbar />
        {/* 1. HERO - Problema + Agitação */}
        <Hero onRedirect={handleDirectRedirect} />
        
        {/* 2. BENEFITS - Apresenta a solução imediatamente */}
        <Benefits onRedirect={handleDirectRedirect} />
        
        {/* 3. DIFFERENTIALS - Explica por que escolher vocês */}
        <Differentials onRedirect={handleDirectRedirect} />
        
        {/* 4. ABOUT + TRUST - Constrói credibilidade (juntos para maior impacto) */}
        <About />
        <TrustSection onRedirect={handleDirectRedirect} />
        
        {/* 5. TESTIMONIALS + WRITTEN - Prova social concentrada (mais impacto) */}
        <Testimonials />
        <WrittenTestimonials onRedirect={handleDirectRedirect} />
        
        {/* 6. MEMBERSHIP BENEFITS - Valor agregado (sweeteners) */}
        <MembershipBenefits onRedirect={handleDirectRedirect} />
        
        {/* 7. OBJECTIONS - Remove barreiras finais */}
        <ObjectionsSection onRedirect={handleDirectRedirect} />
        
        {/* 8. PLANS - Momento da oferta (quando já estão convencidos) */}
        <Plans onRedirect={handleDirectRedirect} />
        
        {/* 9. FAQ - Últimas dúvidas antes da conversão */}
        <FAQ />
        
        {/* 10. FOOTER - Fechamento */}
        <Footer />
        
        {/* Exit Intent Popup */}
        <ExitIntentPopup onRedirect={handleDirectRedirect} />
        
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

export default App;