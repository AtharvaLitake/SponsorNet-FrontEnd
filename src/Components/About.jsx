import React from 'react'
import './About.css'
import logo from '../Images/SponsorNet Logo.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about_div">
        <div className="about_info">
        <h1>SPONSORNET</h1>
            <h3>
                SponsorNet is a Platform that solves the problem of communication barrier between Sponsors and Organizers. Till Today, The Orthodox method of finding Sponsors is used. Any Event Organizer performs a tiresome job of calling each and every company asking for Sponsorships. On the other hand, there are various companies looking to sponsor such events so as to advertise and showcase their company.SponsorNet brings together Sponsors / Companies and such emerging events on one platform.
            </h3>
        </div>
        <div className="logo_div">
            <img src={logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
