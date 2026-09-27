import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import TechMarquee from './components/TechMarquee.tsx'
import About from './components/About.tsx'
import Skills from './components/Skills.tsx'
import Projects from './components/Projects.tsx'
import NetworkOperations from './components/NetworkOperations.tsx'
import Experience from './components/Experience.tsx'
import Credentials from './components/Credentials.tsx'
import Resume from './components/Resume.tsx'
import Contact from './components/Contact.tsx'

function App() {
  return (
    <main>
      <Navbar />

      <Hero />

      <TechMarquee />

      <About />

      <Skills />

      <Projects />

      <NetworkOperations />

      <Experience />

      <Credentials />

      <Resume />

      <Contact />
    </main>
  )
}

export default App