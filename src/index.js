import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
/* import Tienda from './components/Tienda'; */

const root = ReactDOM.createRoot(document.getElementById('barrita'));
root.render(
    <React.StrictMode>
        <App />
{/*         <Tienda /> */}
    </React.StrictMode>
);