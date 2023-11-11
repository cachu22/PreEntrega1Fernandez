import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({ Productos }) => {
    return (
        <div className='ListGroup'>
            {Productos && Productos.length > 0 ? (
                Productos.map(prod => <Item key={prod.id} {...prod} />)
            ) : (
                <p>No hay Productos disponibles.</p>
            )}
        </div>
    )
}

export default ItemList;