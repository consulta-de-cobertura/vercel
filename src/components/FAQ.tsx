import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqItems: FAQItem[] = [
    {
      question: "Eu posso ativar o plano no meu número atual?",
      answer: "Não, você recebe um chip novo com o plano da Federal Associados. O seu número atual permanecerá inalterado."
    },
    {
      question: "Preciso cancelar minha linha atual?",
      answer: "Não, você pode usar dois chips no mesmo aparelho (se ele tiver suporte a Dual SIM) ou simplesmente manter seu número atual em outro dispositivo."
    },
    {
      question: "Qual a diferença do chip Federal Associados para operadoras?",
      answer: "É um plano corporativo exclusivo, ilimitado, sem pegadinhas, sem surpresas. Oferecemos liberdade total sem fidelidade, sem consulta ao SPC/SERASA, e com diversos benefícios exclusivos que as operadoras tradicionais não oferecem."
    },
    {
      question: "Como funciona a entrega do chip?",
      answer: "Após a confirmação da sua associação, enviaremos o chip para o endereço informado, com frete grátis para todo o Brasil. O prazo médio de entrega é de 5 a 10 dias úteis, dependendo da sua localização."
    },
    {
      question: "Existe alguma fidelidade nos planos?",
      answer: "Não! Uma das nossas maiores vantagens é a liberdade total. Você pode cancelar seu plano a qualquer momento, sem multas ou taxas adicionais."
    },
    {
      question: "Como faço para me tornar um associado?",
      answer: "Basta escolher um dos nossos planos disponíveis, preencher seus dados e efetuar o pagamento da primeira mensalidade. Após a confirmação, seu chip será enviado para o endereço informado."
    },
    {
      question: "Quais documentos são necessários para adesão?",
      answer: "Apenas seus documentos pessoais básicos (RG e CPF). Não realizamos consulta ao SPC/SERASA, tornando nossos planos acessíveis para todos, independentemente do histórico financeiro."
    },
    {
      question: "Como funciona o suporte 24h?",
      answer: "Temos uma central de atendimento via WhatsApp disponível 24 horas por dia, 7 dias por semana. Nossos atendentes estão sempre prontos para resolver qualquer dúvida ou problema com seu plano."
    }
  ];

  return (
    <section id="faq" className="py-8 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 rounded-full px-4 py-1 text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4 mr-1" /> DÚVIDAS FREQUENTES
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900">Perguntas Frequentes</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos planos e serviços.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-3 md:mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium text-base md:text-lg text-gray-900">{item.question}</span>
                {openIndex === index ? 
                  <ChevronUp className="h-4 w-4 md:h-5 md:w-5 text-blue-600" /> : 
                  <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                }
              </button>
              
              <div 
                className={`px-4 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-4 md:pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-sm md:text-base text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-sm md:text-base text-gray-600">
            Não encontrou a resposta que procurava? Entre em contato com nosso suporte 24h.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;