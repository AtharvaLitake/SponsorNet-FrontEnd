import React from 'react'
import './Login.css'
import login_page from '../Images/Login_Image.png'
const Register = () => {
  return (
    <div className='login_Page'>
      <div className="login_image">
        <img src={login_page} alt="" />
      </div>
      <div className="login_form">
        <h1>Sign Up</h1>
        <form action="">
            <label htmlFor="">Email-Id</label>
            <br />
            <input type="email" />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" />
            <br />
            <label htmlFor="">Confirm Password</label>
            <br />
            <input type="password" />
        </form>
        <button>Submit</button>
        <h3>Already a Member Yet ?</h3>
        <h3>Login Now</h3>
      </div>
    </div>
  )
}

export default Register