import React from 'react';
import { Shield, MapPin, Smartphone, Clock, CreditCard, Users } from 'lucide-react';

interface ObjectionsSectionProps {
  onRedirect: () => void;
}

const ObjectionsSection: React.FC<ObjectionsSectionProps> = ({ onRedirect }) => {
  return (
    <section className="py-8 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Pronto para se associar?</h3>
            <p className="text-base md:text-lg mb-4 md:mb-6 text-white">
              Clique no botão abaixo e faça seu cadastro agora mesmo!
            </p>
            <button
              onClick={onRedirect}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg transition-colors text-sm md:text-base"
            >
              Fazer Cadastro Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;