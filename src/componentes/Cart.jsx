import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button, Card, Table } from "react-bootstrap";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { producto, removeItem, clearItems, totalPrice } =
    useContext(CartContext);

  const order = {
    buyer: {
      name: "harold",
      email: "haroldalzatee9@gmail.com",
      phone: "311745713",
      address: "calle 12",
    },
    productos: producto.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      qty: item.qty,
    })),
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

  return (
    <>
      <div className="map">
        {producto.map((item) => (
          <div key={item.id}>
            <Card className="Card">
              <Card.Img className="cardImg" variant="top" src={item.image} />

              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text className="text"> VALOR $ {item.price}</Card.Text>
                <p className="btn btn-dark" variant="primary">
                  {" "}
                  Cantidad: {item.qty}
                </p>
                <p className="btn btn-dark" variant="primary">
                  {" "}
                  Subtotal:$ {item.qty * item.price}
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
        <br></br>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>VALOR TOTAL DE LA COMPRA </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$ {totalPrice()}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Button onClick={handleClick}>emitir compra</Button>
    </>
  );
};

export default Cart;
