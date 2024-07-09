
import './App.css'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Mywork from './components/Mywork'

import Navbar from './components/Navbar'

function App() {
  

  return (
    <div>
    <Navbar />
    <Hero />
    <About />
    <Mywork/>
    <ContactUs />
    <Footer />
    </div>
  )
}

export default App
