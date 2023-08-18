import React from 'react'
import {Link} from 'react-router-dom'
import welcome_image from '../Images/welcome_Image.png'
import './Welcome.css'
const Welcome = () => {
  return (
    <div className='Welcome_div'>
      <div className="welcome_info">
        <h1>WELCOME</h1>
        <h3>NOW GET AND APPLY FOR SPONSORSHIPS !</h3>
        <Link to='/login'>
        <button>GO AHEAD</button>
        </Link>
      </div>
      <div className="welcome_img">
        <img src={welcome_image} alt="" />
      </div>
    </div>
  )
}

export default Welcome
