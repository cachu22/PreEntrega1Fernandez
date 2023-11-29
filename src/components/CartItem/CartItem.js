const CartItem = ({ id, nombre, precio, quantity, onRemove }) => {
  return (
    <div className="cart-item">
      <div>
        <h3>{nombre}</h3>
        <p>Precio individual: ${precio}</p>
        <p>Cantidad: {quantity}</p>
        <p>Precio total: ${quantity * precio}</p>
      </div>
      <button onClick={() => onRemove(id)}>Quitar</button>
    </div>
  );
};

export default CartItem;