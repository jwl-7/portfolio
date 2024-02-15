import styles from './about.module.sass'

import { Slide } from 'react-awesome-reveal'

import Terminal from '@components/Terminal'
import SvgUndrawHacker from '@icons/UndrawHacker'


export default function About() {
    return (
        <div id="about" className={styles.container}>
            <div className={styles.title}>
                <h1>About</h1>
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
        </div>
    )
}