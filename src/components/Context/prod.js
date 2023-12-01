import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  getTotal: () => 0,
  totalQuantity: () => 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, Quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, Quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.Quantity, 0);
  };

  const totalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.Quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, getTotal, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};