import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/prod';

const ItemDetail = ({ productos }) => {
    const [quantityAdded, setQuantityadded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityadded(quantity);
        const item = {
            id: productos['id'],
            nombre: productos['nombre'],
            precio: productos['precio'],
        };
        addItem(item, quantity);
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {productos['nombre']}
                </h2>
            </header>
            <picture>
                <img src={productos['img']} alt={productos['nombre']} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoría: {productos['categoria']}
                </p>
                <p className="Info">
                    Descripción: {productos['Descripcion']}
                </p>
                <p className="Info">
                    Precio: ${productos['precio']}
                </p>
            </section>
            <footer className="ItemFooter">
                {quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Terminar compra</Link>
                ) : (
                    <ItemCount initial={0} stock={productos['stock']} onAdd={handleOnAdd} />
                )}
            </footer>
        </article>
    );
}

export default ItemDetail;