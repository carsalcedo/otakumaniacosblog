import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Navbar = () => {

  const {currentUser, logout} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className='container'>
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
            <h6>shows</h6>
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
          <span>{currentUser?.username}</span>
          {currentUser 
          ? (
             <span onClick={logout}>Salir</span>) 
          : 
            (<Link className="link" to="/login">Iniciar</Link>
          )}
          <span className='write'>
            <Link to="/write" className='link'>Postear</Link>
          </span>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar