import { useState, useContext } from "react";
import { db, serverTimestamp } from './services/firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { CartContext } from "./Context/prod";

const CheckoutForm = ({ onCheckout }) => {
  const { cart, clearCart, totalQuantity, getTotal } = useContext(CartContext);

  const [fields, setFields] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    telefono: "",
  });

  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fields.email)) {
      setError("Ingrese una dirección de correo electrónico válida.");
      return;
    }

    if (fields.email !== fields.confirmEmail) {
      setError("Los correos electrónicos no coinciden.");
      return;
    }

    try {
      const buyerDetails = {
        name: fields.name,
        email: fields.email,
        telefono: fields.telefono,
        items: totalQuantity(),
        fechaCompra: serverTimestamp(),
        estadoPedido: fields.estadoPedido
      };

      const precioTotal = getTotal();

      const itemsDetails = cart.map(item => ({ id: item.id, nombre: item.nombre, cantidad: item.Quantity, precio: item.precio }));

      const docRef = await addDoc(collection(db, 'ordenes'), {
        Datos: buyerDetails,
        Items: itemsDetails,
        Afacturar: precioTotal
      });

      const orderId = docRef.id;

      setConfirmationMessage(`¡Gracias por su compra! Su número de orden es: ${orderId}`);

      setFields({
        name: "",
        email: "",
        confirmEmail: "",
        telefono: "",
        estadoPedido: ""
      });

      clearCart();

      if (onCheckout) {
        onCheckout(fields);
      }
    } catch (error) {
      console.error('Error al guardar la orden en Firebase:', error);
      setError('Hubo un error al procesar la orden. Por favor, inténtelo nuevamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre y apellido</label>
        <input
          type="text"
          name="name"
          value={fields.name}
          onChange={(e) => setFields({ ...fields, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email">Correo</label>
        <input
          type="text"
          name="email"
          value={fields.email}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="confirmEmail">Confirmar Correo</label>
        <input
          type="text"
          name="confirmEmail"
          value={fields.confirmEmail}
          onChange={(e) => setFields({ ...fields, confirmEmail: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono</label>
        <input
          type="text"
          name="telefono"
          value={fields.telefono}
          onChange={(e) => setFields({ ...fields, telefono: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="estadoPedido">Estado del Pedido</label>
        <input
          type="text"
          name="estadoPedido"
          value={fields.estadoPedido}
          onChange={(e) => setFields({ ...fields, estadoPedido: e.target.value })}
        />
      </div>
      <button type="submit">Finalizar compra</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </form>
  );
};

export default CheckoutForm;