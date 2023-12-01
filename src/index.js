import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartProvider } from './components/Context/prod'

const root = ReactDOM.createRoot(document.getElementById('barrita'));
root.render(
    <CartProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </CartProvider>
);