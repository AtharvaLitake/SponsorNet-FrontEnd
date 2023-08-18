import React from 'react'
import './Feature.css'
import Feature1 from "../Images/Feature-1.png"
import Feature2 from "../Images/Feature-2.png"
import Feature3 from "../Images/Feature-3.png"
const Feature = () => {
  return (
    <div className='Features'>
      <div className="subFeature">
        <img src={Feature1} alt="" />
        <h2>Now no need of Extensive Calling for finding Sponsors</h2>
      </div>
      <div className="subFeature">
        <img src={Feature2} alt="" />
        <h2>Getting Sponsorship is now an easy Task, Just Apply</h2>
      </div>
      <div className="subFeature">
        <img src={Feature3} alt="" />
        <h2>Save your precious time and advertise your company</h2>
      </div>
    </div>
  )
}

export default Feature
