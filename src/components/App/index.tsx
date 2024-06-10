import '@styles/styles.sass'

import React from 'react'

import { About } from '@components/About'
import { Contact } from '@components/Contact'
import { Footer } from '@/components/Footer'
import { Home } from '@components/Home'
import { NavBar } from '@components/NavBar'
import { Projects } from '@components/Projects'
import { Resume } from '@components/Resume'


export default function App() {
    return (
        <React.StrictMode>
            <div className="App">
                <NavBar />
                <main>
                    <Home />
                    <About />
                    <Projects />
                    <Resume />
                    <Contact />
                </main>
                <Footer />
            </div>
        </React.StrictMode>
    )
}
