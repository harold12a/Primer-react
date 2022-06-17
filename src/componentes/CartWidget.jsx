import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const CartWidget=()=> {
  const {producto}=useContext(CartContext)
  let itemsInCart=0;

  producto.map((producto)=>{
    itemsInCart= itemsInCart + producto.qty;
  })

  
  
  return (
    <>
      <div>
        {itemsInCart}
        <ion-icon name="cart-outline"></ion-icon>

     
      </div>
    </>
  );
}

export default CartWidget;
