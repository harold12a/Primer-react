import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ItemCount({ producto, initial, stock, onAdd }) {
  const [qty, setqty] = useState(initial);
  const [add, setAdd]= useState(true);

  const decrease = () => {
    setqty(qty - 1);
  };
  const increase = () => {
    setqty(qty + 1);
  };

  const go = () =>{
    setAdd(add?false:true)
  }
  const Add = ()=> {
    onAdd(producto,qty)
  }

  return (
    <>
    {add? (
    <>
      <Button
        className="btn btn-danger btn-sm"
        disabled={qty <= 1}
        onClick={decrease}
      >
        -
      </Button>

      <span>{qty}</span>

      <Button
        className="btn btn-info btn-sm"
        disabled={qty >= stock}
        onClick={increase}
      >
        +
      </Button>

      <br />

      <Button disabled={stock <= 0} onClick={() => {
        go();
        Add();
      }}
      >
        agregar al carrito
      </Button>
      </>
    )
    :
    (
      <Link to="/cart" className="btn btn-dark" variant="primary" >
        <Button>finalizar compra</Button>
      </Link>

    )}
    </>
  );
}

export default ItemCount;
