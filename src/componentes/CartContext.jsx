import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [producto, setProducto] = useState([]);

  const isInCart = (id) => {
    const found = producto.find((producto) => producto.id === id);
    return found;
  };

  const addItem = (item, qty) => {
    isInCart(item.id)
      ? setProducto(
          producto.map((prod) => {
            if (prod.id === producto.id) {
              prod.qty += qty;
            }
            return prod;
          })
        )
      : setProducto([
          ...producto,
          {
            id: item.id,
            category: item.category,
            name: item.title,
            price: item.price,
            image: item.image,
            qty: qty,
            description: item.description
          },
        ]);
  };

  const removeItem = (id) => {
    setProducto(producto.filter((i) => i.id !== id));
  };
  const clearItems = () => {
    setProducto([]);
  };
  const totalPrice = ()=>{
    return producto.reduce((prev,act)=> prev + act.qty * act.price, 0 );
  }


  return (
    <CartContext.Provider value={{ producto, addItem, removeItem, clearItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
