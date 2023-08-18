import React from 'react'
import Organizer from './Organizer'
import Sponsor from './Sponsor'
import CarouselC from './CarouselC'
import NavbarC from '../Navbar/NavbarC'
import Footer from '../Footer/Footer'
import Count from './Count'
import Login from '../Components/Login'
import { useCookies } from "react-cookie";
const Main = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  return (
    <>
    {
      cookies.AuthToken?(    <div>
        <NavbarC></NavbarC>
        <CarouselC></CarouselC>
        <Sponsor></Sponsor>
        <Organizer></Organizer> 
        <Footer></Footer>
      </div>):(<Login></Login>)
    }
    </>
  )
}

export default Main
