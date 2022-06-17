import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import {  Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const Cart = () => {
  const { producto, removeItem,clearItems } = useContext(CartContext);
  
  

  return (
    <>
    <div className="map">
        {
        producto.map((producto) => (
          <div key={producto.id} producto={producto}>
         
      
    <Card className="Card">
    <Card.Img className="cardImg" variant="top" src={producto.image} />
    <Card.Body>
      <Card.Title>{producto.title}</Card.Title>
      <Card.Text>{producto.description}</Card.Text>
      <Card.Text className="text">$ {producto.price}</Card.Text>
      <p className="card-text text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        beatae aliquam dolore porro optio suscipit corrupti nemo laborum ab
        doloremque officia odio quod nobis, expedita inventore ea eligendi
        vel harum.
      </p>
     
      <Link className="btn btn-dark" variant="primary" onClick={()=>removeItem(producto.id)} >
      borrar producto
      </Link>
      <Link className="btn btn-dark" variant="primary" onClick={()=>clearItems()} >
      vaciar carrito
      </Link>
      
          
    </Card.Body>
  </Card>
  </div>
          ))}
  </div>
</>
  
  );
};

export default Cart;
