import '@/styles.sass'

import About from '@components/About/About'
import Contact from '@components/Contact/Contact'
import Footer from '@/components/Footer'
import Home from '@components/Home/Home'
import NavBar from '@components/NavBar/NavBar'
import Projects from '@components/Projects/Projects'
import Resume from '@components/Resume/Resume'


export default function App() {
    return (
        <div className="App">
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
        </div>
    )
}
