import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Flip } from 'react-awesome-reveal'
import { AiOutlineFileText } from 'react-icons/ai'

import UTC from '../images/utc-logo.svg'
import Python from '../images/python.svg'
import JavaScript from '../images/javascript.svg'
import Java from '../images/java.svg'
import SourcePawn from '../images/sourcemod.svg'

import Html5 from '../images/html5.svg'
import Css3 from '../images/css3.svg'
import Sass from '../images/sass.svg'
import ReactJS from '../images/react.svg'
import Bootstrap from '../images/bootstrap.svg'
import MaterialUI from '../images/materialui.svg'

import MySQL from '../images/mysql.svg'
import SQLite from '../images/sqlite.svg'

import VSCode from '../images/vscode.svg'
import VisualStudio from '../images/visualstudio.svg'
import Linux from '../images/linux.svg'
import Git from '../images/git.svg'
import GitHub from '../images/github.svg'
import BitBucket from '../images/bitbucket.svg'

const Resume = () => {
    return (
        <Container fluid id='resume'>
            <Row className='justify-content-center'>
                <Col xs={12} className='text-center'>
                    <h1 id='resume-title'>Resume</h1>
                    <hr />
                </Col>
                <Col md={4}>
                    <Flip direction='horizontal'>
                        <Card className='m-3'>
                            <Card.Body>
                                <Card.Title className='text-center'>Education</Card.Title>
                                <hr />
                                <Card.Text>
                                    <p>
                                        <img src={UTC} width='10%' alt='UTC-Logo' />
                                        &nbsp;&nbsp;University of Tennessee at Chattanooga<br />
                                        B.S. Computer Science: Information Security and Assurance
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Flip>
                    <Card className='m-3'>
                        <Card.Body>
                            <Card.Title className='text-center'>Programming Languages</Card.Title>
                            <hr />
                            <Card.Text>
                                <p>
                                    <img src={Python} width='10%' alt='Python-Logo' />
                                    &nbsp;&nbsp;Python
                                </p>
                                <p>
                                    <img src={JavaScript} width='10%' alt='JavaScript-Logo' />
                                    &nbsp;&nbsp;JavaScript
                                </p>
                                <p>
                                    <img src={Java} width='10%' alt='Java-Logo' />
                                    &nbsp;&nbsp;Java
                                </p>
                                <p>
                                    <img src={SourcePawn} width='10%' alt='SourcePawn-Logo' />
                                    &nbsp;&nbsp;SourcePawn
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='m-3'>
                        <Card.Body>
                            <Card.Title className='text-center'>Frontend</Card.Title>
                            <hr />
                            <Card.Text>
                                <p>
                                    <img src={Html5} width='10%' alt='HTML5-Logo' />
                                    &nbsp;&nbsp;HTML
                                </p>
                                <p>
                                    <img src={Css3} width='10%' alt='Python-Logo' />
                                    &nbsp;&nbsp;CSS
                                </p>
                                <p>
                                    <img src={Sass} width='10%' alt='Sass-Logo' />
                                    &nbsp;&nbsp;Sass
                                </p>
                                <p>
                                    <img src={ReactJS} width='10%' alt='ReactJS-Logo' />
                                    &nbsp;&nbsp;React
                                </p>
                                <p>
                                    <img src={Bootstrap} width='10%' alt='Bootstrap-Logo' />
                                    &nbsp;&nbsp;Bootstrap
                                </p>
                                <p>
                                    <img src={MaterialUI} width='10%' alt='MaterialUI-Logo' />
                                    &nbsp;&nbsp;MaterialUI
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='m-3'>
                        <Card.Body>
                            <Card.Title className='text-center'>Database</Card.Title>
                            <hr />
                            <Card.Text>
                                <p>
                                    <img src={MySQL} width='10%' alt='MySQL-Logo' />
                                    &nbsp;&nbsp;MySQL
                                </p>
                                <p>
                                    <img src={SQLite} width='10%' alt='SQLite-Logo' />
                                    &nbsp;&nbsp;SQLite
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='m-3'>
                        <Card.Body>
                            <Card.Title className='text-center'>Tools</Card.Title>
                            <hr />
                            <Card.Text>
                                <p>
                                    <img src={VSCode} width='10%' alt='VSCode-Logo' />
                                    &nbsp;&nbsp;VSCode

                                </p>
                                <p>
                                    <img src={VisualStudio} width='10%' alt='VisualStudio-Logo' />
                                    &nbsp;&nbsp;Visual Studio
                                </p>
                                <p>
                                    <img src={Linux} width='10%' alt='Linux-Logo' />
                                    &nbsp;&nbsp;Linux
                                </p>
                                <p>
                                    <img src={Git} width='10%' alt='Git-Logo' />
                                    &nbsp;&nbsp;Git
                                </p>
                                <p>
                                    <img src={GitHub} width='10%' alt='GitHub-Logo' />
                                    &nbsp;&nbsp;GitHub
                                </p>
                                <p>
                                    <img src={BitBucket} width='10%' alt='BitBucket-Logo' />
                                    &nbsp;&nbsp;BitBucket
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col className='text-center'>
                    <Button
                        variant='primary'
                        href='../files/resume.pdf'
                        target='_blank'
                        className='mt-4'
                    >
                        <h5><AiOutlineFileText /> View Full Resume</h5>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Resume
