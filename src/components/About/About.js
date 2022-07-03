import './about.sass'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Slide } from 'react-awesome-reveal'
import { ReactComponent as Hacker } from 'images/undraw-hacker.svg'

const About = () => {
    return (
        <Container fluid id='about'>
            <Row className='justify-content-center'>
                <Col xs={12} className='text-center'>
                    <h1>About</h1>
                    <hr />
                </Col>
                <Col md={5}>
                    <Slide direction='left' triggerOnce>
                        <Hacker width='100%' height='100%' alt='About-Img' className='m-3' />
                    </Slide>
                </Col>
                <Col md={7}>
                    <Slide direction='right' triggerOnce>
                        <Card className='m-3'>
                            <Card.Header>
                                <svg xmlns='http://www.w3.org/2000/svg' width='54' height='14' viewBox='0 0 54 14'>
                                    <g fill='none' fillRule='evenodd' transform='translate(1 1)'>
                                        <circle cx='6' cy='6' r='6' fill='#FF5F56' stroke='#E0443E' strokeWidth='.5'></circle>
                                        <circle cx='26' cy='6' r='6' fill='#FFBD2E' stroke='#DEA123' strokeWidth='.5'></circle>
                                        <circle cx='46' cy='6' r='6' fill='#27C93F' stroke='#1AAB29' strokeWidth='.5'></circle>
                                    </g>
                                </svg>
                            </Card.Header>
                            <Card.Body className='about-card-body'>
                                <Card.Title className='about-card-title'>
                                    <h3>Hi there! :) <span className='wave'>👋</span></h3>
                                </Card.Title>
                                <Card.Text className='mt-3'>
                                    <span className='input-text'>&gt; Name</span> <br />
                                    <span className='output-text pb-4'>Jonathan Lusk</span> <br />
                                </Card.Text>
                                <Card.Text>
                                    <span className='input-text'>&gt; Current Location</span> <br />
                                    <span className='output-text'>Chattanooga, TN</span> <br />
                                </Card.Text>
                                <Card.Text>
                                    <span className='input-text'>&gt; Current Job</span> <br />
                                    <span className='output-text'>Junior Software Engineer at Ambition</span>
                                </Card.Text>
                                <Card.Text>
                                    <span className='input-text'>&gt; Personal Interests</span> <br />
                                    <span className='output-text'>Skiing, Gaming, Music Festivals, Skateboarding</span>
                                </Card.Text>
                                <Card.Text>
                                    <span className='input-text'>&gt; </span>
                                    <span className='terminal-cursor typewriter-cursor'>▋</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Slide>
                </Col>
            </Row>
        </Container>
    )
}

export default About
