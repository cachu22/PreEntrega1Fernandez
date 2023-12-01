import React, { useContext } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import icono from './assets/icono.png';
import { CartContext } from '../Context/prod';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/Cart' className='CartWidget'>
            <img className='CartImg' src={icono} alt='cart-widget' width={75} />
            {totalQuantity() > 0 && <span className='cart-Quantity'>{totalQuantity()}</span>}
        </Link>
    );
};

export default CartWidget;