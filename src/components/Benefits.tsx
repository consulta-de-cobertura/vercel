import React from 'react';
import { Wifi, PhoneCall, FileX, Clock, Navigation, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Wifi className="h-10 w-10 text-blue-400" />,
      title: "Internet ilimitada 4G/5G",
      description: "Navegue sem preocupações com limites de dados em alta velocidade."
    },
    {
      icon: <PhoneCall className="h-10 w-10 text-blue-400" />,
      title: "Ligações ilimitadas",
      description: "Fale à vontade com qualquer número no Brasil, sem custos adicionais."
    },
    {
      icon: <FileX className="h-10 w-10 text-blue-400" />,
      title: "Sem consulta ao SPC/SERASA",
      description: "Sem burocracia ou verificação de crédito para adquirir seu plano."
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-400" />,
      title: "Sem fidelidade",
      description: "Você tem liberdade para cancelar quando quiser, sem multas."
    },
    {
      icon: <Navigation className="h-10 w-10 text-blue-400" />,
      title: "Entrega grátis",
      description: "Receba seu chip em qualquer lugar do Brasil sem custos de envio."
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-400" />,
      title: "Suporte 24h",
      description: "Assistência completa a qualquer hora do dia ou da noite."
    }
  ];

  return (
    <section id="beneficios" className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* NOVA SEÇÃO ESTRATÉGICA COM A IMAGEM DO CASAL */}
        <div className="mb-12 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Imagine nunca mais precisar pedir senha do Wi-Fi, nunca mais ficar sem internet quando sair de casa. <strong className="text-blue-600">Essa é a liberdade</strong> que a Federal Associados oferece.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Conexão em qualquer lugar",
                    description: "Trabalhe, estude ou se divirta onde estiver, sem depender de Wi-Fi alheio."
                  },
                  {
                    title: "Sem surpresas na conta",
                    description: "Valor fixo mensal, sem taxas extras ou cobranças inesperadas."
                  },
                  {
                    title: "Para toda a família",
                    description: "Compartilhe a conexão com quem você ama, sem limites."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="bg-blue-100 p-2 rounded-full">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-200">
                <img
                  src="/images/image copy copy copy copy copy copy copy copy.png"
                  alt="Casal feliz usando celulares - Liberdade de conexão Federal Associados"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Overlay com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                
                {/* Badge de liberdade */}
                <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full px-3 py-2 shadow-lg">
                  <div className="flex items-center">
                    <Wifi className="h-4 w-4 mr-1" />
                    <span className="text-sm font-bold">Liberdade Total</span>
                  </div>
                </div>

                {/* Estatística flutuante */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">24/7</div>
                    <div className="text-xs text-gray-600">Conectados</div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900">Benefícios Exclusivos para Você</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Ao se tornar associado, você recebe um chip com benefícios exclusivos que vão muito além da internet.
          </p>
        </div>

        {/* IMAGEM ESTRATÉGICA 1: Homem de camisa laranja falando ao telefone */}
        <div className="mb-8 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-200">
                <img
                  src="https://wjfmlsgkoehvnhapicrv.supabase.co/storage/v1/object/public/imagens//photo_2025-06-28_18-38-20.jpg"
                  alt="Homem de camisa laranja falando ao telefone - Conectividade profissional Federal Associados"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Overlay com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-transparent to-transparent"></div>
                
                {/* Badge de conectividade */}
                <div className="absolute top-4 right-4 bg-orange-500 text-white rounded-full px-3 py-2 shadow-lg">
                  <div className="flex items-center">
                    <PhoneCall className="h-4 w-4 mr-1" />
                    <span className="text-sm font-bold">Conectado 24h</span>
                  </div>
                </div>

                {/* Estatística flutuante */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-600">100%</div>
                    <div className="text-xs text-gray-600">Cobertura</div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Nossa <strong className="text-orange-600">cobertura nacional</strong> garante que você esteja sempre conectado com qualidade profissional.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Ligações ilimitadas",
                    description: "Precisou fazer aquela ligação muitíssimo importante! Ou receber? Aqui você tem ligações ilimitadas."
                  },
                  {
                    title: "Internet Estável",
                    description: "Conexão confiável para videoconferências e trabalho remoto."
                  },
                  {
                    title: "Cobertura Nacional",
                    description: "Funciona em todo o Brasil, das capitais ao interior."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="bg-orange-100 p-2 rounded-full">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-3 md:mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;