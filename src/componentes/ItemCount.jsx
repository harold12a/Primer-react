import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial);

  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Button
        className="btn btn-danger btn-sm"
        disabled={count <= 1}
        onClick={decrease}
      >
        -
      </Button>

      <span>{count}</span>

      <Button
        className="btn btn-info btn-sm"
        disabled={count >= stock}
        onClick={increase}
      >
        +
      </Button>

      <br />

      <Button disabled={stock <= 0} onClick={() => onAdd()}>
        agregar al carrito
      </Button>
    </>
  );
}

export default ItemCount;
