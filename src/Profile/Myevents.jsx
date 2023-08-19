import React,{useState,useEffect} from 'react'
import './Myevents.css'
import { useCookies } from "react-cookie";
import Login from '../Components/Login';
import NavbarC from '../Navbar/NavbarC';
import axios from '../axios'
import {Link,useNavigate} from 'react-router-dom'
const Myevents = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [eventlists, seteventLists] = useState([]);
  useEffect(() => {
      axios.get(`/events/${cookies.Id}`).then((response) => {
          seteventLists(response.data)
      }).catch((err) => console.log(err));
   }, []);
   console.log(eventlists)
   const acceptHandler=(id)=>{
    axios.put(`/applications/${id}`, {
        applicationStatus:"accepted"
      }).then(() => {
        alert("MSG SENT TO SPONSOR")
        navigate('/main')
      })
   }
   const rejectHandler=(id)=>{
    axios.put(`/applications/${id}`, {
        applicationStatus:"rejected"
      }).then(() => {
        alert("MSG SENT TO SPONSOR")
        navigate('/main')
      })
   }
  return (
    <>
    {
        cookies.AuthToken?(
            <>
            <NavbarC></NavbarC>
            <div className="headers">
            <h1>MY EVENTS</h1>
            </div>
            <div className='event_block'>
            {eventlists.map((val) => {
            return (
            <div className="myevents">
                <h1><u>{val.event_name.toUpperCase()}</u></h1>
                <div className="myevent">
                    <h2>Name : {val.sponsor_name}</h2>
                    <h2>Phone : {val.sponsor_phone}</h2>
                    <h2>Email : {val.user_email}</h2>
                </div>
                {
                    val.application_status==='pending'||val.application_status===null?(<div className="status">
                    <button className='accept' onClick={() => acceptHandler(val.application_id)}>ACCEPT ✅</button>
                    <button className='reject'  onClick={() => rejectHandler(val.application_id)}>REJECT ❌</button>
                </div>):(<>{val.application_status=="accepted"?(<div className='accepted'><h1 >{val.application_status.toUpperCase()}</h1></div>):(<div className="rejected"><h1 >{val.application_status.toUpperCase()}</h1></div>)}</>)
                }
            </div>
            )})}
            </div>
            </>
        ):(<Login></Login>)
    }
    </>
  )
}

export default Myevents
