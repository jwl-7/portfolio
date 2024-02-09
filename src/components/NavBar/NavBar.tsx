import './NavBar.sass'

import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import ThemeSwitch from '@components/ThemeSwitch/ThemeSwitch'
import useTheme from '@components/ThemeSwitch/useTheme'


function NavBar() {
    const [shadow, setShadow] = useState('')
    const isExpanded = useMediaQuery({
        query: '(min-width: 768px)'
    })
    const theme = useTheme()

    const listenScroll = () => {
        return window.scrollY > 70
            ? setShadow('navbar-shadow')
            : setShadow('')
    }


    useEffect(() => {
        window.addEventListener('scroll', listenScroll)

        return () => {
            window.removeEventListener('scroll', listenScroll)
        }
    }, [])

    return (
        <Navbar
            className={shadow}
            collapseOnSelect
            fixed="top"
            expand="md"
            bg={theme}
            variant={theme}
        >
            <Container>
                <Navbar.Brand>JWL</Navbar.Brand>
                {!isExpanded && <ThemeSwitch />}
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <span className="toggler-icon top-bar" />
                    <span className="toggler-icon middle-bar" />
                    <span className="toggler-icon bottom-bar" />
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="me-auto" />
                    <Nav>
                        <Nav.Link href="#home" className="me-3">Home</Nav.Link>
                        <Nav.Link href="#about" className="me-3">About</Nav.Link>
                        <Nav.Link href="#projects" className="me-3">Projects</Nav.Link>
                        <Nav.Link href="#resume" className="me-3">Resume</Nav.Link>
                        <Nav.Link href="#contact" className="me-3">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            {isExpanded && <ThemeSwitch />}
        </Navbar>
    )
}


export default NavBar
