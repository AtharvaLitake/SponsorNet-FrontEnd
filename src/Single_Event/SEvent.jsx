import React from 'react'
import './SEvent.css'
import NavbarC from '../Navbar/NavbarC'
import EventImage from '../Images/EventImage.png'
import { useLocation, Link } from 'react-router-dom'
import { useCookies } from "react-cookie";
import Login from '../Components/Login'
const SEvent = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const location = useLocation()
  const event = location.state
  console.log(event)
  return (
    <>
      {
        cookies.AuthToken ? (
          <div>
            <NavbarC></NavbarC>
            <div className='Single_Event_page'>
              <div className="Event_image">
                <img src={EventImage} alt="" />
              </div>
              <div className="Event_detail">
                <div className="event_information">
                  <h1>{event.val.event_name.toUpperCase()}</h1>
                  <br />
                  <h3>Date : {event.val.event_date}</h3>
                  <br />
                  <h3>Type : {event.val.event_type}</h3>
                  <br />
                  <h3>FootFall : {event.val.event_footfall}</h3>
                  <br />
                  <h3>Deliverables : {event.val.deliverables}</h3>
                  <br />
                  <h2>Amount Expected : {event.val.sponsorship_amount}</h2>
                  <br />
                  <Link to='/sponsorDetails' state={{ event }}>
                    <button> APPLY </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        ) : (<Login></Login>)
      }

    </>
  )
}

export default SEvent
