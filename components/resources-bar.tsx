"use client"

interface ResourcesBarProps {
  energy: number
  time: number
  money: number
}

export function ResourcesBar({ energy = 75, time = 120, money = 85 }: ResourcesBarProps) {
  const getEnergyColor = (value: number) => {
    if (value > 60) return "bg-green-500"
    if (value > 30) return "bg-yellow-500"
    return "bg-red-500"
  }

  const getTimeColor = (value: number) => {
    if (value > 120) return "bg-blue-500"
    if (value > 60) return "bg-cyan-500"
    return "bg-blue-300"
  }

  const getMoneyColor = (value: number) => {
    if (value > 60) return "bg-green-500"
    if (value > 30) return "bg-yellow-500"
    return "bg-red-500"
  }

  const maxValue = 200

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex gap-8 items-center overflow-x-auto">
        {/* Energy */}
        <div className="flex items-center gap-3 min-w-max">
          <div className="text-center">
            <div className="text-2xl mb-1">⚡</div>
            <p className="text-xs font-semibold">Energia</p>
          </div>
          <div className="w-24 h-2 bg-blue-400 rounded-full overflow-hidden">
            <div
              className={`h-full ${getEnergyColor(energy)} transition-all`}
              style={{ width: `${(energy / maxValue) * 100}%` }}
            />
          </div>
          <span className="text-sm font-bold min-w-max">{energy}%</span>
        </div>

        {/* Time */}
        <div className="flex items-center gap-3 min-w-max">
          <div className="text-center">
            <div className="text-2xl mb-1">⏱️</div>
            <p className="text-xs font-semibold">Tempo</p>
          </div>
          <div className="w-24 h-2 bg-blue-400 rounded-full overflow-hidden">
            <div
              className={`h-full ${getTimeColor(time)} transition-all`}
              style={{ width: `${Math.min((time / maxValue) * 100, 100)}%` }}
            />
          </div>
          <span className="text-sm font-bold min-w-max">{time}m</span>
        </div>

        {/* Money */}
        <div className="flex items-center gap-3 min-w-max">
          <div className="text-center">
            <div className="text-2xl mb-1">💰</div>
            <p className="text-xs font-semibold">Créditos</p>
          </div>
          <div className="w-24 h-2 bg-blue-400 rounded-full overflow-hidden">
            <div
              className={`h-full ${getMoneyColor(money)} transition-all`}
              style={{ width: `${(money / maxValue) * 100}%` }}
            />
          </div>
          <span className="text-sm font-bold min-w-max">{money} pts</span>
        </div>
      </div>
    </div>
  )
}
