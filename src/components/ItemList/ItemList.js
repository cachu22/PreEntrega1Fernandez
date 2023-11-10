import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({ productos }) => {
    return (
        <div className='ListGroup'>
            {productos && productos.length > 0 ? (
                productos.map(prod => <Item key={productos.id} {...productos} />)
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    )
}

export default ItemList;