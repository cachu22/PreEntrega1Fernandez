import { useState, useEffect } from "react";
import { productos } from "./Mock/products";
import './App.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from "react-router-dom";
import { Accordion } from "react-bootstrap";

function Productostienda() {
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
          <h1>Nuestros Productos y Servicios</h1>
          {isLoading ? (
            <h4>Cargando nuestros productos y servicios</h4>
          ) : (
            products.slice(0, 14).map((producto) => (
              <div key={producto.id} style={{ display: 'flex' }}>
                <Card style={{ width: '18rem', margin: '3rem' }}>
                  <Card.Img variant="top" src={`./img/${producto.imagen}`} />
                  <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Detalles</Accordion.Header>
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
                    <NavLink to="/Carrito" id="botones">
                      Comprar
                    </NavLink>
                  </Card.Body>
                </Card>
              </div>
            ))
          )}
        </>
      );
    }

    export default Productostienda;