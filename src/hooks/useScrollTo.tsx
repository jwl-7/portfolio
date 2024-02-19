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
    const frameID = useRef<number>(0)
    const startTime = useRef<number>(0)
    const shouldStop = useRef<boolean>(false)
    const targetRef = useRef<HTMLElement | null>(null)

    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
    const handleStop = () => shouldStop.current = true
    const cancel = () => cancelAnimationFrame(frameID.current)

    const scrollTo = useCallback(() => {
        if (frameID.current || !targetRef.current) return

        shouldStop.current = false
        const targetElement = targetRef.current
        const targetTop = targetElement.getBoundingClientRect().top + window.scrollY
        const startScroll = window.scrollY
        const distance = targetTop - startScroll - offset

        const animateScroll = () => {
            const now = performance.now()
            if (!startTime.current) startTime.current = now
            const elapsed = now - startTime.current
            const time = elapsed / duration
            const easeTime = easeInOutQuad(time)

            window.scrollTo({
                top: startScroll + distance * easeTime,
                behavior: 'smooth',
            })

            if (!shouldStop.current && time < 1) {
                frameID.current = requestAnimationFrame(animateScroll)
            } else {
                startTime.current = 0
                frameID.current = 0
            }
        }

        animateScroll()
    }, [duration, offset, cancel])

    useEffect(() => {
        targetRef.current = document.querySelector(selector)
        window.addEventListener('wheel', handleStop, { passive: true })
        window.addEventListener('touchmove', handleStop, { passive: true })

        return () => {
            if (frameID.current) cancel()
            window.removeEventListener('wheel', handleStop)
            window.removeEventListener('touchmove', handleStop)
        }
    }, [cancel, handleStop, selector])

    return scrollTo
}
