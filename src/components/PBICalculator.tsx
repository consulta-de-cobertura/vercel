import React, { useState } from 'react';
import { Calculator, TrendingUp, ArrowRight, Calendar, Target } from 'lucide-react';

interface PBICalculatorProps {
  onRedirect: () => void;
}

const PBICalculator: React.FC<PBICalculatorProps> = ({ onRedirect }) => {
  const [indicacoes, setIndicacoes] = useState<number>(0);
  const [planoValor, setPlanoValor] = useState<number>(69.90);
  const [showResult, setShowResult] = useState(false);

  const planos = [
    { value: 29.90, label: "VIVO 15GB SEM LIGAÇÃO - R$ 29,90" },
    { value: 49.90, label: "VIVO 40GB SEM LIGAÇÃO - R$ 49,90" },
    { value: 49.90, label: "TIM 40GB COM LIGAÇÃO - R$ 49,90" },
    { value: 49.90, label: "CLARO 40GB COM LIGAÇÃO - R$ 49,90" },
    { value: 69.90, label: "VIVO 60GB SEM LIGAÇÃO - R$ 69,90" },
    { value: 69.90, label: "VIVO 80GB COM LIGAÇÃO - R$ 69,90" },
    { value: 69.90, label: "TIM 100GB COM LIGAÇÃO - R$ 69,90" },
    { value: 69.90, label: "CLARO 80GB COM LIGAÇÃO - R$ 69,90" },
    { value: 99.90, label: "VIVO 150GB SEM LIGAÇÃO - R$ 99,90" },
    { value: 99.90, label: "VIVO 150GB COM LIGAÇÃO - R$ 99,90" },
    { value: 149.90, label: "VIVO 200GB COM LIGAÇÃO - R$ 149,90" },
    { value: 159.90, label: "TIM 200GB SEM LIGAÇÃO - R$ 159,90" },
    { value: 199.90, label: "VIVO 300GB COM LIGAÇÃO - R$ 199,90" },
    { value: 199.90, label: "TIM 300GB SEM LIGAÇÃO - R$ 199,90" },
    { value: 279.90, label: "VIVO 400GB COM LIGAÇÃO - R$ 279,90" }
  ];

  const calcular = () => {
    if (!indicacoes || indicacoes <= 0) {
      alert('Digite um número válido de indicações.');
      return;
    }
    setShowResult(true);
  };

  // Comissão recorrente: 10% até 69,90, 20% acima
  const comissaoRecorrente = planoValor <= 69.90 ? 0.10 : 0.20;

  // Gerar dados para 12 meses
  const gerarDadosAnuais = () => {
    const dados = [];
    let totalIndicadosAcumulados = 0;
    let totalAcumuladoGeral = 0;

    for (let mes = 1; mes <= 12; mes++) {
      // Novas indicações do mês
      const novasIndicacoes = indicacoes;
      totalIndicadosAcumulados += novasIndicacoes;

      // Ganho de adesão (87% apenas das novas indicações)
      const ganhoAdesao = planoValor * 0.87 * novasIndicacoes;

      // Ganho recorrente (de todos os indicados acumulados)
      const ganhoRecorrente = planoValor * comissaoRecorrente * totalIndicadosAcumulados;

      // Total do mês
      const totalMes = ganhoAdesao + ganhoRecorrente;
      totalAcumuladoGeral += totalMes;

      dados.push({
        mes,
        novasIndicacoes,
        totalIndicados: totalIndicadosAcumulados,
        ganhoAdesao,
        ganhoRecorrente,
        totalMes,
        totalAcumulado: totalAcumuladoGeral
      });
    }

    return dados;
  };

  const dadosAnuais = showResult ? gerarDadosAnuais() : [];

  // Função para formatar valores em Real brasileiro
  const formatCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <Calculator className="h-8 w-8 text-white mr-3" />
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            💰 Calcule seus ganhos com o PBI
          </h3>
        </div>
        <p className="text-gray-300 mb-6">
          Informe o número de indicações, o plano e o tempo para ver seus ganhos com o PBI
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Indicações no mês
          </label>
          <input
            type="number"
            value={indicacoes || ''}
            onChange={(e) => setIndicacoes(parseInt(e.target.value) || 0)}
            placeholder="Indicações no mês"
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            min="1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Plano escolhido
          </label>
          <select
            value={planoValor}
            onChange={(e) => setPlanoValor(parseFloat(e.target.value))}
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {planos.map((plano, index) => (
              <option key={index} value={plano.value}>
                {plano.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Simulação
          </label>
          <div className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-green-400" />
            <span>Projeção de 12 meses</span>
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <button
          onClick={calcular}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-lg"
        >
          <Calculator className="h-5 w-5 inline mr-2" />
          Calcular Ganhos
        </button>
      </div>

      {showResult && indicacoes > 0 && (
        <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
          <div className="text-center mb-4">
            <TrendingUp className="h-8 w-8 text-white mx-auto mb-2" />
            <h4 className="text-xl font-bold text-white">📊 Simulação de Crescimento</h4>
            <p className="text-sm text-gray-300 mt-2">
              Baseado em {indicacoes} indicações por mês no plano de R$ {formatCurrency(planoValor)}
            </p>
          </div>

          {/* Resumo do primeiro mês */}
          <div className="mb-6 p-4 bg-gray-800 rounded-lg border border-gray-600">
            <h5 className="text-lg font-bold text-white mb-4 text-center">
              <Target className="inline h-5 w-5 mr-2" />
              Resumo do 1º Mês
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-green-400 mb-1">
                  {indicacoes}
                </div>
                <p className="text-xs text-gray-300">Indicações Ativas</p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400 mb-1">
                  R$ {formatCurrency(dadosAnuais[0]?.totalMes || 0)}
                </div>
                <p className="text-xs text-gray-300">Ganho no 1º Mês</p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400 mb-1">
                  R$ {formatCurrency(dadosAnuais[0]?.ganhoRecorrente || 0)}
                </div>
                <p className="text-xs text-gray-300">Recorrente Mensal</p>
              </div>
            </div>
          </div>

          {/* Tabela de crescimento anual */}
          <div className="mb-6">
            <h5 className="text-lg font-bold text-white mb-4 text-center">
              📈 Projeção de Crescimento (12 meses)
            </h5>
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-green-600">
                    <tr>
                      <th className="px-3 py-2 text-left text-white font-semibold">Mês</th>
                      <th className="px-3 py-2 text-left text-white font-semibold">Indicados</th>
                      <th className="px-3 py-2 text-left text-white font-semibold">Adesão</th>
                      <th className="px-3 py-2 text-left text-white font-semibold">Recorrente</th>
                      <th className="px-3 py-2 text-left text-white font-semibold">Total Mês</th>
                      <th className="px-3 py-2 text-left text-white font-semibold">Acumulado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dadosAnuais.map((dados, index) => (
                      <tr key={dados.mes} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-600'}>
                        <td className="px-3 py-2 text-white font-semibold">{dados.mes}º</td>
                        <td className="px-3 py-2 text-gray-200">{dados.totalIndicados}</td>
                        <td className="px-3 py-2 text-gray-200">R$ {formatCurrency(dados.ganhoAdesao)}</td>
                        <td className="px-3 py-2 text-gray-200">R$ {formatCurrency(dados.ganhoRecorrente)}</td>
                        <td className="px-3 py-2 text-green-400 font-semibold">R$ {formatCurrency(dados.totalMes)}</td>
                        <td className="px-3 py-2 text-yellow-400 font-bold">R$ {formatCurrency(dados.totalAcumulado)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Destaques do crescimento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-gray-800 rounded-lg border border-green-500">
              <div className="text-2xl font-bold text-green-400 mb-2">
                R$ {formatCurrency(dadosAnuais[5]?.totalAcumulado || 0)}
              </div>
              <p className="text-sm text-gray-300">
                💰 Total em 6 meses
              </p>
            </div>

            <div className="text-center p-4 bg-gray-800 rounded-lg border border-yellow-500">
              <div className="text-2xl font-bold text-yellow-400 mb-2">
                R$ {formatCurrency(dadosAnuais[11]?.totalAcumulado || 0)}
              </div>
              <p className="text-sm text-gray-300">
                🎯 Total em 1 ano
              </p>
            </div>

            <div className="text-center p-4 bg-gray-800 rounded-lg border border-purple-500">
              <div className="text-2xl font-bold text-purple-400 mb-2">
                R$ {formatCurrency(dadosAnuais[11]?.ganhoRecorrente || 0)}
              </div>
              <p className="text-sm text-gray-300">
                ♻️ Recorrente no 12º mês
              </p>
            </div>
          </div>

          {/* Mensagem de urgência */}
          <div className="p-4 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500 rounded-lg mb-4">
            <div className="text-center">
              <h5 className="text-lg font-bold text-red-400 mb-2">
                ⚡ QUANTO ANTES VOCÊ COMEÇAR, MAIS RÁPIDO CRESCE!
              </h5>
              <p className="text-sm text-red-200">
                Cada mês que você adia é dinheiro que deixa de ganhar. Veja como o crescimento é exponencial!
              </p>
            </div>
          </div>

          {/* Verificação de internet grátis */}
          {indicacoes >= Math.ceil(planoValor / (planoValor * comissaoRecorrente)) && (
            <div className="p-4 bg-yellow-600/20 border border-yellow-500 rounded-lg mb-4">
              <div className="text-center">
                <h5 className="text-lg font-bold text-yellow-400 mb-2">
                  🎉 SUA INTERNET FICARÁ GRÁTIS JÁ NO 1º MÊS!
                </div>
                <p className="text-sm text-yellow-200">
                  Com {indicacoes} indicações mensais, sua recorrência já cobre o valor da mensalidade!
                </p>
              </div>
            </div>
          )}

          {/* CTA de urgência */}
          <div className="text-center">
            <button
              onClick={onRedirect}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse text-lg"
            >
              🚀 QUERO COMEÇAR AGORA E ACELERAR MEU CRESCIMENTO! <ArrowRight className="inline h-6 w-6 ml-2" />
            </button>
            <p className="text-sm text-gray-400 mt-2">
              ⏰ Cada dia que passa é oportunidade perdida de crescimento exponencial
            </p>
          </div>
        </div>
      )}

      {/* Exemplo estático para quando não há resultado */}
      {!showResult && (
        <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
          <h4 className="text-lg font-bold text-white mb-4 text-center">
            💡 Exemplo: 10 indicações mensais no plano R$ 69,90
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-gray-800 rounded-lg">
              <div className="text-xl font-bold text-green-400">R$ 1.308,10</div>
              <p className="text-xs text-gray-300">1º mês</p>
            </div>
            <div className="p-3 bg-gray-800 rounded-lg">
              <div className="text-xl font-bold text-yellow-400">R$ 15.697,20</div>
              <p className="text-xs text-gray-300">6º mês</p>
            </div>
            <div className="p-3 bg-gray-800 rounded-lg">
              <div className="text-xl font-bold text-purple-400">R$ 62.788,80</div>
              <p className="text-xs text-gray-300">12º mês</p>
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            Preencha os campos acima para ver sua simulação personalizada
          </p>
        </div>
      )}
    </div>
  );
};

export default PBICalculator;