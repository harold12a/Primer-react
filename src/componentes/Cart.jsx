import React from "react";
import { useContext} from "react";
import { CartContext } from "./CartContext";
import { Button, Card,Table } from "react-bootstrap";
import {Link} from "react-router-dom"



const Cart = () => {
  const { producto, removeItem, clearItems, totalPrice} = useContext(CartContext);
 



  if (producto.length === 0 ){{
    return(
      <>
      <p>no hay productos en el carrito de compras</p>
      <Link to="/" >hacer compras</Link>
      </>
    )
  }}
  

 
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
                <Card.Text className="text"> VALOR $ {item.price}</Card.Text>
                <p className="btn btn-dark" variant="primary" > Cantidad: {item.qty}</p>
                <p className="btn btn-dark" variant="primary" > Subtotal:$ {item.qty * item.price }</p>
              
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
            <th>VALOR TOTAL </th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>$ {totalPrice()}</td>
             </tr>
       </tbody>
      </Table>
      </div>
    </>
  );
};
 
export default Cart;
