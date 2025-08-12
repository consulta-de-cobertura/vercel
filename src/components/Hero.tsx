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
      className="relative bg-black text-gray-100 pt-16"
    >
      <div className="container mx-auto px-4 pt-2 pb-4 md:pt-4 md:pb-8">
        {/* Imagem no topo */}
        {/* Título movido para cima da imagem */}
        <div className="text-center mb-4">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-tight animate-pulse-attention text-gray-100">
            Sua internet não dura o mês todo? <span className="text-gray-100 font-extrabold">86% dos brasileiros dizem que não.</span> Você gostaria de ter internet ilimitada de verdade 4G/5G para navegar o mês inteiro <span className="block sm:inline">sem preocupações?</span>
          </h1>
          
          {/* Botão "Sim! eu quero" */}
          <div className="mt-6">
            <button
              onClick={onRedirect}
              className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 animate-subtle-pulse hover:scale-105 bg-green-600 hover:bg-green-700 text-white focus:ring-green-600 shadow-lg text-xl py-4 px-8 button-glow"
            >
              Sim, eu quero <ArrowRight className="ml-2 h-6 w-6" />
            </button>
            
            {/* Botão "Indique e Ganhe" */}
            <div className="mt-4">
              <button
                onClick={onRedirect}
                className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 animate-subtle-pulse hover:scale-105 bg-green-600 hover:bg-green-700 text-white focus:ring-green-600 shadow-lg text-xl py-4 px-8 button-glow"
              >
                Indique e Ganhe <ArrowRight className="ml-2 h-6 w-6" />
              </button>
            </div>
          </div>
          
          {/* CARD DE BENEFÍCIOS - MOBILE ONLY */}
          <div className="mt-6 md:hidden">
            <div className="bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-gray-100">Chega de passar raiva com internet ruim. Aqui na Federal Associados você conta com</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-lg">✅</span>
                  <span className="text-gray-300">Internet ilimitada 4G/5G</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-lg">✅</span>
                  <span className="text-gray-300">Ligações ilimitadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-lg">✅</span>
                  <span className="text-gray-300">Internet grátis todo mês</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-lg">✅</span>
                  <span className="text-gray-300">Sem consulta ao SPC/SERASA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-lg">✅</span>
                  <span className="text-gray-300">Sem fidelidade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-lg">✅</span>
                  <span className="text-gray-300">Internet o mês todo, sem surpresas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-lg">✅</span>
                  <span className="text-gray-300">Transforme sua internet em renda extra</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-gray-700 rounded-lg border border-gray-600">
                <p className="text-center text-gray-300 text-sm">
                  Continue lendo esta página e descubra como
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Nova seção entre imagem e vídeo */}
        <div className="text-center mb-6 md:mb-8 mt-6 md:mt-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
              Se você chegou até aqui, provavelmente você está passando ou já passou por essa frustração de ver sua internet 
              "acabar" no meio do mês. Segundo pesquisas recentes, <span className="text-red-600 font-bold">86% dos brasileiros afirmam que sua internet não 
              dura o mês todo</span>. Isso não é coincidência - é um problema sistêmico que as operadoras tradicionais criaram 
              para lucrar mais.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
              Mas e se eu te dissesse que existe uma solução que já está transformando a vida de mais de <span className="text-gray-100 font-bold">100.000 pessoas 
              no Brasil</span>? Uma alternativa que oferece internet verdadeiramente ilimitada, sem pegadinhas, por um preço 
              justo? Descubra agora mesmo como mais de 100.000 brasileiros já estão economizando todo mês. Com internet ILIMITADA de verdade
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="w-full">
            <div className="flex flex-col sm:flex-row gap-4 mb-2 justify-center md:justify-start">
              <Button onClick={onRedirect} variant="secondary" size="lg" className="sm:w-auto w-full button-glow text-xl py-4 px-8 bg-green-600 hover:bg-green-700">
                Quero internet ilimitada <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
          
          {/* COLUNA DIREITA - DESKTOP ONLY */}
          <div className="relative hidden md:block">
            {/* CARD DE BENEFÍCIOS - DESKTOP */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-gray-100">Chega de passar raiva com internet ruim. Aqui na Federal Associados você conta com</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-lg">✅</span>
                  <span className="text-gray-300">Internet ilimitada 4G/5G</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-lg">✅</span>
                  <span className="text-gray-300">Ligações ilimitadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-lg">✅</span>
                  <span className="text-gray-300">Internet grátis todo mês</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-lg">✅</span>
                  <span className="text-gray-300">Sem consulta ao SPC/SERASA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-lg">✅</span>
                  <span className="text-gray-300">Sem fidelidade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-lg">✅</span>
                  <span className="text-gray-300">Internet o mês todo, sem surpresas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-lg">✅</span>
                  <span className="text-gray-300">Transforme sua internet em renda extra</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-gray-700 rounded-lg border border-gray-600">
                <p className="text-center text-gray-300 text-sm">
                  Continue lendo esta página e descubra como
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;