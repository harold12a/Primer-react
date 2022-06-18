import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const { producto, removeItem, clearItems } = useContext(CartContext);

  return (
    <>
      <div className="map">
        {producto.map((item) => (
          <div key={item.id}>

            <Card className="Card">
              <Card.Img
                className="cardImg"
                variant="top"
                src={item.image}
              />

              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text className="text">$ {item.price}</Card.Text>
                <p className="card-text text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  beatae aliquam dolore porro optio suscipit corrupti nemo
                  laborum ab doloremque officia odio quod nobis, expedita
                  inventore ea eligendi vel harum.
                </p>

                <Button
                  className="btn btn-dark"
                  variant="primary"
                  onClick={() => removeItem(item.id)}
                >
                  borrar producto
                </Button>
                <Button
                  className="btn btn-dark"
                  variant="primary"
                  onClick={() => clearItems()}
                >
                  vaciar carrito
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
