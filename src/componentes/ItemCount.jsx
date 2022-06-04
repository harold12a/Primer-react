import React, { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';









function ItemCount({ initial, stock, onAdd }) {
  
  const [count, setCount] = useState((initial));
  const decrease = () => {
    setCount(count - 1);
  }
  const increase = () => {
    setCount(count + 1);
  }


  useEffect(() => {
    console.log('render')
    if (count === 1) {
      alert('has agregado 1 unidad  ');
    } else if (count === 2) {
      alert('has agregado 2 unidad  ');
    } else if (count === 3) {
      alert('has agregado 3 unidad  ');
    } else if (count === 4) {
      alert('has agregado 4 unidad  ');
    } else {
      alert('has agregado el maximo stock disponible 5 unidades');
    }
  });



              

  return (

    <>
    <Button className="btn btn-danger btn-sm" disabled={count <= 1} onClick={decrease}>
                    -
                </Button>
     

<span>{count}</span>

<Button className="btn btn-info btn-sm" disabled={count >= stock } onClick={increase}>
                    +
                </Button>



<br />


  <Button  disabled={stock <= 0} onClick ={()=> onAdd(count)}>agregar al carrito</Button>
   
</> 

 );
};


export default ItemCount;


