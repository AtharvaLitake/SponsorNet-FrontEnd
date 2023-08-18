import React from 'react'
import './SEvent.css'
import NavbarC from '../Navbar/NavbarC'
import EventImage from '../Images/EventImage.png'
import {useLocation} from 'react-router-dom'
const SEvent = () => {
  const location=useLocation()
  const event=location.state
  console.log(event)
  return (
    <>
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
        <button> APPLY </button>
        </div>

      </div>
    </div>
    </>
  )
}

export default SEvent
