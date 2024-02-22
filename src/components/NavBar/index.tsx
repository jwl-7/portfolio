import styles from './navbar.module.sass'

import { MouseEvent, useState, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useScrollDistance } from '@/hooks/useScrollDistance'
import { useScrollTo } from '@/hooks/useScrollTo'

import AnimateHeight from 'react-animate-height'
import clsx from '@/utils/clsx'
import ThemeSwitch from '@components/ThemeSwitch'


export default function NavBar() {
    const ref = useRef<HTMLElement | null>(null)
    const isScrollDistanceReached = useScrollDistance(74)
    const isScreenMd = useMediaQuery({ query: '(max-width: 768px)' })
    const [isCollapsed, setIsCollapsed] = useState(true)

    const classes = clsx(
        styles.navbar,
        isScrollDistanceReached && styles.shadow
    )
    const mobileClasses = clsx(
        styles.mobile,
        isCollapsed ? styles.collapse : styles.expand
    )
    const mobileNavBarHeight = isCollapsed ? 0 : 'auto'
    const scrollDestinations: { [key: string]: () => void } = {
        '#home': useScrollTo({ selector: '#home' }),
        '#about': useScrollTo({ selector: '#about' }),
        '#projects': useScrollTo({ selector: '#projects' }),
        '#resume': useScrollTo({ selector: '#resume' }),
        '#contact': useScrollTo({ selector: '#contact' })
    }

    const collapseMobileNavBar = () => !isCollapsed && setIsCollapsed(true)
    const handleHamburgerClick = () => setIsCollapsed(!isCollapsed)
    const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()

        const href = event.currentTarget.getAttribute('href')
        if (href && scrollDestinations.hasOwnProperty(href)) {
            scrollDestinations[href]()
        }

        collapseMobileNavBar()
    }

    useClickOutside(ref, collapseMobileNavBar)
    useEffect(() => {
        if (!isScreenMd) collapseMobileNavBar()
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
            <AnimateHeight
                animateOpacity
                height={mobileNavBarHeight}
                duration={300}
            >
                <div className={mobileClasses}>
                    {renderNavLinks()}
                </div>
            </AnimateHeight>
        </nav>
    )
}
