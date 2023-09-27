import React from 'react';
import ReactDOM from 'react-dom/client';
import Tienda from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('barrita'));
root.render(
    <React.StrictMode>
        <Tienda />
    </React.StrictMode>
);