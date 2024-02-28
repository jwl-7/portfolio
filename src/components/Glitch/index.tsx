import styles from './glitch.module.sass'

import { useMediaQuery } from 'react-responsive'


export default function Glitch() {
    const isScreenMd = useMediaQuery({ maxWidth: 768 })

    const renderDesktop = () => {
        return (
            <div className={styles.glitch} data-text="Jonathan Lusk">
                Jonathan Lusk
            </div>
        )
    }

    const renderMobile = () => {
        return (
            <div className={styles.mobileGlitchContainer}>
                <div className={styles.glitch} data-text="Jonathan">
                    Jonathan
                </div>
                <div className={styles.glitch} data-text="Lusk">
                    Lusk
                </div>
            </div>
        )
    }

    return isScreenMd ? renderMobile() : renderDesktop()
}
