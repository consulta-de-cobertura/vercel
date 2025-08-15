import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { X, Zap, CheckCircle, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CadastroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CadastroModal: React.FC<CadastroModalProps> = ({ isOpen, onClose }) => {
  const handleSiteRedirect = () => {
    window.open('https://federalassociados.com.br/pbi/cadastro/110956', '_blank');
    onClose();
  };

  const handleWhatsAppRedirect = () => {
    window.open('https://formulario.conecteseagora.com.br', '_blank');
    onClose();
  };

  const activationOptions = [
    {
      operator: "Vivo",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "Ativação Imediata",
      description: "Ao escolher um plano da Vivo, você pode simplesmente comprar um chip lacrado em qualquer farmácia, loja, banca de jornal e solicitar ativação de forma imediata.",
      highlight: true
    },
    {
      operator: "Tim & Claro",
      icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
      title: "Ativação Tradicional",
      description: "Receba seu chip em casa e solicite a ativação após a entrega. Simples e prático.",
      highlight: false
    }
  ];

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[90vh] w-[95vw] max-w-[900px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white shadow-lg focus:outline-none z-50 overflow-y-auto">
          <VisuallyHidden.Root>
            <Dialog.Title>Cadastro Federal Associados</Dialog.Title>
          </VisuallyHidden.Root>
          
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              aria-label="Fechar"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>

            {/* Vídeo Section */}
            <div className="p-6 border-b border-gray-200">
              <div className="text-center mb-6">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-8 w-8" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Federal Associados</h2>
                <p className="text-gray-600 mb-6">Conheça como funciona nosso processo de associação</p>
              </div>

              {/* Vídeo com preload otimizado */}
              <div className="relative mb-6 rounded-xl overflow-hidden shadow-lg">
                <video
                  className="w-full h-auto object-contain bg-black"
                  controls
                  controlsList="nodownload"
                  playsInline
                  preload="metadata"
                  poster=""
                  onContextMenu={(e) => e.preventDefault()}
                  src="https://wjfmlsgkoehvnhapicrv.supabase.co/storage/v1/object/public/video//cadastro.mp4"
                  onLoadStart={(e) => {
                    // Força orientação correta desde o início
                    const video = e.currentTarget;
                    video.style.transform = 'none';
                    video.style.objectFit = 'contain';
                    video.style.width = '100%';
                    video.style.height = 'auto';
                  }}
                  onLoadedMetadata={(e) => {
                    // Garante que o vídeo mantenha proporção correta
                    const video = e.currentTarget;
                    video.style.width = '100%';
                    video.style.height = 'auto';
                    video.style.objectFit = 'contain';
                    video.style.transform = 'none';
                  }}
                >
                  <style>
                    {`
                      video::-webkit-media-controls-overflow-menu-button,
                      video::-webkit-media-controls-overflow-menu-list,
                      video::-webkit-media-controls-download-button {
                        display: none !important;
                      }
                      video::-webkit-media-controls-enclosure {
                        overflow: hidden !important;
                      }
                      video::-webkit-media-controls-panel {
                        overflow: clip !important;
                      }
                      video {
                        object-fit: contain !important;
                        background-color: #000 !important;
                      }
                    `}
                  </style>
                  Seu navegador não suporta a reprodução de vídeos.
                </video>
              </div>
            </div>

            {/* Opções de Ativação por Operadora */}
            <div className="p-6 border-b border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Opções de Ativação
                </h3>
                <p className="text-gray-600">
                  Escolha a melhor opção para sua operadora preferida
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activationOptions.map((option, index) => (
                  <div 
                    key={index}
                    className={`rounded-xl p-4 border-2 transition-all duration-300 ${
                      option.highlight 
                        ? 'border-yellow-400 bg-yellow-50 shadow-lg' 
                        : 'border-gray-300 bg-gray-50'
                    }`}
                  >
                    {option.highlight && (
                      <div className="flex items-center justify-center mb-4">
                        <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                          ATIVAÇÃO INSTANTÂNEA
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      {option.icon}
                      <h4 className="text-lg font-bold ml-3 text-gray-900">
                        {option.operator}
                      </h4>
                    </div>
                    
                    <h5 className="text-base font-semibold mb-2 text-gray-900">
                      {option.title}
                    </h5>
                    
                    <p className="text-sm text-gray-600">
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons Section */}
            <div className="p-6">
              <div className="space-y-4">
                <button
                  onClick={handleSiteRedirect}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Realizar Cadastro Agora
                </button>
                
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center animate-subtle-pulse"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className="text-white mr-2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                  </svg>
                  Dúvidas? Clique aqui
                </button>
              </div>

              {/* Seção PBI completa movida da página principal */}
              <div className="mt-8 mb-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center bg-green-100 text-green-600 rounded-full px-4 py-1 text-sm font-medium mb-4">
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                    </svg>
                    PROGRAMA DE INDICAÇÃO
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900">
                    Transforme sua internet ilimitada em uma grande fonte de renda extra e <span className="text-yellow-600">nunca mais pague por internet!</span>
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-4">
                    Descubra agora como associados estão <span className="text-yellow-600 font-bold bg-yellow-100 px-2 py-1 rounded">faturando de R$ 2.000 a R$ 10.000 por mês, trabalhando de casa</span> com a Federal Associados
                  </p>
                  <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
                    Com o Programa de Indicação da Federal Associados, você garante internet ilimitada e ainda coloca muito dinheiro no bolso todos os meses.
                  </p>
                </div>

                {/* Como Funciona */}
                <div className="mb-8 md:mb-16">
                  <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-gray-900">
                    Como Funciona
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                    <div className="bg-gray-100 rounded-xl p-4 md:p-6 text-center border border-gray-200">
                      <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                        <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-3 inline-block">
                        Passo 1
                      </div>
                      <h4 className="text-base md:text-lg font-semibold mb-2 text-gray-900">Assine seu plano</h4>
                      <p className="text-sm md:text-base text-gray-600">Assine seu plano de internet ilimitada</p>
                    </div>
                    
                    <div className="bg-gray-100 rounded-xl p-4 md:p-6 text-center border border-gray-200">
                      <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                        <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                      <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-3 inline-block">
                        Passo 2
                      </div>
                      <h4 className="text-base md:text-lg font-semibold mb-2 text-gray-900">Indique para conhecidos</h4>
                      <p className="text-sm md:text-base text-gray-600">Indique para amigos, familiares e conhecidos</p>
                    </div>
                    
                    <div className="bg-gray-100 rounded-xl p-4 md:p-6 text-center border border-gray-200">
                      <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                        <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-3 inline-block">
                        Passo 3
                      </div>
                      <h4 className="text-base md:text-lg font-semibold mb-2 text-gray-900">Receba comissões</h4>
                      <p className="text-sm md:text-base text-gray-600">Receba 87% de comissão por cada novo associado + 10% a 20% de recorrência mensal</p>
                    </div>
                  </div>
                </div>

                {/* Quando sua internet fica grátis */}
                <div className="mb-8 md:mb-16">
                  <div className="bg-gray-100 rounded-2xl p-6 md:p-8 border border-gray-200 max-w-4xl mx-auto">
                    <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 text-gray-900">
                      Quando sua internet fica grátis?
                    </h3>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-start">
                        <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-sm md:text-base text-gray-700">
                          <strong>Com apenas 10 indicados ativos no mesmo plano que você usar</strong>, o valor da sua mensalidade já está pago.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-sm md:text-base text-gray-700">
                          <strong>Isso significa: internet grátis para sempre</strong> enquanto eles permanecerem ativos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Texto sobre simulação */}
                <div className="text-center mb-8 md:mb-16">
                  <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                    Simule seus ganhos em tempo real. E veja o poder da indicação
                  </p>
                </div>

                {/* Calculadora de Ganhos PBI */}
                <div className="mb-8 md:mb-16">
                  <div className="bg-gray-100 rounded-2xl p-3 md:p-8 border border-gray-200 max-w-4xl mx-auto">
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center mb-4">
                        <svg className="h-5 w-5 md:h-8 md:w-8 text-gray-900 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <h3 className="text-lg md:text-3xl font-bold text-gray-900">
                          💰 Calcule seus ganhos com o PBI
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                        Informe o número de indicações para ver seus ganhos potenciais
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-base md:text-lg text-gray-700 mb-4">
                        Com apenas <strong className="text-green-600">10 indicações</strong>, você pode ter:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-white rounded-lg p-4 border border-gray-300">
                          <div className="text-2xl font-bold text-gray-900 mb-2">R$ 608,10</div>
                          <p className="text-sm text-gray-600">Ganho único no 1º mês</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-gray-300">
                          <div className="text-2xl font-bold text-gray-900 mb-2">R$ 69,90/mês</div>
                          <p className="text-sm text-gray-600">Ganho recorrente mensal</p>
                        </div>
                      </div>
                      <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 text-center">
                        <h4 className="text-lg font-bold text-yellow-800 mb-2">
                          🎉 Sua internet ficará GRÁTIS!
                        </h4>
                        <p className="text-sm text-yellow-700">
                          Com 10 indicados, o valor da sua mensalidade já está pago pela recorrência!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Texto sobre multiplicação */}
                <div className="text-center mb-8 md:mb-16">
                  <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                    Agora imagina isso se multiplicando cada vez mais, cada vez mais, e sua rede crescendo todos os meses.
                  </p>
                </div>

                {/* Prova Social - Vídeos */}
                <div className="mb-8 md:mb-16">
                  <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-gray-900">
                    Veja nossos associados recebendo dinheiro
                  </h3>
                  
                  {/* Grid de vídeos de comprovantes */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      'https://hjqtpzoqcpaejgsoxqon.supabase.co/storage/v1/object/public/pbi/video_2025-08-12_11-02-14.mp4',
                      'https://hjqtpzoqcpaejgsoxqon.supabase.co/storage/v1/object/public/pbi/Comprovante%20de%20Saque%20R$150,00%20-%20Federal%20Associados.mp4',
                      'https://hjqtpzoqcpaejgsoxqon.supabase.co/storage/v1/object/public/pbi/VID-20250403-WA0007.mp4',
                      'https://hjqtpzoqcpaejgsoxqon.supabase.co/storage/v1/object/public/pbi/VID-20250404-WA0009.mp4'
                    ].map((videoUrl, index) => (
                      <div key={index} className="relative aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-300">
                        <video
                          className="absolute inset-0 w-full h-full object-contain bg-black"
                          preload="metadata"
                          playsInline
                          controls
                          controlsList="nodownload"
                          onContextMenu={(e) => e.preventDefault()}
                          src={videoUrl}
                        >
                          <style>
                            {`
                              video::-webkit-media-controls-overflow-menu-button,
                              video::-webkit-media-controls-overflow-menu-list,
                              video::-webkit-media-controls-download-button {
                                display: none !important;
                              }
                              video::-webkit-media-controls-enclosure {
                                overflow: hidden !important;
                              }
                              video::-webkit-media-controls-panel {
                                overflow: clip !important;
                              }
                            `}
                          </style>
                        </video>
                        
                        <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                          Comprovante {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Informação sobre saques */}
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-lg p-4 md:p-6 border border-gray-200 max-w-2xl mx-auto">
                      <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        💰 Saque toda quarta-feira
                      </h4>
                      <p className="text-sm md:text-base text-gray-700">
                        Você ingressará em nosso grupo da empresa, onde os nossos líderes tirarão todas as suas dúvidas relacionadas ao programa PBI, como começar, artes para utilizar, toda a instrução que você irá precisar.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Final */}
                <div className="text-center mb-8">
                  <div className="bg-gray-100 rounded-2xl p-6 md:p-8 border border-gray-200 max-w-4xl mx-auto">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">
                      💵 Quanto antes você começar, mais rápido terá internet grátis e renda extra.
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
                      Clique no botão abaixo e ative seu plano agora mesmo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Grupo Exclusivo de Associados */}
              <div className="mt-6">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 md:p-6 border border-green-200">
                    <div className="flex items-center justify-center mb-3">
                      <svg className="h-6 w-6 md:h-8 md:w-8 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                      </svg>
                      <h4 className="text-lg md:text-xl font-bold text-gray-900">Grupo Exclusivo de Associados</h4>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 mb-4">
                      Comunidade ativa 24h por dia!
                    </p>
                  </div>
                  
                  <p className="text-base md:text-lg text-gray-600 mt-4">
                    Quando você se torna um associado, você pode ingressa em nosso grupo da empresa onde os associados troca experiências com outros associados e recebe suporte 24h por dia. Veja alguns depoimentos la de nosso grupo:
                  </p>
                </div>

                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={16}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 24 },
                    1024: { slidesPerView: 4, spaceBetween: 24 }
                  }}
                  loop={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                  }}
                  navigation={true}
                  pagination={{ 
                    clickable: true,
                    dynamicBullets: true
                  }}
                  className="mb-6"
                >
                  {[
                    'https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/grupodowhatsap//photo_2025-07-31_05-31-50.jpg',
                    'https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/grupodowhatsap//photo_2025-07-31_05-31-56.jpg',
                    'https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/grupodowhatsap//photo_2025-07-31_05-32-00.jpg',
                    'https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/grupodowhatsap//photo_2025-07-31_05-32-05.jpg',
                    'https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/grupodowhatsap//photo_2025-07-31_05-32-10.jpg',
                    'https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/grupodowhatsap//photo_2025-07-31_05-32-15.jpg',
                    'https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/grupodowhatsap//photo_2025-07-31_05-32-20.jpg',
                    'https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/grupodowhatsap//photo_2025-07-31_05-32-24.jpg',
                    'https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/grupodowhatsap//photo_2025-07-31_05-32-28.jpg'
                  ].map((imageUrl, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-white rounded-xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                        <div className="w-full aspect-square overflow-hidden rounded-lg mb-2 md:mb-3">
                          <img
                            src={imageUrl}
                            alt={`Depoimento do grupo WhatsApp ${index + 1}`}
                            className="w-full h-full object-contain bg-gray-50"
                            loading="lazy"
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-xs md:text-sm text-gray-600">
                            Depoimento real do nosso grupo
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CadastroModal;