import './Item.css';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap'; // Importa Row y Col de Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ id, nombre, img, precio, stock }) => {
    return (
        <Row>
            <Col md={4}> {/* Coloca cada tarjeta en una columna de tamaño md (medium) 4 */}
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
                        <ListGroup.Item>
                            <Link to={`/item/${id}`} className='Option'>
                                Ver detalle
                            </Link>
                        </ListGroup.Item>
                        <ItemCount initial={0} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Item;