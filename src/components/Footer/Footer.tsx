import styles from './Footer.module.sass'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span className={styles.text}>Made by <span className={styles.name}>Jonathan Lusk</span> &copy; {new Date().getFullYear()}</span>
        </footer>
    )
}
