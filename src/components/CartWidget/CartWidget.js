import '../../App.css';
import cart from './assets/cart.png';
import { Link } from 'react-router-dom';

    const CartWidget  = () => {
    return (
        <>
        <Link to={"./Carrito"}>
        <img src={cart} alt="icono-carrito" width={75}></img>
        0
        </Link>
        </>
        )
    };

export default CartWidget;