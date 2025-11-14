"use client"

import { useState } from "react"
import LoginPage from "@/components/pages/login-page"
import SignupPage from "@/components/pages/signup-page"
import DashboardPage from "@/components/pages/dashboard-page"
import { Mascot } from "@/components/mascot"

type PageState = "home" | "login" | "signup" | "dashboard"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageState>("home")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")

  const handleLogin = (name: string) => {
    setUserName(name)
    setIsLoggedIn(true)
    setCurrentPage("dashboard")
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserName("")
    setCurrentPage("home")
  }

  if (isLoggedIn) {
    return <DashboardPage userName={userName} onLogout={handleLogout} />
  }

  if (currentPage === "login") {
    return <LoginPage onLogin={handleLogin} onBackHome={() => setCurrentPage("home")} />
  }

  if (currentPage === "signup") {
    return <SignupPage onSignup={handleLogin} onBackHome={() => setCurrentPage("home")} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Logo and Icons */}
          <div className="text-center md:text-left">
            {/* Icons */}
            <div className="flex justify-center md:justify-start gap-4 md:gap-8 mb-8 scale-75 md:scale-100">
              {/* Brain Icon */}
              <svg className="w-24 h-24 md:w-32 md:h-32" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="90" fill="#FF8C42" />
                <path d="M60 80 Q60 60 80 60 Q90 50 100 60 Q110 50 120 60 Q140 60 140 80" fill="#FFB088" />
                <path d="M65 90 Q65 80 75 80 Q82 75 90 80" fill="#FF8C42" />
                <path d="M110 80 Q118 75 125 80 Q135 80 135 90" fill="#FF8C42" />
                <path d="M70 110 Q70 100 85 100 Q95 95 100 100 Q105 95 115 100 Q130 100 130 110" fill="#FFB088" />
                <circle cx="90" cy="85" r="5" fill="#FF8C42" opacity="0.6" />
                <circle cx="110" cy="85" r="5" fill="#FF8C42" opacity="0.6" />
                <circle cx="80" cy="105" r="5" fill="#FF8C42" opacity="0.6" />
                <circle cx="120" cy="105" r="5" fill="#FF8C42" opacity="0.6" />
              </svg>

              {/* Book Icon */}
              <svg className="w-24 h-24 md:w-32 md:h-32" viewBox="0 0 200 200" fill="none">
                <rect x="30" y="40" width="70" height="100" rx="8" fill="none" stroke="#003B9E" strokeWidth="8" />
                <rect x="100" y="40" width="70" height="100" rx="8" fill="none" stroke="#003B9E" strokeWidth="8" />
                <line x1="100" y1="40" x2="100" y2="140" stroke="#003B9E" strokeWidth="8" />
                <path d="M50 70 Q55 75 60 70" fill="none" stroke="#003B9E" strokeWidth="3" />
                <path d="M50 90 Q55 95 60 90" fill="none" stroke="#003B9E" strokeWidth="3" />
                <path d="M50 110 Q55 115 60 110" fill="none" stroke="#003B9E" strokeWidth="3" />
                <path d="M140 70 Q145 75 150 70" fill="none" stroke="#003B9E" strokeWidth="3" />
                <path d="M140 90 Q145 95 150 90" fill="none" stroke="#003B9E" strokeWidth="3" />
                <path d="M140 110 Q145 115 150 110" fill="none" stroke="#003B9E" strokeWidth="3" />
              </svg>

              {/* Lightning Icon */}
              <svg className="w-24 h-24 md:w-32 md:h-32" viewBox="0 0 200 200" fill="none">
                <polygon
                  points="120,40 80,120 100,120 70,170 140,80 110,80"
                  fill="#FFC107"
                  stroke="#FFC107"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 tracking-wide">
              ESTUDE
              <br />
              FÁCIL
            </h1>

            {/* Buttons */}
            <div className="space-y-4 w-full max-w-sm">
              <button
                onClick={() => setCurrentPage("login")}
                className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
              >
                Entrar
              </button>
              <button
                onClick={() => setCurrentPage("signup")}
                className="w-full bg-secondary hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full transition-colors"
              >
                Cadastrar
              </button>
            </div>
          </div>

          {/* Right side - Mascot */}
          <div className="flex justify-center">
            <Mascot className="w-64 h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}
