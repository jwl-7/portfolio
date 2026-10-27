import styles from './Contact.module.sass'

import { FormEvent, useRef, useState } from 'react'
import { Fade } from 'react-awesome-reveal'

import emailjs from '@emailjs/browser'
import SvgGitHubLight from '@icons/GitHubLight'
import SvgLinkedIn from '@icons/LinkedIn'

const API_KEY = import.meta.env.VITE_EMAILJS_API_KEY
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

type SendStatus = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
    const form = useRef<HTMLFormElement>(null)
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [status, setStatus] = useState<SendStatus>('idle')
    const formClassName = formSubmitted ? 'submitted' : ''

    // only clear the form once the email actually goes through
    const sendEmail = async () => {
        if (!form.current) return
        setStatus('sending')
        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, API_KEY)
            setStatus('sent')
            setFormSubmitted(false)
            form.current?.reset()
        } catch (error) {
            setStatus('error')
            console.error('Email failed to send!', error)
        }
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setFormSubmitted(true)

        if (event.currentTarget.checkValidity()) {
            sendEmail()
        }
        else {
            setStatus('idle')
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
                                <button type="submit" disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Sending...' : 'Submit'}
                                </button>
                                {status === 'sent' && (
                                    <p className={styles.success} role="status">Message sent — thanks for reaching out!</p>
                                )}
                                {status === 'error' && (
                                    <p className={styles.error} role="alert">Something went wrong. Try again, or reach me on LinkedIn.</p>
                                )}
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
