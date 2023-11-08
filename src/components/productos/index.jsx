import { getFirestore, collection, getDocs } from "firebase/firestore";

const getProductos = async () => {

    const db = (getFirestore)

    const collRef = collection(db, "Productos")

    const snapshot = await getDocs(collRef)

    console.log(snapshot);

};

export const productService = {
  getProductos,
};