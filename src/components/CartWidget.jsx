import '../App.css';
import { Link } from 'react-router-dom';

    const CartWidget  = () => {
    return (
        <>
        <Link to={"./Carrito"}>
        <img src="/img/cart.png" alt="icono" width={75}></img>
        </Link>
        </>
        )
    };

export default CartWidget;