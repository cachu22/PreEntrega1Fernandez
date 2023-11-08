import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import Productos from "./productostienda";




Productos = () => {

useEffect(() => {
    const db = getFirestore();

    const biciRef = doc(db, "items", "4zjYcX3ejcPiVH7JeTwS");
    getDoc(biciRef).then((snapshot) => {
        if (snapshot.exists()){
            setProduct({ id: snapshot.id, ...snapshot.data() });
        }
    });
}, []);
}

export default Productos