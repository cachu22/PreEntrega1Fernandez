import { useState } from "react";
import Mantenimiento from "../mantenimiento";
import { Accordion } from "react-bootstrap";
import Productos from "./Paginas/Producto";


const BotProductos = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div>
      <button onClick={handleClick}> {isDisabled ? "Cerrar" : "Presione para comenzar"}</button>
      {isDisabled && (
        <div>
          <h2>Bienvenido! Seleccione la opción de su interés</h2>
          <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Servicios</Accordion.Header>
                    <Accordion.Body>
                        <Mantenimiento />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion>
                   <Accordion.Item eventKey="0">
                        <Accordion.Header>Productos</Accordion.Header>
                        <Accordion.Body>
                            <Productos />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
      )}
    </div>
  );
};

export default BotProductos;




