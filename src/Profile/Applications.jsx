import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Applications.css";
import { useCookies } from "react-cookie";
import Login from "../Components/Login";
import NavbarC from "../Navbar/NavbarC";
import logo from "../Images/Event_logo.png"
import axios from '../axios'
const Applications = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null);
    const [applyList, setapplyList] = useState([]);
    useEffect(() => {
        axios.get(`/applications/${cookies.Id}`).then((response) => {
            setapplyList(response.data)
        }).catch((err) => console.log(err));
    }, []);
    return (
        <>
            {cookies.AuthToken ? (
                <>
                    <NavbarC></NavbarC>
                <div className="headers">
                    <h1>MY APPLICATIONS</h1>
                </div>
                    <div className="application">
                        {applyList.map((val) => {
                            return (<div className="application_details">
                                <div className="app_img">
                                    <img src={logo} alt="" />
                                </div>
                                <div className="app_content">
                                    <div className="app_name">
                                        <h1>Event Name</h1>
                                    </div>
                                    <div className="app_name">
                                        <h1>Event Date</h1>
                                    </div>
                                    <div className="app_name">
                                        <h1>Status</h1>
                                    </div>
                                    <div className="app_name">
                                        <h3>{val.event_name}</h3>
                                    </div>
                                    <div className="app_name">
                                        <h3>{val.event_date}</h3>
                                    </div>
                                    <div className="app_name">
                                        {
                                            val.application_status==='pending'?(<h3 className="pending">{val.application_status.toUpperCase()}</h3>):(<>
                                           { val.application_status==='accepted'?(<h3 className="accepted">{val.application_status.toUpperCase()}</h3>):(<h3 className="rejected">{val.application_status.toUpperCase()}</h3>)}
                                            </>)
                                        }
                                        
                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>
                </>
            ) : (
                <Login></Login>
            )}
        </>
    );
};

export default Applications;
