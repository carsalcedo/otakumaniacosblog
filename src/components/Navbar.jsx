import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'
import { useState } from "react";

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const changeB = () =>{
    if(window.scrollY >= 80){
      setNav(true);
    }else{
      setNav(false);
    }
  }

  window.addEventListener('scroll', changeB)


  return (
    <div className={nav ? "navbarActive" : "navbar"}>
      <div className="container">
        <div className='logo'>
          <Link to="/">
            <img src={Logo} alt="OtakuManaicos" />
          </Link>
        </div>
        <div className='links'>
          <Link className='link' to="/?categories=art">
            <h6>Arte</h6>
          </Link>
          <Link className='link' to="/?categories=evento">
            <h6>Eventos</h6>
          </Link>
          <Link className='link' to="/?categories=show">
            <h6>Shows</h6>
          </Link>
          <Link className='link' to="/?categories=concurso">
            <h6>Concursos</h6>
          </Link>
          <Link className='link' to="/?categories=kpop">
            <h6>Kpop</h6>
          </Link>
          <Link className='link' to="/?categories=gamer">
            <h6>Gamers</h6>
          </Link>
        </div>

        <div className='links'>
          <a href="https://www.facebook.com/groups/688859478835318" target="_blank" rel="noopener noreferrer">
            <img src="https://i.postimg.cc/QxhhkbXW/face.png" alt="otakumaniacos" />
          </a>
          <a href="https://www.instagram.com/otakumaniacoscna/?hl=es" target="_blank" rel="noopener noreferrer">
            <img src="https://i.postimg.cc/dQ8JyXKY/insta.png" alt="otakumaniacos" />
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar