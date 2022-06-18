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
            name: item.title,
            price: item.price,
            image: item.image,
            qty: qty,
          },
        ]);
  };

  const removeItem = (id) => {
    setProducto(producto.filter((i) => i.id !== id));
  };
  const clearItems = () => {
    setProducto([]);
  };

  return (
    <CartContext.Provider value={{ producto, addItem, removeItem, clearItems }}>
      {children}
    </CartContext.Provider>
  );
};
