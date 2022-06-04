import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'
import CartWidget from './CartWidget';

 const NavBar = () => {
  return (
<div>
<Navbar bg="primary" expand="lg">
  <Container>
    <Navbar.Brand href="#home" >BOUTIQUE AK</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className='navLink' href="#home" >articulos</Nav.Link>
        <Nav.Link className='navLink' href="#link">lo mas vendido</Nav.Link>
        <Nav.Link className='navLink' href="#link">nosotros</Nav.Link>
        
      </Nav>
      <CartWidget numero={5}/>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  )
}

export default NavBar;





