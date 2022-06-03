import React, { useState, useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';







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
      <Button disabled={count <= 1} onClick={decrease}
        variant="outlined" color="secondary" aria-label="add to shopping cart" startIcon={<IconButton />}  >
        -
        <AddShoppingCartIcon />
       </Button>

<span>{count}</span>

<Button disabled={count >= stock } onClick={increase}
 variant="outlined" color="secondary" endIcon={<DeleteIcon />}>
 +
 </Button>

<br />

  <Button disabled={stock <= 0} onClick ={()=> onAdd(count)}>agregar al carrito</Button>
   
</> 

 );
}

export default ItemCount;


