import React from 'react'
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder='usuario' name="" required/>
        <input type="password" placeholder='password' name="" required/>
        <button>Login</button>
        <p>Hay un problema</p>
        <span>¿No tienes una cuenta? <Link to="/Register">Registrarse</Link></span>
      </form>
    </div>
  )
}

export default Login