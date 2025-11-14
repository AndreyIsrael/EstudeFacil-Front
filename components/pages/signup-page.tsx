"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Mascot } from "@/components/mascot"

interface SignupPageProps {
  onSignup: (name: string) => void
  onBackHome: () => void
}

export default function SignupPage({ onSignup, onBackHome }: SignupPageProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      const name = email.split("@")[0]
      onSignup(name)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center px-4">
      {/* Decorative Blue Circle */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl w-full relative z-10">
        {/* Form */}
        <div className="max-w-md w-full bg-gray-200 rounded-lg p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <button onClick={onBackHome} className="text-xl font-bold text-primary">
              EstudeFácil
            </button>
            <button onClick={onBackHome} className="text-2xl">
              ←
            </button>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-2">Novo usuário</h1>
          <p className="text-gray-600 text-sm mb-6">Digite seu e-mail completo</p>

          <form onSubmit={handleSignup} className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-gray-800 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="absolute right-3 top-3 text-gray-400">✓</div>
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white text-gray-800 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded-full transition-colors mt-6"
            >
              Cadastrar
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-400" />
            <span className="text-gray-600 text-sm">ou</span>
            <div className="flex-1 h-px bg-gray-400" />
          </div>

          {/* Google Sign Up */}
          <button className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-colors border border-gray-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#003B9E">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
            Entrar com Google
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-700 text-sm mt-6">
            Já tem conta?{" "}
            <button onClick={onBackHome} className="text-primary font-bold hover:underline">
              Faça login
            </button>
          </p>
        </div>

        <div className="flex justify-center hidden md:block">
          <Mascot className="w-72 h-auto" />
        </div>
      </div>

      {/* Decorative Blue Circle */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600 rounded-full opacity-20" />
    </div>
  )
}
