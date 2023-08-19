import React, { useState } from 'react'
import './Sdetails.css'
import axios from '../axios'
import Sponsor_details from '../Images/Sponsor_details.png'
import {useLocation,useNavigate} from 'react-router-dom'
import { useCookies } from "react-cookie";
import Login from '../Components/Login'
const Sdetails = () => {
  const navigate=useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const location=useLocation()
  const data=location.state
  const [Sname,setSname]=useState("")
  const [Semail,setSemail]=useState("")
  const [Smob,setSmob]=useState("")
  const SponsorDetails=(e)=>{
    e.preventDefault()
    axios.post("/applications",{
      sponsor_id:cookies.Id,
      event_id:data.event.val.event_id,
      sponsor_name:Sname,
      sponsor_phone:Smob,
      application_status:"pending"
      }).then(()=>{
        alert("Applied Successfully")
        navigate('/main')
    })
  }
  console.log(data.event.val.event_id)
  return (
    <div>
      {
        cookies.AuthToken ? (
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
            <button onClick={SponsorDetails}>Submit</button>
          </div>
        </div>
        ):(<Login></Login>)
      }
    </div>
  )
}

export default Sdetails
