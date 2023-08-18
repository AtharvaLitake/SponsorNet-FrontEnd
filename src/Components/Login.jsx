import React from 'react'
import './Login.css'
import login_page from '../Images/Login_Image.png'
import {useState} from 'react'
import axios from '../axios'
const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const LoginUser=async (e)=>{
    e.preventDefault()
   const response=await axios.post("/login",{
      user_email:email,
      user_password:password
    })
    if(response.data.detail)
    {
      alert("Error! Incorrect Email-Id or Password ")
    }
    else{
      alert("Logged in Successfully")
    }
    
}
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
            <input type="email" name="email" onChange={(e)=>{
              setEmail(e.target.value)
            }}/>
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" name="password" onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
        </form>
        <button onClick={LoginUser}>Submit</button>
        <h3>Not a Member Yet ?</h3>
        <h3>Sign Up Now</h3>
      </div>
    </div>
  )
}

export default Login
