import React from "react";
import { Button, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

import { useContext } from "react";
import { CartContext } from "./CartContext";

function ItemDetail({ producto }) {

  const { id, image, title, description, price } = producto;

  const { addItem } = useContext(CartContext);

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

          <Button className="btn btn-dark" variant="primary">
            <ItemCount
              id={id}
              producto={producto}
              initial={1}
              stock={5}
              onAdd={addItem}
            />
          </Button>
          
        </Card.Body>
      </Card>
    </>
  );
}

export default ItemDetail;
