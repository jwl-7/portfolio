import { useState, useEffect } from 'react'


function useTheme() {
    const htmlElement = document.documentElement
    const [theme, setTheme] = useState('light')

    const handleThemeChange = () => {
        const newTheme = htmlElement.getAttribute('data-bs-theme')
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


export default useTheme
