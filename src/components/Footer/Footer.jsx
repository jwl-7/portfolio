import './footer.sass'

import Container from 'react-bootstrap/Container'


function Footer() {
    return (
        <Container fluid className="footer mt-4 overflow-hidden">
            <footer className="mt-3 mb-3">
                <h4 className="text-center footer-text">Made by Jonathan Lusk &copy; 2021</h4>
            </footer>
        </Container>
    )
}


export default Footer
