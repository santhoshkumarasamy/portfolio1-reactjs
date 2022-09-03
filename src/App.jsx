import "./App.css";

import { useState } from 'react'


import Header from './Components/Header/Header'
import Navbar from './Components/Nav/Navbar'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
function App() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <>
    <Header setActiveNav={setActiveNav} />
    <Navbar
    activeNav={activeNav}
    setActiveNav={setActiveNav}
    />
    <About setActiveNav={setActiveNav}/>
    <Experience setActiveNav={setActiveNav}/>
    <Services setActiveNav={setActiveNav}/>
    <Portfolio />
    <Testimonials />
    <Contact setActiveNav={setActiveNav} />
    <Footer />
    </>
  );
}

export default App;
