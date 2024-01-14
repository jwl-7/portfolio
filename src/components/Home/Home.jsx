import './home.sass'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Typewriter from 'typewriter-effect'

import LineDraw from './LineDraw'


function Home() {
    return (
        <Container fluid id="home">
            <Row className="justify-content-center">
                {renderTypewriterText()}
                {renderLineDraw()}
            </Row>
        </Container>
    )
}

function renderTypewriterText() {
    return (
        <Col xs={12} className="text-center">
            <h1 className="display-1">
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
    )
}

function renderLineDraw() {
    return (
        <Col md={6}>
            <LineDraw />
        </Col>
    )
}


export default Home
