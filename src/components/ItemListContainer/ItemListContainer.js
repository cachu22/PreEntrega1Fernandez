import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from "../services/firebase/firebaseConfig";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [Productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
            ? query(collection(db, 'Productos'), where('category', '==', categoryId))
            : collection(db, 'Productos');

        getDocs(collectionRef)
            .then(response => {
                const ProductosAdaptados = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProductos(ProductosAdaptados);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <div>
            {loading && <p>Cargando...</p>}
            {Productos && Productos.length > 0 ? (
                <ItemList Productos={Productos} />
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
};

export default ItemListContainer;