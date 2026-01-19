import '@styles/styles.sass'

import React from 'react'

import About from '@components/About/About'
import Contact from '@components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Home from '@components/Home/Home'
import NavBar from '@components/NavBar/NavBar'
import Projects from '@components/Projects/Projects'
import Resume from '@components/Resume/Resume'

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
