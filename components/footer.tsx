import Link from "next/link"
import Image from "next/image"


export function Footer() {
  return (
    <footer className="bg-slate-900/90 backdrop-blur-sm border-t border-green-700/50 py-8 w-full">
      <div className="container mx-auto max-w-[1220px] px-4">
        {/* Mobile Layout */}
        <div className="block md:hidden space-y-6">
          {/* Logo e Nome do Site */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-800 to-slate-800 rounded-lg flex items-center justify-center">
                <span className="text-yellow-400 font-bold text-lg">AP</span>
              </div>
              <h2 className="text-white font-bold text-xl">ApostasDesportivasPT</h2>
            </div>
          </div>

          {/* 18+ Badge Mobile */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center border-2 border-red-400">
              <span className="text-white font-bold text-sm">18+</span>
            </div>
            <div className="text-slate-300 text-sm text-center">
              <p>Jogo responsável e seguro</p>
              <p>Proibido a menores</p>
            </div>
          </div>

          {/* Navigation Mobile */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 text-slate-300 text-sm">
              <Link href="/politica-privacidade" className="hover:text-yellow-400">
                Política de Privacidade
              </Link>
              <Link href="/politica-cookies" className="hover:text-yellow-400">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:justify-between md:items-center">
          {/* Logo e Nome do Site */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image src="/logo.png" alt="Logo" width={32} height={32} />
              </div>
              <h2 className="text-white font-bold text-xl">ApostasDesportivasPT</h2>
            </div>
          </div>

          {/* Navigation Desktop */}
          <div className="flex items-center gap-6 text-slate-300 text-sm">
            <Link href="/politica-privacidade" className="hover:text-yellow-400">
              Política de Privacidade
            </Link>
            <Link href="/politica-cookies" className="hover:text-yellow-400">
              Política de Cookies
            </Link>
          </div>

          {/* 18+ Badge Desktop */}
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center border-2 border-red-400">
            <span className="text-white font-bold text-sm">18+</span>
          </div>
        </div>

        {/* Section Organizações */}
        <div className="mt-8 pt-6 border-t border-green-700">
          <h4 className="text-white font-bold mb-6 text-center text-sm md:text-base">Organizações</h4>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            <Link
              href="https://www.sicad.pt"
              target="_blank"
              className="bg-white hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img
                src="/icad.png"
                alt="SICAD"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              className="bg-white hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img
                src="/gamecare.svg"
                alt="GamCare"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              className="bg-white hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img
                src="/srij.svg"
                alt="SRIJ - Serviço de Regulação e Inspeção de Jogos"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              className="bg-white hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img
                src="/gamble.webp"
                alt="GambleAware"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              className=" hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img
                src="/jogo2.png"
                alt="Jogo Responsável"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 text-center text-slate-400 text-xs md:text-sm">
          <p>&copy; 2025 ApostasDesportivasPT.com - Todos os direitos reservados</p>
          <p className="mt-2">Comparador independente de sites de apostas desportivas em Portugal</p>
        </div>
      </div>
    </footer>
  )
}
