import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail =({ id, nombre, img, categoria, Descripcion, precio, stock}) => {
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    ID: {id}
                </p>
                <p className="Info">
                    Categoría: {categoria}
                </p>
                <p className="Info">
                    Descripción: {Descripcion}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={0} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada',)}></ItemCount>
            </footer>
        </article>
    )
}

export default ItemDetail