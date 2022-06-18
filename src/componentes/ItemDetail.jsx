import React from "react";
import { Button, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function ItemDetail({ producto }) {
  const [add, setadd] = useState(false);
  const { image, title, description, price } = producto;

  const {addItem} = useContext(CartContext)

  return (
    <>
      <Card className="Card">
        <Card.Img className="cardImg" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text className="text">$ {price}</Card.Text>
          <p className="card-text text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            beatae aliquam dolore porro optio suscipit corrupti nemo laborum ab
            doloremque officia odio quod nobis, expedita inventore ea eligendi
            vel harum.
          </p>
          {add ? (
            <Link to="/cart" className="btn btn-dark" variant="primary">
               finalizar compra
            </Link>
          ) 
          : 
          (
            <Button className="btn btn-dark" variant="primary">
              <ItemCount producto={producto} initial={1} stock={5} onAdd={addItem} />
            </Button>
          )}
         
        </Card.Body>
      </Card>
    </>
  );
}

export default ItemDetail;