import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import VideoPlayer from 'react-player';
import torvalds1 from '../assets/img/linus1.jpg';
import torvalds2 from '../assets/img/linus2.webp';
import torvalds3 from '../assets/img/linus3.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

const handleClick = () => {
    window.open('https://es.wikipedia.org/wiki/Linus_Torvalds', '_blank');
};

const Pagina5 = () => {
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
            <h1>Linus Torvalds</h1>
        </header>
      <section>
        <Row>
          <Col>
            <p>Linus Torvalds es un ingeniero de software finlandés que es el creador y desarrollador principal del kernel de Linux, utilizado por las distribuciones de Linux. También creó el sistema de control de versiones distribuido Git. Nació el 28 de diciembre de 1969 en Helsinki, Finlandia.</p>
            <p>A la edad de 10 años, Torvalds comenzó a programar en su Commodore VIC-20. En 1990, reanudó sus estudios universitarios, y fue expuesto a Unix por primera vez en la forma de un DEC MicroVAX que ejecutaba ULTRIX.</p>
            <p>En 1991, Torvalds comenzó a trabajar en su propio sistema operativo que eventualmente se convirtió en el kernel de Linux. Los primeros prototipos de Linux fueron lanzados públicamente a finales de 1991.</p>
            <p>Además de su trabajo en Linux, Torvalds también ha estado involucrado en otros proyectos tecnológicos. Ha expresado interés en áreas como la inteligencia artificial y la realidad virtual, y ha invertido en varias startups y empresas tecnológicas a lo largo de los años.</p>
          </Col>
          <Col>
            <p>Además de su trabajo en Linux, Torvalds también es conocido por su filantropía. Ha sido reconocido por su trabajo en tecnología con numerosos premios y reconocimientos. A pesar de los desafíos y las controversias, sigue siendo una figura influyente en el mundo de la tecnología y más allá.</p>
            <p>En los últimos años, Torvalds y Linux han enfrentado críticas y controversias por cuestiones de privacidad y desinformación en la plataforma. A pesar de estos desafíos, Torvalds ha reafirmado su compromiso con la mejora de Linux y la creación de una comunidad global más conectada.</p>
            <p>Además de Linux, Torvalds también ha estado involucrado en otros proyectos tecnológicos y empresariales. Ha expresado interés en áreas como la inteligencia artificial y la realidad virtual, y ha invertido en varias startups y empresas tecnológicas a lo largo de los años.</p>
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
                src={torvalds1}
                alt="Primera imagen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={torvalds2}
                alt="Segunda imagen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={torvalds3}
                alt="Tercera imagen"
              />
            </Carousel.Item>
          </Carousel>
            </div>
          
          <div className="center-content">
            <Button variant="primary" onClick={handleClick} className="my-button">Más sobre Linus</Button>

          <VideoPlayer url="https://youtu.be/o8NPllzkFhE"/>

          <Button className="my-button" variant="primary" onClick={() => window.open('https://www.facebook.com/LinusTorvalds', '_blank')}>
            <FaFacebook /> Facebook
          </Button>
          <Button  className="my-button"variant="primary" onClick={() => window.open('https://twitter.com/linus__torvalds', '_blank')}>
            <FaTwitter /> Twitter
          </Button>
          <Button  className="my-button" variant="primary" onClick={() => window.open('https://www.instagram.com/linustorvalds/', '_blank')}>
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

export default Pagina5;
