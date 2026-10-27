import styles from './Terminal.module.sass'
import { useEffect, useRef, useState } from 'react'
import clsx from '@utils/clsx'
import prefersReducedMotion from '@utils/prefersReducedMotion'

const LINES = [
    { input: 'Name', output: 'Jonathan Lusk' },
    { input: 'Current Location', output: 'Chattanooga, TN' },
    { input: 'Status', output: 'Open to Work' },
    { input: 'Personal Interests', output: 'Gaming, SimRacing, Music Festivals, Audio Production, Skiing' }
]

const TICK_MS = 45
const START_DELAY_TICKS = 12
const PAUSE_TICKS = 6

// each line types its input, pauses, reveals its output, then pauses again
const lineTicks = (input: string): number => input.length + PAUSE_TICKS * 2
const TOTAL_TICKS = LINES.reduce((sum, line) => sum + lineTicks(line.input), 0)

export default function Terminal() {
    const terminalRef = useRef<HTMLDivElement>(null)
    const [tick, setTick] = useState(-START_DELAY_TICKS)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        if (prefersReducedMotion()) {
            setTick(TOTAL_TICKS)
            return
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return
            setStarted(true)
            observer.disconnect()
        }, { threshold: 0.5 })

        if (terminalRef.current) observer.observe(terminalRef.current)
        return () => observer.disconnect()
    }, [])

    const isDone = tick >= TOTAL_TICKS

    useEffect(() => {
        if (!started || isDone) return

        const interval = setInterval(() => setTick(prev => prev + 1), TICK_MS)
        return () => clearInterval(interval)
    }, [started, isDone])

    const cursor = <span className={styles.cursor}>▋</span>

    // untyped text stays in the layout (hidden) so the terminal doesn't resize while typing
    const renderLines = () => {
        let remaining = tick
        return LINES.map(({ input, output }) => {
            const typed = Math.max(0, Math.min(remaining, input.length))
            const isTyping = remaining >= 0 && remaining < lineTicks(input) && !isDone
            const showOutput = remaining >= input.length + PAUSE_TICKS
            remaining -= lineTicks(input)

            return (
                <div key={input} className={styles.section}>
                    <span className={styles.inputText}>
                        &gt; {input.slice(0, typed)}
                        {isTyping && cursor}
                        <span className={styles.hidden}>{input.slice(typed)}</span>
                    </span> <br />
                    <span className={clsx(styles.outputText, !showOutput && styles.hidden)}>
                        {output}
                    </span>
                </div>
            )
        })
    }

    return (
        <div ref={terminalRef} className={styles.terminal}>
            <div className={styles.topBar}>
                <svg height="14" width="54" viewBox="0 0 54 14">
                    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                        <circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle>
                        <circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle>
                        <circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle>
                    </g>
                </svg>
            </div>
            <div className={styles.body}>
                <div className={styles.section}>
                    <span className={styles.header}>Hi there! :) <span className={styles.wave}>👋</span></span>
                </div>

                {renderLines()}

                <div>
                    <span className={styles.inputText}>&gt; </span>
                    {(isDone || tick < 0) && cursor}
                </div>
            </div>
        </div>
    )
}
