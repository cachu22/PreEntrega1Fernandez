import { getFirestore, doc, getDoc } from "firebase/firestore";

const getProducto = async (id) => {
  const db = getFirestore();
  const docRef = doc(db, "Productos", "MEVbAG8IBWIdnGODsRto");
  console.log(docRef);

  try {
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      return snapshot.data();
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

export const productService = {
  getProducto,
};