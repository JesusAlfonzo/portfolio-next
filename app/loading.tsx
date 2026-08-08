// components/LoaderWrapper.jsx
"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress" // Ajusta la ruta si es necesario

export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // 1. Animamos la barra de progreso
    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return oldProgress + 15 // Sube de 15 en 15
      })
    }, 150)

    // 2. Quitamos la pantalla de carga después de 1.5 segundos
    const finishLoading = setTimeout(() => {
      setLoading(false)
    }, 1500)

    // Limpieza de intervalos al desmontar
    return () => {
      clearInterval(progressInterval)
      clearTimeout(finishLoading)
    }
  }, [])

  // Muestra la barra mientras 'loading' sea true
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] w-full gap-4">
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300 animate-pulse">
          Cargando portafolio...
        </p>
        <Progress value={progress} className="w-64 sm:w-96" />
      </div>
    )
  }

  // Una vez que termina de cargar, muestra el contenido de tu página
  return <>{children}</>
}