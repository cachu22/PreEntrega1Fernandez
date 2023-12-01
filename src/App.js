import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contacto from './components/Paginas/Contacto'
import { Navigate } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CheckOut } from './components/Paginas/checkout';
import ProductoNoEncontrado from './components/ProductoNoEcnontrado/ProductoNoEncontrado'

function App () {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/category' element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path='*' element={<h1> 404 NOT FOUND</h1>} />
                    <Route path='/Contacto' element={<Contacto />} />
                    <Route path='/Productos' element={<ItemListContainer />} />
                    <Route path='/Productos' element={<Navigate to="/category/Productos" />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/Checkout' element={<CheckOut />} />
                    <Route path="/producto-no-encontrado" element={<ProductoNoEncontrado />} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App