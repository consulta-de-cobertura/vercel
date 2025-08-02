import React, { useState, useEffect } from 'react';
import { Calendar, User, Clock, ArrowRight, Play, Wifi } from 'lucide-react';

interface BlogHeroProps {
  onRedirect: () => void;
}

const BlogHero: React.FC<BlogHeroProps> = ({ onRedirect }) => {
  const [readingTime] = useState('8 min de leitura');
  const [publishDate] = useState('15 de Janeiro, 2025');

  return (
    <section className="bg-white pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb estilo blog */}
        <nav className="text-sm text-gray-500 mb-6">
          <span>Início</span> / <span>Telecomunicações</span> / <span className="text-blue-600">Internet Ilimitada</span>
        </nav>

        {/* Título principal estilo artigo */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="inline-flex items-center bg-red-100 text-red-600 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Clock className="h-4 w-4 mr-2" />
            INVESTIGAÇÃO EXCLUSIVA 2025
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Por Que 86% dos Brasileiros Dizem Que Sua Internet "Não Dura o Mês Todo"? 
            <span className="block text-blue-600 mt-2">A Verdade Que as Operadoras Não Querem Que Você Saiba</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Investigamos por 6 meses como mais de 100.000 brasileiros conseguiram internet verdadeiramente ilimitada por menos de R$ 70/mês. O que descobrimos vai chocar você.
          </p>

          {/* Meta informações do artigo */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 mb-8">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>Por Equipe Federal Associados</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{readingTime}</span>
            </div>
          </div>

          {/* CTA sutil no topo */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200 mb-8">
            <p className="text-gray-700 mb-4">
              <strong>⚡ Quer pular direto para a solução?</strong> Mais de 100.000 pessoas já resolveram esse problema.
            </p>
            <button
              onClick={onRedirect}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Ver Solução Agora
            </button>
          </div>
        </div>

        {/* Imagem principal do artigo */}
        <div className="max-w-4xl mx-auto mb-12">
          <img
            src="https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/imagens//photo_2025-07-19_10-29-51.jpg"
            alt="Brasileiros frustrados com internet limitada - Investigação Federal Associados"
            className="w-full rounded-xl shadow-lg"
          />
          <p className="text-sm text-gray-500 text-center mt-3">
            Pesquisa revela: 86% dos brasileiros enfrentam limitação de internet mensalmente
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;