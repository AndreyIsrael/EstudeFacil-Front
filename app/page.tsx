"use client"

import { Download, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#282D33] text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
          <Moon className="h-6 w-6 text-[#2C86FE]" />
          <span className="text-xl font-bold text-[#2C86FE]">Minutin</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-8 py-8 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#FFC727]">Seu tempo vale ouro</p>

        <h1 className="mb-6 text-balance text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          <span className="text-white">Estude na Correria:</span>
          <br />
          <span className="text-[#2C86FE]">Desenvolva seu conhecimento</span>
          <br />
          <span className="text-white">em um </span>
          <span className="text-[#FFC727]">Minutin</span>
        </h1>

        <p className="mx-auto mb-4 max-w-3xl text-balance text-base text-gray-300 md:text-lg">
          Cansado de ter que escolher entre trabalhar e estudar? O Minutin transforma seus intervalos e deslocamentos em
          poderosas sessões de aprendizado.
        </p>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-8 py-8">
        <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">Veja o Minutin em Ação!</h2>

        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-[#354457] to-[#282D33] shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/yvfxRokG7p4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="outline"
            size="lg"
            className="w-full gap-2 border-white bg-transparent text-white hover:bg-white/10 sm:w-auto"
          >
            <Download className="h-5 w-5" />
            BAIXAR GRÁTIS NA APP STORE
          </Button>

          <Button
            size="lg"
            className="w-full gap-2 bg-[#D1D5DB] text-[#282D33] hover:bg-[#E5E7EB] hover:shadow-xl transition-all duration-300 sm:w-auto"
          >
            <Moon className="h-5 w-5" />
            BAIXAR NO GOOGLE PLAY
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-8 py-16">
        <h2 className="mb-16 text-center text-3xl font-bold text-[#2C86FE] md:text-4xl">
          Por que o Minutin é perfeito para quem trabalha?
        </h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-xl bg-[#354457] p-8 transition-transform hover:scale-105">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-[#2C86FE]">Conteúdo Planejado</h3>
            <p className="text-gray-300">
              Conteúdo formatado, sequenciado e planejado para respeitar a sua rotina. Estudando por horas ou por 5
              minutos, o Minutin te ajudará a aproveitar qualquer pausa.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-xl bg-[#354457] p-8 transition-transform hover:scale-105">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-500">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-[#2C86FE]">Fixação Garantida</h3>
            <p className="text-gray-300">
              Fixação garantida de forma intuitiva. Acesse o conteúdo, consolide o aprendizado com verificações
              inteligentes e tire suas dúvidas a qualquer momento com o apoio de nosso Chatbot exclusivo.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-xl bg-[#354457] p-8 transition-transform hover:scale-105">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-[#2C86FE]">Seu Sucesso Mapeado</h3>
            <p className="text-gray-300">
              Sua jornada de aprendizado mapeada. Mantenha a motivação vendo o seu avanço! Garanta um histórico completo
              e uma progressão clara, assegurando a satisfação com o seu desenvolvimento no app.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container mx-auto px-8 py-16">
        <div className="mx-auto max-w-4xl rounded-2xl bg-[#354457] p-8 md:p-12">
          <p className="mb-6 text-center text-lg italic text-gray-200 md:text-xl">
            "Antes eu não conseguia nem abrir o livro. Com o Minutin, uso meus 15 minutos de almoço para estudar. Já
            aprendi mais em um mês do que no último ano!"
          </p>
          <p className="text-center text-[#2C86FE]">— Marina S., Analista de Sistemas e usuária do Minutin.</p>
        </div>
      </section>
    </div>
  )
}
