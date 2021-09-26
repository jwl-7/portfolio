import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/styles.sass'

function App() {
    return (
        <div className='App'>
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

export default App
