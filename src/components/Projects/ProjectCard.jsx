import PropTypes from 'prop-types'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import useTheme from '@components/ThemeSwitch/useTheme'
import { Zoom } from 'react-awesome-reveal'

import { FaGithub } from 'react-icons/fa'
import { FaDownload } from 'react-icons/fa'
import { MdDesktopMac } from 'react-icons/md'


ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
    buttons: PropTypes.object.isRequired
}

const BUTTON_ICONS = {
    source: {
        text: 'Source',
        icon: FaGithub
    },
    demo: {
        text: 'Live Demo',
        icon: MdDesktopMac
    },
    download: {
        text: 'Download',
        icon: FaDownload
    }
}


function ProjectCard(props) {
    let imgProps = {
        variant: 'top',
        width: '600px',
        height: '400px',
        className: 'img-fluid',
        ...props.img
    }

    return (
        <Col md={6} lg={4}>
            <Zoom triggerOnce>
                <Card className="m-3">
                    <Card.Img {...imgProps} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{props.text}</Card.Text>
                        {renderCardButtons(props.buttons)}
                    </Card.Body>
                </Card>
            </Zoom>
        </Col>
    )
}

function renderCardButtons(buttons) {
    const theme = useTheme()
    const variant = theme === 'light'
        ? 'primary'
        : 'secondary'

    return Object.keys(buttons).map((button) => {
        let buttonProps = {
            key: button,
            variant: variant,
            target: '_blank',
            ...buttons[button]
        }
        let Icon = BUTTON_ICONS[button].icon
        let text = BUTTON_ICONS[button].text

        return (
            <Button {...buttonProps}>
                <h5><Icon /> {text}</h5>
            </Button>
        )
    })
}


export default ProjectCard
