import React, { useState } from 'react'
import './Sdetails.css'
import axios from './axios'
import Sponsor_details from '../Images/Sponsor_details.png'
const Sdetails = () => {
  const [Sname,setSname]=useState("")
  const [Semail,setSemail]=useState("")
  const [Smob,setSmob]=useState("")
  return (
    <div>
    <div className='Sdetails'>
      <div className="Sponsor_image">
        <img src={Sponsor_details} alt=""/>
      </div>
      <div className="Sponsor_form">
        <h1>YOUR DETAILS</h1>
        <form action="">
            <label htmlFor="">Name</label>
            <br />
            <input type="text" name="Sname" onChange={(e)=>{
          setSname(e.target.value)
          }} />
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input type="email" name="Semail" onChange={(e)=>{
          setSemail(e.target.value)
          }} />
            <br />
            <label htmlFor="">Mobile Number</label>
            <br />
            <input type="text" name="Smob" onChange={(e)=>{
          setSmob(e.target.value)
          }}/>
        </form>
        <button>Submit</button>
      </div>
    </div>
    </div>
  )
}

export default Sdetails
