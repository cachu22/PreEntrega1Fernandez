import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Contacto from './components/Paginas/Contacto'
import Mantenimiento from './components/Paginas/mantenimiento'
import { Navigate } from 'react-router-dom'

function App () {
    return (
        <div className="App">
            <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemid' element={ <ItemDetailContainer />} />
                <Route path='*' element={<h1> 404 NOT FOUND</h1>} />
                <Route path='/Contacto' element={<Contacto />} />
                <Route path='/Productos' element={<ItemListContainer />} />
                <Route path='category/Mantenimiento' element={<Mantenimiento />} />
                <Route path='/Productos' element={<Navigate to="/category/Productos" />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App