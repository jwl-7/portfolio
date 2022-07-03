import './home.sass'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Typewriter from 'typewriter-effect'
import LineDraw from './LineDraw'

const Home = () => {
    return (
        <Container fluid id='home'>
            <Row className='justify-content-center'>
                <Col xs={12} className='text-center'>
                    <h1 className='display-1'>
                        <Typewriter
                            options={{
                                loop: true,
                                cursor: '▋',
                                wrapperClassName: 'typewriter-text',
                                cursorClassName: 'typewriter-cursor',
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('> Jonathan Lusk')
                                typewriter.pauseFor(2500)
                                typewriter.deleteChars(13)
                                typewriter.typeString('Welcome!')
                                typewriter.pauseFor(2000)
                                typewriter.start()
                            }}
                        />
                    </h1>
                </Col>
                <Col md={6}>
                    <LineDraw />
                </Col>
            </Row>
        </Container>
    )
}

export default Home
