import React from 'react';
import App from '../App';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';
const Login = ({setpage}) => {
  
const navigate=useNavigate()
  return (
    <div className='login'>
      <div>
      <h1>Login page</h1>
      <input type='text' placeholder='email'/>
      <input type='password' placeholder='password'/>
      <button onClick={()=>navigate("/Home")} >Login</button>
      </div>
    </div>
  )
}

export default Login;