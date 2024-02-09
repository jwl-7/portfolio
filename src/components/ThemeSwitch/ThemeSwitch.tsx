import './ThemeSwitch.sass'

import { useState, useEffect } from 'react'

function ThemeSwitch() {
    const htmlElement = document.documentElement
    const [darkMode, setDarkMode] = useState(false)

    const dispatchThemeEvent = () => {
        const themeChangeEvent = new Event('themeChange')
        htmlElement.dispatchEvent(themeChangeEvent)
    }

    useEffect(() => {
        const theme = htmlElement.getAttribute('data-bs-theme')
        setDarkMode(theme === 'light')
        dispatchThemeEvent()
    }, [])

    const handleSwitch = () => {
        setDarkMode(!darkMode)
        htmlElement.setAttribute('data-bs-theme', !darkMode ? 'light' : 'dark')
        dispatchThemeEvent()
    }

    return (
        <div id="theme-switch-container">
            <input
                className="themeswitch__input"
                id="theme-switch"
                type="checkbox"
                checked={darkMode}
                onChange={handleSwitch}
            />
            <label className="themeswitch__label" htmlFor="theme-switch">
                <span className="themeswitch__indicator" />
                <span className="themeswitch__decoration" />
            </label>
        </div>
    )
}


export default ThemeSwitch
