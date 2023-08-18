import React from "react";
import "./Sponsor.css";
import CompanyImg from '../Images/Company.png'
import { Link } from "react-router-dom";
const Sponsor = () => {
  return (
    <div className="Company_div">
      <div className="Company_logo">
        <img src={CompanyImg} alt="" />
      </div>
      <div className="Company_info">
        <h2>NOW GIVE SPONSORSHIPS AND ADVERTISE YOURSELF</h2>
        <Link to='/eventDisplay'>
        <button>BE A SPONSOR</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Sponsor;
