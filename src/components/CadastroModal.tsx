import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { X, Zap, CheckCircle, ExternalLink } from 'lucide-react';

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
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Realizar Cadastro Agora
                </button>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">✅ Garantias:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Frete grátis para todo o Brasil</li>
                  <li>• Sem consulta ao SPC/SERASA</li>
                  <li>• 7 dias de garantia total</li>
                  <li>• Suporte 24h via WhatsApp</li>
                </ul>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CadastroModal;