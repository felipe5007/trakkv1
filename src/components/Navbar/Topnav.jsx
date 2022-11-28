import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Cartwidget from '../Cart/CartWidget';

const Topnav = () => {
  return (
        <Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='brand'><logo/>TRAKK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='navlist'>Home</Nav.Link>
            <Nav.Link href="#link" className='navlist'>Mapa</Nav.Link>
            <Nav.Link href="#lab" className='navlist'>Laboratorio</Nav.Link>
            <Nav.Link href="#tienda" className='navlist'>Tienda</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Cartwidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default Topnav;