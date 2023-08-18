import React from 'react'
import Organizer from './Organizer'
import Sponsor from './Sponsor'
import CarouselC from './CarouselC'
import NavbarC from '../Navbar/NavbarC'
import Footer from '../Footer/Footer'
import Count from './Count'
const Main = () => {
  return (
    <div>
      <NavbarC></NavbarC>
      <CarouselC></CarouselC>
      <Sponsor></Sponsor>
      <Organizer></Organizer> 
      <Count></Count>
      <Footer></Footer>
    </div>
  )
}

export default Main
