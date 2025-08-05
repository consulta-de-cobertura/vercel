import React, { useState, useEffect } from 'react';
import { Menu, X, Wifi } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-2xl py-2 border-b border-navy-700' : 'bg-gradient-to-r from-navy-900/80 to-navy-800/80 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Wifi className="h-8 w-8 text-accent mr-2" />
          <span className="text-xl font-bold text-white">Federal Associados</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#beneficios" className="text-gray-200 hover:text-accent transition-colors font-medium">Benefícios</a>
          <a href="#planos" className="text-gray-200 hover:text-accent transition-colors font-medium">Planos</a>
          <a href="https://federalassociados.com.br/login" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-accent transition-colors font-medium">Login</a>
          <a href="https://federalassociados.com.br/boletos" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-accent transition-colors font-medium">Fatura</a>
          <a href="#sobre" className="text-gray-200 hover:text-accent transition-colors font-medium">Sobre Nós</a>
          <a href="#faq" className="text-gray-200 hover:text-accent transition-colors font-medium">FAQ</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-900/95 backdrop-blur-md shadow-2xl border-t border-navy-700">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#beneficios" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-accent transition-colors py-2 font-medium">Benefícios</a>
            <a href="#planos" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-accent transition-colors py-2 font-medium">Planos</a>
            <a href="https://federalassociados.com.br/login" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-accent transition-colors py-2 font-medium">Login</a>
            <a href="https://federalassociados.com.br/boletos" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-accent transition-colors py-2 font-medium">Fatura</a>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-accent transition-colors py-2 font-medium">Sobre Nós</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-accent transition-colors py-2 font-medium">FAQ</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;