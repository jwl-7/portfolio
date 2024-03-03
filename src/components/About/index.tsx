import styles from './about.module.sass'

import { Slide } from 'react-awesome-reveal'

import Terminal from '@components/Terminal'
import SvgUndrawHacker from '@icons/UndrawHacker'


export default function About() {
    return (
        <section id="about">
            <div className={styles.title}>
                <h2>About</h2>
                <hr />
            </div>
            <div className={styles.contentContainer}>
                <Slide direction="left" triggerOnce>
                    <SvgUndrawHacker />
                </Slide>
                <Slide direction="right" triggerOnce>
                    <Terminal />
                </Slide>
            </div>
        </section>
    )
}
