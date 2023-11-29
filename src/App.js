import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contacto from './components/Paginas/Contacto'
import { Navigate } from 'react-router-dom'
import { CartProvider } from './components/Context/prod'
import Cart from './components/Cart/Cart'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CheckOut } from './components/Paginas/checkout';

function App () {
    return (
        <div className="App">
            <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path='*' element={<h1> 404 NOT FOUND</h1>} />
                    <Route path='/Contacto' element={<Contacto />} />
                    <Route path='/Productos' element={<ItemListContainer />} />
                    <Route path='/Productos' element={<Navigate to="/category/Productos" />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/Checkout' element={<CheckOut />} />
                    
                </Routes>
            </BrowserRouter>
            </CartProvider>
        </div>
    )
}

export default App