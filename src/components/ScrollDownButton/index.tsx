import styles from './scrolldownbutton.module.sass'

import { useScrollTo } from '@hooks/useScrollTo'


const NAVBAR_HEIGHT = 76


export default function ScrollDownButton() {
    const handleClick = useScrollTo({ selector: '#about', offset: NAVBAR_HEIGHT - 2 })

    return (
        <button className={styles.rainbow} onClick={handleClick} aria-label="scroll down">
            <svg viewBox="0 0 68 33" className={styles.chevronDown}>
                <path d="M.58 3.414l27.432 27.433c2.715 2.715 7.167 2.787 9.964.164L67.356 3.46 64.62.54 35.24 28.093c-1.222 1.146-3.212 1.114-4.4-.075L3.408.586.579 3.414z" />
            </svg>
        </button>
    )
}
