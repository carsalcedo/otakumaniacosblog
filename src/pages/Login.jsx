import React, { useState } from 'react'
import { useContext } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from '../context/authContext';
import logo from '../img/logo.png'
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

      <div className="login">
     
        <div className="pic">
            <img src="https://i.postimg.cc/wTdWDmWD/24.jpg" alt="otakumaniacos"/>
        </div>

        <form className="form" onSubmit={handleSubmit}>
            <h3>Bienvenidos a</h3>
            <img src={logo} alt="otakumaniacos"/>
            <p className="p1">Blog oficial de OtakuManiacos para mantenerte informado acerca de todo lo relacionado a eventos y actividades del mundo animé, kpop y videojuegos en tu localidad</p>
            
            <div className="inputIcon">
                <i className="fa-solid fa-user icon"></i>
                <input type="text" className="inputField" placeholder="usuario" name="username" required onChange={handleChange}/>
            </div>
            <div className="inputIcon">
                <i className="fa-solid fa-lock icon"></i>
                <input type="password" className="inputField" placeholder="password" name="password" required onChange={handleChange}/>
            </div>

            <button type="submit">Iniciar Sesion</button>
            {err && <p>{err}</p>}
            <span>¿No tienes una cuenta? <Link className='registerLink' to="/Register">Registrarse</Link></span>

            <div className="socialLinks">
                <a href="https://www.facebook.com/groups/688859478835318" rel="noopener noreferrer" target="_blank"><div className="circle"><i className="fab fa-facebook-f"></i></div></a>
                <a href="https://www.facebook.com/groups/688859478835318" rel="noopener noreferrer" target="_blank"><div className="circle"><i className="fab fa-instagram"></i></div></a>
                <a href="https://www.facebook.com/groups/688859478835318" rel="noopener noreferrer" target="_blank"><div className="circle"><i className="fa-brands fa-pinterest-p"></i></div></a>
                <a href="https://www.facebook.com/groups/688859478835318" rel="noopener noreferrer" target="_blank"><div className="circle"><i className="fab fa-twitter"></i></div></a>
            </div>
        </form>
     
        </div>
      </div>
  )
}

export default Login


