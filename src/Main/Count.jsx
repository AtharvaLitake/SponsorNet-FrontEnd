import React from 'react'
import './Count.css'
import calendar from '../Images/Calendar.png'
import handshake from '../Images/HandShake.png'
import user1 from '../Images/User.png'
const Count = () => {
    const sponsor=setInterval(Sponsors,20)
    const events=setInterval(Events,20)
    const user=setInterval(User,10)
    let count1=1;
    let count2=1;
    let count3=1;
    function Sponsors()
    {
        count1++;
        document.querySelector("#number1").innerHTML=count1
        if(count1==250)
        {
            clearInterval(sponsor)
        }
    }
    function Events()
    {
        count2++;
        document.querySelector("#number2").innerHTML=count2
        if(count2==500)
        {
            clearInterval(events)
        }
    }
    function User()
    {
        count3++;
        document.querySelector("#number3").innerHTML=count3
        if(count3==1000)
        {
            clearInterval(user)
        }
    }
  return (
    <div className='counter'>
      <div className="counter1">
        <img src={calendar} alt="" />
        <p id="number1">250</p>
        <h2>Sponsors</h2>
      </div>
      <div className="counter1">
        <img src={user1} alt="" />
        <p id="number3">250</p>
        <h2>Users</h2>
      </div>
      <div className="counter1">
         <img src={handshake} alt="" />
        <p id="number2">500</p>
        <h2>Events</h2>
      </div>
    </div>
  )
}

export default Count
