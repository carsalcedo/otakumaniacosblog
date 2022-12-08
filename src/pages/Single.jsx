import React from 'react'
import { Link, useLocation, useNavigate  } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import Edit from "../img/editar.png"
import Delete from "../img/borrar.png"
import Menu from '../components/Menu'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Single = () => {
  const [post, setPost] = useState({})

  const location = useLocation()
  const navigate = useNavigate()

  const postId = location.pathname.split("/")[2];

  const {currentUser} = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () =>{
    try {
      await axios.delete(`/posts/${postId}`);
      navigate()
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className='single'>
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
         {post.userImg && <img src={post.userImg} alt="" /> }
          <div className="info">
            <span>{post.username}</span>
            <p>Posteó {moment(post.date).fromNow()}</p>
          </div>
            {currentUser.username === post.username && <div className="edit">
            <Link to={'/write?edit=2'}>
              <img src={Edit} alt="" />
            </Link>
            <img onClick={handleDelete} src={Delete} alt="" />
          </div>}
        </div>
        <h1>{post.title}</h1>
        {post.description}

      </div>
      <Menu categories={post.categories}/>
    </div>
  )
}

export default Single

//quede en el minuto 39