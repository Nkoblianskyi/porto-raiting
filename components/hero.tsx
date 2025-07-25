export function Hero() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("pt-PT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section className="py-2 px-4 w-full">
      <div
        className="container mx-auto max-w-[1220px] max-h-[300px] flex items-center relative bg-white/90"

      >
        <div className="absolute inset-0 z-0 p-4"></div>
        <div className="text-center relative z-10 w-full p-4 py-4">
          <h1 className="text-xl md:text-4xl font-bold mb-4">
            <span className="text-green-600">TOP</span> <span className="text-slate-800">CLASSIFICAÇÃO</span>{" "}
            <span className="text-yellow-600">APOSTAS</span> <span className="text-green-700">DESPORTIVAS</span>{" "}
            <span className="text-slate-800">PORTUGAL</span>
          </h1>

          <div className="text-slate-600 mb-4 text-xs md:text-sm">Última atualização: {formattedDate}</div>

          <p className="text-xs md:text-base text-slate-700 max-w-4xl mx-auto leading-relaxed mb-6">
            A nossa classificação especializada dos melhores sites de apostas desportivas em Portugal. Analisamos bónus,
            odds, segurança e qualidade do serviço para o ajudar a escolher a melhor plataforma de apostas.
          </p>

          <div className="flex items-center justify-center gap-4 md:gap-8 text-xs md:text-sm">
            <div className="flex items-center space-x-2">
              <img src="/flag.png" alt="Portugal" className="w-6 h-4 md:w-9 md:h-6" />
              <span className="text-slate-800 font-semibold">LICENCIADO</span>
            </div>

            <span className="text-slate-800 font-semibold">SEGURO</span>

            <span className="text-red-600 font-bold">18+</span>
          </div>
        </div>
      </div>
    </section>
  )
}
