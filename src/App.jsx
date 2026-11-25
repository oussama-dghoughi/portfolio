import { Certifications } from './components/Certifications/Certifications.jsx'
import { Experience } from './components/Experience/Experience.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Header } from './components/Header/Header.jsx'
import { Hero } from './components/Hero/Hero.jsx'
import { Integrations } from './components/Integrations/Integrations.jsx'
import { Parcours } from './components/Parcours/Parcours.jsx'
import { SideArt } from './components/SideArt/SideArt.jsx'
import { Work } from './components/Work/Work.jsx'

export default function App() {
  return (
    <>
      <SideArt />
      <Header />
      <main id="contenu">
        <Hero />
        <Experience />
        <Parcours />
        <Certifications />
        <Work />
        <Integrations />
      </main>
      <Footer />
    </>
  )
}
