import { useContext } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/prod';
import icono from './assets/icono.png';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/Cart' className='CartWidget' /* style={{ display: totalQuantity > 0 ? 'block' : 'none' }} */>
            <img className='CartImg' src={icono} alt='cart-widget' width={75} />
            {totalQuantity}
        </Link>
    );
};

export default CartWidget;
