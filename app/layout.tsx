import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ApostasDesportivasPT - Melhores Sites de Apostas Desportivas Portugal 2025",
  description:
    "Classificação dos melhores sites de apostas desportivas em Portugal. Comparativo especializado com bónus, avaliações e odds para escolher a melhor plataforma de apostas.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body
        className={inter.className}
        style={{
          backgroundImage: "url(/bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="min-h-screen w-full">
          {children}
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  )
}
