import React, { useState } from 'react'
import './Eventform.css'
import axios from '../axios'
import NavbarC from '../Navbar/NavbarC'
const Eventform = () => {
  const [Name,setName]=useState("")
  const [date,setdate]=useState("")
  const [type,settype]=useState("")
  const [footfall,setfootfall]=useState("")
  const [amount,setamount]=useState("")
  const [deliverables,setdeliverables]=useState("")
  return (
    <div>
      <NavbarC></NavbarC>
      <div className="event_heading">
        <h1>Event Details Form</h1>
      </div>
      <div className="Event_form">
      <div className="Event_details">
        <div className="event_form">
            <label htmlFor="">Name of Event</label>
            <br />
            <input type="text" name="Name" onChange={(e)=>{
              setName(e.target.value)
            }} autoComplete='off'/>
            <br />
            <label htmlFor="">Date</label>
            <br />
            <input type="date" name="type" onChange={(e)=>{
              settype(e.target.value)
            }}/>
            <br />
            <label htmlFor="">Type</label>
            <br />
            <input type="text" name="Name" onChange={(e)=>{
              setName(e.target.value)
            }} autoComplete='off'/>
            <br />
        </div>
        <div className="event_form">
        <label htmlFor="">FootFall</label>
            <br />
            <input type="number" name="footfall" onChange={(e)=>{
              setfootfall(e.target.value)
            }} autoComplete='off'/>
            <br />
            <label htmlFor="">Expected Sponsorship</label>
            <br />
            <input type="number" name="amount" onChange={(e)=>{
              setamount(e.target.value)
            }} autoComplete='off'/>
            <br />
            <label htmlFor="">Deliverables</label>
            <br />
            <input type="text" name="deliverables" onChange={(e)=>{
              setdeliverables(e.target.value)
            }} autoComplete='off'/>
            <br />
        </div>
      </div>
      </div>

      <div className="event_submit">
        <button onClick={'"'}>Submit</button>
      </div>
    </div>
  )
}

export default Eventform
