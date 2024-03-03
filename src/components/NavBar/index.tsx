import styles from './navbar.module.sass'

import { MouseEvent, useState, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useScrollDistance } from '@/hooks/useScrollDistance'
import { useScrollTo } from '@/hooks/useScrollTo'

import AnimateHeight from 'react-animate-height'
import Brand from '@components/Brand'
import clsx from '@/utils/clsx'
import ThemeSwitch from '@components/ThemeSwitch'


const NAVBAR_HEIGHT = 76


export default function NavBar() {
    const ref = useRef<HTMLElement | null>(null)
    const isScrollDistanceReached = useScrollDistance(NAVBAR_HEIGHT)
    const [isCollapsed, setIsCollapsed] = useState(true)

    const classes = clsx(
        styles.navbar,
        isScrollDistanceReached && styles.shadow
    )
    const mobileNavBarHeight = isCollapsed ? 0 : 'auto'
    const scrollDestinations: { [key: string]: VoidFunction } = {
        '#home': useScrollTo({ selector: '#home', offset: NAVBAR_HEIGHT }),
        '#about': useScrollTo({ selector: '#about', offset: NAVBAR_HEIGHT - 2 }),
        '#projects': useScrollTo({ selector: '#projects', offset: NAVBAR_HEIGHT - 2 }),
        '#resume': useScrollTo({ selector: '#resume', offset: NAVBAR_HEIGHT - 2 }),
        '#contact': useScrollTo({ selector: '#contact' ,offset: NAVBAR_HEIGHT - 2 })
    }

    const collapseMobileNavBar = () => {
        if(!isCollapsed) setIsCollapsed(true)
    }

    const handleMediaQueryChange = (matches: boolean) => {
        if (!matches && !isCollapsed) setIsCollapsed(true)
    }

    const isScreenMd = useMediaQuery({ maxWidth: 768 }, undefined, handleMediaQueryChange)

    const handleHamburgerClick = () => setIsCollapsed(!isCollapsed)
    const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()

        const href = event.currentTarget.getAttribute('href')
        if (href && scrollDestinations.hasOwnProperty(href)) {
            scrollDestinations[href]()
            window.history.replaceState({}, '', href)
        }

        collapseMobileNavBar()
    }

    useClickOutside(ref, collapseMobileNavBar)

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
                <Brand />
                <div className={styles.desktopLinks}>
                    {renderNavLinks()}
                </div>
                <div className={styles.themeSwitch}>
                    <ThemeSwitch />
                </div>
                {renderHamburgerButton()}
            </div>
            <AnimateHeight
                animateOpacity
                height={mobileNavBarHeight}
                duration={300}
            >
                <div className={styles.mobile}>
                    {renderNavLinks()}
                </div>
            </AnimateHeight>
        </nav>
    )
}
