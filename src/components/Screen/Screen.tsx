import styles from './Screen.module.sass'

interface ScreenProps {
    imageSource: string
    alt: string
}

export default function Screen({ imageSource, alt }: ScreenProps) {
    return (
        <div className={styles.device}>
            <div className={styles.frame}>
                <img className={styles.screen} src={imageSource} alt={alt} />
            </div>
        </div>
    )
}
