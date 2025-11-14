"use client"

import { useState } from "react"
import { LogOut, Menu, X, AlertCircle } from 'lucide-react'
import { Mascot } from "@/components/mascot"

interface UserProfile {
  isComplete: boolean
}

interface DashboardPageProps {
  userName: string
  onLogout: () => void
  userProfile: UserProfile
}

export default function DashboardPage({ userName, onLogout, userProfile }: DashboardPageProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [quickStudyType, setQuickStudyType] = useState<"pdf" | "video" | null>(null)
  const [showProfileWarning, setShowProfileWarning] = useState(false)

  const categories = [
    { id: "questions", label: "Questões", icon: "❓", color: "bg-orange-400" },
    { id: "mindmaps", label: "Mapas mentais", icon: "🧠", color: "bg-yellow-500" },
    { id: "videos", label: "Vídeos", icon: "📹", color: "bg-pink-400" },
    { id: "simulations", label: "Simulados", icon: "✅", color: "bg-green-500" },
  ]

  const handleCategoryClick = (categoryId: string) => {
    if (!userProfile.isComplete) {
      setShowProfileWarning(true)
      return
    }
    setActiveCategory(categoryId)
  }

  return (
    <div className="min-h-screen bg-gray-200 pb-24">
      {/* Profile Warning Modal */}
      {showProfileWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="text-yellow-500" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Complete seu perfil</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Para acessar todas as funcionalidades, complete sua configuração de perfil. Isso nos ajuda a personalizar
              sua experiência de aprendizado.
            </p>
            <button
              onClick={() => setShowProfileWarning(false)}
              className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Ir para Perfil
            </button>
          </div>
        </div>
      )}

      {/* Header Navigation */}
      <header className="bg-gray-200 border-b border-gray-300 p-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-primary">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-2xl font-bold text-primary">EstudeFácil</h1>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-primary font-semibold hover:underline">
                Inicio
              </a>
              <a href="#" className="text-primary font-semibold hover:underline">
                Conta
              </a>
              <a href="#" className="text-primary font-semibold hover:underline">
                Comunidade
              </a>
              <a href="#" className="text-primary font-semibold hover:underline">
                Estudo Rápido
              </a>
              <a href="#" className="text-secondary font-semibold hover:underline">
                Perfil
              </a>
            </nav>

            <button
              onClick={onLogout}
              className="flex items-center gap-2 text-primary font-semibold hover:text-blue-700"
            >
              <LogOut size={20} />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Categories */}
          <div className={`lg:col-span-1 ${mobileMenuOpen ? "block" : "hidden lg:block"}`}>
            <div className="bg-gray-200 rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Menu</h2>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    handleCategoryClick(category.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full py-3 px-4 rounded-full font-bold text-white transition-all ${
                    activeCategory === category.id
                      ? `${category.color} scale-105`
                      : `${category.color} hover:opacity-90`
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-2">
            {!activeCategory && (
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-300 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-bold text-primary mb-2">Bem-vindo, {userName}!</h1>
                    <p className="text-gray-600">Escolha uma categoria no menu para começar a estudar.</p>
                  </div>
                  <div className="hidden lg:block">
                    <Mascot className="w-40 h-auto" />
                  </div>
                </div>
              </div>
            )}

            {/* Quick Study Section */}
            {!activeCategory && (
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Estude Rápido</h2>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-4">Selecione o formato:</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={quickStudyType === "pdf"}
                        onChange={() => setQuickStudyType(quickStudyType === "pdf" ? null : "pdf")}
                        className="w-5 h-5 accent-primary"
                      />
                      <span className="font-semibold">📄 PDF</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={quickStudyType === "video"}
                        onChange={() => setQuickStudyType(quickStudyType === "video" ? null : "video")}
                        className="w-5 h-5 accent-primary"
                      />
                      <span className="font-semibold">🎥 VÍDEO</span>
                    </label>
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Assunto"
                  className="w-full bg-white border border-gray-300 text-gray-800 px-4 py-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <input
                  type="text"
                  placeholder="Tempo"
                  className="w-full bg-white border border-gray-300 text-gray-800 px-4 py-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded-full transition-colors">
                  Aplicar
                </button>
              </div>
            )}

            {/* Category Content */}
            {activeCategory === "questions" && (
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Questões</h2>
                <p className="text-gray-600">Resolva questões de diferentes disciplinas e teste seus conhecimentos.</p>
                <button className="mt-6 bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full">
                  Começar Questões
                </button>
              </div>
            )}

            {activeCategory === "mindmaps" && (
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Mapas Mentais</h2>
                <p className="text-gray-600">Visualize os conceitos principais através de mapas mentais organizados.</p>
                <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full">
                  Explorar Mapas
                </button>
              </div>
            )}

            {activeCategory === "videos" && (
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Vídeos</h2>
                <p className="text-gray-600">Assista vídeos educacionais sobre diversos tópicos.</p>
                <button className="mt-6 bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-full">
                  Assistir Vídeos
                </button>
              </div>
            )}

            {activeCategory === "simulations" && (
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Simulados</h2>
                <p className="text-gray-600">Faça simulados para se preparar para suas provas.</p>
                <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">
                  Fazer Simulado
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
