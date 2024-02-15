import '@styles/styles.sass'

import React from 'react'
import ReactDOM from 'react-dom/client'

import About from '@components/About'
import Contact from '@components/Contact'
import Footer from '@/components/Footer'
import Home from '@components/Home'
import NavBar from '@components/NavBar'
import Projects from '@components/Projects'
import Resume from '@components/Resume'


ReactDOM.createRoot(document.getElementById('root')!).render(
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
