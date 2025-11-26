import { Download, Moon } from "lucide-react"
import { Button } from "../components/ui/button"
import Image from "next/image"

export default function MinutinLandingPage() {
  return (
    <div className="min-h-screen bg-[#0f1419] text-white">
      {/* Logo Header */}
      <header className="absolute top-6 left-6 z-10">
        <Image src="/images/image.png" alt="Minutin Logo" width={200} height={60} className="h-12 w-auto" />
      </header>

      {/* Hero Section with Video */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="text-center mb-8">
          <p className="text-yellow-400 text-sm font-medium tracking-wider mb-4">SEU TEMPO VALE OURO</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            Estude na Correria: <span className="text-blue-400">Desenvolva seu conhecimento</span> em um{" "}
            <span className="text-yellow-400">Minutin</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            Cansado de ter que escolher entre trabalhar e estudar? O Minutin transforma seus intervalos e deslocamentos
            em poderosas sessões de aprendizado.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">Veja o Minutin em Ação!</h2>
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
            {/* YouTube Embed Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-red-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
           <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/yvfxRokG7p4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
              </div>
            </div>
            {/* 
            Para adicionar um vídeo do YouTube, substitua o conteúdo acima com:
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/SEU_VIDEO_ID"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            */}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-base">
            <Download className="mr-2 h-5 w-5" />
            BAIXAR GRÁTIS NA APP STORE
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-6 text-base"
          >
            <Moon className="mr-2 h-5 w-5" />
            BAIXAR NO GOOGLE PLAY
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
          Por que o Minutin é perfeito para quem trabalha?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="bg-[#1a2332] rounded-lg p-8 text-center border border-gray-800 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20">
            <div className="w-16 h-16 mx-auto mb-6 text-5xl">⏱️</div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Conteúdo Planejado</h3>
            <p className="text-gray-300 leading-relaxed">
              Conteúdo formatado, sequenciado e planejado para respeitar a sua rotina. Estudando por horas ou por 5
              minutos, o Minutin te ajudará a aproveitar qualquer pausa.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#1a2332] rounded-lg p-8 text-center border border-gray-800 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20">
            <div className="w-16 h-16 mx-auto mb-6 text-5xl">🧠</div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Fixação Garantida</h3>
            <p className="text-gray-300 leading-relaxed">
              Fixação garantida de forma intuitiva. Acesse o conteúdo, consolide o aprendizado com verificações
              inteligentes e tire suas dúvidas a qualquer momento com o apoio de nosso Chatbot exclusivo.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#1a2332] rounded-lg p-8 text-center border border-gray-800 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20">
            <div className="w-16 h-16 mx-auto mb-6 text-5xl">📱</div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Seu Sucesso Mapeado</h3>
            <p className="text-gray-300 leading-relaxed">
              Sua jornada de aprendizado mapeada. Mantenha a motivação vendo o seu avanço! Garanta um histórico completo
              e uma progressão clara, assegurando a satisfação com o seu desenvolvimento no app.
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-[#1a2332] rounded-lg p-8 border border-gray-800 max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg italic mb-6 text-center leading-relaxed">
            "Antes eu não conseguia nem abrir o livro. Com o Minutin, uso meus 15 minutos de almoço para estudar. Já
            aprendi mais em um mês do que no último ano!"
          </p>
          <p className="text-blue-400 text-center font-medium">
            — Marina S., Analista de Sistemas e usuária do Minutin.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Minutin - O App de Micro-Aprendizado.{" "}
            <span className="text-yellow-400 font-semibold">Totalmente Gratuito.</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
