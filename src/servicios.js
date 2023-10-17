import { productos } from "./Mock/products";

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
}