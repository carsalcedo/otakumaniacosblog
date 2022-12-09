import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState('');

  const handleClick = async e => {
    e.preventDefault()
    //quede en hora 2:03:26
  }

  console.log(value);
  return (
    <div className='add'>
      <div className="content">
        <input type="text" name="" placeholder='titulo' onChange={e => setTitle(e.target.value)} />
        <div className="editorContainer">
           <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />;
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publicación</h1>
          <span>
            <b>Estado:</b> Reclutar
          </span>
          <span>
            <b>Visibilidad:</b> Publico
          </span>
          <input style={{display:"none"}} type="file" name="" id="file" onChange={e => setFile(e.target.files[0])}  />
          <label className='file' htmlFor="file">Cargar imagen</label>
          <div className="buttons">
            <button>Guardar como Reclutar</button>
            <button onClick={handleClick}>Publicar</button>
          </div>
        </div>
        <div className="item">
          <h1>Categoria</h1>
          <div className="cat">
            <input type="radio" name="categories" id="art" value="art" onChange={e => setCategories(e.target.value)} />
            <label htmlFor="art">Arte</label>
          </div>
          <div className="cat">
            <input type="radio" name="categories" id="evento" value="evento" onChange={e => setCategories(e.target.value)} />
            <label htmlFor="evento">Eventos</label>
          </div>
          <div className="cat">
            <input type="radio" name="categories" id="show" value="show" onChange={e => setCategories(e.target.value)} />
            <label htmlFor="show">Shows</label>
          </div>
          <div className="cat">
            <input type="radio" name="categories" id="concurso" value="concurso" onChange={e => setCategories(e.target.value)} />
            <label htmlFor="concurso">Concursos</label>
          </div>
          <div className="cat">
            <input type="radio" name="categories" id="kpop" value="kpop" onChange={e => setCategories(e.target.value)} />
            <label htmlFor="kpop">Kpop</label>
          </div>
          <div className="cat">
            <input type="radio" name="categories" id="gamer" value="gamer" onChange={e => setCategories(e.target.value)} />
            <label htmlFor="gamer">Gamers</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write