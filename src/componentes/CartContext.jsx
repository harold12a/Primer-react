import React, { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext([]);

export const CartProvider = ({children})=>{ 

  const [producto, setProducto] = useState([]);

  const isInCart = (id)=>{
    const found = producto.find(producto=>producto.id===id);
    return found;

  }

  const addItem=(producto,qty)=>{
    isInCart(producto.id)
    ?
    setProducto(producto.map((prod)=>{
        if(prod.id===producto.id) {
            prod.qty +=qty;
        }
        return prod
    }))
    :
  setProducto([...producto,{id: producto.id, name: producto.title, price: producto.price, qty:qty}])
  }

  const removeItem = (id) => {
    setProducto(producto.filder(producto=>producto.id !== id))

  }
  const clearItems = ()=>{
    setProducto([])
  }








  return(
    <CartContext.Provider value={{producto,addItem,removeItem,clearItems}}>
        {children}
    </CartContext.Provider>
  )

};


