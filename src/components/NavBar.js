import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar id="barra">
        <Container>
          <Nav>
            <ul>
              <li>
                  <NavLink to="/Contacto">Contacto</NavLink>
              </li>
              <li>
                  <NavLink to="/Productos">Productos</NavLink>
              </li>
              <li>
                  <NavLink to="/Mantenimiento">Mantenimiento</NavLink>
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
}

  export default NavBar;