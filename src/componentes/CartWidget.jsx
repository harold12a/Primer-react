import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'


function CartWidget({numero}) {
    return ( 
    <div >
        <AddShoppingCartIcon />
        
        {numero}
         </div>
        
    );
}

export default CartWidget;

