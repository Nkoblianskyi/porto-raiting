import { Star, Trophy, Medal, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { BettingSite } from "@/lib/mock-data"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  // Função para determinar qual badge mostrar (apenas uma)
  const getPrimaryBadge = () => {
    if (site.isTopRating) return { text: "MELHOR AVALIAÇÃO", color: "bg-green-600 text-white border-2 border-red-500" }
    if (site.isTopLine) return { text: "LINHA SUPERIOR", color: "bg-red-600 text-white border-2 border-green-500" }
    if (site.isPopular) return { text: "POPULAR", color: "bg-green-700 text-white border-2 border-red-500" }
    if (site.isTrending) return { text: "TENDÊNCIA", color: "bg-red-700 text-white border-2 border-green-500" }
    return null
  }

  const primaryBadge = getPrimaryBadge()
  const isFirstItem = rank === 1

  // Elementos decorativos esportivos baseados no rank
  const getSportIcon = () => {
    switch (rank) {
      case 1:
        return <Trophy className="absolute top-6 right-6 w-8 h-8 text-yellow-400 opacity-30" />
      case 2:
        return <Medal className="absolute top-6 right-6 w-8 h-8 text-yellow-400 opacity-30" />
      case 3:
        return <Award className="absolute top-6 right-6 w-8 h-8 text-yellow-400 opacity-30" />
      default:
        return null
    }
  }

  return (
    <a href={site.url} target="_blank" rel="noopener noreferrer" className="block group">
      <div
        className={`relative rounded-lg p-6 transition-all duration-300 group-hover:scale-[1.02] ${
          isFirstItem
            ? "bg-gradient-to-r from-green-900 to-red-900 border-2 border-yellow-400 shadow-lg shadow-yellow-400/20"
            : "bg-gradient-to-r from-slate-800 to-slate-900 border border-green-700"
        }`}
      >
        {/* Elementos decorativos esportivos */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-green-800/10"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-red-800/10"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-yellow-400/5 rotate-45"></div>

          {/* Padrão de bolas de futebol estilizadas */}
          <div className="absolute top-10 left-10 w-3 h-3 rounded-full bg-white/5"></div>
          <div className="absolute top-20 left-30 w-2 h-2 rounded-full bg-white/5"></div>
          <div className="absolute bottom-15 right-20 w-4 h-4 rounded-full bg-white/5"></div>
        </div>

        {/* Ícone esportivo baseado no rank */}
        {getSportIcon()}

        {/* Badge - apenas uma por cartão */}
        {primaryBadge && (
          <div className="absolute -top-3 left-4 z-20">
            <Badge className={`${primaryBadge.color} px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-lg`}>
              {primaryBadge.text}
            </Badge>
          </div>
        )}

        <div className="relative z-10">
          {/* Desktop and Tablet Layout */}
          <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6 pt-4">
            {/* Rank Number */}
            <div
              className={`w-12 h-12 font-bold rounded-full flex items-center justify-center text-xl flex-shrink-0 ${
                isFirstItem
                  ? "bg-gradient-to-r from-green-600 to-red-600 text-white border-2 border-yellow-400"
                  : "bg-gradient-to-r from-green-800 to-red-800 text-white"
              }`}
            >
              {rank}
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 bg-white/10 p-2 rounded-lg">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="w-[120px] h-[72px] lg:w-[160px] lg:h-[96px] object-contain"
              />
            </div>

            {/* Bonus */}
            <div className="flex-1 text-center">
              <div className="text-green-400 font-bold mb-1 text-xl">BÓNUS</div>
              <p className="text-yellow-400 font-semibold leading-tight text-2xl">{site.bonus}</p>
            </div>

            {/* Rating */}
            <div className="text-center flex-shrink-0">
              <div className="text-xl lg:text-2xl font-bold text-yellow-400 mb-1">
                {(site.rating * 2).toFixed(1)}
                <span className="text-sm text-slate-300">/10</span>
              </div>
              <div className="flex items-center justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 stroke-green-500 stroke-[1.5px] ${
                      i < site.stars ? "text-green-500 fill-green-500" : "text-transparent"
                    }`}
                  />
                ))}
              </div>
              <div className="text-slate-300 text-xs">
                <span>({site.reviews})</span>
              </div>
            </div>

            {/* Button */}
            <div className="flex-shrink-0">
              <Button className="bg-gradient-to-r from-green-600 to-red-600 hover:from-green-500 hover:to-red-500 text-white font-bold px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base border border-yellow-400/50">
                OBTER BÓNUS
              </Button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden pt-4">
            {/* Top row: Logo left, Bonus right */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-shrink-0 bg-white/10 p-2 rounded-lg">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[120px] h-[72px] object-contain"
                />
              </div>
              <div className="flex-1 text-center pl-4">
                <div className="text-green-400 font-bold text-sm mb-1">BÓNUS</div>
                <p className="text-yellow-400 font-semibold leading-tight text-lg">{site.bonus}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col items-center">
                <span className="text-yellow-400 font-bold text-lg mb-1">
                  {(site.rating * 2).toFixed(1)}
                  <span className="text-sm text-slate-300">/10</span>
                </span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 stroke-green-500 stroke-[1.5px] ${
                        i < site.stars ? "text-green-500 fill-green-500" : "text-transparent"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-slate-300 text-sm">
                <span>({site.reviews})</span>
              </div>
            </div>

            {/* Button */}
            <Button className="bg-gradient-to-r from-green-600 to-red-600 hover:from-green-500 hover:to-red-500 text-white font-bold w-full py-3 border border-yellow-400/50">
              OBTER BÓNUS
            </Button>
          </div>
        </div>
      </div>
    </a>
  )
}
