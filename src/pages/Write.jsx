import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';

const Write = () => {

  const state = useLocation().state
  const [value, setValue] = useState(state?.title || '');
  const [title, setTitle] = useState(state?.description || '');
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState(state?.categories || '');
  const {currentUser} = useContext(AuthContext);

  const navigate = useNavigate();

  if(!currentUser) return navigate("/");

  const upload = async () =>{
    try{
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post("/upload", formData)
      return res.data
    }catch(err){
      console.log(err);
    }
  }

  const handleClick = async e => {
    e.preventDefault()
    const imgUrl = await upload()

    try {
        state 
        ? await axios.put(`/posts/${state.id}`, {
          title, 
          description:value, 
          categories, 
          img:file ? imgUrl : ""
        }) 
        : await axios.post(`/posts/`, {
          title, 
          description:value, 
          categories, 
          img:file ? imgUrl : "",
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
        }) 
        navigate("/")
    } catch (err) {
      console.log(err);
    } 
  }

  return (
    <div className="add">
    <div className="content">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="editorContainer">
        <ReactQuill
          className="editor"
          theme="snow"
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
    <div className="menu">
      <div className="item">
        <h1>Publicación</h1>
        <span>
          <b>Status: </b> Draft
        </span>
        <span>
          <b>Visibilidad: </b> Publico
        </span>
        <input
          className='cargarImgB'
          type="file"
          id="file"
          name=""
          onChange={(e) => setFile(e.target.files[0])}
        />
     { /*  <label className="file" htmlFor="file">
          Cargar Imagen
  </label> */}
        <div className="buttons">
          <button>Guardar como Reclutador</button>
          <button onClick={handleClick}>Publicar</button>
        </div>
      </div>
      <div className="item">
        <h1>Category</h1>
        <div className="cat">
          <input
            type="radio"
            checked={categories === "art"}
            name="categories"
            value="art"
            id="art"
            onChange={(e) => setCategories(e.target.value)}
          />
          <label htmlFor="art">Arte</label>
        </div>
        <div className="cat">
          <input
            type="radio"
            checked={categories === "evento"}
            name="categories"
            value="evento"
            id="evento"
            onChange={(e) => setCategories(e.target.value)}
          />
          <label htmlFor="science">Eventos</label>
        </div>
        <div className="cat">
          <input
            type="radio"
            checked={categories === "show"}
            name="categories"
            value="show"
            id="show"
            onChange={(e) => setCategories(e.target.value)}
          />
          <label htmlFor="technology">Shows</label>
        </div>
        <div className="cat">
          <input
            type="radio"
            checked={categories === "concurso"}
            name="categories"
            value="concurso"
            id="concurso"
            onChange={(e) => setCategories(e.target.value)}
          />
          <label htmlFor="cinema">Concurso</label>
        </div>
        <div className="cat">
          <input
            type="radio"
            checked={categories === "kpop"}
            name="categories"
            value="kpop"
            id="kpop"
            onChange={(e) => setCategories(e.target.value)}
          />
          <label htmlFor="design">Kpop</label>
        </div>
        <div className="cat">
          <input
            type="radio"
            checked={categories === "gamer"}
            name="categories"
            value="gamer"
            id="gamer"
            onChange={(e) => setCategories(e.target.value)}
          />
          <label htmlFor="food">Gamers</label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Write