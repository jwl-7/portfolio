import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import emailjs from 'emailjs-com'
import { Fade } from 'react-awesome-reveal'

import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID
const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID
const userId = process.env.REACT_APP_EMAILJS_USERID
const initialFormData = {
    name: '',
    email: '',
    message: ''
}

const Contact = () => {
    const [formData, updateFormData] = useState(initialFormData)
    const [validated, setValidated] = useState(false)

    const resetForm = (e) => {
        e.target.reset()
        setValidated(false)
        updateFormData(initialFormData)
    }

    const sendFeedback = (form) => {
        emailjs.send(serviceId, templateId, form, userId)
        .then(result => {
            alert('Email successfully sent. Thank you for reaching out to me!')
            console.log('Email successfully sent!')
        })
        .catch(error => {
            alert('Email failed to send!')
            console.error('Email failed to send!', error)
        })
    }

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (e.currentTarget.checkValidity() === false) {
            e.stopPropagation()
            setValidated(true)
        }
        else {
            sendFeedback({
                from_name: formData.name,
                email: formData.email,
                message: formData.message
            })
            resetForm(e)
        }
    }

    return (
        <Container fluid id='contact'>
            <Row className='justify-content-center'>
                <Col xs={12} className='text-center'>
                    <h1>Contact</h1>
                    <hr />
                </Col>
                <Col lg={10} xl={8} xxl={6}>
                    <Fade direction='up' triggerOnce>
                        <Card className='m-3'>
                            <Card.Body>
                                <Row>
                                    <Col lg={6} className='p-3'>
                                        <h3>Send a Message</h3>
                                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                            <Form.Group className='mb-3' controlId='formName'>
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    name='name'
                                                    type='name'
                                                    required
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                            <Form.Group className='mb-3' controlId='formEmail'>
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    name='email'
                                                    type='email'
                                                    required
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                            <Form.Group className='mb-3' controlId='formMessage'>
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control
                                                    name='message'
                                                    as='textarea'
                                                    required
                                                    onChange={handleChange}
                                                    rows={3}
                                                />
                                            </Form.Group>
                                            <Button variant='primary' type='submit'>
                                                Submit
                                            </Button>
                                        </Form>
                                    </Col>
                                    <Col lg={6} className='p-3'>
                                        <h3 className='mb-3'>Find Me On</h3>
                                        <p className='mb-4'>Feel free to connect with me or send me a message.</p>
                                        <Button
                                            variant='primary'
                                            href='https://github.com/jwl-7'
                                            target='_blank'
                                            className='me-2 mb-2'
                                        >
                                            <h5><AiFillGithub /> GitHub</h5>
                                        </Button>
                                        <Button
                                            variant='primary'
                                            href='https://linkedin.com/in/jonathanwlusk/'
                                            target='_blank'
                                            className='mb-2'
                                        >
                                            <h5><AiFillLinkedin /> LinkedIn</h5>
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Fade>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact
