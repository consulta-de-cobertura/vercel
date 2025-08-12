import React, { useState } from 'react';
import { Calculator, TrendingUp, ArrowRight, Calendar } from 'lucide-react';

interface PBICalculatorProps {
  onRedirect: () => void;
}

const PBICalculator: React.FC<PBICalculatorProps> = ({ onRedirect }) => {
  const [indicacoesMensais, setIndicacoesMensais] = useState<number>(0);
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
    if (!indicacoesMensais || indicacoesMensais <= 0) {
      alert('Digite um número válido de indicações mensais.');
      return;
    }
    setShowResult(true);
  };

  // Função para formatar valores em Real brasileiro
  const formatCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  // Calcular simulação de 12 meses
  const calcularSimulacao = () => {
    const comissaoAdesao = 0.87;
    const comissaoRecorrente = planoValor <= 69.90 ? 0.10 : 0.20;
    
    const ganhoAdesaoMensal = planoValor * comissaoAdesao * indicacoesMensais;
    const ganhoRecorrentePorIndicado = planoValor * comissaoRecorrente;
    
    const simulacao = [];
    let indicadosAcumulados = 0;
    let recorrenciaAcumulada = 0;
    let totalAcumuladoGeral = 0;

    for (let mes = 1; mes <= 12; mes++) {
      indicadosAcumulados += indicacoesMensais;
      recorrenciaAcumulada = indicadosAcumulados * ganhoRecorrentePorIndicado;
      
      const totalMes = ganhoAdesaoMensal + recorrenciaAcumulada;
      totalAcumuladoGeral += totalMes;

      simulacao.push({
        mes,
        indicadosAcumulados,
        ganhoAdesao: ganhoAdesaoMensal,
        recorrencia: recorrenciaAcumulada,
        totalMes,
        totalAcumulado: totalAcumuladoGeral
      });
    }

    return simulacao;
  };

  const simulacao = showResult && indicacoesMensais > 0 ? calcularSimulacao() : [];
  const internetGratis = indicacoesMensais >= 10 && planoValor <= 69.90;

  return (
    <div className="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 max-w-6xl mx-auto">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <Calculator className="h-8 w-8 text-white mr-3" />
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            💰 Calcule seus ganhos com o PBI
          </h3>
        </div>
        <p className="text-gray-300 mb-6">
          Informe quantas indicações você pretende fazer por mês e veja seu crescimento ao longo de 1 ano
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Indicações por mês
          </label>
          <input
            type="number"
            value={indicacoesMensais || ''}
            onChange={(e) => setIndicacoesMensais(parseInt(e.target.value) || 0)}
            placeholder="Quantas indicações por mês?"
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
      </div>

      <div className="text-center mb-6">
        <button
          onClick={calcular}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-lg"
        >
          <Calculator className="h-5 w-5 inline mr-2" />
          Simular Crescimento
        </button>
      </div>

      {showResult && indicacoesMensais > 0 && (
        <div className="space-y-6">
          {/* Resumo Inicial */}
          <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
            <div className="text-center mb-4">
              <Calendar className="h-8 w-8 text-white mx-auto mb-2" />
              <h4 className="text-xl font-bold text-white">📊 Resumo da Simulação</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-white mb-2">
                  {indicacoesMensais}
                </div>
                <p className="text-sm text-gray-300">
                  Indicações por mês
                </p>
              </div>

              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-white mb-2">
                  R$ {formatCurrency(planoValor * 0.87 * indicacoesMensais)}
                </div>
                <p className="text-sm text-gray-300">
                  Ganho de adesão mensal
                </p>
              </div>

              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-white mb-2">
                  {planoValor <= 69.90 ? '10%' : '20%'}
                </div>
                <p className="text-sm text-gray-300">
                  Comissão recorrente
                </p>
              </div>
            </div>
          </div>

          {/* Tabela de Crescimento Mensal */}
          <div className="bg-gray-700 rounded-xl overflow-hidden border border-gray-600">
            <div className="bg-green-600 p-4">
              <h4 className="text-xl font-bold text-white text-center">
                🚀 Projeção de Crescimento - 12 Meses
              </h4>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-600">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Mês</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Indicados Ativos</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Adesão</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Recorrência</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Total do Mês</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Acumulado</th>
                  </tr>
                </thead>
                <tbody>
                  {simulacao.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-600'}>
                      <td className="px-4 py-3 text-sm font-semibold text-white">{item.mes}º</td>
                      <td className="px-4 py-3 text-sm text-gray-200">{item.indicadosAcumulados}</td>
                      <td className="px-4 py-3 text-sm text-green-400">R$ {formatCurrency(item.ganhoAdesao)}</td>
                      <td className="px-4 py-3 text-sm text-blue-400">R$ {formatCurrency(item.recorrencia)}</td>
                      <td className="px-4 py-3 text-sm font-bold text-yellow-400">R$ {formatCurrency(item.totalMes)}</td>
                      <td className="px-4 py-3 text-sm font-bold text-white">R$ {formatCurrency(item.totalAcumulado)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Destaque dos Resultados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gradient-to-r from-green-600 to-green-700 rounded-lg">
              <div className="text-3xl font-bold text-white mb-2">
                R$ {formatCurrency(simulacao[11]?.totalAcumulado || 0)}
              </div>
              <p className="text-white">
                💰 Total acumulado em 12 meses
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
              <div className="text-3xl font-bold text-white mb-2">
                R$ {formatCurrency(simulacao[11]?.recorrencia || 0)}
              </div>
              <p className="text-white">
                ♻️ Recorrência mensal no 12º mês
              </p>
            </div>
          </div>

          {/* Mensagem de Internet Grátis */}
          {internetGratis && (
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6 text-center">
              <div className="mb-4">
                <h5 className="text-2xl font-bold text-white mb-2">
                  🎉 Parabéns! Sua internet ficará GRÁTIS!
                </h5>
                <p className="text-white text-lg">
                  Com {indicacoesMensais >= 10 ? indicacoesMensais : '10'} indicados ativos, o valor da sua mensalidade já está pago pela recorrência!
                </p>
              </div>
              
              <button
                onClick={onRedirect}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse text-lg"
              >
                🚀 QUERO COMEÇAR AGORA E TER INTERNET GRÁTIS! <ArrowRight className="inline h-6 w-6 ml-2" />
              </button>
            </div>
          )}

          {/* Mensagem de Urgência */}
          <div className="bg-gray-600 rounded-xl p-6 text-center border border-gray-500">
            <h5 className="text-xl font-bold text-white mb-3">
              ⏰ Quanto antes você começar, mais rápido cresço!
            </h5>
            <p className="text-gray-300 mb-4">
              Cada mês que você espera é dinheiro que deixa de ganhar. Veja como seus ganhos crescem exponencialmente com o tempo.
            </p>
            
            {!internetGratis && (
              <button
                onClick={onRedirect}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚀 QUERO COMEÇAR AGORA! <ArrowRight className="inline h-5 w-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PBICalculator;