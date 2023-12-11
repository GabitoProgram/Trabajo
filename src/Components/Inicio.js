import React from 'react';
import facebookLogo from '../assets/img/twt (1).png';
import twitterLogo from '../assets/img/twt (2).png';
import instagramLogo from '../assets/img/twt (3).png';

const Inicio = () => {
  return (
    <div className='inicio'>
      <h1>Bienvenido a Líderes en Tecnología</h1>
      <h2>"Tema: Personajes importantes en la informática"</h2>
      <p>Explora la vida y los logros de los personajes más influyentes en el mundo de la informática.</p>
      <div className='contenido'>
        <div className='columna'>
          <h3>La importancia de la informática</h3>
          <p>La informática ha transformado nuestra sociedad y continúa haciéndolo cada día...</p>
          <img src="https://th.bing.com/th/id/R.1b4e0075c68fd2dbdc7f2bfb690e6982?rik=bHW93J2TGEKraQ&pid=ImgRaw&r=0" alt="Imagen 1" className='imagen'/>
        </div>
        <div className='columna'>
  <h3>Video destacado</h3>
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/MFEVevUHIV8" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    className='video'
  ></iframe>
</div>
      </div>
      <div className='redes-sociales'>
        <a href="https://www.facebook.com/tupagina">
          <img src={facebookLogo} alt="Facebook" className='red-social'/>
        </a>
        <a href="https://www.twitter.com/tupagina">
          <img src={twitterLogo} alt="Twitter" className='red-social'/>
        </a>
        <a href="https://www.instagram.com/tupagina">
          <img src={instagramLogo} alt="Instagram" className='red-social'/>
        </a>
      </div>
      <footer className='mi-footer'>
        <p>© 2023 Gabriel Callisaya Diaz. Orgullosamente creado con amor.</p>
      </footer>
    </div>
  );
};

export default Inicio;

  