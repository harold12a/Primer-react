import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button, Card, Table } from "react-bootstrap";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Cart = () => {
  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [sentOrder, setSentOrder] = useState(false)
    const [orderId, setOrderId] = useState('')

    const db = getFirestore();
    const orderCollection = collection (db, 'pedidos');
  
  
  const { producto, removeItem, clearItems, totalPrice } =
    useContext(CartContext);

    function handleClick() {
      const order = {
          buyer: {name, email, phone},
          items: producto,
          total: totalPrice(),
          fecha: new Date()
      }
      console.log(order)
      addDoc(orderCollection, order).then(({id}) => {
          setOrderId(id)
          setSentOrder(true)
      }
          )
          .catch(error => {
              console.log(error)
          }
      )
  }


 


  if (producto.length === 0) {
    return (
        <div className="checkoutBody">
            <h1>Tu carro está vacío</h1>
            <Link to="/"><Button>INICIAR COMPRA</Button></Link>
        </div>
    )
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
  

  
  <div className="checkoutBody">
      <h1>¡GRACIAS POR COMPRAR EN BOUTIQUE AK!</h1>
      <p>Llena los campos completar la compra.</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre..." />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Tu email..." />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Tu teléfono..." />
      <Button onClick={handleClick}>EMITIR COMPRA</Button>
  </div>
  {sentOrder&&
      <div className="sentOrder">
          <h2>NUMERO DE PEDIDO:</h2>
          <p className="orderId">{orderId}</p>
          <p>Nos pondremos en contacto para gestionar el pago y el envío!</p>
      </div>
  }
  </>
)



};

export default Cart;




/*const Cart = () => {
  
  
  
  
  const { producto, removeItem, clearItems, totalPrice } =
    useContext(CartContext);

    

  const order = {
    buyer: {
      name: "harold",
      email: "haroldalzatee9@gmail.com",
      phone: "311745713",
      address: "calle 12",
    },
    items: producto.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      qty: item.qty,
    })),
    total: totalPrice(),
    fecha: new Date(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

  if (producto.length === 0) {
    return (
        <div className="checkoutBody">
            <h1>Tu carro está vacío</h1>
            <Link to="/"><button className="botonPrincipal">INICIAR COMPRA</button></Link>
        </div>
    )
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

 */
