import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Zoom } from 'react-awesome-reveal'

import NadeSpace from '../images/nade-space-ss.png'
import StickBop from '../images/stick-bop-ss.png'
import Codex from '../images/codex-ss.png'
import Website from '../images/website-ss.png'
import CodeGrind from '../images/codegrind-ss.png'
import KZBot from '../images/kzbot-ss.png'
import { AiFillGithub } from 'react-icons/ai'
import { MdDesktopMac } from 'react-icons/md'

const Projects = () => {
    return (
        <Container fluid id='projects'>
            <Row className='justify-content-center'>
                <Col xs={12} className='text-center'>
                    <h1>Projects</h1>
                    <hr />
                </Col>
                <Col md={6} lg={4}>
                    <Zoom triggerOnce>
                        <Card className='m-3'>
                            <Card.Img variant='top' src={NadeSpace} />
                            <Card.Body>
                                <Card.Title>nade.space</Card.Title>
                                <Card.Text>
                                    An interactive web-app for learning nades in CS:GO.
                                </Card.Text>
                                <Button
                                    variant='primary'
                                    href='https://github.com/jwl-7/nade.space'
                                    target='_blank'
                                    className='me-3 me-lg-1 me-xl-3'
                                >
                                    <h5><AiFillGithub /> Source</h5>
                                </Button>
                                <Button
                                    variant='primary'
                                    href='https://jwl-7.github.io/nade.space/'
                                    target='_blank'
                                >
                                    <h5><MdDesktopMac /> Live Demo</h5>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Zoom>
                </Col>
                <Col md={6} lg={4}>
                    <Zoom triggerOnce>
                        <Card className='m-3'>
                            <Card.Img variant='top' src={StickBop} />
                            <Card.Body>
                                <Card.Title>Stick Bop!</Card.Title>
                                <Card.Text>
                                    A python game inspired by the 90s Bop It! toy
                                </Card.Text>
                                <Button
                                    variant='primary'
                                    href='https://github.com/jwl-7/Stick-Bop'
                                    target='_blank'
                                    className='me-3 me-lg-1 me-xl-3'
                                >
                                    <h5><AiFillGithub /> Source</h5>
                                </Button>
                                <Button
                                    variant='primary'
                                    href='https://github.com/jwl-7/Stick-Bop/releases'
                                    target='_blank'
                                >
                                    <h5><MdDesktopMac /> Download</h5>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Zoom>
                </Col>
                <Col md={6} lg={4}>
                    <Zoom triggerOnce>
                        <Card className='m-3'>
                            <Card.Img variant='top' src={Codex} />
                            <Card.Body>
                                <Card.Title>Codex</Card.Title>
                                <Card.Text>
                                    A python discord bot with Markov chain responses, slots, and more.
                                </Card.Text>
                                <Button
                                    variant='primary'
                                    href='https://github.com/jwl-7/Codex'
                                    target='_blank'
                                >
                                    <h5><AiFillGithub /> Source</h5>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Zoom>
                </Col>
                <Col md={6} lg={4}>
                    <Zoom triggerOnce>
                        <Card className='m-3'>
                            <Card.Img variant='top' src={Website} />
                            <Card.Body>
                                <Card.Title>Portfolio Website</Card.Title>
                                <Card.Text>
                                    A modern portfolio website made with ReactJS.
                                </Card.Text>
                                <Button
                                    variant='primary'
                                    href='https://github.com/jwl-7/portfolio'
                                    target='_blank'
                                >
                                    <h5><AiFillGithub /> Source</h5>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Zoom>
                </Col>
                <Col md={6} lg={4}>
                    <Zoom triggerOnce>
                        <Card className='m-3'>
                            <Card.Img variant='top' src={CodeGrind} />
                            <Card.Body>
                                <Card.Title>c0de_gr1nd</Card.Title>
                                <Card.Text>
                                    Solutions and explanations to the problems in EPI.
                                </Card.Text>
                                <Button
                                    variant='primary'
                                    href='https://github.com/jwl-7/c0de_gr1nd'
                                    target='_blank'
                                >
                                    <h5><AiFillGithub /> Source</h5>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Zoom>
                </Col>
                <Col md={6} lg={4}>
                    <Zoom triggerOnce>
                        <Card className='m-3'>
                            <Card.Img variant='top' src={KZBot} />
                            <Card.Body>
                                <Card.Title>KZBOT</Card.Title>
                                <Card.Text>
                                    A python discord bot for CS:GO KZ community servers.
                                </Card.Text>
                                <Button
                                    variant='primary'
                                    href='https://github.com/jwl-7/kzbot'
                                    target='_blank'
                                >
                                    <h5><AiFillGithub /> Source</h5>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Zoom>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects