import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from '../assets/img/LIDERES.png'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">  <img src={logo} alt="Logo" style={{width: '100px'}} />
</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleMenu} />
      <Navbar.Collapse id="navbarScroll" style={{ display: isOpen ? 'block' : 'none' }}>
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link as={Link} to="/Inicio">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/pagina1">Mark Zuckerberg</Nav.Link>
          <Nav.Link as={Link} to="/pagina2">Steve Jobs</Nav.Link>
          <Nav.Link as={Link} to="/pagina3">Bill Gates</Nav.Link>
          <Nav.Link as={Link} to="/pagina4">Grace Hopper</Nav.Link>
          <Nav.Link as={Link} to="/pagina5">Linus Torvalds</Nav.Link>
          <Nav.Link as={Link} to="/pagina6">Tim Berners-Lee</Nav.Link>
          <Nav.Link as={Link} to="/pagina7">Satya Nadella</Nav.Link>
          <Nav.Link as={Link} to="/Formulario">Formulario</Nav.Link>
          <Nav.Link as={Link} to="/autor">Autor</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
      <hr />
      <Outlet />
    </Navbar>
  );
};

export default NavBar;


