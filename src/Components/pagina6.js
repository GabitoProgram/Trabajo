import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import VideoPlayer from 'react-player';
import bernerslee1 from '../assets/img/lee1.jpg';
import bernerslee2 from '../assets/img/lee2.webp';
import bernerslee3 from '../assets/img/lee3.webp';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

const handleClick = () => {
    window.open('https://es.wikipedia.org/wiki/Tim_Berners-Lee', '_blank');
};

const Pagina6 = () => {
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
            <h1>Tim Berners-Lee</h1>
        </header>
      <section>
        <Row>
          <Col>
            <p>Tim Berners-Lee es un científico de la computación británico, conocido como el inventor de la World Wide Web. Propuso un sistema de gestión de información en marzo de 1989, e implementó la primera comunicación exitosa entre un cliente de Hypertext Transfer Protocol (HTTP) y un servidor a través de Internet a mediados de noviembre del mismo año.</p>
            <p>Desarrolló y puso en práctica el primer navegador y servidor web, y ayudó a fomentar el posterior desarrollo explosivo de la web. Es el fundador y director del World Wide Web Consortium (W3C), que supervisa el desarrollo continuo de la web. También es cofundador de la World Wide Web Foundation.</p>
            <p>Berners-Lee es investigador principal y titular de la cátedra de fundadores de 3Com en el Laboratorio de Ciencias de la Computación e Inteligencia Artificial (CSAIL) del MIT. Es director de la Iniciativa de Investigación en Ciencias de la Web (WSRI) y miembro del consejo asesor del Centro de Inteligencia Colectiva del MIT.</p>
            <p>En 2004, Berners-Lee fue nombrado caballero por la Reina Isabel II por su trabajo pionero. Recibió el Premio Turing 2016 "por inventar la World Wide Web, el primer navegador web, y los protocolos y algoritmos fundamentales que permiten que la Web se amplíe".</p>
          </Col>
          <Col>
            <p>Tim Berners-Lee nació en Londres el 8 de junio de 1955, hijo de matemáticos y científicos de la computación Mary Lee Woods y Conway Berners-Lee. Sus padres trabajaron en el Ferranti Mark 1, la primera computadora construida comercialmente.</p>
            <p>Después de realizar estudios en la escuela Emanuel, ingresó en el Queen's College en la Universidad de Oxford, donde recibió un título de primer nivel en física. Luego de su graduación, logró conseguir un empleo para una imprenta en Plessey, Poole.</p>
            <p>Además de su trabajo en la informática, Berners-Lee también es conocido por su filantropía. Ha sido reconocido por su trabajo en tecnología con numerosos premios y reconocimientos. A pesar de los desafíos y las controversias, sigue siendo una figura influyente en el mundo de la tecnología y más allá.</p>
            <p>En los últimos años, Berners-Lee y la World Wide Web han enfrentado críticas y controversias por cuestiones de privacidad y desinformación en la plataforma. A pesar de estos desafíos, Berners-Lee ha reafirmado su compromiso con la mejora de la World Wide Web y la creación de una comunidad global más conectada.</p>
          </Col>
        </Row>

        <div>
            <div className='ccarrusel'>
                <Carousel>
            {/* Añade tus imágenes al carrusel aquí */}
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={bernerslee1}
                alt="Primera imagen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={bernerslee2}
                alt="Segunda imagen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={bernerslee3}
                alt="Tercera imagen"
              />
            </Carousel.Item>
          </Carousel>
            </div>
          
          <div className="center-content">
            <Button variant="primary" onClick={handleClick} className="my-button">Más sobre Tim</Button>

          <VideoPlayer url="https://youtu.be/Jev2Um-4_TQ"/>

          <Button className="my-button" variant="primary" onClick={() => window.open('https://www.facebook.com/timbernerslee', '_blank')}>
            <FaFacebook /> Facebook
          </Button>
          <Button  className="my-button"variant="primary" onClick={() => window.open('https://twitter.com/timberners_lee', '_blank')}>
            <FaTwitter /> Twitter
          </Button>
          <Button  className="my-button" variant="primary" onClick={() => window.open('https://www.instagram.com/timbernerslee/', '_blank')}>
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

export default Pagina6;
