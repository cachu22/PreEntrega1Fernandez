import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'Productos', itemId);

        setProductos(null);

        getDoc(docRef)
            .then(response => {
                if (response.exists()) {
                    const data = response.data();
                    const productAdapted = { id: response.id, ...data };
                    setProductos(productAdapted);
                } else {
                    console.log("El documento no existe.");
                }
            })
            .catch(error => {
                console.error("Error al obtener el documento:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    return (
        <div>
            {loading && <p>Cargando...</p>}
            {productos && <ItemDetail productos={productos} />}
        </div>
    );
}

export default ItemDetailContainer;