import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { bettingSites } from "@/lib/mock-data"

export function OurChoiceSection() {
  // Отримуємо перший сайт з мок-даних (найкращий за рейтингом)
  const ourChoice = bettingSites[0]

  return (
    <section className="py-4 px-4 w-full">
      <div className="container mx-auto max-w-[1220px] bg-white rounded-lg">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">A Nossa Escolha</h2>
            <p className="text-slate-600 text-lg">
              Após análise rigorosa, esta é a nossa recomendação principal para apostadores portugueses
            </p>
          </div>

          {/* Cartão Principal */}
          <div className="bg-gradient-to-r from-green-900 to-red-900 border-2 border-yellow-400 shadow-lg shadow-yellow-400/20 rounded-lg p-8 mb-8">
            <div className="text-center mb-6">
              <div className="bg-yellow-400 text-black px-4 py-2 rounded font-bold text-sm inline-block mb-4">
                ESCOLHA DA REDAÇÃO
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Logo */}
              <div className="text-center">
                <div className="bg-white p-4 rounded border mb-4 inline-block">
                  <img
                    src={ourChoice.logo || "/placeholder.svg"}
                    alt={ourChoice.name}
                    className="w-[200px] h-[120px] object-contain mx-auto"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">{ourChoice.name}</h3>
              </div>

              {/* Informações Principais */}
              <div className="text-center">
                <div className="mb-4">
                  <div className="text-green-400 font-bold text-lg mb-2">BÓNUS</div>
                  <p className="text-yellow-400 font-bold text-xl">{ourChoice.bonus}</p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 stroke-green-500 stroke-[1.5px] ${
                          i < ourChoice.stars ? "text-green-500 fill-green-500" : "text-transparent"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-yellow-400">
                    {(ourChoice.rating * 2).toFixed(1)}
                    <span className="text-sm text-slate-300">/10</span>
                  </div>
                  <div className="text-slate-300 text-sm">({ourChoice.reviews} avaliações)</div>
                </div>
              </div>

              {/* Botão de Ação */}
              <div className="text-center">
                <Button
                  asChild
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 text-lg mb-4"
                >
                  <a href={ourChoice.url} target="_blank" rel="noopener noreferrer">
                    APOSTAR AGORA
                  </a>
                </Button>
                <p className="text-slate-300 text-sm">Registo rápido e seguro</p>
              </div>
            </div>
          </div>

          {/* Vantagens */}
          <div className="bg-slate-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Porquê a Nossa Escolha?</h3>

            <div className="grid md:grid-cols-2 gap-8 text-slate-600">
              <div>
                <h4 className="text-slate-800 font-bold mb-2">Segurança e Licenciamento</h4>
                <p className="mb-4">
                  Licença SRIJ válida, encriptação SSL e fundos dos jogadores totalmente protegidos.
                </p>

                <h4 className="text-slate-800 font-bold mb-2">Odds Competitivas</h4>
                <p className="mb-4">Algumas das melhores odds do mercado português, especialmente na Liga Portugal.</p>

                <h4 className="text-slate-800 font-bold mb-2">Pagamentos Rápidos</h4>
                <p>MB WAY, Multibanco e levantamentos processados em menos de 24 horas.</p>
              </div>

              <div>
                <h4 className="text-slate-800 font-bold mb-2">Suporte ao Cliente</h4>
                <p className="mb-4">Atendimento em português por chat, email e telefone todos os dias.</p>

                <h4 className="text-slate-800 font-bold mb-2">Bónus e Promoções</h4>
                <p className="mb-4">Termos justos, rollover baixo e promoções regulares para jogadores ativos.</p>

                <h4 className="text-slate-800 font-bold mb-2">Experiência do Utilizador</h4>
                <p>Interface intuitiva, app móvel excelente e streaming ao vivo de qualidade.</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded text-center">
              <p className="text-red-600 text-sm font-semibold">
                Jogue com responsabilidade. Apenas maiores de 18 anos. O jogo pode causar dependência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
