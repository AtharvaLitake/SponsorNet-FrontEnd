import React from 'react'
import './Login.css'
import login_page from '../Images/Login_Image.png'
const Login = () => {
  return (
    <div className='login_Page'>
      <div className="login_image">
        <img src={login_page} alt="" />
      </div>
      <div className="login_form">
        <h1>Log In</h1>
        <form action="">
            <label htmlFor="">Email-Id</label>
            <br />
            <input type="email" />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" />
        </form>
        <button>Submit</button>
        <h3>Not a Member Yet ?</h3>
        <h3>Sign Up Now</h3>
      </div>
    </div>
  )
}

export default Login
