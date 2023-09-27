import Tiendita from "./components/Tienda";
/* import NavBar from "./components/NavBar"; */
import ItemListContainer from "./components/ItemListContainer";
import Navbar from './components/NavBar';

function Tienda() {
    return (
        <>
        <Navbar />
        <p className="Saludo">
        <ItemListContainer Greeting="Bienvenido a nuestra tienda"/></p>
        <Tiendita />
        </>
    );
};

export default Tienda;