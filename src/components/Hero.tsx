import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { ArrowRight, Volume2, Play, Pause, VolumeX } from 'lucide-react';

interface HeroProps {
  onRedirect: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRedirect }) => {
  const [typedText, setTypedText] = useState('');
  const [showAudioIcon, setShowAudioIcon] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  
  // REFERÊNCIAS SEPARADAS PARA MOBILE E DESKTOP
  const videoRefMobile = useRef<HTMLVideoElement>(null);
  const videoRefDesktop = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const fullText = "Conheça a Federal Associados: uma associação autorizada com planos de internet ilimitados, sem burocracia, que vai muito além da conexão. Descubra como mais de 100.000 brasileiros estão economizando todo mês. Com internet ILIMITADA de verdade";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingDelay = 30; // Reduzido para ser mais rápido
    
    const typeNextCharacter = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeNextCharacter, typingDelay);
      }
    };

    setTimeout(typeNextCharacter, 500); // Reduzido delay inicial de 1000ms para 500ms

    return () => {
      currentIndex = fullText.length;
    };
  }, []);

  // OBSERVER PARA PARAR VÍDEO QUANDO SAI DA VIEWPORT
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // Parar ambos os vídeos quando sai da viewport
            const videoMobile = videoRefMobile.current;
            const videoDesktop = videoRefDesktop.current;
            
            if (videoMobile && !videoMobile.paused) {
              videoMobile.pause();
            }
            if (videoDesktop && !videoDesktop.paused) {
              videoDesktop.pause();
            }
            
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Configuração para MOBILE
  useEffect(() => {
    const video = videoRefMobile.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.muted = true;
      video.volume = 0.8;
      setIsMuted(true);
      setVideoError(false);
    };

    const handleError = () => {
      console.error('Erro ao carregar vídeo mobile');
      setVideoError(true);
      setShowVideo(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      video.currentTime = 0;
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    video.muted = true;
    video.volume = 0.8;
    video.preload = 'metadata';
    video.playsInline = true;

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Configuração para DESKTOP
  useEffect(() => {
    const video = videoRefDesktop.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.muted = true;
      video.volume = 0.8;
      setIsMuted(true);
      setVideoError(false);
    };

    const handleError = () => {
      console.error('Erro ao carregar vídeo desktop');
      setVideoError(true);
      setShowVideo(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      video.currentTime = 0;
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    video.muted = true;
    video.volume = 0.8;
    video.preload = 'metadata';
    video.playsInline = true;

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleVideoClickMobile = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const video = videoRefMobile.current;
    if (!video) return;

    try {
      if (showAudioIcon || isMuted) {
        // Primeira vez - ativar som
        video.currentTime = 0;
        video.muted = false;
        setIsMuted(false);
        setShowAudioIcon(false);
        
        await video.play();
        setIsPlaying(true);
      } else {
        // Já tem som - toggle play/pause
        if (video.paused || video.ended) {
          if (video.ended) {
            video.currentTime = 0;
          }
          await video.play();
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      }
    } catch (error) {
      console.error('Erro ao controlar vídeo mobile:', error);
      
      try {
        video.muted = true;
        setIsMuted(true);
        video.currentTime = 0;
        await video.play();
        setIsPlaying(true);
      } catch (fallbackError) {
        console.error('Erro no fallback mobile:', fallbackError);
        setVideoError(true);
        setShowVideo(false);
      }
    }
  };

  const handleVideoClickDesktop = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const video = videoRefDesktop.current;
    if (!video) return;

    try {
      if (showAudioIcon || isMuted) {
        // Primeira vez - ativar som
        video.currentTime = 0;
        video.muted = false;
        setIsMuted(false);
        setShowAudioIcon(false);
        
        await video.play();
        setIsPlaying(true);
      } else {
        // Já tem som - toggle play/pause
        if (video.paused || video.ended) {
          if (video.ended) {
            video.currentTime = 0;
          }
          await video.play();
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      }
    } catch (error) {
      console.error('Erro ao controlar vídeo desktop:', error);
      
      try {
        video.muted = true;
        setIsMuted(true);
        video.currentTime = 0;
        await video.play();
        setIsPlaying(true);
      } catch (fallbackError) {
        console.error('Erro no fallback desktop:', fallbackError);
        setVideoError(true);
        setShowVideo(false);
      }
    }
  };

  const toggleMuteDesktop = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const video = videoRefDesktop.current;
    if (!video) return;

    try {
      video.muted = !video.muted;
      setIsMuted(video.muted);
      
      if (!video.muted && showAudioIcon) {
        setShowAudioIcon(false);
      }
      
      if (!video.muted && video.paused) {
        await video.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Erro ao alterar volume desktop:', error);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-gray-900 pt-16"
    >
      <div className="container mx-auto px-4 pt-2 pb-4 md:pt-4 md:pb-8">
        {/* Imagem no topo */}
        {/* Título movido para cima da imagem */}
        <div className="text-center mb-4">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-tight animate-pulse-attention text-gray-900">
            Sua internet não dura o mês todo? <span className="text-red-600 font-extrabold">86% dos brasileiros dizem que não.</span> Você gostaria de ter internet ilimitada de verdade 4G/5G para navegar o mês inteiro <span className="block sm:inline">sem preocupações?</span>
          </h1>
        </div>

        <div className="w-full max-w-3xl mx-auto -mb-2 relative">
          <img
            src="https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/imagens//photo_2025-07-19_10-29-51.jpg"
            alt="Federal Associados - Conectividade sem limites"
            className="w-full h-auto"
            loading="eager"
          />
          
        </div>

        {/* Nova seção entre imagem e vídeo */}
        <div className="text-center mb-6 md:mb-8 mt-6 md:mt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
            O Problema que Afeta 86% dos Brasileiros
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
              Se você chegou até aqui, provavelmente você está passando ou já passou por essa frustração de ver sua internet 
              "acabar" no meio do mês. Segundo pesquisas recentes, <span className="text-red-600 font-bold">86% dos brasileiros afirmam que sua internet não 
              dura o mês todo</span>. Isso não é coincidência - é um problema sistêmico que as operadoras tradicionais criaram 
              para lucrar mais.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
              Mas e se eu te dissesse que existe uma solução que já está transformando a vida de mais de <span className="text-blue-600 font-bold">100.000 pessoas 
              no Brasil</span>? Uma alternativa que oferece internet verdadeiramente ilimitada, sem pegadinhas, por um preço 
              justo?
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-6 md:mt-8">
              Veja Como Funciona na Prática
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="w-full">
            {/* VÍDEO MOBILE - SEMPRE CLICÁVEL */}
            <div className="md:hidden mb-4 relative">
              {showVideo && !videoError && (
                <div className="relative p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl shadow-2xl" style={{ maxWidth: '800px', margin: '10px auto' }}>
                  <video 
                    ref={videoRefMobile}
                    autoPlay 
                    muted 
                    loop
                    playsInline
                    preload="metadata"
                    poster="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    className="w-full rounded-xl shadow-inner"
                    onContextMenu={(e) => e.preventDefault()}
                  >
                    <source src="https://wjfmlsgkoehvnhapicrv.supabase.co/storage/v1/object/public/video//federal.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeo.
                  </video>
                </div>
              )}
              
              {/* OVERLAY SEMPRE PRESENTE NO MOBILE - PRIMEIRA VEZ */}
              {(showAudioIcon || isMuted) && showVideo && !videoError && (
                <div 
                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-black/60 rounded-xl"
                  onClick={handleVideoClickMobile}
                  style={{
                    maxWidth: '800px', 
                    margin: '10px auto',
                    borderRadius: '12px'
                  }}
                >
                  <div className="text-white text-center mb-6">
                    <p className="text-sm md:text-base">Clique aqui</p>
                  </div>
                  
                  <div className="bg-blue-600 rounded-xl p-4 mb-6 border-2 border-white/30">
                    <Volume2 className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-white text-center">
                    <p className="text-sm md:text-base">para ativar o som</p>
                  </div>
                </div>
              )}

              {/* OVERLAY SEMPRE PRESENTE NO MOBILE - APÓS ATIVAR SOM */}
              {!showAudioIcon && !isMuted && showVideo && !videoError && (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={handleVideoClickMobile}
                  style={{
                    maxWidth: '800px', 
                    margin: '10px auto',
                    borderRadius: '12px',
                    background: 'transparent'
                  }}
                >
                  {/* Só mostra o botão se estiver pausado */}
                  {!isPlaying && (
                    <div className="bg-black/60 backdrop-blur-sm rounded-full p-4 shadow-xl">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  )}
                </div>
              )}

              {/* Fallback quando vídeo não carrega - MOBILE */}
              {(videoError || !showVideo) && (
                <div className="relative">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-white text-center"
                    style={{
                      width: '100%', 
                      maxWidth: '800px', 
                      margin: '10px auto', 
                      display: 'block'
                    }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold mb-4">🎥 Vídeo de Apresentação</h3>
                    <p className="text-base md:text-lg mb-4">Conheça a Federal Associados e descubra como milhares de brasileiros estão economizando com internet ilimitada!</p>
                    <button
                      onClick={handleDirectRedirect}
                      className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Ver Mais Detalhes
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* SUBTÍTULO ABAIXO DO VÍDEO */}
            <p className="text-lg md:text-xl mb-4 text-gray-700 leading-relaxed text-center md:text-left">
              {typedText}
            </p>
            
            {/* BOTÃO ABAIXO DO SUBTÍTULO */}
            <div className="flex flex-col sm:flex-row gap-4 mb-2 justify-center md:justify-start">
              <Button onClick={onRedirect} variant="secondary" size="lg" className="sm:w-auto w-full button-glow text-xl py-4 px-8">
                Quero internet ilimitada <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
          
          {/* COLUNA DIREITA - DESKTOP ONLY */}
          <div className="relative hidden md:block">
            {/* VÍDEO - DESKTOP COM REF SEPARADA */}
            <div className="mb-4 relative">
              {showVideo && !videoError && (
                <div className="relative p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl shadow-2xl">
                  <video 
                    ref={videoRefDesktop}
                    autoPlay 
                    muted 
                    loop
                    playsInline
                    preload="metadata"
                    poster="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    className="w-full rounded-xl shadow-inner"
                    onContextMenu={(e) => e.preventDefault()}
                  >
                    <source src="https://wjfmlsgkoehvnhapicrv.supabase.co/storage/v1/object/public/video//federal.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeo.
                  </video>
                </div>
              )}
              
              {/* Overlay clicável para controlar o vídeo - DESKTOP */}
              {(showAudioIcon || isMuted) && showVideo && !videoError && (
                <div 
                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-black/60 rounded-2xl"
                  onClick={handleVideoClickDesktop}
                >
                  <div className="text-white text-center mb-6">
                    <p className="text-base">Clique aqui</p>
                  </div>
                  
                  <div className="bg-blue-600 rounded-xl p-4 mb-6 border-2 border-white/30">
                    <Volume2 className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-white text-center">
                    <p className="text-base">para ativar o som</p>
                  </div>
                </div>
              )}

              {/* Controles quando vídeo está com som - DESKTOP */}
              {!showAudioIcon && !isMuted && showVideo && !videoError && (
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    onClick={handleVideoClickDesktop}
                    className="bg-black/60 backdrop-blur-sm rounded-full p-3 shadow-xl hover:bg-black/80 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8 text-white" />
                    ) : (
                      <Play className="h-8 w-8 text-white" />
                    )}
                  </button>
                  <button
                    onClick={toggleMuteDesktop}
                    className="bg-black/60 backdrop-blur-sm rounded-full p-3 shadow-xl hover:bg-black/80 transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="h-8 w-8 text-white" />
                    ) : (
                      <Volume2 className="h-8 w-8 text-white" />
                    )}
                  </button>
                </div>
              )}

              {/* Fallback quando vídeo não carrega - DESKTOP */}
              {(videoError || !showVideo) && (
                <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl p-8 text-white text-center border border-blue-500/30">
                  <h3 className="text-2xl font-bold mb-4">🎥 Vídeo de Apresentação</h3>
                  <p className="text-lg mb-4">Conheça a Federal Associados e descubra como milhares de brasileiros estão economizando com internet ilimitada!</p>
                  <button
                    onClick={onRedirect}
                    className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Ver Mais Detalhes
                  </button>
                </div>
              )}
            </div>

            {/* CARD DE BENEFÍCIOS - DESKTOP */}
            <div className="bg-gray-100 rounded-xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-gray-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Chega de passar raiva com internet ruim. Aqui na Federal Associados você conta com</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Internet ilimitada 4G/5G</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Ligações ilimitadas para todo o Brasil</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Cadastro sem consulta ao SPC/SERASA</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Sem fidelidade</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Navegação o mês inteiro, sem surpresas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;