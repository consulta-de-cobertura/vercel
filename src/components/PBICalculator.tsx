import React, { useState } from 'react';
import { Calculator, TrendingUp, ArrowRight, Calendar } from 'lucide-react';

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

  // Comissão na adesão (87%)
  const ganhoAdesao = planoValor * 0.87 * indicacoes;
  
  // Comissão recorrente: 10% até 69,90, 20% acima
  const comissaoRecorrente = planoValor <= 69.90 ? 0.10 : 0.20;
  const ganhoRecorrente = planoValor * comissaoRecorrente * indicacoes;
  
  // Gerar dados para 12 meses
  const gerarDadosMensais = () => {
    const dados = [];
    let recorrenciaAcumulada = 0;
    
    for (let mes = 1; mes <= 12; mes++) {
      recorrenciaAcumulada += ganhoRecorrente;
      dados.push({
        mes,
        indicacoes,
        ganhoAdesao,
        recorrenciaAcumulada,
        totalMes: ganhoAdesao + recorrenciaAcumulada
      });
    }
    
    return dados;
  };

  const dadosMensais = gerarDadosMensais();
  const totalAno = ganhoAdesao + (ganhoRecorrente * 12);

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

        <div className="flex items-end">
          <div className="bg-gray-700 rounded-lg p-3 text-center w-full border border-gray-600">
            <Calendar className="h-6 w-6 text-white mx-auto mb-1" />
            <div className="text-sm text-gray-300">Projeção</div>
            <div className="text-lg font-bold text-white">12 meses</div>
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
            <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <h4 className="text-xl font-bold text-white">📊 Sua Projeção de Ganhos</h4>
          </div>

          {/* Resumo inicial */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-white mb-2">
                R$ {formatCurrency(ganhoAdesao)}
              </div>
              <p className="text-sm text-gray-300">
                💵 Ganho único no 1º mês com adesão ({indicacoes} indicações)
              </p>
            </div>

            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-white mb-2">
                R$ {formatCurrency(ganhoRecorrente)}/mês
              </div>
              <p className="text-sm text-gray-300">
                ♻️ Ganho recorrente mensal ({indicacoes} indicados ativos)
              </p>
            </div>
          </div>

          {/* Tabela de crescimento mensal */}
          <div className="mb-8">
            <h5 className="text-lg font-bold text-white mb-4 text-center">
              📈 Crescimento Mensal com {indicacoes} Indicações
            </h5>
            
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-600">
                    <tr>
                      <th className="px-3 py-3 text-left text-sm font-semibold text-white">Mês</th>
                      <th className="px-3 py-3 text-left text-sm font-semibold text-white">Indicações</th>
                      <th className="px-3 py-3 text-left text-sm font-semibold text-white">Ganho de Adesão</th>
                      <th className="px-3 py-3 text-left text-sm font-semibold text-white">Ganho Recorrente</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dadosMensais.map((dados, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-600'}>
                        <td className="px-3 py-3 text-sm text-white font-semibold">{dados.mes}º</td>
                        <td className="px-3 py-3 text-sm text-gray-200">{dados.indicacoes}</td>
                        <td className="px-3 py-3 text-sm text-gray-200">R$ {formatCurrency(dados.ganhoAdesao)}</td>
                        <td className="px-3 py-3 text-sm text-gray-200">R$ {formatCurrency(dados.recorrenciaAcumulada)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Total acumulado */}
          <div className="text-center p-6 bg-gray-600 rounded-lg mb-6">
            <div className="text-4xl font-bold text-white mb-2">
              R$ {formatCurrency(totalAno)}
            </div>
            <p className="text-base text-gray-300">
              💰 Total acumulado em 12 meses
            </p>
            <p className="text-sm text-gray-400 mt-2">
              (Adesão única + Recorrência acumulada)
            </p>
          </div>

          {/* Mensagem especial quando internet fica grátis */}
          {indicacoes >= 10 && planoValor <= 69.90 && (
            <div className="bg-yellow-600/20 border border-yellow-500 rounded-lg p-6 text-center">
              <h5 className="text-xl font-bold text-yellow-400 mb-3">
                🎉 Parabéns! Sua internet ficará GRÁTIS!
              </h5>
              <p className="text-yellow-200 mb-4">
                Com {indicacoes} indicados ativos, o valor da sua mensalidade já está pago pela recorrência!
              </p>
              
              <button
                onClick={onRedirect}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse"
              >
                🚀 QUERO COMEÇAR AGORA E TER INTERNET GRÁTIS! <ArrowRight className="inline h-5 w-5 ml-2" />
              </button>
            </div>
          )}

          {/* Mensagem de urgência para todos os casos */}
          {!(indicacoes >= 10 && planoValor <= 69.90) && (
            <div className="bg-gray-600 rounded-lg p-6 text-center">
              <h5 className="text-lg font-bold text-white mb-3">
                ⏰ Quanto antes você começar, mais rápido cresço!
              </h5>
              <p className="text-gray-300 mb-4">
                Visualize o potencial de crescimento exponencial com indicações constantes.
              </p>
              
              <button
                onClick={onRedirect}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚀 QUERO COMEÇAR AGORA! <ArrowRight className="inline h-5 w-5 ml-2" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PBICalculator;