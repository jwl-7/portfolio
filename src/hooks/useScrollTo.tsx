import { useCallback, useEffect, useRef } from 'react'


interface ScrollToProps {
    selector: string
    duration?: number
    offset?: number
}


export function useScrollTo({
    selector,
    duration = 1250,
    offset = 76,
}: ScrollToProps) {
    const frameID = useRef<number>(0)
    const targetRef = useRef<HTMLElement | null>(null)

    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
    const cancel = () => frameID.current && cancelAnimationFrame(frameID.current)

    const scrollTo = useCallback(() => {
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

            if (time < 1) requestAnimationFrame(animateScroll)
            else frameID.current = 0
        }

        animateScroll()
    }, [selector, duration, offset])

    useEffect(() => {
        targetRef.current = document.querySelector(selector)
        window.addEventListener('wheel', cancel, { passive: true })
        window.addEventListener('touchmove', cancel, { passive: true })

        return () => {
            cancel()
            window.removeEventListener('wheel', cancel)
            window.removeEventListener('touchmove', cancel)
        }
    }, [cancel])

    return scrollTo
}
