import React, { useEffect, useState } from "react";
import { productService } from "../producto-detail";
import { Card, NavLink } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const Productos = () => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // Inicializa useNavigate

  useEffect(() => {
    setTimeout(() => {
      productService.getProducto("MEVbAG8IBWIdnGODsRto").then((data) => setProduct(data));
    }, 3000);
  }, []);

  // Controlador de clic en "Detalles"
  const handleDetallesClick = () => {
    // Navega a la ruta /item/:id cuando se hace clic en "Detalles"
    navigate(`/item/${product.id}`);
  };

  return (
    <div>
      <h1>Nuestro Producto</h1>
      {product ? (
        <div>
          <Card style={{ width: '18rem', margin: '3rem' }}>
            <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/react-a14d7.appspot.com/o/Reparacion10.jpg?alt=media&token=fc816cf3-850f-4412-82aa-ea51b3bfa2c2&_gl=1*a4g8i2*_ga*NTY4NDczMTY4LjE2OTgyODEwOTQ.*_ga_CW55HF8NVT*MTY5OTQwNjkzNy45LjEuMTY5OTQxMTE4Ni42MC4wLjA." />
            <Card.Body>
              <Card.Title>{product && product.nombre}</Card.Title>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header onClick={handleDetallesClick}>Detalles</Accordion.Header>
                  <Accordion.Body>
                    <Card.Text>{product.descripcion}</Card.Text>
                    <ListGroup.Item>Stock: {product.stock} unidades</ListGroup.Item>
                    <ListGroup.Item>Precio: {product.precio}</ListGroup.Item>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Precio: ${product.precio}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <NavLink to="/Carrito" id="botones">
                <button>
                  Comprar
                </button>
              </NavLink>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Productos;