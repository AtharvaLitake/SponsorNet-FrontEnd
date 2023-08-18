import React from 'react'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import eventlogo from '../Images/Event_logo.png'
import './EventDisplay.css'
import NavbarC from '../Navbar/NavbarC'
import axios from '../axios'
const EventDisplay = () => {
    const [eventList,setEventList]=useState([]);

    useEffect(()=>{
      axios.get("/events").then((response)=>{
        setEventList(response.data)
      }).catch((err)=>console.log(err));
    },[]);

  return (
    <div>
        <NavbarC></NavbarC>
    <div className='event_list'>
    {eventList.map((val)=>{
        return (<div className="event_info">
            <img src={eventlogo} alt="" />
            <h1>{val.event_name}</h1>
            <h3>📅 {val.event_date}</h3>
            <h3>💵 {val.sponsorship_amount}</h3>
            <Link to="/event" state={{val}}><button>APPLY NOW </button></Link>
        </div>)
    })}
    </div>
    </div>
  )
}

export default EventDisplay
