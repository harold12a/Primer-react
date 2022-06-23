import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function ItemCount ({initial, stock, onAdd}) {
  const [qty, setqty] = useState(initial);
  

  const decrease = () => {
    setqty(qty - 1);
  };
  const increase = () => {
    setqty(qty + 1);
  };

  return (
    <>
    <div>
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
      <Button disabled={stock <= 0} onClick={() => onAdd(qty)}
      >
        agregar al carrito
      </Button>
    </div>
       
      
    </>
  
  )
}

