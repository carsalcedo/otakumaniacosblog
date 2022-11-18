import React from 'react'
import {Link} from "react-router-dom";

const Register = () => {
  return (
      <div className='auth'>
      <h1>Registrarse</h1>
      <form action="">
        <input type="text" placeholder='usuario' name="" required />
        <input type="email" placeholder='email' name="" required/>
        <input type="password" placeholder='password' name="" required/>
        <button>Listo</button>
        <p>Hay un problema</p>
        <span>¿ya tienes una cuenta? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register