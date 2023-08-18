import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import eventlogo from '../Images/Event_logo.png'
import './EventDisplay.css'
import NavbarC from '../Navbar/NavbarC'
const EventDisplay = () => {
    const [eventList,setEventList]=useState([
       { event_name:"Credenz",
        event_date:"24-03-2003",
        sponsorship_amount:70000
        },
        { event_name:"Credenz",
        event_date:"24-03-2003",
        sponsorship_amount:70000
        },
        { event_name:"Credenz",
        event_date:"24-03-2003",
        sponsorship_amount:70000
        },
        { event_name:"Credenz",
        event_date:"24-03-2003",
        sponsorship_amount:70000
        },
        { event_name:"Credenz",
        event_date:"24-03-2003",
        sponsorship_amount:70000
        }
    ])
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
            <Link to='/event'><button>APPLY NOW </button></Link>
        </div>)
    })}
    </div>
    </div>
  )
}

export default EventDisplay
