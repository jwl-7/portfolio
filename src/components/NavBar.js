import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return (
        <Navbar fixed='top' collapseOnSelect expand='md' bg='light' variant='light'>
            <Container>
                <Navbar.Brand>JWL</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <div className='me-auto' />
                    <Nav>
                        <Nav.Link href='#top'>Home</Nav.Link>
                        <Nav.Link href='#about'>About</Nav.Link>
                        <Nav.Link href='#projects'>Projects</Nav.Link>
                        <Nav.Link href='#resume'>Resume</Nav.Link>
                        <Nav.Link href='#contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
