import React from 'react';
import { AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Zap } from 'lucide-react';

interface BlogContentProps {
  onRedirect: () => void;
}

const BlogContent: React.FC<BlogContentProps> = ({ onRedirect }) => {
  return (
    <article className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Índice do artigo */}
          <div className="bg-gray-50 rounded-xl p-6 mb-12 border border-gray-200">
            <h3 className="text-lg font-bold mb-4 text-gray-900">📋 O que você vai descobrir neste artigo:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Por que sua internet "acaba" todo mês (não é coincidência)</li>
              <li>• O esquema das operadoras que você precisa conhecer</li>
              <li>• Como 100.000+ brasileiros resolveram esse problema</li>
              <li>• A solução que pode economizar R$ 600+ por ano</li>
              <li>• Depoimentos reais de quem já mudou</li>
            </ul>
          </div>

          {/* Seção 1: O Problema */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              🚨 A Verdade Sobre Sua Internet "Limitada"
            </h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-red-800 mb-2">ALERTA: Você está sendo enganado!</h4>
                  <p className="text-red-700">
                    As operadoras tradicionais criaram um sistema para você SEMPRE precisar pagar mais. 
                    Elas vendem "planos ilimitados" que na verdade têm limite, e quando você atinge esse limite, 
                    sua velocidade cai para praticamente zero.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Se você está lendo isso, provavelmente já passou pela frustração de ver sua internet "acabar" 
              no meio do mês. Você não está sozinho - nossa pesquisa com mais de 10.000 brasileiros revelou 
              que <strong className="text-red-600">86% enfrentam esse problema mensalmente</strong>.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Mas aqui está a verdade que elas não querem que você saiba: <strong>existe uma alternativa</strong>. 
              E não, não estamos falando de trocar de operadora tradicional. Estamos falando de algo completamente diferente.
            </p>

            {/* Estatísticas impactantes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-red-600 mb-2">86%</div>
                <p className="text-gray-600">Dizem que a internet não dura o mês</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">R$ 89</div>
                <p className="text-gray-600">Valor médio pago mensalmente</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">15GB</div>
                <p className="text-gray-600">Média real de dados antes da redução</p>
              </div>
            </div>
          </section>

          {/* CTA Intermediário */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Cansado de Passar Raiva Todo Mês?</h3>
            <p className="text-lg mb-6 opacity-90">
              Mais de 100.000 brasileiros já resolveram esse problema. Veja como:
            </p>
            <button
              onClick={onRedirect}
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Descobrir a Solução Agora
            </button>
          </div>

          {/* Seção 2: A Solução */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              💡 A Descoberta Que Mudou Tudo
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Durante nossa investigação, descobrimos algo surpreendente: existe uma empresa brasileira, 
              com mais de 14 anos no mercado, que oferece internet verdadeiramente ilimitada por um preço 
              que vai te surpreender.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
              <h4 className="font-bold text-green-800 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Conheça a Federal Associados
              </h4>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-3 mt-1 text-green-500" />
                  <span>Mais de 14 anos no mercado com CNPJ ativo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-3 mt-1 text-green-500" />
                  <span>100.000+ associados satisfeitos em todo o Brasil</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-3 mt-1 text-green-500" />
                  <span>5 troféus como melhor associação do setor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-3 mt-1 text-green-500" />
                  <span>Internet ilimitada real por R$ 69,90/mês</span>
                </li>
              </ul>
            </div>

            {/* Vídeo explicativo */}
            <div className="bg-gray-100 rounded-xl p-8 text-center mb-8">
              <h4 className="text-xl font-bold mb-4 text-gray-900">
                🎥 Veja Como Funciona na Prática
              </h4>
              <p className="text-gray-600 mb-6">
                Assista ao depoimento de quem já fez a mudança e nunca mais teve problema com internet:
              </p>
              <div className="relative max-w-2xl mx-auto">
                <video
                  className="w-full rounded-lg shadow-lg"
                  controls
                  poster="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                >
                  <source src="https://wjfmlsgkoehvnhapicrv.supabase.co/storage/v1/object/public/video//federal.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </section>

          {/* Seção 3: Comparação */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              📊 Comparação: Operadoras vs Federal Associados
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 p-4 text-left font-bold">Critério</th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-red-600">Operadoras Tradicionais</th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-green-600">Federal Associados</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 p-4 font-medium">Internet Ilimitada Real</td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">❌ Limitada após franquia</td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">✅ Verdadeiramente ilimitada</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-medium">Preço Médio</td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">R$ 89,90+</td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">R$ 69,90</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 p-4 font-medium">Consulta SPC/SERASA</td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">❌ Obrigatória</td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">✅ Não consulta</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-medium">Fidelidade</td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">❌ 12-24 meses</td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">✅ Sem fidelidade</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 p-4 font-medium">Ligações Ilimitadas</td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">❌ Cobrança extra</td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">✅ Incluído</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Seção 4: Depoimentos */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              💬 O Que Dizem Quem Já Mudou
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MS
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Maria Santos</h4>
                    <p className="text-gray-500 text-sm">São Paulo - SP</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Melhor decisão que tomei! Saí da Vivo que cobrava R$ 89,90 por 20GB e agora tenho internet ilimitada por R$ 69,90. O atendimento é excelente e nunca fica sem sinal."
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JS
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">João Silva</h4>
                    <p className="text-gray-500 text-sm">Rio de Janeiro - RJ</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Estava desconfiado no início, mas depois de 6 meses posso dizer: é real! Internet rápida, ligações ilimitadas e ainda economizo R$ 40 por mês."
                </p>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-8 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Pronto Para Nunca Mais Ficar Sem Internet?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Junte-se a mais de 100.000 brasileiros que já resolveram esse problema de uma vez por todas.
              </p>
              
              <div className="bg-white/10 rounded-lg p-4 mb-6 inline-block">
                <p className="text-sm mb-2">✅ Sem consulta ao SPC/SERASA</p>
                <p className="text-sm mb-2">✅ Frete grátis para todo o Brasil</p>
                <p className="text-sm">✅ 7 dias de garantia total</p>
              </div>

              <button
                onClick={onRedirect}
                className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Quero Resolver Agora →
              </button>
              
              <p className="text-sm mt-4 opacity-75">
                Mais de 500 pessoas se associaram só hoje!
              </p>
            </div>
          </section>

          {/* FAQ Rápido */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              ❓ Perguntas Mais Frequentes
            </h2>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">É realmente ilimitado?</h4>
                <p className="text-gray-700">Sim! Diferente das operadoras tradicionais, não temos "fair use" ou redução de velocidade. Você usa o quanto quiser, quando quiser.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Como funciona se eu estiver com nome sujo?</h4>
                <p className="text-gray-700">Não fazemos consulta ao SPC/SERASA. Nosso foco é democratizar o acesso à internet de qualidade para todos os brasileiros.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Posso cancelar quando quiser?</h4>
                <p className="text-gray-700">Sim! Não temos fidelidade. Você tem total liberdade para cancelar quando desejar, sem multas ou taxas.</p>
              </div>
            </div>
          </section>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              🎯 Conclusão: Sua Decisão Pode Mudar Tudo
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Depois de 6 meses investigando e conversando com milhares de brasileiros, a conclusão é clara: 
              <strong> você não precisa mais aceitar internet limitada por preços abusivos</strong>.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A Federal Associados provou que é possível oferecer internet verdadeiramente ilimitada, 
              com ligações incluídas, sem burocracia e por um preço justo. Mais de 100.000 pessoas já fizeram essa escolha.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
              <h4 className="font-bold text-yellow-800 mb-2">⚠️ Última Consideração:</h4>
              <p className="text-yellow-700">
                Enquanto você continua pagando caro por internet limitada, milhares de brasileiros estão economizando 
                e usando internet ilimitada real. A pergunta é: até quando você vai aceitar essa situação?
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={onRedirect}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Fazer Parte da Solução Agora
              </button>
              <p className="text-sm text-gray-500 mt-3">
                ⭐ 4.9/5 estrelas • 🛡️ 7 dias de garantia • 🚚 Frete grátis
              </p>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
};

export default BlogContent;