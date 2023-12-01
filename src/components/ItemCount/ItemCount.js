import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd})=> {
    const [Quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(Quantity < stock) {
            setQuantity(Quantity+1)
        }
    }
    const decrement = () => {
        if(Quantity > 1) {
            setQuantity(Quantity - 1)
        }
    }

    return(
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={decrement}>-</button>
                <h4 className='Number'>{Quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
            <button className="Button" onClick={() => onAdd(Quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;