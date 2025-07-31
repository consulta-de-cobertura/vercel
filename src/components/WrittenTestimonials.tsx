import React from 'react';
import { Star, Quote } from 'lucide-react';

const WrittenTestimonials = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      city: "São Paulo - SP",
      rating: 5,
      text: "Melhor decisão que tomei! Saí da Vivo que cobrava R$ 89,90 por 20GB e agora tenho internet ilimitada por R$ 69,90. O atendimento é excelente e nunca fica sem sinal.",
      avatar: "MS"
    },
    {
      name: "João Silva",
      city: "Rio de Janeiro - RJ",
      rating: 5,
      text: "Estava desconfiado no início, mas depois de 6 meses posso dizer: é real! Internet rápida, ligações ilimitadas e ainda economizo R$ 40 por mês. Recomendo demais!",
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      city: "Belo Horizonte - MG",
      rating: 5,
      text: "O que mais me impressionou foi a transparência. Sem pegadinhas, sem taxas escondidas. Pago exatamente o que foi prometido e o serviço é impecável.",
      avatar: "AC"
    },
    {
      name: "Carlos Oliveira",
      city: "Salvador - BA",
      rating: 5,
      text: "Trabalho viajando pelo Brasil e a cobertura é excelente em todos os lugares que vou. Nunca mais vou voltar para as operadoras tradicionais!",
      avatar: "CO"
    },
    {
      name: "Fernanda Lima",
      city: "Brasília - DF",
      rating: 5,
      text: "Estava com o nome sujo e não conseguia contratar plano em lugar nenhum. Aqui foi super fácil, sem consulta ao SPC. Mudou minha vida!",
      avatar: "FL"
    },
    {
      name: "Roberto Alves",
      city: "Fortaleza - CE",
      rating: 5,
      text: "O suporte 24h é real! Tive um problema às 2h da manhã e fui atendido na hora. Resolveram tudo rapidinho. Isso é atendimento de verdade!",
      avatar: "RA"
    }
  ];

  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full px-4 py-1 text-sm font-medium mb-4">
            <Quote className="h-4 w-4 mr-1" /> DEPOIMENTOS REAIS
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900">
            O que Nossos Associados Estão Dizendo
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Histórias reais de pessoas que mudaram de vida com a Federal Associados
          </p>
        </div>

        {/* IMAGEM ESTRATÉGICA 3: Mulher com café e celular em Paris */}
        <div className="mb-8 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Imagem estratégica */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-200">
                <img
                  src="https://wjfmlsgkoehvnhapicrv.supabase.co/storage/v1/object/public/imagens//photo_2025-06-28_18-38-30.jpg"
                  alt="Mulher feliz usando celular com café em Paris - Conectividade internacional Federal Associados"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Overlay com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>
                
                {/* Badge de satisfação */}
                <div className="absolute top-4 right-4 bg-purple-500 text-white rounded-full px-3 py-2 shadow-lg">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    <span className="text-sm font-bold">Satisfação Total</span>
                  </div>
                </div>

                {/* Estatística flutuante */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">4.9★</div>
                    <div className="text-xs text-gray-600">Avaliação</div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-500/10 rounded-full blur-xl"></div>
            </div>

            {/* Conteúdo textual */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
                A felicidade dos nossos
                <span className="block text-purple-600">associados é real</span>
              </h3>
              
              <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Todos os dias recebemos mensagens de <strong className="text-purple-600">gratidão</strong> de pessoas que finalmente encontraram uma internet que funciona de verdade.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Economia Real",
                    description: "Nossos associados economizam em média R$ 50 por mês comparado às operadoras tradicionais."
                  },
                  {
                    title: "Satisfação Garantida",
                    description: "98% dos nossos clientes recomendam nossos serviços para amigos e familiares."
                  },
                  {
                    title: "Suporte Humanizado",
                    description: "Atendimento 24h com pessoas reais, não robôs ou chatbots automáticos."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="bg-purple-100 p-2 rounded-full">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">Seja o próximo a sorrir!</h4>
                    <p className="text-sm text-gray-600">Junte-se a milhares de pessoas satisfeitas</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl md:text-2xl font-bold text-purple-600">98.7%</div>
                    <div className="text-xs text-gray-500">Recomendariam</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Quote icon */}
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <Quote className="h-6 w-6 md:h-8 md:w-8 text-blue-400 opacity-50" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial text */}
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold mr-3 md:mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500">
                    {testimonial.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-8 md:mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Números que Falam por Si</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-2">4.9/5</div>
              <p className="opacity-90 text-sm md:text-base">Avaliação Média</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-2">98%</div>
              <p className="opacity-90 text-sm md:text-base">Satisfação dos Clientes</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-2">100k+</div>
              <p className="opacity-90 text-sm md:text-base">Associados Felizes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WrittenTestimonials;