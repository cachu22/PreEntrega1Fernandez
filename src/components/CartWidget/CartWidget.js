import { useContext } from 'react';
import '../../App.css';
import cart from './assets/cart.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/prod';

    const CartWidget  = () => {
        const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='CartImg' src={cart} alt='cart-widget' />
            { totalQuantity }
        </Link>
        )
    };

export default CartWidget;