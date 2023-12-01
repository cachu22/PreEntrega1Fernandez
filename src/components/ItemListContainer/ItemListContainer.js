import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from "../services/firebase/firebaseConfig";
import ItemList from '../ItemList/ItemList';
import Category from "../Category/category";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                let collectionRefs;

                if (selectedCategory === 'Servicios') {
                    collectionRefs = [collection(db, 'Servicios')];
                } else if (selectedCategory) {
                    collectionRefs = [query(collection(db, 'Productos'), where('categoria', '==', selectedCategory))];
                } else {
                    collectionRefs = [collection(db, 'Productos'), collection(db, 'Servicios')];
                }

                const responses = await Promise.all(collectionRefs.map(ref => getDocs(ref)));

                const productosAdaptados = responses.flatMap(response =>
                    response.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                );

                setProductos(productosAdaptados);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedCategory]);

    const handleSelectCategory = (categoria) => {
        setSelectedCategory(categoria);
        navigate(`/category/${categoria}`);
    };

    useEffect(() => {
        setSelectedCategory(categoryId || '');
    }, [categoryId]);

    return (
        <div>
            <Category onSelectCategory={handleSelectCategory} />
            <div>
                <label htmlFor="categorySelect">Seleccionar Categoría:</label>
                <select
                    id="categorySelect"
                    value={selectedCategory}
                    onChange={(e) => handleSelectCategory(e.target.value)}
                >
                    <option value="">Todas las categorías</option>
                    <option value="Productos">Productos</option>
                    <option value="Mantenimiento">Mantenimiento</option>
                    <option value="Servicios">Servicios</option>
                </select>
            </div>
            {loading && <p>Cargando...</p>}
            {productos && productos.length > 0 ? (
                <ItemList Productos={productos} />
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
};

export default ItemListContainer;