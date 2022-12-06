import React, { useState } from 'react'
import { useContext } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from '../context/authContext';
//import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:""
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  const handleChange = e =>{
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async e =>{
      e.preventDefault()
      try {
        await login(inputs)
        navigate("/")
      } catch (err) {
          setErr(err.response.data);
      }  
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder='usuario' name="username" onChange={handleChange} required/>
        <input type="password" placeholder='password' name="password" onChange={handleChange} required/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>¿No tienes una cuenta? <Link to="/Register">Registrarse</Link></span>
      </form>
    </div>
  )
}

export default Login