import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button, Card, Table } from "react-bootstrap";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sentOrder, setSentOrder] = useState(false);
  const [orderId, setOrderId] = useState("");

  const db = getFirestore();
  const orderCollection = collection(db, "pedidos");

  const { producto, removeItem, clearItems, totalPrice } =
    useContext(CartContext);

  function handleClick() {
    const order = {
      buyer: { name, email, phone },
      items: producto,
      total: totalPrice(),
      fecha: new Date(),
    };
    console.log(order);
    addDoc(orderCollection, order)
      .then(({ id }) => {
        setOrderId(id);
        setSentOrder(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (producto.length === 0) {
    return (
      <div className="checkoutBody">
        <h1>Tu carro está vacío</h1>
        <Link to="/">
          <Button>INICIAR COMPRA</Button>
        </Link>
      </div>
    );
  }

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
              </Card.Body>
            </Card>
          </div>
        ))}
        <br></br>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>
                <font color="white">VALOR TOTAL DE LA COMPRA</font>{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <font color="white"> $ {totalPrice()}</font>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="checkoutBody">
        <h1>
          <font color="white">¡GRACIAS POR COMPRAR EN BOUTIQUE AK!</font>
        </h1>
        <p>
          <font color="white">
            Llena los campos completar compra. la compra
          </font>
        </p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre..."
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email..."
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Tu teléfono..."
        />
        <Button onClick={handleClick}>EMITIR COMPRA</Button>
        <Button
          className="btn btn-red"
          variant="primary"
          onClick={() => clearItems()}
        >
          VACIAR CARRITO
        </Button>
      </div>
      {sentOrder && (
        <div className="sentOrder">
          <h2>
            <font color="white">NUMERO DE PEDIDO:</font>
          </h2>
          <p className="orderId">
            <font color="white">{orderId}</font>
          </p>
          <p>
            <font color="white">
              Nos pondremos en contacto para gestionar el pago y el envío!
            </font>
          </p>
        </div>
      )}
    </>
  );
};

export default Cart;
