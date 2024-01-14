import './resume.sass'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Flip } from 'react-awesome-reveal'

import { FaRegFileAlt } from 'react-icons/fa'
import Bootstrap from '@images/bootstrap.svg?react'
import CircleCi from '@images/circleci.svg?react'
import Cypress from '@images/cypress.svg?react'
import Django from '@images/django.svg?react'
import Docker from '@images/docker.svg?react'
import Git from '@images/git.svg?react'
import GitHub from '@images/github.svg?react'
import JavaScript from '@images/javascript.svg?react'
import Linux from '@images/linux.svg?react'
import MaterialUI from '@images/materialui.svg?react'
import MySQL from '@images/mysql.svg?react'
import Python from '@images/python.svg?react'
import ReactJS from '@images/react.svg?react'
import Sass from '@images/sass.svg?react'
import SourcePawn from '@images/sourcemod.svg?react'
import SQLite from '@images/sqlite.svg?react'
import UTC from '@images/utc-logo.svg?react'
import VSCode from '@images/vscode.svg?react'


const svgIconProps = {
    width: '10%',
    height: '10%'
}


function Resume() {
    return (
        <Container fluid id="resume">
            <Row className="justify-content-center">
                {renderTitle()}
                {renderCards()}
            </Row>
            {renderViewResumeButton()}
        </Container>
    )
}

function renderTitle() {
    return (
        <Col xs={12} className="text-center">
            <h1 id="resume-title">Resume</h1>
            <hr />
        </Col>
    )
}

function renderCards() {
    return (
        <>
            <Col md={4}>
                <Flip direction="horizontal" triggerOnce>
                    {renderEducation()}
                    {renderProgrammingLanguages()}
                </Flip>
            </Col>
            <Col md={4}>
                <Flip direction="horizontal" triggerOnce>
                    {renderFrontend()}
                    {renderBackend()}
                </Flip>
            </Col>
            {renderTools()}
        </>
    )
}

function renderEducation() {
    return (
        <Card className="m-3">
            <Card.Body>
                <Card.Title className="text-center">Education</Card.Title>
                <hr />
                <Card.Text>
                    <UTC {...svgIconProps} alt="UTC-Logo" />
                    &nbsp;&nbsp;University of Tennessee at Chattanooga<br />
                    B.S. Computer Science: Information Security and Assurance
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

function renderProgrammingLanguages() {
    return (
        <Card className="m-3">
            <Card.Body>
                <Card.Title className="text-center">Programming Languages</Card.Title>
                <hr />
                <Card.Text>
                    <Python {...svgIconProps} alt="Python-Logo" />
                    &nbsp;&nbsp;Python
                </Card.Text>
                <Card.Text>
                    <JavaScript {...svgIconProps} alt="JavaScript-Logo" />
                    &nbsp;&nbsp;JavaScript
                </Card.Text>
                <Card.Text>
                    <SourcePawn {...svgIconProps} alt="SourcePawn-Logo" />
                    &nbsp;&nbsp;SourcePawn
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

function renderFrontend() {
    return (
        <Card className="m-3">
            <Card.Body>
                <Card.Title className="text-center">Frontend</Card.Title>
                <hr />
                <Card.Text>
                    <ReactJS {...svgIconProps} alt="ReactJS-Logo" />
                    &nbsp;&nbsp;React
                </Card.Text>
                <Card.Text>
                    <Cypress {...svgIconProps} alt="Cypress-Logo" />
                    &nbsp;&nbsp;Cypress
                </Card.Text>
                <Card.Text>
                    <Sass {...svgIconProps} alt="Sass-Logo" />
                    &nbsp;&nbsp;Sass
                </Card.Text>
                <Card.Text>
                    <Bootstrap {...svgIconProps} alt="Bootstrap-Logo" />
                    &nbsp;&nbsp;Bootstrap
                </Card.Text>
                <Card.Text>
                    <MaterialUI {...svgIconProps} alt="MaterialUI-Logo" />
                    &nbsp;&nbsp;MaterialUI
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

function renderBackend() {
    return (
        <Card className="m-3">
            <Card.Body>
                <Card.Title className="text-center">Backend</Card.Title>
                <hr />
                <Card.Text>
                    <Django {...svgIconProps} alt="Django-Logo" />
                    &nbsp;&nbsp;Django
                </Card.Text>
                <Card.Text>
                    <MySQL {...svgIconProps} alt="MySQL-Logo" />
                    &nbsp;&nbsp;MySQL
                </Card.Text>
                <Card.Text>
                    <SQLite {...svgIconProps} alt="SQLite-Logo" />
                    &nbsp;&nbsp;SQLite
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

function renderTools() {
    return (
        <Col md={4}>
            <Flip direction="horizontal" triggerOnce>
                <Card className="m-3">
                    <Card.Body>
                        <Card.Title className="text-center">Tools</Card.Title>
                        <hr />
                        <Card.Text>
                            <VSCode {...svgIconProps} alt="VSCode-Logo" />
                            &nbsp;&nbsp;VSCode
                        </Card.Text>
                        <Card.Text>
                            <Linux {...svgIconProps} alt="Linux-Logo" />
                            &nbsp;&nbsp;Linux
                        </Card.Text>
                        <Card.Text>
                            <Git {...svgIconProps} alt="Git-Logo" />
                            &nbsp;&nbsp;Git
                        </Card.Text>
                        <Card.Text>
                            <GitHub {...svgIconProps} alt="GitHub-Logo" />
                            &nbsp;&nbsp;GitHub
                        </Card.Text>
                        <Card.Text>
                            <CircleCi {...svgIconProps} alt="CircleCi-Logo" />
                            &nbsp;&nbsp;CircleCi
                        </Card.Text>
                        <Card.Text>
                            <Docker {...svgIconProps} alt="Docker-Logo" />
                            &nbsp;&nbsp;Docker
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Flip>
        </Col>
    )
}

function renderViewResumeButton() {
    return (
        <Row className="justify-content-center">
            <Col className="text-center">
                <Button
                    variant="primary"
                    href="../files/resume.pdf"
                    target="_blank"
                    className="mt-4"
                >
                    <h5><FaRegFileAlt /> View Full Resume</h5>
                </Button>
            </Col>
        </Row>
    )
}


export default Resume
