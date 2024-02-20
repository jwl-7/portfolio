import styles from './home.module.sass'

import Glitch from '@components/Glitch'
import Background from '@components/Background'
import ScrollDownButton from '@components/ScrollDownButton'


export default function Home() {
    return (
        <section id="home" className={styles.home}>
            <div className={styles.contentContainer}>
                <Background />
                <Glitch />
                <ScrollDownButton />
            </div>
        </section>
    )
}