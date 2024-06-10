import styles from './contact.module.sass'

import { FormEvent, useRef, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { SvgGitHubLight } from '@icons/GitHubLight'
import { SvgLinkedIn } from '@icons/LinkedIn'

import emailjs from '@emailjs/browser'


const API_KEY = import.meta.env.VITE_EMAILJS_API_KEY
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID


export function Contact() {
    const form = useRef<HTMLFormElement>(null)
    const [formSubmitted, setFormSubmitted] = useState(false)
    const formClassName = formSubmitted ? 'submitted' : ''

    const sendEmail = () => {
        if (!form.current) return
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, API_KEY)
            .then(() => {
                alert('Email successfully sent. Thank you for reaching out to me!')
                console.log('Email successfully sent!')
            })
            .catch((error) => {
                alert('Email failed to send!')
                console.error('Email failed to send!', error)
            })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setFormSubmitted(true)

        if (event.currentTarget.checkValidity()) {
            sendEmail()
            form.current?.reset()
            setFormSubmitted(false)
        }
        else {
            event.stopPropagation()
        }
    }

    return (
        <section id="contact">
            <div className={styles.title}>
                <h2>Contact</h2>
                <hr />
            </div>
            <div className={styles.contentContainer}>
                <Fade direction="up" triggerOnce>
                    <div className={styles.card}>
                        <div className="form-container">
                            <h3 className={styles.contactHeader}>Send a Message</h3>
                            <form ref={form} className={formClassName} noValidate onSubmit={handleSubmit}>
                                <div className={styles.formElement}>
                                    <label htmlFor="form-name">Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        id="form-name"
                                        required
                                    />
                                </div>
                                <div className={styles.formElement}>
                                    <label htmlFor="form-email">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        id="form-email"
                                        required
                                    />
                                </div>
                                <div className={styles.formElement}>
                                    <label htmlFor="form-message">Message</label>
                                    <textarea
                                        name="message"
                                        id="form-message"
                                        required
                                        rows={3}
                                    />
                                </div>
                                <button type="submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="info-container">
                            <h3 className={styles.contactHeader}>Find Me On</h3>
                            <p>Feel free to connect with me or send me a message.</p>
                            <div className={styles.buttonContainer}>
                                <a href="https://github.com/jwl-7" role="button" target="_blank">
                                    <SvgGitHubLight /> GitHub
                                </a>
                                <a href="https://linkedin.com/in/jonathanwlusk/" role="button" target="_blank">
                                    <SvgLinkedIn /> LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}
