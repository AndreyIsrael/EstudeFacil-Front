"use client"

import { useState } from "react"
import { Mascot } from "@/components/mascot"
import { ResourcesBar } from "@/components/resources-bar"

interface SmartPlanningPageProps {
  userName: string
}

export function SmartPlanningPage({ userName }: SmartPlanningPageProps) {
  const [timeAvailable, setTimeAvailable] = useState("")
  const [selectedDay, setSelectedDay] = useState(new Date().getDay())

  // Sample tasks for the week
  const tasks = [
    { day: 1, title: "Matemática", type: "question", time: "2h" },
    { day: 1, title: "Revisão Rápida", type: "video", time: "30min" },
    { day: 2, title: "Português", type: "mindmap", time: "1h" },
    { day: 3, title: "Simulado", type: "simulation", time: "1.5h" },
    { day: 4, title: "Física", type: "question", time: "2h" },
    { day: 5, title: "Revisão Semanal", type: "mindmap", time: "2h" },
  ]

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
  const today = new Date()

  const getDayTasks = (dayIndex: number) => {
    return tasks.filter((task) => task.day === dayIndex)
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "question":
        return "bg-orange-400"
      case "video":
        return "bg-pink-400"
      case "mindmap":
        return "bg-yellow-500"
      case "simulation":
        return "bg-green-500"
      default:
        return "bg-blue-400"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "question":
        return "❓"
      case "video":
        return "📹"
      case "mindmap":
        return "🧠"
      case "simulation":
        return "✅"
      default:
        return "📚"
    }
  }

  return (
    <div className="min-h-screen pb-24 bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-300 p-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Planejamento Inteligente</h1>
            <button className="text-primary hover:bg-gray-100 p-2 rounded-lg">Perfil</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-300 mb-6">
          <div className="flex justify-between items-start gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Bem-vindo, {userName}!</h2>
              <p className="text-gray-600 mb-6">Sua semana está planejada. Vamos estudar?</p>

              {/* Time Input */}
              <div className="flex gap-4 items-center">
                <label className="text-gray-700 font-semibold">Quanto tempo você pode dedicar aos estudos hoje?</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="0"
                    max="24"
                    value={timeAvailable}
                    onChange={(e) => setTimeAvailable(e.target.value)}
                    placeholder="0"
                    className="w-20 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="hours">Horas</option>
                    <option value="minutes">Minutos</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <Mascot className="w-40 h-auto" />
            </div>
          </div>
        </div>

        {/* Weekly Calendar */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-300 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Sua Semana</h3>

          {/* Days Navigation */}
          <div className="grid grid-cols-7 gap-2 mb-6">
            {weekDays.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`p-3 rounded-lg font-semibold transition-all ${
                  selectedDay === index
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="text-sm">{day}</div>
                <div className="text-xs mt-1">
                  {new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    today.getDate() + (index - today.getDay()),
                  ).getDate()}
                </div>
              </button>
            ))}
          </div>

          {/* Tasks for Selected Day */}
          <div className="space-y-3">
            {getDayTasks(selectedDay).length > 0 ? (
              getDayTasks(selectedDay).map((task, idx) => (
                <div
                  key={idx}
                  className={`${getTypeColor(task.type)} text-white p-4 rounded-lg flex justify-between items-center hover:shadow-lg transition-shadow cursor-pointer`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getTypeIcon(task.type)}</span>
                    <div>
                      <h4 className="font-semibold">{task.title}</h4>
                      <p className="text-sm opacity-90">{task.time}</p>
                    </div>
                  </div>
                  <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-lg text-sm font-semibold transition-all">
                    Começar
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg font-semibold">Nenhuma tarefa agendada para este dia</p>
                <p className="text-sm">Aproveite para descansar ou explorar novos conteúdos!</p>
              </div>
            )}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-gray-600 text-sm font-semibold">Total de Tarefas</p>
            <p className="text-3xl font-bold text-primary mt-2">{tasks.length}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-gray-600 text-sm font-semibold">Tempo Semanal</p>
            <p className="text-3xl font-bold text-green-600 mt-2">12h 30m</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <p className="text-gray-600 text-sm font-semibold">Progresso</p>
            <p className="text-3xl font-bold text-purple-600 mt-2">42%</p>
          </div>
        </div>
      </div>

      <ResourcesBar />
    </div>
  )
}
