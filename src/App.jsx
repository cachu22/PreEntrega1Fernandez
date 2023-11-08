/* import { useState } from "react"; */
import{ BrowserRouter, Routes, Route} from "react-router-dom"
import Contacto from "./components/Paginas/Contacto";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Carrito from "./components/Carrito";
import Mantenimiento from "./mantenimiento";
import Productos from "./components/Paginas/Producto";
import { initializeApp } from "firebase/app";
import { ProdContext } from "./Context/prod";

const firebaseConfig = {
  apiKey: "AIzaSyBrCEf0hT7J6uYvUr_34qni0uAlDpFM5wE",
  authDomain: "react-a14d7.firebaseapp.com",
  projectId: "react-a14d7",
  storageBucket: "react-a14d7.appspot.com",
  messagingSenderId: "905564093105",
  appId: "1:905564093105:web:c85989b8c508e0bd16c090"
};

const app = initializeApp(firebaseConfig);
console.log(app);

function App() {

    const prueba ={
        saludo: "test de context",
        numero: 1234,
    }
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <ProdContext.Provider value={prueba}>
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/Category:id' element={<ItemListContainer />} />
                    <Route path="/Contacto" element={<Contacto />}/>
                    <Route path="/Productos" element={<Productos/>}/>
                    <Route path="/Carrito" element={<Carrito />}/>
                    <Route path="/mantenimiento" element={<Mantenimiento/>}/>
                    <Route path="/Listatotal" element={"item/:id"}/>
                    <Route path="/productos/:categoria" element={"Productos"}/>
                </Routes>
                </ProdContext.Provider>
            </BrowserRouter>
        </div>
    );
};

export default App;