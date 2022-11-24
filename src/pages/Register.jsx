import React from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
      username:"",
      email:"",
      password:""
    });

    const handleChange = e =>{
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
          const res = await axios.post("/auth/register", inputs);
          console.log(res);
        } catch (err) {
            console.log(err)
            //quede en hora 1:17:00
        }

       
    }


  return (
      <div className='auth'>
      <h1>Registrarse</h1>
      <form action="">
        <input type="text" placeholder='usuario' name="username" required onChange={handleChange} />
        <input type="email" placeholder='email' name="email" required onChange={handleChange}/>
        <input type="password" placeholder='password' name="password" required onChange={handleChange}/>
        <button onClick={handleSubmit}>Listo</button>
        <p>Hay un problema</p>
        <span>¿ya tienes una cuenta? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register