import React from 'react';


function Cart({numero}) {
    return ( 
    <div >
        <ion-icon name="cart-outline"></ion-icon>
        {numero}
        </div>
    );
}

export default Cart;

