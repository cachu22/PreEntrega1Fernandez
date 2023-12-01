const CartItem = ({ id, nombre, precio, Quantity, onRemove, }) => {
  return (
    <div className="cart-item">
      <div>
        <h3>{nombre}</h3>
        <p>Precio individual: ${precio}</p>
        <p>Cantidad: {Quantity}</p>
        <p>Precio total: ${Quantity * precio}</p>

      </div>
      <button onClick={() => onRemove(id)}>Quitar</button>
    </div>
  );
};

export default CartItem;