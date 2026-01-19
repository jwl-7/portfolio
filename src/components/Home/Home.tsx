import styles from './Home.module.sass'

import Glitch from '@components/Glitch/Glitch'
import Background from '@components/Background/Background'
import ScrollDownButton from '@components/ScrollDownButton/ScrollDownButton'

export default function Home() {
    return (
        <section id="home" className={styles.home}>
            <Background />
            <div className={styles.contentContainer}>
                <Glitch />
                <ScrollDownButton />
            </div>
        </section>
    )
}