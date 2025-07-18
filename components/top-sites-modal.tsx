"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star, Trophy, Medal, Award } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"

export function TopSitesModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [isMobile])

  if (isMobile) return null

  const topThreeSites = bettingSites.slice(0, 3)

  // Reordenar os sites para o layout desejado (1º no centro, 2º à esquerda, 3º à direita)
  const orderedSites = [
    topThreeSites[1], // 2º lugar (esquerda)
    topThreeSites[0], // 1º lugar (centro)
    topThreeSites[2], // 3º lugar (direita)
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-transparent border-none shadow-none text-white max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-yellow-400">TOP RANKING</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {orderedSites.map((site, index) => {
            // Determinar o rank real (não o índice do array reordenado)
            const realRank = index === 0 ? 2 : index === 1 ? 1 : 3

            // Determinar se é o primeiro lugar (posição central)
            const isFirstPlace = realRank === 1

            // Ícone baseado na posição
            const rankIcon = () => {
              switch (realRank) {
                case 1:
                  return <Trophy className="w-6 h-6 text-yellow-400" />
                case 2:
                  return <Medal className="w-5 h-5 text-yellow-300" />
                case 3:
                  return <Award className="w-5 h-5 text-yellow-300" />
                default:
                  return null
              }
            }

            return (
              <div
                key={site.id}
                className={`${
                  isFirstPlace
                    ? "bg-slate-800/90 backdrop-blur-sm border-2 border-yellow-400 w-full md:w-[38%] order-first md:order-none"
                    : "bg-slate-800/90 backdrop-blur-sm border border-green-700/50 w-full md:w-[31%]"
                } rounded-lg p-4 text-center relative`}
              >
                {/* Badge de posição */}
                <div
                  className={`absolute -top-3 -left-3 rounded-full flex items-center justify-center ${
                    isFirstPlace ? "w-10 h-10 bg-yellow-400 text-black" : "w-8 h-8 bg-green-700 text-white"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <span className="font-bold">{realRank}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <img
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    className={`${isFirstPlace ? "w-[200px] h-[120px]" : "w-[180px] h-[100px]"} object-contain mx-auto`}
                  />
                </div>

                <h4 className="font-bold text-lg text-white mb-3">{site.name}</h4>

                <div className="mb-4">
                  <div className="text-green-400 font-bold text-sm mb-2">BÓNUS</div>
                  <p className="text-yellow-400 font-semibold text-sm">{site.bonus}</p>
                </div>

                <div className="mb-4">
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
                  <div className="text-xl font-bold text-yellow-400">
                    {(site.rating * 2).toFixed(1)}
                    <span className="text-sm text-slate-300">/10</span>
                  </div>
                  <div className="text-slate-300 text-xs">({site.reviews})</div>
                </div>

                <Button
                  asChild
                  className={`${
                    isFirstPlace
                      ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                      : "bg-gradient-to-r from-green-600 to-red-600 hover:from-green-500 hover:to-red-500 text-white"
                  } font-bold w-full`}
                >
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    APOSTAR
                  </a>
                </Button>
              </div>
            )
          })}
        </div>

        <div className="text-center pt-6">
          <Button
            onClick={() => setIsOpen(false)}
            variant="outline"
            className="border-green-600 text-white hover:bg-green-800"
          >
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
