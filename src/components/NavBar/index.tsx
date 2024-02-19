import styles from './navbar.module.sass'

import { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useScrollDistance } from '@/hooks/useScrollDistance'

import clsx from '@/utils/clsx'
import ThemeSwitch from '@components/ThemeSwitch'


export default function NavBar() {
    const ref = useRef<HTMLElement | null>(null)
    const mobileRef = useRef<HTMLDivElement | null>(null)
    const isScrollDistanceReached = useScrollDistance(74)
    const isScreenMd = useMediaQuery({ query: '(max-width: 768px)' })
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const classes = clsx(
        styles.navbar,
        isScrollDistanceReached && styles.shadow
    )
    const mobileClasses = clsx(
        styles.mobile,
        isCollapsed ? styles.collapse : styles.expand,
        (isCollapsed && !isTransitioning) && styles.hide
    )

    const collapseMobileNavBar = () => {
        if (!isCollapsed) {
            setIsCollapsed(true)
            setIsTransitioning(true)
        }
    }

    const handleTransitionEnd = () => setIsTransitioning(false)
    const handleLinkClick = () => collapseMobileNavBar()
    const handleHamburgerClick = () => {
        setIsCollapsed(!isCollapsed)
        setIsTransitioning(true)
    }

    useClickOutside(ref, collapseMobileNavBar)
    useEffect(() => {
        const mobileElement = mobileRef.current

        if (!isScreenMd) collapseMobileNavBar()
        if (mobileElement) {
            mobileElement.addEventListener('transitionend', handleTransitionEnd)

            return () => mobileElement.removeEventListener('transitionend', handleTransitionEnd)
        }
    }, [isScreenMd, isCollapsed])

    const renderHamburgerButton = () => {
        const spanClasses = clsx(
            styles.hamburgerIcon,
            isCollapsed && styles.collapsed
        )

        return isScreenMd && (
            <div className={styles.hamburger} onClick={handleHamburgerClick}>
                <span className={clsx(spanClasses, styles.hamburgerTop)} />
                <span className={clsx(spanClasses, styles.hamburgerMiddle)} />
                <span className={clsx(spanClasses, styles.hamburgerBottom)} />
            </div>
        )
    }

    const renderNavLinks = () => {
        return (
            <>
                <a href="#home" className={styles.link} onClick={handleLinkClick}>Home</a>
                <a href="#about" className={styles.link} onClick={handleLinkClick}>About</a>
                <a href="#projects" className={styles.link} onClick={handleLinkClick}>Projects</a>
                <a href="#resume" className={styles.link} onClick={handleLinkClick}>Resume</a>
                <a href="#contact" className={styles.link} onClick={handleLinkClick}>Contact</a>
            </>
        )
    }

    return (
        <nav ref={ref} className={classes}>
            <div className={styles.desktop}>
                <div className={styles.brand}>JWL</div>
                <div className={styles.desktopLinks}>
                    {renderNavLinks()}
                </div>
                <div className={styles.themeSwitch}>
                    <ThemeSwitch />
                </div>
                {renderHamburgerButton()}
            </div>
            <div ref={mobileRef} className={mobileClasses}>
                {renderNavLinks()}
            </div>
        </nav>
    )
}
