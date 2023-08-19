import React from 'react'
import './Login.css'
import login_page from '../Images/Login_Image.png'
import { useState } from 'react'
import axios from '../axios'
import { useCookies } from "react-cookie";
import {Link,useNavigate} from 'react-router-dom'
const Register = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cnfpassword, setCnfPassword] = useState("")

  const SignUpUser = () => {
    if (cnfpassword == password) {
      axios.post("/signup", {
        user_email: email,
        user_password: password
      }).then(() => {
        alert("User Created")
        navigate('/login')
      })
    }
    else {
      alert("Password Not Matching")
    }
    console.log(password)
  }

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
        <input type="email" name="email" onChange={(e) => {
          setEmail(e.target.value)
        }} />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" name="password" onChange={(e) => {
          setPassword(e.target.value)
        }} />
        <br />
        <label htmlFor="">Confirm Password</label>
        <br />
        <input type="password" name="cnfpassword" onChange={(e) => {
          setCnfPassword(e.target.value)
        }} />
      </form>
      <button onClick={SignUpUser}>Submit</button>
      <h3>Already a Member Yet ?</h3>
      <Link to='/login'>
      <u><h3>Login Now</h3></u>
      </Link>
    </div>
  </div>
)
}

export default Register