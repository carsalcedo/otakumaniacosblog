import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Menu = ({categories}) => {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?categories=${categories}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [categories]);

  return (
    <div className="menu">
        <h1>Tambien te puede interesar</h1>
        {posts.map(post =>(
            <div className="post" key={post.id}>
                <img src={post.img} alt={post.title} />
                <h2>{post.title}</h2>
                <Link className='link' to={`/post/${post.id}`}>
                 <button>Leer mas</button>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default Menu