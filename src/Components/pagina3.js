import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import VideoPlayer from 'react-player';
import gates1 from '../assets/img/bill1.jpeg';
import gates2 from '../assets/img/bill2.webp';
import gates3 from '../assets/img/bill3.jpeg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

const handleClick = () => {
    window.open('https://es.wikipedia.org/wiki/Bill_Gates', '_blank');
};

const Pagina3 = () => {
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
            <h1>Bill Gates</h1>
        </header>
      <section>
        <Row>
          <Col>
            <p>Bill Gates es un tecnólogo, líder empresarial y filántropo. Creció en Seattle, Washington, con una familia increíble y de apoyo que alentó su interés en las computadoras a una edad temprana. Dejó la universidad para comenzar Microsoft con su amigo de la infancia Paul Allen.</p>
            <p>Gates escribió su primer programa de software a la edad de 13 años. Él y Allen fundaron Microsoft en 1975 para vender la computadora personal Apple I de Allen. Juntos, el dúo ganó fama y riqueza un año después con la producción y venta del Apple II, una de las primeras microcomputadoras producidas en masa de gran éxito.</p>
            <p>Gates vio el potencial comercial del Xerox Alto en 1979, que era manejado por un ratón y tenía una interfaz gráfica de usuario (GUI). Esto llevó al desarrollo del Apple Lisa sin éxito en 1983, seguido del revolucionario Macintosh en 1984, la primera computadora producida en masa con una GUI.</p>
            <p>Además de su trabajo en Microsoft, Gates también es conocido por su filantropía. En 2010, él y su esposa Priscilla Chan fundaron la Iniciativa Chan Zuckerberg, una organización que busca avanzar en el potencial humano y promover la igualdad.</p>
          </Col>
          <Col>
            <p>Gates ha sido reconocido por su trabajo en tecnología y filantropía con numerosos premios y reconocimientos. A pesar de los desafíos y las controversias, sigue siendo una figura influyente en el mundo de la tecnología y más allá.</p>
            <p>En los últimos años, Gates y Microsoft han enfrentado críticas y controversias por cuestiones de privacidad y desinformación en la plataforma. A pesar de estos desafíos, Gates ha reafirmado su compromiso con la mejora de Microsoft y la creación de una comunidad global más conectada.</p>
            <p>Además de Microsoft, Gates también ha estado involucrado en otros proyectos tecnológicos y empresariales. Ha expresado interés en áreas como la inteligencia artificial y la realidad virtual, y ha invertido en varias startups y empresas tecnológicas a lo largo de los años.</p>
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
                src={gates1}
                alt="Primera imagen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={gates2}
                alt="Segunda imagen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={gates3}
                alt="Tercera imagen"
              />
            </Carousel.Item>
          </Carousel>
            </div>
          
          <div className="center-content">
            <Button variant="primary" onClick={handleClick} className="my-button">Más sobre Bill</Button>

          <VideoPlayer url="https://youtu.be/wq-gba5nMrc"/>

          <Button className="my-button" variant="primary" onClick={() => window.open('https://www.facebook.com/BillGates', '_blank')}>
            <FaFacebook /> Facebook
          </Button>
          <Button  className="my-button"variant="primary" onClick={() => window.open('https://twitter.com/BillGates', '_blank')}>
            <FaTwitter /> Twitter
          </Button>
          <Button  className="my-button" variant="primary" onClick={() => window.open('https://www.instagram.com/thisisbillgates/', '_blank')}>
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

export default Pagina3;
