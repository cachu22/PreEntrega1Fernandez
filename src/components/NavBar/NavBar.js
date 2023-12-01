import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import '../../App.css';


const NavBar = () => (
  <>
    <Navbar id="barra">
      <Container>
        <Nav>
          <ul>
            <li>
              <NavLink to={`/Contacto`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Contacto</NavLink>
            </li>
          </ul>
        </Nav>
        <div>
          <Link to={"./"}>
            <img src="/img/logo-inicio.png" alt="icono" width={75}></img>
          </Link>
        </div>
        <div>
          <CartWidget />
          </div>
      </Container>
    </Navbar>
  </>
);

export default NavBar;