import React from "react";
import { Button, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemDetail({ producto }) {
  const [add, setadd] = useState(false);

  const onAdd = () => {
    setadd(!add);
  };

  const { image, title, description, price } = producto;

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
            <></>
          ) : (
            <Button className="btn btn-dark" variant="primary">
              <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </Button>
          )}
          <Link to="/cart" className="btn btn-dark" variant="primary">
            finalizar compra
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default ItemDetail;