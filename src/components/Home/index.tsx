import styles from './home.module.sass'

import { Glitch } from '@components/Glitch'
import { Background } from '@components/Background'
import { ScrollDownButton } from '@components/ScrollDownButton'


export function Home() {
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