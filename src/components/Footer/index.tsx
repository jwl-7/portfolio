import styles from './footer.module.sass'


export function Footer() {
    return (
        <footer className={styles.footer}>
            <span className={styles.text}>Made by Jonathan Lusk &copy; 2024</span>
        </footer>
    )
}
