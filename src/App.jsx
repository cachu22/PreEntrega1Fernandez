/* import { useState } from "react"; */
import{ BrowserRouter, Routes, Route} from "react-router-dom"
import Contacto from "./components/Paginas/Contacto";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Carrito from "./components/Carrito";
import Mantenimiento from "./mantenimiento";
import Productostienda from "./productostienda";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/Category:id' element={<ItemListContainer />} />
                    <Route path="/Contacto" element={<Contacto />}/>
                    <Route path="/Carrito" element={<Carrito />}/>
                    <Route path="/mantenimiento" element={<Mantenimiento/>}/>
                    <Route path="/productos" element={<Productostienda/>}/>
                    <Route path="/Listatotal" element={"item/:id"}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;