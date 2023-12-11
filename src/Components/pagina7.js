import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import VideoPlayer from 'react-player';
import nadella1 from '../assets/img/sayda1.jpg';
import nadella2 from '../assets/img/sayda2.webp';
import nadella3 from '../assets/img/sayda3.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

const handleClick = () => {
    window.open('https://es.wikipedia.org/wiki/Satya_Nadella', '_blank');
};

const Pagina7 = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div>
        <header className="my-header">
            <h1>Satya Nadella</h1>
        </header>
      <section>
        <Row>
          <Col>
            <p>Satya Nadella es un ejecutivo de negocios indo-estadounidense. Es el presidente ejecutivo y CEO de Microsoft, sucediendo a Steve Ballmer en 2014 como CEO y a John W. Thompson en 2021 como presidente. Antes de convertirse en CEO, fue el vicepresidente ejecutivo del grupo de nube y empresa de Microsoft, responsable de construir y ejecutar las plataformas informáticas de la empresa.</p>
            <p>Nadella nació el 19 de agosto de 1967 en Hyderabad, India. Su madre Prabhavati era profesora de sánscrito y su padre, Bukkapuram Nadella Yugandhar, era un oficial del Servicio Administrativo Indio. Nadella asistió a la Escuela Pública de Hyderabad, Begumpet antes de recibir una licenciatura en ingeniería eléctrica del Instituto de Tecnología de Manipal en Karnataka en 1988.</p>
            <p>Nadella luego viajó a los EE. UU. para estudiar para un MS en ciencias de la computación en la Universidad de Wisconsin-Milwaukee, recibiendo su título en 1990. Más tarde, recibió un MBA de la Escuela de Negocios Booth de la Universidad de Chicago en 1997.</p>
            <p>Nadella trabajó en Sun Microsystems como miembro de su personal tecnológico antes de unirse a Microsoft en 1992. En Microsoft, Nadella ha liderado proyectos importantes que incluyeron el movimiento de la compañía hacia la computación en la nube y el desarrollo de una de las infraestructuras en la nube más grandes del mundo.</p>
          </Col>
          <Col>
            <p>Además de su trabajo en Microsoft, Nadella también es conocido por su filantropía. Ha sido reconocido por su trabajo en tecnología con numerosos premios y reconocimientos. A pesar de los desafíos y las controversias, sigue siendo una figura influyente en el mundo de la tecnología y más allá.</p>
            <p>En los últimos años, Nadella y Microsoft han enfrentado críticas y controversias por cuestiones de privacidad y desinformación en la plataforma. A pesar de estos desafíos, Nadella ha reafirmado su compromiso con la mejora de Microsoft y la creación de una comunidad global más conectada.</p>
            <p>Además de Microsoft, Nadella también ha estado involucrado en otros proyectos tecnológicos y empresariales. Ha expresado interés en áreas como la inteligencia artificial y la realidad virtual, y ha invertido en varias startups y empresas tecnológicas a lo largo de los años.</p>
            <p>En 2012, Facebook se hizo público en una de las mayores ofertas públicas iniciales de la historia de la tecnología. A pesar de algunos desafíos iniciales, Facebook ha continuado creciendo y expandiéndose bajo el liderazgo de Zuckerberg.</p>
          </Col>
        </Row>

        <div>
            <div className='ccarrusel'>
                <Carousel>
            {/* Añade tus imágenes al carrusel aquí */}
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={nadella1}
                alt="Primera imagen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={nadella2}
                alt="Segunda imagen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={nadella3}
                alt="Tercera imagen"
              />
            </Carousel.Item>
          </Carousel>
            </div>
          
          <div className="center-content">
            <Button variant="primary" onClick={handleClick} className="my-button">Más sobre Satya</Button>

          <VideoPlayer url="https://youtu.be/FZhbJZEgKQ4?si=SKvNb2naHANd8JhK"/>

          <Button className="my-button" variant="primary" onClick={() => window.open('https://www.facebook.com/SatyaNadella', '_blank')}>
            <FaFacebook /> Facebook
          </Button>
          <Button  className="my-button"variant="primary" onClick={() => window.open('https://twitter.com/satyanadella', '_blank')}>
            <FaTwitter /> Twitter
          </Button>
          <Button  className="my-button" variant="primary" onClick={() => window.open('https://www.instagram.com/satyanadella/', '_blank')}>
            <FaInstagram /> Instagram
          </Button>
          </div>
          
        </div>
      </section>

      <footer className='mi-footer'>
          <p>© 2023 Gabriel Callisaya Diaz. Orgullosamente creado con amor.</p>
        </footer>
    </div>
  );
};

export default Pagina7;
