import React,{useState,useEffect} from 'react'
import './Myevents.css'
import { useCookies } from "react-cookie";
import Login from '../Components/Login';
import NavbarC from '../Navbar/NavbarC';
import axios from '../axios'
const Myevents = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [eventlists, seteventLists] = useState([]);
  useEffect(() => {
      axios.get(`/applications/${cookies.Id}`).then((response) => {
          seteventLists(response.data)
      }).catch((err) => console.log(err));
   }, []);
  return (
    <>
    {
        cookies.AuthToken?(
            <>
            <NavbarC></NavbarC>
            <div className='event_block'>
            {eventlists.map((val) => {
            return (
            <div className="myevents">
                <h1>{val.event_name}</h1>
                <div className="myevent">
                    <h2>{val.sponsor_name}</h2>
                    <h2>{val.sponsor_mobile}</h2>
                    <h2>{val.sponsor_email}</h2>
                </div>
                <div className="status">
                    <button className='accept'>ACCEPT ✅</button>
                    <button className='reject'>REJECT ❌</button>
                </div>
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
