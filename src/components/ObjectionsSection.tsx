import React from 'react';
import { Shield, MapPin, Smartphone, Clock, CreditCard, Users } from 'lucide-react';

interface ObjectionsSectionProps {
  onRedirect: () => void;
}

const ObjectionsSection: React.FC<ObjectionsSectionProps> = ({ onRedirect }) => {
  const objections = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-500" />,
      question: "E se não funcionar na minha região?",
      answer: "Trabalhamos com as 3 maiores operadoras do Brasil (Vivo, Tim e Claro). Nossa cobertura alcança 99,8% do território nacional. Se por algum motivo não funcionar na sua região, você tem 7 dias de garantia total para cancelar e receber 100% do seu dinheiro de volta."
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      question: "Como sei que não é golpe?",
      answer: "Somos uma empresa com mais de 14 anos no mercado, CNPJ ativo, sede física própria, mais de 5 escritórios pelo Brasil e 100.000+ associados satisfeitos. Você pode verificar nossa empresa no site da Receita Federal e temos garantia de 7 dias para devolução total do valor."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-purple-500" />,
      question: "Posso usar em qualquer aparelho?",
      answer: "Sim! Nosso chip funciona em qualquer celular desbloqueado, tablets, modems móveis e roteadores 4G/5G. Compatível com Android, iPhone e todos os dispositivos que aceitem chip de operadora."
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      question: "Quanto tempo demora para ativar?",
      answer: "Para planos Vivo: ativação imediata (você compra um chip lacrado e solicitamos a ativação na hora). Para Tim e Claro: enviamos seu chip em até 24h e você recebe em 5-10 dias úteis com código de rastreio."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-red-500" />,
      question: "Posso cancelar quando quiser mesmo?",
      answer: "Absolutamente! Não temos fidelidade nem multas. Você pode cancelar a qualquer momento sem pagar nada extra. Somos transparentes: sua liberdade é garantida por contrato."
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-500" />,
      question: "E se eu não souber usar ou configurar?",
      answer: "Nosso suporte 24h te ajuda em tudo! Desde a configuração inicial até qualquer dúvida que surgir. Temos tutoriais em vídeo e atendimento personalizado via WhatsApp para garantir que você use seu plano sem problemas."
    }
  ];

  return (
    <section className="py-8 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center justify-center bg-red-100 text-red-600 rounded-full px-4 py-1 text-sm font-medium mb-4">
            <Shield className="h-4 w-4 mr-1" /> SUAS DÚVIDAS RESPONDIDAS
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900">
            Ainda tem receio? Vamos esclarecer tudo!
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Sabemos que mudanças geram dúvidas. Por isso, respondemos as principais preocupações dos nossos futuros associados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {objections.map((objection, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-blue-500"
            >
              <div className="flex items-start mb-3 md:mb-4">
                <div className="bg-gray-100 p-2 md:p-3 rounded-full mr-3 md:mr-4 shadow-md">
                  {objection.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                    {objection.question}
                  </h3>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {objection.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Pronto para se associar?</h3>
            <p className="text-base md:text-lg mb-4 md:mb-6 text-white">
              Clique no botão abaixo e faça seu cadastro agora mesmo!
            </p>
            <button
              onClick={onRedirect}
              className="inline-block bg-white text-blue-600 font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-gray-100 transition-colors text-sm md:text-base"
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