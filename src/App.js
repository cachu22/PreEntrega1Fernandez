import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import Contacto from './components/Paginas/Contacto'
import Mantenimiento from './components/Paginas/mantenimiento'
import { Navigate } from 'react-router-dom'
import Carrito from './components/Carrito'
import { CartProvider } from './components/Context/prod'
import Cart from './components/Cart/Cart'

function App () {
    return (
        <div className="App">
            <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/item/:itemid' element={<ItemDetail />} />
                    <Route path='*' element={<h1> 404 NOT FOUND</h1>} />
                    <Route path='/Contacto' element={<Contacto />} />
                    <Route path='/Productos' element={<ItemListContainer />} />
                    <Route path='category/Mantenimiento' element={<Mantenimiento />} />
                    <Route path='/Productos' element={<Navigate to="/category/Productos" />} />
                    <Route path='/Carrito' element={<Carrito />} />
                    <Route path='/Cart' element={<Cart />} />
                </Routes>
            </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App