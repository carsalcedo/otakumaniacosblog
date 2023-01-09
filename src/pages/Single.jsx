import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import Menu from '../components/Menu'


const Single = () => {
  const [post, setPost] = useState({})

  const location = useLocation()

  const postId = location.pathname.split("/")[2];

 

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


  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='single'>
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
         {post.userImg && <img src={post.userImg} alt="" /> }
          <div className="info">
            <span>{post.username}</span>
            <p>Posteó {moment(post.date).fromNow()}</p>
          </div>
        </div>
        <h1>{post.title}</h1>
        <p>
          {getText(post.description)}
        </p>

      </div>
      <Menu categories={post.categories}/>
    </div>
  )
}

export default Single
