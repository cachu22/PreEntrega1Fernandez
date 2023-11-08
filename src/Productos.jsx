import { getFirestore, doc, getDoc } from "firebase/firestore";

const getProducto = async (id) => {
  const db = getFirestore();
  const docRef = doc(db, "Productos", "MEVbAG8IBWIdnGODsRto"); // Usar la variable 'id' en lugar de una cadena "id"
  console.log(docRef);

  try {
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      return snapshot.data(); // Devolver los datos del producto
    } else {
      return null; // Otra respuesta apropiada si el documento no existe
    }
  } catch (error) {
    throw error; // Manejo de errores adecuado
  }
};

export const productService = {
  getProducto,
};