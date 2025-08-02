import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, X, ArrowRight, Zap, Users, Trophy, Shield, Phone, Wifi, Star, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PresentationModeProps {
  onRedirect: () => void;
  onClose: () => void;
}

const PresentationMode: React.FC<PresentationModeProps> = ({ onRedirect, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Configuração dos slides da apresentação
  const slides = [
    {
      id: 'intro',
      title: 'O PROBLEMA QUE AFETA 86% DOS BRASILEIROS',
      subtitle: 'Sua internet não dura o mês todo?',
      type: 'problem',
      duration: 8000,
      content: {
        image: 'https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/imagens//photo_2025-07-19_10-29-51.jpg',
        stats: [
          { number: '86%', label: 'Dizem que a internet não dura o mês' },
          { number: 'R$ 89', label: 'Valor médio pago mensalmente' },
          { number: '15GB', label: 'Média real antes da redução' }
        ]
      }
    },
    {
      id: 'agitation',
      title: 'VOCÊ ESTÁ SENDO ENGANADO!',
      subtitle: 'As operadoras criaram um sistema para você SEMPRE pagar mais',
      type: 'agitation',
      duration: 10000,
      content: {
        video: 'https://wjfmlsgkoehvnhapicrv.supabase.co/storage/v1/object/public/video//federal.mp4',
        points: [
          'Vendem "ilimitado" que na verdade tem limite',
          'Velocidade cai para praticamente zero',
          'Você paga caro por pouco',
          'Sem transparência nos contratos'
        ]
      }
    },
    {
      id: 'solution',
      title: 'A SOLUÇÃO QUE 100.000+ BRASILEIROS JÁ DESCOBRIRAM',
      subtitle: 'Conheça a Federal Associados',
      type: 'solution',
      duration: 12000,
      content: {
        image: 'https://wjfmlsgkoehvnhapicrv.supabase.co/storage/v1/object/public/imagens//photo_2025-06-28_18-38-20.jpg',
        benefits: [
          { icon: <Wifi className="h-6 w-6" />, text: 'Internet REALMENTE ilimitada' },
          { icon: <Phone className="h-6 w-6" />, text: 'Ligações ilimitadas incluídas' },
          { icon: <Shield className="h-6 w-6" />, text: 'Sem consulta SPC/SERASA' },
          { icon: <CheckCircle className="h-6 w-6" />, text: 'Sem fidelidade' }
        ]
      }
    },
    {
      id: 'credibility',
      title: 'POR QUE CONFIAR NA FEDERAL ASSOCIADOS?',
      subtitle: 'Mais de 14 anos transformando vidas',
      type: 'credibility',
      duration: 10000,
      content: {
        video: 'https://wjfmlsgkoehvnhapicrv.supabase.co/storage/v1/object/public/video/5%20federal%20associados%20prova.mp4',
        credentials: [
          { icon: <Trophy className="h-8 w-8 text-orange-500" />, title: '5 Troféus', desc: 'Melhor associação' },
          { icon: <Users className="h-8 w-8 text-blue-500" />, title: '100.000+', desc: 'Associados satisfeitos' },
          { icon: <Shield className="h-8 w-8 text-green-500" />, title: '14+ Anos', desc: 'No mercado' }
        ]
      }
    },
    {
      id: 'testimonials',
      title: 'VEJA O QUE NOSSOS ASSOCIADOS DIZEM',
      subtitle: 'Depoimentos reais de quem já mudou de vida',
      type: 'social-proof',
      duration: 15000,
      content: {
        testimonialVideos: [
          'https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/videos//2.mp4',
          'https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/videos//3.mp4',
          'https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/videos//4.mp4'
        ],
        writtenTestimonials: [
          { name: 'Maria Santos', city: 'São Paulo', text: 'Melhor decisão que tomei! Economizo R$ 40/mês.' },
          { name: 'João Silva', city: 'Rio de Janeiro', text: 'Internet rápida e ligações ilimitadas de verdade!' }
        ]
      }
    },
    {
      id: 'benefits',
      title: 'CLUBE DE BENEFÍCIOS EXCLUSIVOS',
      subtitle: 'Muito mais que internet ilimitada',
      type: 'value-add',
      duration: 12000,
      content: {
        benefits: [
          { image: 'https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/imagens//photo_2025-07-30_17-56-12.jpg', text: 'Cinema grátis todo mês' },
          { image: 'https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/imagens//photo_2025-07-30_17-56-07.jpg', text: 'Descontos em estabelecimentos' },
          { image: 'https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/imagens//photo_2025-07-30_17-55-57.jpg', text: 'Atendimento médico com desconto' }
        ]
      }
    },
    {
      id: 'objections',
      title: 'SUAS DÚVIDAS RESPONDIDAS',
      subtitle: 'Vamos esclarecer tudo para você decidir com segurança',
      type: 'objection-handling',
      duration: 10000,
      content: {
        objections: [
          { q: 'E se não funcionar na minha região?', a: '99,8% de cobertura + 7 dias de garantia total' },
          { q: 'Como sei que não é golpe?', a: 'CNPJ ativo, 14+ anos, 100k+ clientes satisfeitos' },
          { q: 'Posso cancelar quando quiser?', a: 'Sim! Sem fidelidade, sem multas, liberdade total' }
        ]
      }
    },
    {
      id: 'offer',
      title: 'CHEGOU A HORA DA SUA DECISÃO',
      subtitle: 'Planos que cabem no seu bolso',
      type: 'offer',
      duration: 15000,
      content: {
        plans: [
          { operator: 'Vivo', data: '80GB', price: '69,90', highlight: true },
          { operator: 'Tim', data: '40GB', price: '49,90', highlight: false },
          { operator: 'Claro', data: '40GB', price: '49,90', highlight: false }
        ],
        urgency: 'Mais de 500 pessoas se associaram só hoje!'
      }
    },
    {
      id: 'final-cta',
      title: 'NÃO PERCA MAIS TEMPO PAGANDO CARO',
      subtitle: 'Faça como 100.000+ brasileiros: mude agora!',
      type: 'final-cta',
      duration: 8000,
      content: {
        finalOffer: {
          title: 'OFERTA ESPECIAL',
          benefits: ['Frete grátis', 'Ativação em 24h', '7 dias de garantia', 'Suporte 24h'],
          cta: 'QUERO ME ASSOCIAR AGORA'
        }
      }
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (100 / (slides[currentSlide].duration / 100));
          if (newProgress >= 100) {
            if (currentSlide < slides.length - 1) {
              setCurrentSlide(curr => curr + 1);
              return 0;
            } else {
              setIsPlaying(false);
              return 100;
            }
          }
          return newProgress;
        });
      }, 100);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentSlide, slides]);

  // Reset progress when slide changes
  useEffect(() => {
    setProgress(0);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const currentSlideData = slides[currentSlide];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const renderSlideContent = () => {
    const slide = currentSlideData;

    switch (slide.type) {
      case 'problem':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-red-800 mb-2">ALERTA!</h3>
                  <p className="text-red-700">As operadoras criaram um sistema para você SEMPRE precisar pagar mais.</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {slide.content.stats?.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + (index * 0.2) }}
                      className="bg-white rounded-lg p-4 text-center shadow-lg border-2 border-red-200"
                    >
                      <div className="text-2xl font-bold text-red-600">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <img
                src={slide.content.image}
                alt="Problema da internet limitada"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        );

      case 'agitation':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <video
                ref={videoRef}
                src={slide.content.video}
                className="w-full rounded-2xl shadow-2xl"
                autoPlay
                muted={isMuted}
                loop
                playsInline
              />
            </motion.div>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                {slide.content.points?.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + (index * 0.3) }}
                    className="flex items-center space-x-4 bg-red-50 p-4 rounded-lg border-l-4 border-red-500"
                  >
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-lg text-gray-800">{point}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-2">A SOLUÇÃO EXISTE!</h3>
                  <p className="text-green-700">Mais de 100.000 brasileiros já descobriram a Federal Associados.</p>
                </div>
                
                <div className="space-y-4">
                  {slide.content.benefits?.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + (index * 0.2) }}
                      className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md border border-green-200"
                    >
                      <div className="text-green-500">{benefit.icon}</div>
                      <span className="text-lg text-gray-800">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <img
                src={slide.content.image}
                alt="Solução Federal Associados"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent rounded-2xl"></div>
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                SOLUÇÃO!
              </div>
            </motion.div>
          </div>
        );

      case 'credibility':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <video
                src={slide.content.video}
                className="w-full rounded-2xl shadow-2xl"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                controls
              />
            </motion.div>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 gap-6"
              >
                {slide.content.credentials?.map((cred, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + (index * 0.3) }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center"
                  >
                    <div className="flex justify-center mb-4">{cred.icon}</div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{cred.title}</h4>
                    <p className="text-gray-600">{cred.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        );

      case 'social-proof':
        return (
          <div className="space-y-12 h-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {slide.content.testimonialVideos?.slice(0, 3).map((videoUrl, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (index * 0.2) }}
                  className="relative aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-lg"
                >
                  <video
                    src={videoUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Depoimento {index + 1}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {slide.content.writtenTestimonials?.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 + (index * 0.3) }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.city}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        );

      case 'value-add':
        return (
          <div className="space-y-12 h-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {slide.content.benefits?.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (index * 0.2) }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                >
                  <img
                    src={benefit.image}
                    alt={benefit.text}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-lg font-semibold text-gray-800">{benefit.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="text-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E muito mais!</h3>
              <p className="text-lg text-gray-700">Ser associado da Federal Associados é ter acesso a um mundo de benefícios exclusivos.</p>
            </motion.div>
          </div>
        );

      case 'objection-handling':
        return (
          <div className="space-y-8 h-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {slide.content.objections?.map((objection, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.3) }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
                >
                  <h4 className="text-lg font-bold text-red-600 mb-3">❓ {objection.q}</h4>
                  <p className="text-lg text-green-700 font-semibold">✅ {objection.a}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Todas as suas dúvidas esclarecidas!</h3>
              <p className="text-lg opacity-90">Agora você pode decidir com total segurança.</p>
            </motion.div>
          </div>
        );

      case 'offer':
        return (
          <div className="space-y-12 h-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {slide.content.plans?.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (index * 0.2) }}
                  className={`bg-white rounded-2xl p-6 shadow-xl border-2 ${
                    plan.highlight ? 'border-green-500 ring-4 ring-green-200' : 'border-gray-200'
                  } relative overflow-hidden`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-bold">
                      RECOMENDADO
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.operator}</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{plan.data}</div>
                    <div className="text-3xl font-bold text-green-600 mb-4">
                      R$ {plan.price}<span className="text-lg">/mês</span>
                    </div>
                    
                    <button
                      onClick={onRedirect}
                      className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                        plan.highlight
                          ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl'
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
                    >
                      ESCOLHER PLANO
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="bg-red-100 border-2 border-red-500 rounded-2xl p-6 text-center"
            >
              <div className="text-red-600 font-bold text-lg mb-2">🔥 URGÊNCIA!</div>
              <p className="text-red-800 font-semibold">{slide.content.urgency}</p>
            </motion.div>
          </div>
        );

      case 'final-cta':
        return (
          <div className="flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 rounded-3xl p-12 text-white text-center max-w-4xl shadow-2xl"
            >
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl font-bold mb-6"
              >
                {slide.content.finalOffer?.title}
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
              >
                {slide.content.finalOffer?.benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm font-semibold">✅ {benefit}</div>
                  </div>
                ))}
              </motion.div>
              
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onRedirect}
                className="bg-white text-green-600 font-bold text-2xl py-4 px-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                {slide.content.finalOffer?.cta}
              </motion.button>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-6 text-lg opacity-90"
              >
                Junte-se a mais de 100.000 brasileiros satisfeitos!
              </motion.p>
            </motion.div>
          </div>
        );

      default:
        return <div>Slide não encontrado</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      {/* Header da Apresentação */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-white font-bold text-xl">Federal Associados</div>
            <div className="text-white/70 text-sm">Apresentação Executiva</div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
            </button>
            
            <button
              onClick={togglePlay}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </button>
            
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4 bg-white/20 rounded-full h-2 overflow-hidden">
          <div
            className="bg-green-500 h-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Slide Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slide Content */}
      <div className="absolute inset-0 pt-32 pb-20 px-8">
        <AnimatePresence mode="wait" custom={1}>
          <motion.div
            key={currentSlide}
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="h-full"
          >
            {/* Slide Title */}
            <div className="text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white mb-4"
              >
                {currentSlideData.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300"
              >
                {currentSlideData.subtitle}
              </motion.p>
            </div>

            {/* Slide Content */}
            <div className="h-full max-w-7xl mx-auto">
              {renderSlideContent()}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-6 w-6" />
            <span>Anterior</span>
          </button>
          
          <div className="text-white text-center">
            <div className="text-sm opacity-70">Slide {currentSlide + 1} de {slides.length}</div>
            <div className="font-semibold">{currentSlideData.id.toUpperCase()}</div>
          </div>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Próximo</span>
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        {/* CTA Button sempre visível */}
        <div className="text-center mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRedirect}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg py-3 px-8 rounded-full shadow-xl transition-all"
          >
            QUERO ME ASSOCIAR AGORA <ArrowRight className="inline h-5 w-5 ml-2" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default PresentationMode;