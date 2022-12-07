import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const [value, setValue] = useState('');
  console.log(value);
  return (
    <div className='add'>
      <div className="content">
        <input type="text" name="" placeholder='titulo' />
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
          <input style={{display:"none"}} type="file" name="" id="file" />
          <label className='file' htmlFor="file">Cargar imagen</label>
          <div className="buttons">
            <button>Guardar como Reclutar</button>
            <button>Actualizar</button>
          </div>
        </div>
        <div className="item">
          <h1>Categoria</h1>
          <div className="cat">
            <input type="radio" name="categories" id="art" value="art" />
            <label htmlFor="art">Arte</label>
          </div>
          <div className="cat">
            <input type="radio" name="categories" id="evento" value="evento" />
            <label htmlFor="evento">Eventos</label>
          </div>
          <div className="cat">
            <input type="radio" name="categories" id="show" value="show" />
            <label htmlFor="show">Shows</label>
          </div>
          <div className="cat">
            <input type="radio" name="categories" id="concurso" value="concurso" />
            <label htmlFor="concurso">Concursos</label>
          </div>
          <div className="cat">
            <input type="radio" name="categories" id="kpop" value="kpop" />
            <label htmlFor="kpop">Kpop</label>
          </div>
          <div className="cat">
            <input type="radio" name="categories" id="gamer" value="gamer" />
            <label htmlFor="gamer">Gamers</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write