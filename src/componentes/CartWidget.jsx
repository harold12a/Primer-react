import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function CartWidget({numero}) {
    return ( 
    <div >
        <ion-icon name="cart-outline"></ion-icon>
        {numero}
         </div>
        
    );
}

export default CartWidget;

