import React, { useState } from "react";
import Mantenimiento from "../mantenimiento";
import { Accordion } from "react-bootstrap";
import Productos from "./CartWidget/ItemDetailContainer/ItemDetailContainer";

const Tienda = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(!isDisabled);
  };

  const opciones = [
    { id: "servicios", nombre: "Servicios" },
    { id: "productos", nombre: "Productos" },
  ];

  return (
    <div>
      <button onClick={handleClick}> {isDisabled ? "Cerrar" : "Presione para comenzar"}</button>
      {isDisabled && (
        <div>
          <h2>Bienvenido! Seleccione la opción de su interés</h2>
          <Accordion>
            {opciones.map((opcion) => (
              <Accordion.Item key={opcion.id} eventKey={opcion.id}>
                <Accordion.Header>{opcion.nombre}</Accordion.Header>
                <Accordion.Body>
                  {opcion.id === "servicios" ? <Mantenimiento /> : null}
                  {opcion.id === "productos" ? <Productos /> : null}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default Tienda;