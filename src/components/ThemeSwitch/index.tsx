import styles from './themeswitch.module.sass'

import { useState, useEffect } from 'react'


export default function ThemeSwitch() {
    const htmlElement = document.documentElement
    const [darkMode, setDarkMode] = useState(false)

    const dispatchThemeEvent = () => {
        const themeChangeEvent = new Event('themeChange')
        htmlElement.dispatchEvent(themeChangeEvent)
    }

    useEffect(() => {
        const theme = htmlElement.getAttribute('data-theme')
        setDarkMode(theme === 'light')
        dispatchThemeEvent()
    }, [])

    const onThemeChange = () => {
        setDarkMode(!darkMode)
        htmlElement.setAttribute('data-theme', !darkMode ? 'light' : 'dark')
        dispatchThemeEvent()
    }

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                id="theme-switch"
                type="checkbox"
                checked={darkMode}
                onChange={onThemeChange}
            />
            <label className={styles.label} htmlFor="theme-switch">
                <span className={styles.indicator} />
                <span className={styles.decoration} />
            </label>
        </div>
    )
}
