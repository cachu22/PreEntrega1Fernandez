import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../Context/prod';

const Item = ({ id, nombre, img, precio, stock }) => {
  const { addItem } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);

  const handleOnAdd = (Quantity) => {
    const item = {
      id,
      nombre,
      img,
      precio,
      stock,
    };

    addItem(item, Quantity);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <Row>
      <Col md={4}>
        <Card style={{ width: '18rem', margin: '1rem' }}>
          <img src={img} alt={nombre} className="ItemImg" />
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Precio: ${precio}</ListGroup.Item>
            <ListGroup.Item>Stock Disponible: {stock}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Link to={`/item/${id}`} className='Option'>
                  Ver detalle
                </Link>
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                {showMessage && <p>Agregado al carrito</p>}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Item;