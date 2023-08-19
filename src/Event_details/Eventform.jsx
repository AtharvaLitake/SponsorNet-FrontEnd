import React, { useState } from 'react'
import './Eventform.css'
import axios from '../axios'
import NavbarC from '../Navbar/NavbarC'
import { useCookies } from "react-cookie";
import {Link,useNavigate} from 'react-router-dom'
import Home from '../Components/Home';
import Login from '../Components/Login';
const Eventform = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const navigate = useNavigate();
  const [Name, setName] = useState("")
  const [date, setdate] = useState("")
  const [type, settype] = useState("")
  const [footfall, setfootfall] = useState("")
  const [amount, setamount] = useState("")
  const [deliverables, setdeliverables] = useState("")
  const submitEvent = () => {
    axios.post("/events", {
      user_id:cookies.Id,
      event_name: Name,
      event_date: date,
      event_type: type,
      event_footfall: footfall,
      sponsorship_amount: amount,
      deliverables: deliverables
    }).then(() => {
      alert("EVENT ORGANIZED SUCCESSFULLY")
      navigate('/main')
    })
    console.log(date)
  }
  return (
    <>
      {
        cookies.AuthToken ? (<div>
          <NavbarC></NavbarC>
          <div className="event_heading">
            <h1>Event Details Form</h1>
          </div>
          <div className="Event_form">
            <div className="Event_details">
              <div className="event_form">
                <label htmlFor="">Name of Event</label>
                <br />
                <input type="text" name="Name" onChange={(e) => {
                  setName(e.target.value)
                }} autoComplete='off' />
                <br />
                <label htmlFor="">Date</label>
                <br />
                <input type="date" name="type" onChange={(e) => {
                  setdate(e.target.value)
                }} />
                <br />
                <label htmlFor="">Type</label>
                <br />
                <input type="text" name="Name" onChange={(e) => {
                  settype(e.target.value)
                }} autoComplete='off' />
                <br />
              </div>
              <div className="event_form">
                <label htmlFor="">FootFall</label>
                <br />
                <input type="number" name="footfall" onChange={(e) => {
                  setfootfall(e.target.value)
                }} autoComplete='off' />
                <br />
                <label htmlFor="">Expected Sponsorship</label>
                <br />
                <input type="number" name="amount" onChange={(e) => {
                  setamount(e.target.value)
                }} autoComplete='off' />
                <br />
                <label htmlFor="">Deliverables</label>
                <br />
                <input type="text" name="deliverables" onChange={(e) => {
                  setdeliverables(e.target.value)
                }} autoComplete='off' />
                <br />
              </div>
            </div>
          </div>

          <div className="event_submit">
            <button onClick={submitEvent}>Submit</button>
          </div>
        </div>):(<Login></Login>)}
    </>
    )
}

export default Eventform
