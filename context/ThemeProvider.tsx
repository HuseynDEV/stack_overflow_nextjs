"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'


interface ThemeContextType {
    mode: string,
    setMode: (mode: string) => void
}



const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState('')
    const handleThemeChange = () => {
        if (mode === 'dark') {
            setMode("light")
            document.documentElement.classList.add("light")
        }
        else {
            setMode("dark")
            document.documentElement.classList.add('dark')
        }
    }

    useEffect(() => {
        handleThemeChange()
    }, [mode])

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    )
}




export function useTheme() {
    const context = useContext(ThemeContext)
    if (context) {
        throw new Error("Error useContext")
    }
    return context
}