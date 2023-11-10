import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null); // Cambiado a 'productos'
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'products', itemId);

        getDoc(docRef)
            .then(response => {
                if (response.exists()) {
                    const data = response.data();
                    const productAdapted = { id: response.id, ...data };
                    setProductos(productAdapted); // Cambiado a 'productos'
                } else {
                    console.log("El documento no existe.");
                }
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    // Asegúrate de retornar el componente ItemDetail y el estado loading.
    return (
        <div>
            {loading && <p>Cargando...</p>}
            {productos && <ItemDetail product={productos} />} {/* Cambiado a 'productos' */}
        </div>
    );
}

export default ItemDetailContainer;