import React, { useState, useEffect } from "react";
import { productos } from "./Mock/products";
import './App.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom"; // Importa Link en lugar de NavLink
import { Accordion } from "react-bootstrap";

function Mantenimiento() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productos);
      setIsLoading(false);
    }, 2000);
  }, []);

  console.log(products);

  return (
    <>
      <h1>Nuestros Servicios</h1>
      {isLoading ? (
        <h4>Cargando nuestros servicios</h4>
      ) : (
        products.slice(4, 8).map((producto) => (
          <div key={producto.id} style={{ display: 'flex', width: '25rem' }} >
            <Card style={{ width: '18rem', margin: '3rem' }}>
              <Card.Body>
                <Card.Img variant="top" src={`./img/${producto.imagen}`} />
                <Card.Title>{producto.nombre}</Card.Title>
                <Accordion style={{ display: 'flex', width: '25rem' }} >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <Link to={`/item/${producto.id}`}>Detalles</Link>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card.Text>{producto.descripcion}</Card.Text>
                      <ListGroup.Item>Stock: {producto.stock} unidades</ListGroup.Item>
                      <ListGroup.Item>{producto.Descripcion}</ListGroup.Item>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Precio: ${producto.precio}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to="/Carrito" id="botones">
                  Comprar
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))
      )}
    </>
  );
}

export default Mantenimiento;