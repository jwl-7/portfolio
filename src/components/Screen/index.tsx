import styles from './screen.module.sass'


interface ScreenProps {
    imgSrc: string
    alt: string
}


export function Screen({ imgSrc, alt }: ScreenProps) {
    return (
        <div className={styles.device}>
            <div className={styles.frame}>
                <img className={styles.screen} src={imgSrc} alt={alt} />
            </div>
        </div>
    )
}
