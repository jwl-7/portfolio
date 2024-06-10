import styles from './screen.module.sass'


interface ScreenProps {
    imgSrc: string
    alt: string
}


export default function Screen(props: ScreenProps) {
    return (
        <div className={styles.device}>
            <div className={styles.frame}>
                <img className={styles.screen} src={props.imgSrc} alt={props.alt} />
            </div>
        </div>
    )
}
