import styles from './navbar.module.sass'

import { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

import ThemeSwitch from '@components/ThemeSwitch'


export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(true)
    const isScreenMd = useMediaQuery({
        query: '(max-width: 768px)'
    })
    const navbarRef = useRef(null)
    const navbarClasses = `
        ${styles.navbar}
        ${isScrolled ? styles.shadow : ''}
    `.trim()
    const navbarMobileClasses = `
        ${styles.mobile}
        ${isCollapsed ? styles.hide : ''}
    `.trim()

    const listenScroll = () => setIsScrolled(window.scrollY > 70)
    const onNavLinkClick = () => setIsCollapsed(true)
    const onHamburgerClick = () => setIsCollapsed(!isCollapsed)
    const onClickOutside = (event: MouseEvent) => {
        if (navbarRef.current && !((navbarRef.current as HTMLElement).contains(event.target as Node))) {
            setIsCollapsed(true)
        }
    }

    useEffect(() => {
        if (!isScreenMd) setIsCollapsed(true)
        document.addEventListener('click', onClickOutside)
        window.addEventListener('scroll', listenScroll)

        return () => {
            document.removeEventListener('click', onClickOutside)
            window.removeEventListener('scroll', listenScroll)
        }
    }, [isScreenMd])

    const renderHamburgerButton = () => {
        const spanClasses = `
            ${styles.hamburgerIcon}
            ${isCollapsed ? styles.collapsed : ''}
        `.trim()

        return isScreenMd && (
            <div className={styles.hamburger} onClick={onHamburgerClick}>
                <span className={`${spanClasses} ${styles.hamburgerTop}`} />
                <span className={`${spanClasses} ${styles.hamburgerMiddle}`} />
                <span className={`${spanClasses} ${styles.hamburgerBottom}`} />
            </div>
        )
    }

    const renderNavLinks = () => {
        return (
            <>
                <a href="#home" className={styles.link} onClick={onNavLinkClick}>Home</a>
                <a href="#about" className={styles.link} onClick={onNavLinkClick}>About</a>
                <a href="#projects" className={styles.link} onClick={onNavLinkClick}>Projects</a>
                <a href="#resume" className={styles.link} onClick={onNavLinkClick}>Resume</a>
                <a href="#contact" className={styles.link} onClick={onNavLinkClick}>Contact</a>
            </>
        )
    }

    return (
        <nav ref={navbarRef} className={navbarClasses}>
            <div className={styles.desktop}>
                <div className={styles.brand}>JWL</div>
                <div className={styles.desktopLinks}>
                    {renderNavLinks()}
                </div>
                <ThemeSwitch />
                {renderHamburgerButton()}
            </div>
            <div className={navbarMobileClasses}>
                {renderNavLinks()}
            </div>
        </nav>
    )
}
