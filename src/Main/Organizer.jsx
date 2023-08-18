import React from 'react'
import {Link} from 'react-router-dom'
import OrganizerImg from '../Images/Organizer.png'
import './Organizer.css'
const Organizer = () => {
  return (
    <div className='OrganizerDiv'>
      <div className="Organizer_info">
        <h2>NOW APPLY AND GET SPONSORSHIPS QUICKLY</h2>
        <Link to='/eventDetails'>
        <button>ORGANIZE EVENT</button>
        </Link>
      </div>
      <div className="Organizer_logo">
        <img src={OrganizerImg} alt="" />
      </div>
    </div>
  )
}

export default Organizer
