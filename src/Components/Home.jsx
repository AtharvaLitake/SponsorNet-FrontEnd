import React from 'react'
import Welcome from './Welcome'
import Feature from './Feature'
import About from './About'
import NavbarC from '../Navbar/NavbarC'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <div>
      <NavbarC></NavbarC>
      <Welcome></Welcome>
      <Feature></Feature>
      <About></About>
      <Footer></Footer>
    </div>
  )
}

export default Home
