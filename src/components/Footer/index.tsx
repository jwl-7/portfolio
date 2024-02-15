import styles from './footer.module.sass'


export default function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h4 className={styles.text}>Made by Jonathan Lusk &copy; 2024</h4>
            </footer>
        </div>
    )
}
