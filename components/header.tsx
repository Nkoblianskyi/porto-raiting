import Link from "next/link"
import Image from "next/image"
export function Header() {
  return (
    <header className="bg-slate-900/90 backdrop-blur-sm border-b border-green-700/50 relative z-50 w-full">
      <div className="container mx-auto max-w-[1220px] px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src="/logo.png" alt="Logo" width={32} height={32} />
            </div>
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="text-green-600">Apostas</span>
              <span className="text-red-600">Desportivas</span>
              <span className="text-white">PT</span>
            </h1>
          </Link>

          {/* Badges de Segurança */}
          <div className="hidden md:flex items-center gap-3">
            {/* Badge Jogo Seguro */}
            <div className="flex items-center gap-2 bg-green-800/80 px-3 py-2 rounded-lg border border-green-600">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-white text-sm font-semibold hidden sm:inline">JOGO SEGURO</span>
              <span className="text-white text-xs font-semibold sm:hidden">SEGURO</span>
            </div>

            {/* Badge 18+ */}
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center border-2 border-red-400">
              <span className="text-white font-bold text-sm">18+</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
