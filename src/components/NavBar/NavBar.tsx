import styles from './NavBar.module.sass'

import { MouseEvent, useEffect, useLayoutEffect, useState, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useClickOutside } from '@/hooks/useClickOutside'

import AnimateHeight from 'react-animate-height'
import Brand from '@components/Brand/Brand'
import ThemeToggle from '@components/ThemeToggle/ThemeToggle'

import clsx from '@/utils/clsx'
import getNavBarHeight from '@/utils/getNavBarHeight'
import scrollTo from '@/utils/scrollTo'

export default function NavBar() {
    const ref = useRef<HTMLElement | null>(null)
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [isScrolled, setIsScrolled] = useState(false)

    useLayoutEffect(() => {
        if (!ref.current) return

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const height = entry.borderBoxSize[0].blockSize
                document.documentElement.style.setProperty('--navbar-height', `${height}px`)
            }
        })

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!ref.current) return

        const handleScroll = () => {
            const offset = window.scrollY > 20
            setIsScrolled(prev => (prev !== offset ? offset : prev))
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const classes = clsx(styles.navbar, isScrolled && styles.shadow)
    const mobileNavBarHeight = isCollapsed ? 0 : 'auto'

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
        if (!href) return
        const navBarHeight = getNavBarHeight()
        const scrollOffset = href === '#home' ? navBarHeight : navBarHeight - 2
        scrollTo(href, scrollOffset)
        window.history.replaceState({}, '', href)
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
                <div className={styles.themeToggle}>
                    <ThemeToggle />
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
