import React from 'react'
import { useState  } from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
      username:"",
      email:"",
      password:""
    });

    const [err, setErr] = useState(null);

    const navigate = useNavigate();

    const handleChange = e =>{
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
           await axios.post("/auth/register", inputs);
           navigate("/login")
        } catch (err) {
            setErr(err.response.data);
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
        {err && <p>usuario o correo ya existente</p> } 
        <span>¿ya tienes una cuenta? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register