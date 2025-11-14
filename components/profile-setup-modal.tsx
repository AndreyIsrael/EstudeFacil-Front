"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface ProfileData {
  age: string
  isStudent: boolean
  works: boolean
  hasDemandingActivities: boolean
  hoursUnavailable: string
  studentHours: string
  workHours: string
  incomeRange: string
  demandingActivitiesHours: string
}

interface ProfileSetupModalProps {
  isOpen: boolean
  onClose: () => void
  onComplete: (data: ProfileData) => void
}

export function ProfileSetupModal({ isOpen, onClose, onComplete }: ProfileSetupModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<ProfileData>({
    age: "",
    isStudent: false,
    works: false,
    hasDemandingActivities: false,
    hoursUnavailable: "",
    studentHours: "",
    workHours: "",
    incomeRange: "",
    demandingActivitiesHours: "",
  })

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete(formData)
      onClose()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-primary">Configurar Perfil</h2>
            <p className="text-sm text-gray-600 mt-1">Passo {currentStep + 1} de 5</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Important Notice */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-primary p-6 rounded">
                <p className="text-gray-800 leading-relaxed">
                  <span className="font-bold">O aplicativo EstudeFácil conta com a sua cooperação</span> para alinhar
                  seu aprendizado com os desafios da vida real.
                </p>
                <p className="text-gray-800 leading-relaxed mt-4">
                  <span className="font-bold">Nossa tecnologia irá utilizar essas informações</span> para dar soluções
                  inteligentes para sua rotina e trabalhará como seu parceiro na busca do conhecimento.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 font-semibold">Vamos conhecer melhor sua rotina:</p>
                <p className="text-gray-600 text-sm">
                  Responda as próximas perguntas com sinceridade para receber recomendações personalizadas.
                </p>
              </div>
            </div>
          )}

          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Quantos anos você tem?</label>
                <input
                  type="number"
                  min="1"
                  max="120"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  placeholder="Ex: 18"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          )}

          {/* Step 2: Activities */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <label
                  className="flex items-center gap-3 cursor-pointer p-4 border-2 border-gray-200 rounded-lg hover:border-primary transition-colors"
                  style={{ borderColor: formData.isStudent ? "#003B9E" : "#e5e7eb" }}
                >
                  <input
                    type="checkbox"
                    checked={formData.isStudent}
                    onChange={(e) => setFormData({ ...formData, isStudent: e.target.checked })}
                    className="w-5 h-5 accent-primary"
                  />
                  <span className="text-gray-800 font-semibold">
                    Você é estudante de alguma instituição educacional?
                  </span>
                </label>

                <label
                  className="flex items-center gap-3 cursor-pointer p-4 border-2 border-gray-200 rounded-lg hover:border-primary transition-colors"
                  style={{ borderColor: formData.works ? "#003B9E" : "#e5e7eb" }}
                >
                  <input
                    type="checkbox"
                    checked={formData.works}
                    onChange={(e) => setFormData({ ...formData, works: e.target.checked })}
                    className="w-5 h-5 accent-primary"
                  />
                  <span className="text-gray-800 font-semibold">Você trabalha?</span>
                </label>

                <label
                  className="flex items-center gap-3 cursor-pointer p-4 border-2 border-gray-200 rounded-lg hover:border-primary transition-colors"
                  style={{ borderColor: formData.hasDemandingActivities ? "#003B9E" : "#e5e7eb" }}
                >
                  <input
                    type="checkbox"
                    checked={formData.hasDemandingActivities}
                    onChange={(e) => setFormData({ ...formData, hasDemandingActivities: e.target.checked })}
                    className="w-5 h-5 accent-primary"
                  />
                  <span className="text-gray-800 font-semibold">
                    Você faz alguma atividade que demanda sua energia durante o dia?
                  </span>
                </label>
                <p className="text-gray-600 text-sm ml-8">(ex: esportes, tarefas domésticas)</p>
              </div>
            </div>
          )}

          {/* Step 3: Hours Unavailable */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Quantas horas por dia você geralmente NÃO PODE estudar? (ocupado)
                </label>
                <input
                  type="number"
                  min="0"
                  max="24"
                  value={formData.hoursUnavailable}
                  onChange={(e) => setFormData({ ...formData, hoursUnavailable: e.target.value })}
                  placeholder="Ex: 8"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <p className="text-gray-600 text-sm mt-2">Inclua horas de trabalho, aulas, sono, etc.</p>
              </div>
            </div>
          )}

          {/* Step 4: Specific Hours */}
          {currentStep === 4 && (
            <div className="space-y-6">
              {formData.isStudent && (
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Quantas horas você dedica ao estudo direcionado ao seu ente educacional?
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="24"
                    value={formData.studentHours}
                    onChange={(e) => setFormData({ ...formData, studentHours: e.target.value })}
                    placeholder="Ex: 3"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              )}

              {formData.works && (
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Quantas horas você dedica ao trabalho?
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="24"
                    value={formData.workHours}
                    onChange={(e) => setFormData({ ...formData, workHours: e.target.value })}
                    placeholder="Ex: 8"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              )}

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Qual sua faixa de renda? (opcional)</label>
                <select
                  value={formData.incomeRange}
                  onChange={(e) => setFormData({ ...formData, incomeRange: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="under-1k">Até R$ 1.000</option>
                  <option value="1k-3k">R$ 1.000 - R$ 3.000</option>
                  <option value="3k-5k">R$ 3.000 - R$ 5.000</option>
                  <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                  <option value="over-10k">Acima de R$ 10.000</option>
                </select>
              </div>

              {formData.hasDemandingActivities && (
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Quantas horas você dedica do seu dia a atividades desgastantes não relacionadas ao trabalho ou
                    educação?
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="24"
                    value={formData.demandingActivitiesHours}
                    onChange={(e) => setFormData({ ...formData, demandingActivitiesHours: e.target.value })}
                    placeholder="Ex: 2"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 flex gap-4">
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Voltar
            </button>
          )}
          <button
            onClick={handleNext}
            className="flex-1 bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
          >
            {currentStep === 4 ? "Concluir" : "Próximo"}
          </button>
        </div>
      </div>
    </div>
  )
}
