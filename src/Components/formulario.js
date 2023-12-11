import React, { useState } from 'react';
import steve from '../assets/img/steve1.jpeg';
import mark from '../assets/img/mark1.webp';
import bill from '../assets/img/bill1.jpeg';
import grace from '../assets/img/grace1.jpg';
import linus from '../assets/img/linus1.jpg';
import sayda from '../assets/img/sayda1.jpg';
import lee from '../assets/img/lee1.jpg';

const Formulario = () => {
  const [formData, setFormData] = useState({
    personaje: '',
    comentario: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    setFormSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      personaje: '',
      comentario: ''
    });
    setFormSubmitted(false);
  };

  return (
    <div className='formulario'>
      <h1 className='formulario-titulo'>BUSCA A TU PERSONAJE</h1>
      <form onSubmit={handleSubmit} className='formulario-form'>
        <label>
          Selecciona un personaje:
          <select className='formulario-select' name="personaje" value={formData.personaje} onChange={handleChange}>
            <option value="">--Por favor selecciona un personaje--</option>
            <option value="Steve Jobs">Steve Jobs</option>
            <option value="Mark Zuckerberg">Mark Zuckerberg</option>
            <option value="Bill Gates">Bill Gates</option>
            <option value="Grace Hopper">Grace Hopper</option>
            <option value="Linus Torvalds">Linus Torvalds</option>
            <option value="Satya Nadella">Satya Nadella</option>
            <option value="Tim Berners-Lee">Tim Berners-Lee</option>
          </select>
        </label>
        <br />
        <label>
          Escribe tu comentario o pregunta:
          <textarea className='formulario-textarea' name="comentario" value={formData.comentario} onChange={handleChange} />
        </label>
        <br />
        <input type="submit" value="Enviar" className='formulario-submit'/>
        <button onClick={handleReset} className='formulario-reset'>Limpiar</button>
      </form>
      {formSubmitted && formData.personaje && (
        <div className='formulario-respuesta'>
          {(() => {
            let imagen;
            switch (formData.personaje) {
              case 'Steve Jobs':
                imagen = steve;
                break;
              case 'Mark Zuckerberg':
                imagen = mark;
                break;
              case 'Bill Gates':
                imagen = bill;
                break;
              case 'Grace Hopper':
                imagen = grace;
                break;
              case 'Linus Torvalds':
                imagen = linus;
                break;
              case 'Satya Nadella':
                imagen = sayda;
                break;
              case 'Tim Berners-Lee':
                imagen = lee;
                break;
              default:
                imagen = null;
            }
            return <img src={imagen} alt={formData.personaje} className='formulario-imagen'/>;
          })()}
          <p className='formulario-comentario'>{formData.comentario}</p>
        </div>
      )}
      <footer className='mi-footer'>
        <p>© 2023 Gabriel Callisaya Diaz. Orgullosamente creado con amor.</p>
      </footer>
    </div>
  );
};

export default Formulario;



