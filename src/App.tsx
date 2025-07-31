import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Plans from './components/Plans';
import HowItWorks from './components/HowItWorks';
import MembershipBenefits from './components/MembershipBenefits';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import WrittenTestimonials from './components/WrittenTestimonials';
import ObjectionsSection from './components/ObjectionsSection';
import About from './components/About';
import TrustSection from './components/TrustSection';
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
        <Hero onRedirect={handleDirectRedirect} />
        <Testimonials />
        <Benefits />
        <Differentials />
        <Plans onRedirect={handleDirectRedirect} />
        <WrittenTestimonials />
        <MembershipBenefits />
        <ObjectionsSection onRedirect={handleDirectRedirect} />
        <About />
        <TrustSection />
        <FAQ />
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