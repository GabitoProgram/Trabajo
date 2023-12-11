import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import VideoPlayer from 'react-player';
import mark1 from '../assets/img/mark1.webp';
import mark2 from '../assets/img/mark2.webp';
import mark3 from '../assets/img/mark3.webp';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

const handleClick = () => {
    window.open('https://es.wikipedia.org/wiki/Mark_Zuckerberg', '_blank');
};

const Pagina1 = () => {
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
            <h1>Mark Zuckerberg</h1>
        </header>
      <section>
        <Row>
          <Col>
            <p>Mark Zuckerberg es el cofundador y CEO de Facebook, la red social más grande del mundo. Nació el 14 de mayo de 1984 en White Plains, Nueva York. Zuckerberg lanzó Facebook desde su dormitorio en la universidad en 2004.</p>
            <p>Desde su lanzamiento, Facebook ha crecido hasta convertirse en una plataforma global que conecta a miles de millones de personas en todo el mundo. La visión de Zuckerberg para Facebook siempre ha sido conectar a las personas y proporcionarles una plataforma para compartir ideas y experiencias.</p>
            <p>Zuckerberg estudió en la Universidad de Harvard, donde comenzó a desarrollar Facebook. Aunque inicialmente fue creado como una red social para estudiantes de Harvard, Facebook pronto se expandió a otras universidades y eventualmente al público en general.</p>
            <p>En 2012, Facebook se hizo público en una de las mayores ofertas públicas iniciales de la historia de la tecnología. A pesar de algunos desafíos iniciales, Facebook ha continuado creciendo y expandiéndose bajo el liderazgo de Zuckerberg.</p>
          </Col>
          <Col>
            <p>Además de su trabajo en Facebook, Zuckerberg también es conocido por su filantropía. En 2010, él y su esposa Priscilla Chan fundaron la Iniciativa Chan Zuckerberg, una organización que busca avanzar en el potencial humano y promover la igualdad.</p>
            <p>Zuckerberg ha sido reconocido por su trabajo en tecnología y filantropía con numerosos premios y reconocimientos. A pesar de los desafíos y las controversias, sigue siendo una figura influyente en el mundo de la tecnología y más allá.</p>
            <p>En los últimos años, Zuckerberg y Facebook han enfrentado críticas y controversias por cuestiones de privacidad y desinformación en la plataforma. A pesar de estos desafíos, Zuckerberg ha reafirmado su compromiso con la mejora de Facebook y la creación de una comunidad global más conectada.</p>
            <p>Además de Facebook, Zuckerberg también ha estado involucrado en otros proyectos tecnológicos y empresariales. Ha expresado interés en áreas como la inteligencia artificial y la realidad virtual, y ha invertido en varias startups y empresas tecnológicas a lo largo de los años.</p>
          </Col>
        </Row>

        <div>
            <div className='ccarrusel'>
                <Carousel>
            {/* Añade tus imágenes al carrusel aquí */}
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={mark1}
                alt="Primera imagen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={mark2}
                alt="Segunda imagen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={mark3}
                alt="tercera imagen"
              />
            </Carousel.Item>
          </Carousel>
            </div>
          
          <div className="center-content">
            <Button variant="primary" onClick={handleClick} className="my-button">Mas sobre Mark</Button>

          <VideoPlayer url="https://youtu.be/JHRNCiQ0oiA?si=E_dDhEfKGcHXXmRn"/>

          <Button className="my-button" variant="primary" onClick={() => window.open('https://www.facebook.com/zuck', '_blank')}>
            <FaFacebook /> Facebook
          </Button>
          <Button  className="my-button"variant="primary" onClick={() => window.open('https://twitter.com/finkd', '_blank')}>
            <FaTwitter /> Twitter
          </Button>
          <Button  className="my-button" variant="primary" onClick={() => window.open('https://www.instagram.com/zuck/', '_blank')}>
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

export default Pagina1;


