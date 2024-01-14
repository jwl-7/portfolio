import './projects.sass'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import CodeGrind from '@images/codegrind-ss.webp'
import Codex from '@images/codex-ss.webp'
import KZBot from '@images/kzbot-ss.webp'
import NadeSpace from '@images/nadespace-ss.webp'
import Portfolio from '@images/portfolio-ss.webp'
import StickBop from '@images/stickbop-ss.webp'

import ProjectCard from './ProjectCard'


function Projects() {
    return (
        <Container fluid id="projects">
            <Row className="justify-content-center">
                {renderTitle()}
                {renderProjectCards()}
            </Row>
        </Container>
    )
}

function renderTitle() {
    return (
        <Col xs={12} className="text-center">
            <h1>Projects</h1>
            <hr />
        </Col>
    )
}

function renderProjectCards() {
    return (
        <>
            <ProjectCard
                title="nade.space"
                text="An interactive web-app for learning nades in CS:GO."
                img={{
                    src: NadeSpace,
                    alt: 'nade.space-screenshot'
                }}
                buttons={{
                    source: {
                        href: 'https://github.com/jwl-7/nade.space',
                        className: 'me-3 me-lg-1 me-xl-3'
                    },
                    demo: {
                        href: 'https://jwl-7.github.io/nade.space/'
                    }
                }}
            />
            <ProjectCard
                title="Stick Bop!"
                text="A python game inspired by the 90s Bop It! toy."
                img={{
                    src: StickBop,
                    alt: 'Stick Bop!-screenshot'
                }}
                buttons={{
                    source: {
                        href: 'https://github.com/jwl-7/Stick-Bop',
                        className: 'me-3 me-lg-1 me-xl-3'
                    },
                    download: {
                        href: 'https://github.com/jwl-7/Stick-Bop/releases'
                    }
                }}
            />
            <ProjectCard
                title="Codex"
                text="A python discord bot with Markov chain responses, slots, and more."
                img={{
                    src: Codex,
                    alt: 'Codex-screenshot'
                }}
                buttons={{
                    source: {
                        href: 'https://github.com/jwl-7/Codex',
                    }
                }}
            />
            <ProjectCard
                title="Portfolio Website"
                text="A modern portfolio website made with ReactJS."
                img={{
                    src: Portfolio,
                    alt: 'Portfolio-screenshot'
                }}
                buttons={{
                    source: {
                        href: 'https://github.com/jwl-7/portfolio',
                    }
                }}
            />
            <ProjectCard
                title="c0de_gr1nd"
                text="Solutions and explanations to the problems in EPI."
                img={{
                    src: CodeGrind,
                    alt: 'CodeGrind-screenshot'
                }}
                buttons={{
                    source: {
                        href: 'https://github.com/jwl-7/c0de_gr1nd',
                    }
                }}
            />
            <ProjectCard
                title="KZBOT"
                text="A python discord bot for CS:GO KZ community servers."
                img={{
                    src: KZBot,
                    alt: 'KZBOT-screenshot'
                }}
                buttons={{
                    source: {
                        href: 'https://github.com/jwl-7/kzbot',
                    }
                }}
            />
        </>
    )
}


export default Projects
