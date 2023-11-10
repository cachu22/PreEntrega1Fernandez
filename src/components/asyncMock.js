import { productos } from "../Mock/products";

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = productos.find(prod => productos.id === productId);
            if (product) {
                resolve(product);
            } else {
                resolve(null);
            }
        }, 1000);
    });
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (productCategory === "Productos") {
                // Filtra los productos por la categoría "Productos."
                const productosProductos = productos.filter(prod => prod.categoria === "Productos");
                resolve(productosProductos);
            } else {
                // Si no es "Productos," busca por la categoría proporcionada.
                const productosByCategory = productos.filter(prod => prod.categoria === productCategory);
                resolve(productosByCategory);
            }
        }, 1000);
    })
}