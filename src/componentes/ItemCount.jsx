import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Icon } from '@mui/material';





function ItemCount({stock,initial}) {
    


    const[x,setX] = useState (initial);

    console.log('render');



    return ( 
    <div >
        <Icon>home</Icon>
        
        STOCK:{x}
        <br/>
        <Button onClick={()=>{
             x< stock ? setX(x+1):setX(x);
            
            }}
           variant="outlined" color="secondary" aria-label="add to shopping cart" startIcon={<IconButton />}  >
            Agregar al 
        <AddShoppingCartIcon /> 
      </Button>
        
       

        <Button onClick={()=>{
            
            x> initial ? setX(x-1):setX(x);
            
            
        }}
        variant="outlined" color="secondary" endIcon={<DeleteIcon />}>
        Eliminar
      </Button>
        
        
         </div>
        
        
    );
}

export default ItemCount;
