import { useState, useEffect } from 'react'


export default function useTheme() {
    const htmlElement = document.documentElement
    const [theme, setTheme] = useState('light')

    const handleThemeChange = () => {
        const newTheme = htmlElement.getAttribute('data-theme') ?? 'light'
        setTheme(newTheme)
    }

    useEffect(() => {
        htmlElement.addEventListener('themeChange', handleThemeChange)

        return () => {
            htmlElement.removeEventListener('themeChange', handleThemeChange)
        }
    }, [])

    return theme
}
