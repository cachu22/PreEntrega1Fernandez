import { useState } from "react";

const CheckoutForm = ({ onCheckout }) => {
    const [fields, setFields] = useState({
        name: "",
        email: "",
        telefono: ""
    });
    const [confirmationMessage, setConfirmationMessage] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para procesar el formulario y enviar los datos al servidor
        // ...

        // Después de procesar el formulario, puedes actualizar el estado para mostrar el mensaje de confirmación
        setConfirmationMessage("¡Muchas gracias por su compra! Enviaremos su pedido a la brevedad.");
        
        // También puedes llamar a la función onCheckout y pasarle los datos del formulario si es necesario
        if (onCheckout) {
            onCheckout(fields);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} />
            </div>
            <div>
                <label htmlFor="email">Correo</label>
                <input type="text" name="email" value={fields.email} onChange={(e) => setFields({ ...fields, email: e.target.value })} />
            </div>
            <div>
                <label htmlFor="telefono">Teléfono</label>
                <input type="text" name="telefono" value={fields.telefono} onChange={(e) => setFields({ ...fields, telefono: e.target.value })} />
            </div>
            <button type="submit">Finalizar compra</button>

            {/* Mostrar el mensaje de confirmación si existe */}
            {confirmationMessage && <p>{confirmationMessage}</p>}
        </form>
    );
};

export default CheckoutForm;