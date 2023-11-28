import React from 'react';

const CartItem = ({ id, nombre, precio, cantidad }) => {
  return (
    <div className="cart-item">
      <p>{nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad: {cantidad}</p>
    </div>
  );
};

export default CartItem;