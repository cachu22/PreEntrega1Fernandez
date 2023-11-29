import { productos } from "../Mock/products";

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = productos.find(prod => prod.id === productId);
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
                const productosProductos = productos.filter(Productos => Productos.categoria === "Productos");
                resolve(productosProductos);
            } else {
                const productosByCategory = productos.filter(Productos => Productos.categoria === productCategory);
                resolve(productosByCategory);
            }
        }, 1000);
    });
}