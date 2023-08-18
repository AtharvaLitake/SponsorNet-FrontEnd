import React from "react";
import "./Sponsor.css";
import CompanyImg from '../Images/Company.png'
const Sponsor = () => {
  return (
    <div className="Company_div">
      <div className="Company_logo">
        <img src={CompanyImg} alt="" />
      </div>
      <div className="Company_info">
        <h2>NOW GIVE SPONSORSHIPS AND ADVERTISE YOURSELF</h2>
        <button>BE A SPONSOR</button>
      </div>
    </div>
  );
};

export default Sponsor;
