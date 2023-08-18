import React from 'react'
import './SEvent.css'
import NavbarC from '../Navbar/NavbarC'
import EventImage from '../Images/EventImage.png'
const SEvent = () => {
  return (
    <>
    <NavbarC></NavbarC>
    <div className='Single_Event_page'>
      <div className="Event_image">
        <img src={EventImage} alt="" />
      </div>
      <div className="Event_detail">
        <div className="event_information">
        <h1>Event Heading</h1>
        <br />
        <h3>Date:Event Date</h3>
        <br />
        <h3>Type:Event Type</h3>
        <br />
        <h3>FootFall:Event Footfall</h3>
        <br />
        <h3>Deliverables:Event Deliverables</h3>
        <br />
        <h2>Amount Expected:70,000</h2>
        <br />
        <button> APPLY </button>
        </div>

      </div>
    </div>
    </>
  )
}

export default SEvent
