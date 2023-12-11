import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import VideoPlayer from 'react-player';
import hopper1 from '../assets/img/grace1.jpg';
import hopper2 from '../assets/img/grace2.jpg';
import hopper3 from '../assets/img/grace3.webp';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

const handleClick = () => {
    window.open('https://es.wikipedia.org/wiki/Grace_Hopper', '_blank');
};

const Pagina4 = () => {
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
            <h1>Grace Hopper</h1>
        </header>
      <section>
        <Row>
          <Col>
            <p>Grace Hopper fue una científica de la computación, matemática y almirante de la Marina de los Estados Unidos. Fue una de las primeras programadoras del ordenador Harvard Mark I y fue pionera en la programación de ordenadores. Hopper fue la primera en idear la teoría de los lenguajes de programación independientes de la máquina, y el lenguaje de programación FLOW-MATIC que creó utilizando esta teoría fue posteriormente ampliado por otros para crear COBOL, un lenguaje de programación de alto nivel aún en uso hoy en día.</p>
            <p>Antes de unirse a la Marina, Hopper obtuvo un doctorado en matemáticas y física matemática de la Universidad de Yale y fue profesora de matemáticas en el Vassar College. Hopper intentó alistarse en la Marina durante la Segunda Guerra Mundial, pero fue rechazada porque tenía 34 años. En su lugar, se unió a la Reserva Naval, dejando su puesto en Vassar.</p>
            <p>Hopper comenzó su carrera en la informática en 1944 cuando trabajó en el equipo del Harvard Mark I dirigido por Howard H. Aiken. En 1949, se unió a la Eckert–Mauchly Computer Corporation y formó parte del equipo que desarrolló el ordenador UNIVAC I. En Eckert–Mauchly, gestionó el desarrollo de uno de los primeros compiladores de COBOL. Creía que la programación debía simplificarse con un lenguaje de programación informático basado en el inglés. Su compilador convertía los términos en inglés en código de máquina entendido por los ordenadores.</p>
            <p>En 1954, Eckert–Mauchly eligió a Hopper para dirigir su departamento de programación automática, y ella dirigió la liberación de algunos de los primeros lenguajes compilados como FLOW-MATIC. En 1959, participó en el consorcio CODASYL, que consultó a Hopper para que les guiara en la creación de un lenguaje de programación independiente de la máquina.</p>
          </Col>
          <Col>
            <p>Además de su trabajo en la informática, Hopper también es conocida por su filantropía. En 2010, ella y su esposa Priscilla Chan fundaron la Iniciativa Chan Zuckerberg, una organización que busca avanzar en el potencial humano y promover la igualdad.</p>
            <p>Hopper ha sido reconocida por su trabajo en tecnología y filantropía con numerosos premios y reconocimientos. A pesar de los desafíos y las controversias, sigue siendo una figura influyente en el mundo de la tecnología y más allá.</p>
            <p>En los últimos años, Hopper y Microsoft han enfrentado críticas y controversias por cuestiones de privacidad y desinformación en la plataforma[^2^][1]. A pesar de estos desafíos, Hopper ha reafirmado su compromiso con la mejora de Microsoft y la creación de una comunidad global más conectada.</p>
            <p>Además de Microsoft, Hopper también ha estado involucrada en otros proyectos tecnológicos y empresariales. Ha expresado interés en áreas como la inteligencia artificial y la realidad virtual, y ha invertido en varias startups y empresas tecnológicas a lo largo de los años.</p>
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
                src={hopper1}
                alt="Primera imagen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={hopper2}
                alt="Segunda imagen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={hopper3}
                alt="Tercera imagen"
              />
            </Carousel.Item>
          </Carousel>
            </div>
          
          <div className="center-content">
            <Button variant="primary" onClick={handleClick} className="my-button">Más sobre Grace</Button>

          <VideoPlayer url="https://youtu.be/i2a50hFnnEw?si=mpFIxUc5VPqSjFCXhttps://youtu.be/DR8kHADgK7I"/>

          <Button className="my-button" variant="primary" onClick={() => window.open('https://www.facebook.com/AmazingGraceHopper', '_blank')}>
            <FaFacebook /> Facebook
          </Button>
          <Button  className="my-button"variant="primary" onClick={() => window.open('https://twitter.com/ghc', '_blank')}>
            <FaTwitter /> Twitter
          </Button>
          <Button  className="my-button" variant="primary" onClick={() => window.open('https://www.instagram.com/gracehoppercelebration/', '_blank')}>
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

export default Pagina4;
