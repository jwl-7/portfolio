import styles from './footer.module.sass'

import Container from '@components/Container'


export default function Footer() {
    return (
        <Container fluid className={styles.container}>
            <footer className={styles.footer}>
                <h4 className={styles['footer-text']}>Made by Jonathan Lusk &copy; 2024</h4>
            </footer>
        </Container>
    )
}
