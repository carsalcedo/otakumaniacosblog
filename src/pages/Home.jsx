import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const [posts, setPosts] = useState([])

  const categories = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${categories}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [categories]);

 // const posts = [
 //   {
 //     id: 1,
 //     title: "Publicacion 1",
 //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis explicabo itaque eligendi neque vitae accusantium sit blanditiis accusamus quisquam, quia quae quibusdam nobis, vel atque rem beatae culpa praesentium sint.",
 //     img: "https://i.postimg.cc/yxP89zpf/315518696-3377187019276117-6214524369378497924-n.jpg"
 //   },
 //   {
 //     id: 2,
 //     title: "Publicacion 2",
 //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis explicabo itaque eligendi neque vitae accusantium sit blanditiis accusamus quisquam, quia quae quibusdam nobis, vel atque rem beatae culpa praesentium sint.",
 //     img: "https://i.postimg.cc/8Pp5Gjsx/313842235-1097325127489292-7136727792422890862-n.jpg"
 //   },
 //   {
 //     id: 3,
 //     title: "Publicacion 3",
 //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis explicabo itaque eligendi neque vitae accusantium sit blanditiis accusamus quisquam, quia quae quibusdam nobis, vel atque rem beatae culpa praesentium sint.",
 //     img: "https://i.postimg.cc/MT1T6B7J/313974371-870023427744502-8839034623788369530-n.jpg"
 //   },
 //   {
 //     id: 4,
 //     title: "Publicacion 4",
 //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis explicabo itaque eligendi neque vitae accusantium sit blanditiis accusamus quisquam, quia quae quibusdam nobis, vel atque rem beatae culpa praesentium sint.",
 //     img: "https://i.postimg.cc/3N7wdw14/315402866-169446752366740-2243257093549586679-n.jpg"
 //   },
 // ]

 const getText = (html) =>{
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent
}

  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post =>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt={post.title}/>
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <p>{getText(post.description)}</p>
                <Link className='link' to={`/post/${post.id}`}>
                  <button>Leer mas</button>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home