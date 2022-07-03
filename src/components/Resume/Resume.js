import './resume.sass'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Flip } from 'react-awesome-reveal'
import { AiOutlineFileText } from 'react-icons/ai'

import { ReactComponent as UTC } from 'images/utc-logo.svg'
import { ReactComponent as Python } from 'images/python.svg'
import { ReactComponent as JavaScript } from 'images/javascript.svg'
import { ReactComponent as Java } from 'images/java.svg'
import { ReactComponent as PHP } from 'images/php.svg'
import { ReactComponent as SourcePawn } from 'images/sourcemod.svg'
import { ReactComponent as Sass } from 'images/sass.svg'
import { ReactComponent as ReactJS } from 'images/react.svg'
import { ReactComponent as Bootstrap } from 'images/bootstrap.svg'
import { ReactComponent as MaterialUI } from 'images/materialui.svg'
import { ReactComponent as Django } from 'images/django.svg'
import { ReactComponent as MySQL } from 'images/mysql.svg'
import { ReactComponent as SQLite } from 'images/sqlite.svg'
import { ReactComponent as VSCode } from 'images/vscode.svg'
import { ReactComponent as VisualStudio } from 'images/visualstudio.svg'
import { ReactComponent as Linux } from 'images/linux.svg'
import { ReactComponent as Git } from 'images/git.svg'
import { ReactComponent as GitHub } from 'images/github.svg'
import { ReactComponent as BitBucket } from 'images/bitbucket.svg'

const Resume = () => {
    return (
        <Container fluid id='resume'>
            <Row className='justify-content-center'>
                <Col xs={12} className='text-center'>
                    <h1 id='resume-title'>Resume</h1>
                    <hr />
                </Col>
                <Col md={4}>
                    <Flip direction='horizontal' triggerOnce>
                        <Card className='m-3'>
                            <Card.Body>
                                <Card.Title className='text-center'>Education</Card.Title>
                                <hr />
                                <Card.Text>
                                    <UTC width='10%' height='10%' alt='UTC-Logo' />
                                    &nbsp;&nbsp;University of Tennessee at Chattanooga<br />
                                    B.S. Computer Science: Information Security and Assurance
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='m-3'>
                            <Card.Body>
                                <Card.Title className='text-center'>Programming Languages</Card.Title>
                                <hr />
                                <Card.Text>
                                    <Python width='10%' height='10%' alt='Python-Logo' />
                                    &nbsp;&nbsp;Python
                                </Card.Text>
                                <Card.Text>
                                    <JavaScript width='10%' height='10%' alt='JavaScript-Logo' />
                                    &nbsp;&nbsp;JavaScript
                                </Card.Text>
                                <Card.Text>
                                    <PHP width='10%' height='10%' alt='PHP-Logo' />
                                    &nbsp;&nbsp;PHP
                                </Card.Text>
                                <Card.Text>
                                    <Java width='10%' height='10%' alt='Java-Logo' />
                                    &nbsp;&nbsp;Java
                                </Card.Text>
                                <Card.Text>
                                    <SourcePawn width='10%' height='10%' alt='SourcePawn-Logo' />
                                    &nbsp;&nbsp;SourcePawn
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Flip>
                </Col>
                <Col md={4}>
                    <Flip direction='horizontal' triggerOnce>
                        <Card className='m-3'>
                            <Card.Body>
                                <Card.Title className='text-center'>Frontend</Card.Title>
                                <hr />
                                <Card.Text>
                                    <Sass width='10%' height='10%' alt='Sass-Logo' />
                                    &nbsp;&nbsp;Sass
                                </Card.Text>
                                <Card.Text>
                                    <ReactJS width='10%' height='10%' alt='ReactJS-Logo' />
                                    &nbsp;&nbsp;React
                                </Card.Text>
                                <Card.Text>
                                    <Bootstrap width='10%' height='10%' alt='Bootstrap-Logo' />
                                    &nbsp;&nbsp;Bootstrap
                                </Card.Text>
                                <Card.Text>
                                    <MaterialUI width='10%' height='10%' alt='MaterialUI-Logo' />
                                    &nbsp;&nbsp;MaterialUI
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='m-3'>
                            <Card.Body>
                                <Card.Title className='text-center'>Backend</Card.Title>
                                <hr />
                                <Card.Text>
                                    <Django width='10%' height='10%' alt='Django-Logo' />
                                    &nbsp;&nbsp;Django
                                </Card.Text>
                                <Card.Text>
                                    <MySQL width='10%' height='10%' alt='MySQL-Logo' />
                                    &nbsp;&nbsp;MySQL
                                </Card.Text>
                                <Card.Text>
                                    <SQLite width='10%' height='10%' alt='SQLite-Logo' />
                                    &nbsp;&nbsp;SQLite
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Flip>
                </Col>
                <Col md={4}>
                    <Flip direction='horizontal' triggerOnce>
                        <Card className='m-3'>
                            <Card.Body>
                                <Card.Title className='text-center'>Tools</Card.Title>
                                <hr />
                                <Card.Text>
                                    <VSCode width='10%' height='10%' alt='VSCode-Logo' />
                                    &nbsp;&nbsp;VSCode
                                </Card.Text>
                                <Card.Text>
                                    <VisualStudio width='10%' height='10%' alt='VisualStudio-Logo' />
                                    &nbsp;&nbsp;Visual Studio
                                </Card.Text>
                                <Card.Text>
                                    <Linux width='10%' height='10%' alt='Linux-Logo' />
                                    &nbsp;&nbsp;Linux
                                </Card.Text>
                                <Card.Text>
                                    <Git width='10%' height='10%' alt='Git-Logo' />
                                    &nbsp;&nbsp;Git
                                </Card.Text>
                                <Card.Text>
                                    <GitHub width='10%' height='10%' alt='GitHub-Logo' />
                                    &nbsp;&nbsp;GitHub
                                </Card.Text>
                                <Card.Text>
                                    <BitBucket width='10%' height='10%' alt='BitBucket-Logo' />
                                    &nbsp;&nbsp;BitBucket
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Flip>
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
