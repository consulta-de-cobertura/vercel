import React from 'react';
import { DollarSign, Users, TrendingUp, Gift, CheckCircle, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import PBICalculator from './PBICalculator';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PBISectionProps {
  onRedirect: () => void;
}

const PBISection: React.FC<PBISectionProps> = ({ onRedirect }) => {
  const steps = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "Assine seu plano",
      description: "Assine seu plano de internet ilimitada"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Indique para conhecidos",
      description: "Indique para amigos, familiares e conhecidos"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: "Receba comissões",
      description: "Receba 87% de comissão por cada novo associado + 10% a 20% de recorrência mensal"
    }
  ];

  const earningsTable = [
    { indicados: "10", ganho1mes: "Internet grátis + R$ 608,10 de adesão no bolso", recorrente: "+ 10% de mensalidade de cada um deles." },
    { indicados: "20", ganho1mes: "Internet grátis + R$ 1.216,20 de adesão no bolso", recorrente: "+ 10% de mensalidade de cada um deles." }
  ];

  // Vídeos de comprovantes divididos em duas fileiras
  const videoTestimonials = [
    'https://hjqtpzoqcpaejgsoxqon.supabase.co/storage/v1/object/public/pbi/Comprovante%20de%20Saque%20R$150,00%20-%20Federal%20Associados.mp4',
    'https://hjqtpzoqcpaejgsoxqon.supabase.co/storage/v1/object/public/pbi/VID-20250403-WA0007.mp4',
    'https://hjqtpzoqcpaejgsoxqon.supabase.co/storage/v1/object/public/pbi/VID-20250404-WA0009.mp4',
    'https://hjqtpzoqcpaejgsoxqon.supabase.co/storage/v1/object/public/pbi/VID-20250409-WA0004.mp4',
    'https://hjqtpzoqcpaejgsoxqon.supabase.co/storage/v1/object/public/pbi/VID-20250410-WA0442.mp4',
    'https://hjqtpzoqcpaejgsoxqon.supabase.co/storage/v1/object/public/pbi/VID-20250417-WA0003.mp4'
  ];

  const topVideos = videoTestimonials.slice(0, 3);
  const bottomVideos = videoTestimonials.slice(3, 6);

  return (
    <section id="pbi-section" className="py-8 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center justify-center bg-green-100 text-green-600 rounded-full px-4 py-1 text-sm font-medium mb-4">
            <Gift className="h-4 w-4 mr-1" /> PROGRAMA DE INDICAÇÃO
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-white">
            Transforme sua internet ilimitada em uma grande fonte de renda extra e nunca mais pague por internet!
          </h2>
          <p className="text-base md:text-lg text-green-100 max-w-4xl mx-auto mb-4">
            Descubra agora como associados estão <span className="text-yellow-400 font-bold bg-yellow-900/30 px-2 py-1 rounded">faturando de R$ 2.000 a R$ 10.000 por mês, trabalhando de casa</span> com a Federal Associados
          </p>
          <p className="text-base md:text-lg text-green-100 max-w-4xl mx-auto">
            Com o Programa de Indicação da Federal Associados, você garante internet ilimitada e ainda coloca muito dinheiro no bolso todos os meses.
          </p>
        </div>

        {/* Como Funciona */}
        <div className="mb-8 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-white">
            Como Funciona
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-4 md:p-6 text-center border border-gray-700">
                <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  {step.icon}
                </div>
                <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-3 inline-block">
                  Passo {index + 1}
                </div>
                <h4 className="text-base md:text-lg font-semibold mb-2 text-white">{step.title}</h4>
                <p className="text-sm md:text-base text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quando sua internet fica grátis */}
        <div className="mb-8 md:mb-16">
          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 text-white">
              Quando sua internet fica grátis?
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <p className="text-sm md:text-base text-gray-300">
                  <strong>Com apenas 10 indicados ativos no mesmo plano que você usar</strong>, o valor da sua mensalidade já está pago.
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <p className="text-sm md:text-base text-gray-300">
                  <strong>Isso significa: internet grátis para sempre</strong> enquanto eles permanecerem ativos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabela de Ganhos */}
        <div className="mb-8 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-white">
            Exemplo de ganhos no plano de R$ 69,90
          </h3>
          <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-600">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Indicados Ativos</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Ganho no 1º mês</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Ganho recorrente</th>
                  </tr>
                </thead>
                <tbody>
                  {earningsTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-600'}>
                      <td className="px-4 py-3 text-sm md:text-base text-white font-semibold">{row.indicados}</td>
                      <td className="px-4 py-3 text-sm md:text-base text-gray-200">{row.ganho1mes}</td>
                      <td className="px-4 py-3 text-sm md:text-base text-gray-200">{row.recorrente}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Texto adicional sobre multiplicação */}
          <div className="text-center mt-6 md:mt-8">
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12">
              Quer simular seus ganhos personalizados? Use nossa calculadora:
            </p>
          </div>
        </div>

        {/* Calculadora de Ganhos PBI */}
        <div className="mb-8 md:mb-16">
          <PBICalculator onRedirect={onRedirect} />
        </div>

        {/* Texto sobre multiplicação */}
        <div className="text-center mb-8 md:mb-16">
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Agora imagina isso se multiplicando cada vez mais, cada vez mais, e sua rede crescendo todos os meses.
          </p>
        </div>

        {/* Prova Social - Vídeos */}
        <div className="mb-8 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-white">
            Veja nossos associados recebendo dinheiro
          </h3>
          
          {/* Primeira fileira - 3 vídeos */}
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              {topVideos.map((videoUrl, index) => (
                <div key={index} className="relative aspect-square bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700">
                  <video
                    className="absolute inset-0 w-full h-full object-contain bg-black"
                    preload="metadata"
                    playsInline
                    controls
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                    src={videoUrl}
                    onPlay={(e) => {
                      // Quando um vídeo começa a tocar, pausa todos os outros
                      const allVideos = document.querySelectorAll('video');
                      allVideos.forEach(video => {
                        if (video !== e.currentTarget && !video.paused) {
                          video.pause();
                        }
                      });
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
                      `}
                    </style>
                  </video>
                  
                  {/* Overlay com informações */}
                  <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    Comprovante {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Segunda fileira - 3 vídeos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {bottomVideos.map((videoUrl, index) => (
              <div key={index + 3} className="relative aspect-square bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700">
                <video
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                  preload="metadata"
                  playsInline
                  controls
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                  src={videoUrl}
                  onPlay={(e) => {
                    // Quando um vídeo começa a tocar, pausa todos os outros
                    const allVideos = document.querySelectorAll('video');
                    allVideos.forEach(video => {
                      if (video !== e.currentTarget && !video.paused) {
                        video.pause();
                      }
                    });
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
                    `}
                  </style>
                </video>
                
                {/* Overlay com informações */}
                <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  Comprovante {index + 4}
                </div>
              </div>
            ))}
          </div>

          {/* Informação sobre saques */}
          <div className="text-center mt-6 md:mt-8">
            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 max-w-2xl mx-auto">
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                💰 Saque toda quarta-feira
              </h4>
              <p className="text-sm md:text-base text-gray-300">
                Você ingressará em nosso grupo da empresa, onde os nossos líderes tirarão todas as suas dúvidas relacionadas ao programa PBI, como começar, artes para utilizar, toda a instrução que você irá precisar.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
              💵 Quanto antes você começar, mais rápido terá internet grátis e renda extra.
            </h3>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
              Clique no botão abaixo e ative seu plano agora mesmo.
            </p>
            <button
              onClick={onRedirect}
              className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 animate-subtle-pulse hover:scale-105 bg-green-600 hover:bg-green-700 text-white focus:ring-green-600 shadow-lg text-lg py-4 px-8 mb-3"
            >
              Quero participar <ArrowRight className="ml-2 h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PBISection;