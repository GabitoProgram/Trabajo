import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import VideoPlayer from 'react-player';
import jobs1 from '../assets/img/steve1.jpeg';
import jobs2 from '../assets/img/steve2.webp';
import jobs3 from '../assets/img/steve3.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

const handleClick = () => {
    window.open('https://es.wikipedia.org/wiki/Steve_Jobs', '_blank');
};

const Pagina2 = () => {
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
            <h1>Steve Jobs</h1>
        </header>
      <section>
        <Row>
          <Col>
            <p>Steve Jobs fue un empresario, inventor e inversor estadounidense conocido principalmente como el cofundador de Apple. Jobs también fue presidente y accionista mayoritario de Pixar, y fundador de NeXT. Fue un pionero de la revolución de la computadora personal de los años 70 y 80, junto con su socio comercial temprano y cofundador de Apple, Steve Wozniak.</p>
            <p>Jobs nació en San Francisco de un padre sirio y una madre suizo-alemana estadounidense. Fue adoptado poco después de su nacimiento. Asistió a Reed College en 1972 antes de retirarse ese mismo año. En 1974, viajó por India en busca de iluminación antes de estudiar más tarde el budismo Zen.</p>
            <p>Él y Wozniak cofundaron Apple en 1976 para vender la computadora personal Apple I de Wozniak. Juntos, el dúo ganó fama y riqueza un año después con la producción y venta del Apple II, una de las primeras microcomputadoras producidas en masa de gran éxito.</p>
            <p>Jobs vio el potencial comercial del Xerox Alto en 1979, que era manejado por un ratón y tenía una interfaz gráfica de usuario (GUI). Esto llevó al desarrollo del Apple Lisa sin éxito en 1983, seguido del revolucionario Macintosh en 1984, la primera computadora producida en masa con una GUI.</p>
          </Col>
          <Col>
            <p>Además de su trabajo en Apple, Jobs también es conocido por su filantropía. En 2010, él y su esposa Laurene Powell fundaron la Iniciativa Chan Zuckerberg, una organización que busca avanzar en el potencial humano y promover la igualdad.</p>
            <p>Jobs ha sido reconocido por su trabajo en tecnología y filantropía con numerosos premios y reconocimientos. A pesar de los desafíos y las controversias, sigue siendo una figura influyente en el mundo de la tecnología y más allá.</p>
            <p>En los últimos años, Jobs y Apple han enfrentado críticas y controversias por cuestiones de privacidad y desinformación en la plataforma. A pesar de estos desafíos, Jobs ha reafirmado su compromiso con la mejora de Apple y la creación de una comunidad global más conectada.</p>
            <p>Además de Apple, Jobs también ha estado involucrado en otros proyectos tecnológicos y empresariales. Ha expresado interés en áreas como la inteligencia artificial y la realidad virtual, y ha invertido en varias startups y empresas tecnológicas a lo largo de los años.</p>
          </Col>
        </Row>

        <div>
            <div className='ccarrusel'>
                <Carousel>
            {/* Añade tus imágenes al carrusel aquí */}
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={jobs1}
                alt="Primera imagen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={jobs2}
                alt="Segunda imagen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={jobs3}
                alt="Tercera imagen"
              />
            </Carousel.Item>
          </Carousel>
            </div>
          
          <div className="center-content">
            <Button variant="primary" onClick={handleClick} className="my-button">Más sobre Steve</Button>

          <VideoPlayer url="https://youtu.be/2B-XwPjn9YY"/>

          <Button className="my-button" variant="primary" onClick={() => window.open('https://www.facebook.com/stevejobs', '_blank')}>
            <FaFacebook /> Facebook
          </Button>
          <Button  className="my-button"variant="primary" onClick={() => window.open('https://twitter.com/stevejobs', '_blank')}>
            <FaTwitter /> Twitter
          </Button>
          <Button  className="my-button" variant="primary" onClick={() => window.open('https://www.instagram.com/stevejobs/', '_blank')}>
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

export default Pagina2;
