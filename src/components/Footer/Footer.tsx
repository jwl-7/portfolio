import styles from './Footer.module.sass'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span className={styles.text}>Made by Jonathan Lusk &copy; {new Date().getFullYear()}</span>
        </footer>
    )
}
