import { useContext } from "react";
import { CartContext } from "../../Context/prod";
import CheckoutForm from "../../CheckoutForm";

const CheckOut = () => {
    const { cart, getTotal } = useContext(CartContext);

    return (
        <>
                <h1>Confirmación de compra</h1>
                <div>
                    <h2>Items con sus cantidades:</h2>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.nombre} - Cantidad: {item.Quantity}
                            </li>
                        ))}
                    </ul>
                    <h2>Precio total: ${getTotal()}</h2>
                    <h3>Para confirmar la compra debe completar los siguientes campos</h3>
                </div>
                <CheckoutForm />
        </>
    );
};

export { CheckOut };