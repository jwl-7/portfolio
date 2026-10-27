import styles from './Glitch.module.sass'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useScramble } from '@hooks/useScramble'

const NAME = 'Jonathan Lusk'

export default function Glitch() {
    const isScreenMd = useMediaQuery({ maxWidth: 768 })
    const [name, scramble] = useScramble(NAME)

    useEffect(() => {
        scramble()
    }, [scramble])

    const renderDesktop = () => {
        return (
            <h1 className={styles.glitch} data-text={name} aria-label={NAME} onMouseEnter={scramble}>
                {name}
            </h1>
        )
    }

    const renderMobile = () => {
        const [first, last] = name.split(' ')
        return (
            <div className={styles.mobileGlitchContainer} aria-label={NAME} role="heading" aria-level={1} onClick={scramble}>
                <div className={styles.glitch} data-text={first}>
                    {first}
                </div>
                <div className={styles.glitch} data-text={last}>
                    {last}
                </div>
            </div>
        )
    }

    return isScreenMd ? renderMobile() : renderDesktop()
}
