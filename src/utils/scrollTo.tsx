const easeInOutQuad = (t: number): number => {
    return t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2
}

export default function scrollTo(selector: string, offset: number = 0) {
    const targetElement = document.querySelector(selector) as HTMLElement
    if (!targetElement) return

    const targetPosition = targetElement.offsetTop
    const currentPosition = window.scrollY
    const distance = targetPosition - currentPosition - offset
    const startTime = performance.now()
    const duration = 1500

    const animateScroll = (currentTime: number) => {
        const elapsedTime = currentTime - startTime
        const time = elapsedTime / duration
        const easeTime = easeInOutQuad(time)
        const scrollDestination = currentPosition + distance * (time > 1 ? 1 : easeTime)
        window.scrollTo({ top: scrollDestination })
        if (elapsedTime < duration) {
            requestAnimationFrame(animateScroll)
        }
    }
    requestAnimationFrame(animateScroll)
}
