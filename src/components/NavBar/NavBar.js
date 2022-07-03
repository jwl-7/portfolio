import './navbar.sass'

import { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


function NavBar() {
    const [shadow, setShadow] = useState('')

    const listenScroll = (e) => {
        if (window.scrollY > 70) {
            return setShadow('navbar-shadow')
        }
        return setShadow('')
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScroll)

        return () =>
            window.removeEventListener('scroll', listenScroll)
    }, [shadow])

    return (
        <Navbar
            fixed='top'
            collapseOnSelect
            expand='md'
            bg='light'
            variant='light'
            className={shadow}
        >
            <Container>
                <Navbar.Brand>JWL</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'>
                    <span className='toggler-icon top-bar' />
                    <span className='toggler-icon middle-bar' />
                    <span className='toggler-icon bottom-bar' />
                </Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <div className='me-auto' />
                    <Nav>
                        <Nav.Link href='#home' className='me-3'>Home</Nav.Link>
                        <Nav.Link href='#about' className='me-3'>About</Nav.Link>
                        <Nav.Link href='#projects' className='me-3'>Projects</Nav.Link>
                        <Nav.Link href='#resume' className='me-3'>Resume</Nav.Link>
                        <Nav.Link href='#contact' className='me-3'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavBar
