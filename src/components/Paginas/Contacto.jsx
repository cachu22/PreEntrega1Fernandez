import { useContext } from "react";
import { ProdContext } from "../../Context/prod";

const Contacto = () => {

    const miContext = useContext(ProdContext)
    console.log(miContext);

    return(
        <div>
            <h1>Contacto</h1>
        </div>
    )
}

export default Contacto;




