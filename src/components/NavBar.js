import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => (
  <>
    <Navbar id="barra">
      <Container>
        <Nav>
          <ul>
            <li>
              <NavLink to="/Contacto" id='Fuente-head'>Contacto</NavLink>
            </li>
            <li>
              <NavLink to="/Productos" id='Fuente-head'>Productos</NavLink>
            </li>
            <li>
              <NavLink to="/Mantenimiento" id='Fuente-head'>Mantenimiento</NavLink>
            </li>
          </ul>
        </Nav>
        <div>
          <Link to={"./"}>
            <img src="/img/logo-inicio.png" alt="icono" width={75}></img>
          </Link>
        </div>
        <div>
          <CartWidget/>
          <span className='items'>99+</span>
        </div>
      </Container>
    </Navbar>
  </>
);

export default NavBar;