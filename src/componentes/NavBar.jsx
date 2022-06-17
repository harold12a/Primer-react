import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <Nav className="navbar navbar-dark bg-warning">
          <div className="container">
            <Navbar.Brand to="/">BOUTIQUE AK</Navbar.Brand>

            <Link to="/" className="btn btn-outline-primary">
              inicio
            </Link>
            <Link to="/category/articulos" className="btn btn-outline-primary">
              articulos
            </Link>
            <Link to="/category/bolsos" className="btn btn-outline-primary">
              bolsos
            </Link>
            <Link to="/category/lociones" className="btn btn-outline-primary">
              lociones
            </Link>
            <Link to="/category/contacto" className="btn btn-outline-primary">
              contacto
            
            </Link>
            <Link to="/cart" >

            <CartWidget />
            </Link>
          
          </div>
        </Nav>
      </div>
    </>
  );
};

export default NavBar;
