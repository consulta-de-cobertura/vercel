import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { ChevronDown, ChevronUp, Play, Pause, Volume2, VolumeX, ArrowRight, Star, Shield, Users, Trophy, Phone, Wifi, CheckCircle, X } from 'lucide-react';
import CadastroModal from './CadastroModal';
import WhatsAppButton from './WhatsAppButton';

interface Slide {
  id: string;
  title: string;
  component: React.ReactNode;
}

function PresentationApp() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCadastroModalOpen, setIsCadastroModalOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [slideProgress, setSlideProgress] = useState(0);

  const handleDirectRedirect = () => {
    setIsCadastroModalOpen(true);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying && currentSlide < slides.length - 1) {
      interval = setInterval(() => {
        setSlideProgress(prev => {
          if (prev >= 100) {
            setCurrentSlide(current => current + 1);
            return 0;
          }
          return prev + 2; // 2% a cada 100ms = 5 segundos por slide
        });
      }, 100);
    } else {
      setSlideProgress(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setSlideProgress(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setSlideProgress(0);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setSlideProgress(0);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    setSlideProgress(0);
  };

  // SLIDE 1: ABERTURA IMPACTANTE
  const SlideOpening = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white flex items-center justify-center relative overflow-hidden">
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-black mb-6 animate-pulse-attention">
            PARE TUDO!
          </h1>
          <div className="bg-yellow-400 text-black px-6 py-3 rounded-full inline-block mb-8 font-bold text-lg md:text-xl animate-bounce">
            🚨 REVELAÇÃO CHOCANTE 🚨
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
            86% dos brasileiros dizem que sua internet<br/>
            <span className="text-yellow-400">"NÃO DURA O MÊS TODO"</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Se você é um deles, esta apresentação vai mudar sua vida!
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8">
            <p className="text-lg md:text-xl">
              Nos próximos minutos, você vai descobrir como mais de <strong className="text-yellow-400">100.000 brasileiros</strong> resolveram esse problema de uma vez por todas.
            </p>
          </div>
          <button
            onClick={nextSlide}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
          >
            QUERO DESCOBRIR AGORA! →
          </button>
        </div>
      </div>
    </div>
  );

  // SLIDE 2: O PROBLEMA
  const SlideProblem = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-red-500 text-white px-6 py-2 rounded-full inline-block mb-6 font-bold">
              SLIDE 1 DE 8 - O PROBLEMA
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              A VERDADE QUE AS OPERADORAS<br/>
              <span className="text-red-400">NÃO QUEREM QUE VOCÊ SAIBA</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/imagens//photo_2025-07-19_10-29-51.jpg"
                alt="Brasileiros frustrados com internet"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="bg-red-900/50 border border-red-500 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-red-400 mb-4">🚨 FATOS CHOCANTES:</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-center">
                      <span className="text-red-400 mr-3">•</span>
                      86% dizem que a internet não dura o mês
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-400 mr-3">•</span>
                      Valor médio pago: R$ 89,90/mês
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-400 mr-3">•</span>
                      Dados reais antes da redução: apenas 15GB
                    </li>
                  </ul>
                </div>
                <div className="bg-yellow-900/50 border border-yellow-500 rounded-lg p-6">
                  <p className="text-xl font-semibold text-yellow-400">
                    Isso não é coincidência... É um SISTEMA criado para você sempre pagar mais!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={nextSlide}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105"
            >
              CONTINUE PARA VER A SOLUÇÃO →
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // SLIDE 3: A DESCOBERTA
  const SlideDiscovery = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-green-500 text-white px-6 py-2 rounded-full inline-block mb-6 font-bold">
              SLIDE 2 DE 8 - A DESCOBERTA
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              A SOLUÇÃO QUE MUDOU TUDO<br/>
              <span className="text-yellow-400">PARA 100.000+ BRASILEIROS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">🎥 VEJA COMO FUNCIONA</h3>
                <div className="relative">
                  <video
                    className="w-full rounded-lg"
                    controls
                    poster="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  >
                    <source src="https://wjfmlsgkoehvnhapicrv.supabase.co/storage/v1/object/public/video//federal.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div className="bg-green-900/50 border border-green-400 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">✅ CONHEÇA A FEDERAL ASSOCIADOS:</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-400 mr-3 h-5 w-5" />
                      14+ anos no mercado
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-400 mr-3 h-5 w-5" />
                      100.000+ associados satisfeitos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-400 mr-3 h-5 w-5" />
                      5 troféus como melhor associação
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-400 mr-3 h-5 w-5" />
                      Internet REALMENTE ilimitada
                    </li>
                  </ul>
                </div>
                <div className="bg-yellow-900/50 border border-yellow-400 rounded-lg p-6 text-center">
                  <p className="text-2xl font-bold text-yellow-400">
                    Por apenas R$ 69,90/mês
                  </p>
                  <p className="text-lg mt-2">Sem pegadinhas, sem limites reais!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={nextSlide}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105"
            >
              QUERO SABER MAIS DETALHES →
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // SLIDE 4: BENEFÍCIOS
  const SlideBenefits = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-blue-600 text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-yellow-500 text-black px-6 py-2 rounded-full inline-block mb-6 font-bold">
              SLIDE 3 DE 8 - OS BENEFÍCIOS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              O QUE VOCÊ RECEBE<br/>
              <span className="text-yellow-400">COMO ASSOCIADO</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Wifi className="h-16 w-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Internet Ilimitada 4G/5G</h3>
              <p>Navegue sem preocupações com limites reais</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Phone className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Ligações Ilimitadas</h3>
              <p>Para todo o Brasil, sem custos extras</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Shield className="h-16 w-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Sem Consulta SPC</h3>
              <p>Sem burocracia ou verificação de crédito</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/image copy copy copy copy copy copy copy copy.png"
                alt="Casal feliz usando internet"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">🎁 BÔNUS EXCLUSIVOS:</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center">
                    <span className="bg-green-500 rounded-full p-1 mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </span>
                    Frete grátis para todo o Brasil
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 rounded-full p-1 mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </span>
                    Sem fidelidade - cancele quando quiser
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 rounded-full p-1 mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </span>
                    Suporte 24h via WhatsApp
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 rounded-full p-1 mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </span>
                    Clube de benefícios exclusivos
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={nextSlide}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105"
            >
              VER DEPOIMENTOS REAIS →
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // SLIDE 5: DEPOIMENTOS
  const SlideTestimonials = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-pink-500 text-white px-6 py-2 rounded-full inline-block mb-6 font-bold">
              SLIDE 4 DE 8 - PROVA SOCIAL
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              O QUE DIZEM NOSSOS<br/>
              <span className="text-yellow-400">100.000+ ASSOCIADOS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MS
                </div>
                <div>
                  <h4 className="font-bold">Maria Santos</h4>
                  <p className="text-sm opacity-75">São Paulo - SP</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="italic">
                "Melhor decisão que tomei! Saí da Vivo que cobrava R$ 89,90 por 20GB e agora tenho internet ilimitada por R$ 69,90. O atendimento é excelente!"
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JS
                </div>
                <div>
                  <h4 className="font-bold">João Silva</h4>
                  <p className="text-sm opacity-75">Rio de Janeiro - RJ</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="italic">
                "Estava desconfiado no início, mas depois de 6 meses posso dizer: é real! Internet rápida, ligações ilimitadas e ainda economizo R$ 40 por mês."
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-6">📊 NÚMEROS QUE FALAM POR SI:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">4.9/5</div>
                <p>Avaliação Média</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
                <p>Satisfação dos Clientes</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">100k+</div>
                <p>Associados Felizes</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={nextSlide}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105"
            >
              VER NOSSOS PLANOS →
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // SLIDE 6: PLANOS
  const SlidePlans = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block mb-6 font-bold">
              SLIDE 5 DE 8 - NOSSOS PLANOS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              ESCOLHA SEU PLANO<br/>
              <span className="text-yellow-400">PERFEITO</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Plano Vivo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                MAIS POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">VIVO</h3>
                <div className="text-4xl font-bold mb-2">80GB</div>
                <div className="text-3xl font-bold text-yellow-400">R$ 69,90</div>
                <p className="text-sm opacity-75">/mês</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2 h-4 w-4" />
                  Ligações ilimitadas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2 h-4 w-4" />
                  WhatsApp grátis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2 h-4 w-4" />
                  Ativação imediata
                </li>
              </ul>
              <button
                onClick={handleDirectRedirect}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                ESCOLHER ESTE PLANO
              </button>
            </div>

            {/* Plano Tim */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">TIM</h3>
                <div className="text-4xl font-bold mb-2">100GB</div>
                <div className="text-3xl font-bold text-yellow-400">R$ 69,90</div>
                <p className="text-sm opacity-75">/mês</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2 h-4 w-4" />
                  Ligações ilimitadas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2 h-4 w-4" />
                  Redes sociais grátis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2 h-4 w-4" />
                  Entrega em casa
                </li>
              </ul>
              <button
                onClick={handleDirectRedirect}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                ESCOLHER ESTE PLANO
              </button>
            </div>

            {/* Plano Claro */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">CLARO</h3>
                <div className="text-4xl font-bold mb-2">80GB</div>
                <div className="text-3xl font-bold text-yellow-400">R$ 69,90</div>
                <p className="text-sm opacity-75">/mês</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2 h-4 w-4" />
                  Ligações ilimitadas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2 h-4 w-4" />
                  TikTok grátis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2 h-4 w-4" />
                  Cobertura nacional
                </li>
              </ul>
              <button
                onClick={handleDirectRedirect}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                ESCOLHER ESTE PLANO
              </button>
            </div>
          </div>

          <div className="bg-yellow-500 text-black rounded-xl p-6 text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">🎁 OFERTA ESPECIAL POR TEMPO LIMITADO!</h3>
            <p className="text-lg">
              Frete grátis + Ativação prioritária + 7 dias de garantia total
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={nextSlide}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105"
            >
              REMOVER ÚLTIMAS OBJEÇÕES →
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // SLIDE 7: OBJEÇÕES
  const SlideObjections = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-orange-600 text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-yellow-500 text-black px-6 py-2 rounded-full inline-block mb-6 font-bold">
              SLIDE 6 DE 8 - SUAS DÚVIDAS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              AINDA TEM RECEIO?<br/>
              <span className="text-yellow-400">VAMOS ESCLARECER TUDO!</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">❓ "E se não funcionar na minha região?"</h3>
              <p className="text-lg">
                Trabalhamos com as 3 maiores operadoras do Brasil. Nossa cobertura alcança 99,8% do território nacional. 
                Se não funcionar, você tem <strong>7 dias de garantia total</strong> para cancelar.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">❓ "Como sei que não é golpe?"</h3>
              <p className="text-lg">
                Somos uma empresa com <strong>14+ anos no mercado</strong>, CNPJ ativo, sede física própria, 
                e <strong>100.000+ associados satisfeitos</strong>. Você pode verificar tudo!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">❓ "Posso cancelar quando quiser?"</h3>
              <p className="text-lg">
                <strong>Absolutamente!</strong> Não temos fidelidade nem multas. Você pode cancelar a qualquer momento 
                sem pagar nada extra. Sua liberdade é garantida por contrato.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">❓ "E se eu não souber configurar?"</h3>
              <p className="text-lg">
                Nosso <strong>suporte 24h</strong> te ajuda em tudo! Desde a configuração inicial até qualquer dúvida. 
                Temos tutoriais em vídeo e atendimento personalizado via WhatsApp.
              </p>
            </div>
          </div>

          <div className="bg-green-500 text-white rounded-xl p-8 text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">🛡️ NOSSA GARANTIA TOTAL:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">7 DIAS</div>
                <p>Garantia de devolução</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24H</div>
                <p>Suporte humanizado</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">0%</div>
                <p>Risco para você</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={nextSlide}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105"
            >
              FAZER PEDIDO AGORA →
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // SLIDE 8: CALL TO ACTION FINAL
  const SlideCTA = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-yellow-500 text-black px-6 py-2 rounded-full inline-block mb-6 font-bold">
            SLIDE 7 DE 8 - ÚLTIMA CHANCE
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            CHEGOU A HORA<br/>
            <span className="text-yellow-400">DA SUA DECISÃO!</span>
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">🚨 OFERTA POR TEMPO LIMITADO 🚨</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-red-400">❌ CONTINUE COMO ESTÁ:</h4>
                <ul className="space-y-2 text-left">
                  <li>• Pagando R$ 89,90+ por internet limitada</li>
                  <li>• Ficando sem internet no meio do mês</li>
                  <li>• Sendo refém das operadoras tradicionais</li>
                  <li>• Perdendo dinheiro todo mês</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-green-400">✅ MUDE AGORA:</h4>
                <ul className="space-y-2 text-left">
                  <li>• Internet REALMENTE ilimitada por R$ 69,90</li>
                  <li>• Ligações ilimitadas incluídas</li>
                  <li>• Liberdade total - sem fidelidade</li>
                  <li>• Economize R$ 600+ por ano</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-500 text-white rounded-xl p-6 mb-8 animate-pulse">
            <p className="text-xl font-bold">
              ⏰ Esta oferta expira em breve! Mais de 500 pessoas se associaram só hoje!
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleDirectRedirect}
              className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-6 px-12 rounded-lg text-2xl transition-all duration-300 transform hover:scale-105 animate-pulse"
            >
              🎯 SIM! QUERO MUDAR MINHA VIDA AGORA!
            </button>
            
            <div className="text-center">
              <p className="text-lg opacity-90">
                ✅ Sem consulta ao SPC • ✅ Frete grátis • ✅ 7 dias de garantia
              </p>
            </div>
          </div>

          <div className="mt-12">
            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Ver informações finais →
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // SLIDE 9: AGRADECIMENTO E INFORMAÇÕES
  const SlideThanks = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-blue-500 text-white px-6 py-2 rounded-full inline-block mb-6 font-bold">
            SLIDE 8 DE 8 - OBRIGADO!
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            OBRIGADO POR<br/>
            <span className="text-blue-400">ASSISTIR NOSSA APRESENTAÇÃO!</span>
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">📞 FALE CONOSCO AGORA:</h3>
            <div className="space-y-4">
              <button
                onClick={handleDirectRedirect}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
              >
                💬 FAZER PEDIDO VIA WHATSAPP
              </button>
              <p className="text-lg">
                Nosso time está online 24h para te atender!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">🏢 NOSSA EMPRESA:</h4>
              <p className="text-left">
                Federal Associados<br/>
                CNPJ: 29.383.343/0001-64<br/>
                14+ anos no mercado<br/>
                100.000+ associados satisfeitos
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">🛡️ SUAS GARANTIAS:</h4>
              <p className="text-left">
                ✅ 7 dias de garantia total<br/>
                ✅ Suporte 24h via WhatsApp<br/>
                ✅ Sem fidelidade<br/>
                ✅ Frete grátis para todo Brasil
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6">
            <p className="text-xl font-bold">
              Junte-se a mais de 100.000 brasileiros que já mudaram de vida!
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const slides: Slide[] = [
    { id: 'opening', title: 'Abertura Impactante', component: <SlideOpening /> },
    { id: 'problem', title: 'O Problema', component: <SlideProblem /> },
    { id: 'discovery', title: 'A Descoberta', component: <SlideDiscovery /> },
    { id: 'benefits', title: 'Os Benefícios', component: <SlideBenefits /> },
    { id: 'testimonials', title: 'Depoimentos', component: <SlideTestimonials /> },
    { id: 'plans', title: 'Nossos Planos', component: <SlidePlans /> },
    { id: 'objections', title: 'Suas Dúvidas', component: <SlideObjections /> },
    { id: 'cta', title: 'Call to Action', component: <SlideCTA /> },
    { id: 'thanks', title: 'Agradecimento', component: <SlideThanks /> }
  ];

  return (
    <ThemeProvider>
      <div className="font-sans text-white overflow-x-hidden bg-black min-h-screen relative">
        {/* Controles de Apresentação Fixos */}
        <div className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-4">
            <button
              onClick={toggleAutoPlay}
              className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors"
            >
              {isAutoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              <span className="text-sm">{isAutoPlaying ? 'Pausar' : 'Auto'}</span>
            </button>
            <div className="text-white text-sm">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>

          <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="text-white text-sm font-bold">
              Federal Associados - Apresentação Exclusiva
            </div>
          </div>
        </div>

        {/* Barra de Progresso */}
        <div className="fixed top-16 left-4 right-4 z-50">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
          {isAutoPlaying && (
            <div className="bg-yellow-500 rounded-full h-1 mt-1 transition-all duration-100" style={{ width: `${slideProgress}%` }} />
          )}
        </div>

        {/* Navegação por Slides */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 text-white hover:text-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronUp className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-yellow-400' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-2 text-white hover:text-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Slide Atual */}
        <div className="transition-all duration-500 ease-in-out">
          {slides[currentSlide].component}
        </div>

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

export default PresentationApp;