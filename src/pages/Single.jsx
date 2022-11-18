import React from 'react'
import { Link } from 'react-router-dom'
import Edit from "../img/editar.png"
import Delete from "../img/borrar.png"

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://i.postimg.cc/pL054KZ0/otakumanaicosbanner.jpg" alt="" />
        <div className="user">
          <img src="https://i.postimg.cc/9XPQkXDk/gimpashisensei.jpg" alt="" />
          <div className="info">
            <span>Fernando</span>
            <p>Posteó hace 2 dias</p>
          </div>
          <div className="edit">
            <Link to={'/write?edit=2'}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error illo ad quis sit sequi recusandae reprehenderit, voluptate fuga molestiae eaque suscipit, unde vero, quasi quos ea velit nesciunt neque consectetur.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem sint fugiat itaque quod rerum corrupti. Nisi eos consequuntur perspiciatis labore possimus velit quaerat beatae autem nihil corrupti! Ex, atque.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sequi omnis perspiciatis, repudiandae vitae harum dignissimos exercitationem in facilis culpa quam, ipsa distinctio illum accusantium cumque eaque. Aut, facilis? Asperiores!
    
        </p>

      </div>
      <div className="menu">m</div>
    </div>
  )
}

export default Single

//quede en el minuto 39