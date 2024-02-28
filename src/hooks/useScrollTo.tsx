import { useCallback, useEffect, useRef } from 'react'


interface ScrollToProps {
    selector: string
    duration?: number
    offset?: number
}


export function useScrollTo({
    selector,
    duration = 1250,
    offset = 0,
}: ScrollToProps) {
    const targetRef = useRef<HTMLElement | null>(null)
    const frameID = useRef<number>(0)
    const userInterrupt = useRef<boolean>(false)

    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
    const cancel = () => {
        if(frameID.current) cancelAnimationFrame(frameID.current)
    }
    const handleInterrupt = () => userInterrupt.current = true

    const scrollTo = useCallback(() => {
        userInterrupt.current = false
        if (!targetRef.current) return
        cancel()

        const targetElement = targetRef.current
        const targetPosition = targetElement.offsetTop
        const currentPosition = window.scrollY
        const distance = targetPosition - currentPosition - offset
        const startTime = performance.now()

        if (!distance) return

        const animateScroll = () => {
            const currentTime = performance.now()
            const elapsed = currentTime - startTime
            const time = elapsed / duration
            const easeTime = easeInOutQuad(time)
            const scrollDestination = currentPosition + distance * easeTime

            window.scrollTo({
                top: scrollDestination,
                behavior: 'smooth',
            })

            if (time < 1 && !userInterrupt.current) requestAnimationFrame(animateScroll)
            else frameID.current = 0
        }

        animateScroll()
    }, [selector, duration, offset])

    useEffect(() => {
        targetRef.current = document.querySelector(selector)
        window.addEventListener('wheel', handleInterrupt, { passive: true })
        window.addEventListener('touchmove', handleInterrupt, { passive: true })

        return () => {
            cancel()
            window.removeEventListener('wheel', handleInterrupt)
            window.removeEventListener('touchmove', handleInterrupt)
        }
    }, [])

    return scrollTo
}
