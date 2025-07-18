export function InfoSections() {
  return (
    <section className="py-2 px-4 w-full">
      <div className="container mx-auto max-w-[1220px] bg-white/90 rounded-lg">
        <div className="p-8 space-y-8">
          {/* Como selecionamos os melhores sites */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-800 mb-8">A Nossa Metodologia de Avaliação</h3>
            <div className="text-slate-600 space-y-6 text-lg leading-relaxed">
              <p className="text-xl text-green-600 font-semibold">
                O ApostasDesportivasPT é o seu guia de confiança para encontrar as melhores casas de apostas em
                Portugal. A nossa equipa de especialistas avalia cada operador através de critérios rigorosos e
                transparentes.
              </p>

              <div className="space-y-8 mt-8">
                <div>
                  <h4 className="text-xl font-bold text-green-600 mb-4">Segurança e Licenciamento</h4>
                  <div className="text-left space-y-3 text-base">
                    <p>• Verificação obrigatória da licença SRIJ (Serviço de Regulação e Inspeção de Jogos)</p>
                    <p>• Análise da proteção de dados pessoais e financeiros dos utilizadores</p>
                    <p>• Avaliação dos sistemas de encriptação e segurança das transações</p>
                    <p>• Verificação da segregação de fundos dos jogadores</p>
                    <p>• Controlo das medidas anti-fraude e verificação de identidade</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-green-600 mb-4">Bónus e Promoções</h4>
                  <div className="text-left space-y-3 text-base">
                    <p>• Análise detalhada dos termos e condições dos bónus de boas-vindas</p>
                    <p>• Avaliação da justiça dos requisitos de rollover e prazos</p>
                    <p>• Comparação do valor real das ofertas promocionais</p>
                    <p>• Verificação da transparência na comunicação das promoções</p>
                    <p>• Análise das promoções contínuas para jogadores regulares</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-green-600 mb-4">Mercados e Odds</h4>
                  <div className="text-left space-y-3 text-base">
                    <p>• Comparação das odds em eventos da Liga Portugal e competições internacionais</p>
                    <p>• Avaliação da variedade de mercados disponíveis por evento</p>
                    <p>• Análise da cobertura de desportos populares em Portugal</p>
                    <p>• Verificação da disponibilidade de apostas ao vivo</p>
                    <p>• Teste da rapidez de atualização das odds durante os jogos</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-green-600 mb-4">Experiência do Utilizador</h4>
                  <div className="text-left space-y-3 text-base">
                    <p>• Teste completo da facilidade de registo e verificação de conta</p>
                    <p>• Avaliação da navegabilidade do site e aplicação móvel</p>
                    <p>• Análise da qualidade do streaming ao vivo quando disponível</p>
                    <p>• Verificação da rapidez de carregamento das páginas</p>
                    <p>• Teste da funcionalidade de cash out e outras ferramentas</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-green-600 mb-4">Métodos de Pagamento</h4>
                  <div className="text-left space-y-3 text-base">
                    <p>• Verificação da disponibilidade de MB WAY, Multibanco e cartões</p>
                    <p>• Teste real dos tempos de processamento de depósitos e levantamentos</p>
                    <p>• Análise das taxas aplicadas em transações</p>
                    <p>• Avaliação dos limites mínimos e máximos de transação</p>
                    <p>• Verificação da segurança dos métodos de pagamento</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-green-600 mb-4">Apoio ao Cliente</h4>
                  <div className="text-left space-y-3 text-base">
                    <p>• Teste do atendimento em português através de chat, email e telefone</p>
                    <p>• Avaliação da rapidez de resposta e qualidade das soluções</p>
                    <p>• Verificação da disponibilidade do suporte (horários e dias)</p>
                    <p>• Análise da competência técnica da equipa de apoio</p>
                    <p>• Teste da resolução de problemas reais de utilizadores</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-xl font-bold text-green-700 mb-4">Sistema de Classificação</h4>
                <p className="text-slate-800 mb-4">
                  Cada casa de apostas recebe uma pontuação de 1 a 5 estrelas baseada em:
                </p>
                <div className="space-y-2 text-base text-left">
                  <p>
                    <strong className="text-green-600">Segurança (30%)</strong> - Licenciamento, proteção de dados e
                    fundos
                  </p>
                  <p>
                    <strong className="text-green-600">Bónus (25%)</strong> - Valor e condições das ofertas
                  </p>
                  <p>
                    <strong className="text-green-600">Odds (20%)</strong> - Competitividade e variedade de mercados
                  </p>
                  <p>
                    <strong className="text-green-600">Usabilidade (15%)</strong> - Facilidade de uso e funcionalidades
                  </p>
                  <p>
                    <strong className="text-green-600">Suporte (10%)</strong> - Qualidade do atendimento ao cliente
                  </p>
                </div>
              </div>

              <p className="text-lg font-semibold text-slate-800 mt-8 bg-slate-100 p-4 rounded-lg">
                <strong>Compromisso de Independência:</strong> As nossas avaliações são 100% independentes. Não somos
                influenciados por parcerias comerciais e atualizamos regularmente as nossas análises para garantir
                informação sempre atual e fidedigna.
              </p>
            </div>
          </div>

          {/* Jogo Responsável */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Jogo Responsável em Portugal</h3>
            <div className="text-slate-600 space-y-6 text-lg leading-relaxed">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-red-600 font-bold text-xl mb-4">ATENÇÃO: O jogo pode causar dependência</p>
                <p className="text-slate-800">
                  As apostas desportivas devem ser sempre encaradas como uma forma de entretenimento, nunca como uma
                  fonte de rendimento. Aposte apenas o que pode permitir-se perder.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-green-700 font-bold mb-3">Sinais de Jogo Saudável</h4>
                  <ul className="text-left space-y-2 text-sm">
                    <li>• Define limites de tempo e dinheiro antes de apostar</li>
                    <li>• Vê as apostas como entretenimento, não investimento</li>
                    <li>• Para quando atinge os limites definidos</li>
                    <li>• Não persegue perdas com apostas maiores</li>
                    <li>• Mantém outras atividades e interesses</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h4 className="text-red-600 font-bold mb-3">Sinais de Alerta</h4>
                  <ul className="text-left space-y-2 text-sm">
                    <li>• Apostar mais do que pode permitir-se</li>
                    <li>• Mentir sobre o tempo ou dinheiro gasto</li>
                    <li>• Perseguir perdas com apostas maiores</li>
                    <li>• Negligenciar responsabilidades familiares/profissionais</li>
                    <li>• Sentir ansiedade quando não pode apostar</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <h4 className="text-blue-700 font-bold mb-4">Onde Procurar Ajuda em Portugal</h4>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p>
                      <strong className="text-slate-800">Linha SOS Jogador:</strong>
                    </p>
                    <p className="text-green-600 text-xl font-bold">213 950 840</p>
                    <p className="text-sm">Segunda a Sexta: 10h-20h</p>
                  </div>
                  <div>
                    <p>
                      <strong className="text-slate-800">SICAD Online:</strong>
                    </p>
                    <p className="text-green-600">www.sicad.pt</p>
                    <p className="text-sm">Recursos e apoio especializado</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-slate-800 font-bold mb-4">Ferramentas de Proteção Disponíveis</h4>
                <p className="text-left">
                  Todas as casas de apostas licenciadas em Portugal oferecem ferramentas de jogo responsável:
                  <strong className="text-green-600">
                    {" "}
                    limites de depósito, limites de tempo, auto-exclusão temporária ou permanente, e acesso direto a
                    recursos de ajuda.
                  </strong>{" "}
                  Use estas ferramentas sempre que necessário.
                </p>
              </div>

              <p className="text-center text-red-600 font-bold text-lg mt-8 bg-red-50 p-4 rounded-lg">
                PROIBIDO A MENORES DE 18 ANOS
                <br />O jogo é exclusivo para adultos e pode causar dependência
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
