import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <>
      <Navbar id="barra">
        <Container>
          <Nav>
            <Nav.Link href="TecniPC" id="menu-letras" >TecniPC</Nav.Link>
            <Nav.Link href="Historia" id="menu-letras" >Historia</Nav.Link>
            <Nav.Link href="Contacto" id="menu-letras">Contacto</Nav.Link>
            <Nav.Link href="Fotos" id="menu-letras">Fotos</Nav.Link>
          </Nav>
          <div>
            <h1>TecniPC</h1>
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
