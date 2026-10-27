import { useCallback, useEffect, useRef, useState } from 'react'
import prefersReducedMotion from '@utils/prefersReducedMotion'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const FRAME_MS = 35
const FRAMES_PER_CHAR = 2

const randomGlyph = (): string => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]

export function useScramble(text: string) {
    const [display, setDisplay] = useState(text)
    const intervalRef = useRef<number | null>(null)

    const stop = () => {
        if (intervalRef.current === null) return
        clearInterval(intervalRef.current)
        intervalRef.current = null
    }

    const scramble = useCallback(() => {
        if (intervalRef.current !== null || prefersReducedMotion()) return

        let frame = 0
        intervalRef.current = window.setInterval(() => {
            frame++
            const resolved = Math.floor(frame / FRAMES_PER_CHAR)
            setDisplay(text.split('').map((char, i) =>
                i < resolved || char === ' ' ? char : randomGlyph()
            ).join(''))
            if (resolved >= text.length) stop()
        }, FRAME_MS)
    }, [text])

    useEffect(() => stop, [])

    return [display, scramble] as const
}
