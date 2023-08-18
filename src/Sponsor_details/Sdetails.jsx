import React from 'react'
import './Sdetails.css'
import Sponsor_details from '../Images/Sponsor_details.png'
const Sdetails = () => {
  return (
    <div>
    <div className='Sdetails'>
      <div className="Sponsor_image">
        <img src={Sponsor_details} alt="" />
      </div>
      <div className="Sponsor_form">
        <h1>YOUR DETAILS</h1>
        <form action="">
            <label htmlFor="">Name</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input type="email" />
            <br />
            <label htmlFor="">Mobile Number</label>
            <br />
            <input type="text" />
        </form>
        <button>Submit</button>
      </div>
    </div>
    </div>
  )
}

export default Sdetails
