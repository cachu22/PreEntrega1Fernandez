import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../Context/prod';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, getTotal, removeItem } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/Productos' className='Option'>Productos</Link>
            </div>
        );
    }

    return (
        <div>
            {cart.map((item) => (
                <CartItem key={item.id} {...item} onRemove={() => removeItem(item.id)} />
            ))}
            <h3>Cantidad total de items: {totalQuantity()}</h3>
            <h3>Total: ${getTotal()}</h3>
            <button onClick={() => clearCart()} className="Button">
                Limpiar carrito
            </button>
            <Link to='/Checkout' className='Option'>
                Confirmar compra
            </Link>
        </div>
    );
};

export default Cart;