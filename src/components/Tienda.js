import rep6 from "./img/Reparacion6.jpg";
import rep7 from "./img/Reparacion7.jpg";
import rep8 from "./img/Reparacion8.jpg";
import '../App.css';

const Tiendita = () => {

    return (
        <body className="cards-gral">
            
        
        <div>
            <h2>Nuestros Servicios</h2>{
            <table className="cards-items">
                <thead>
                    <tr>
                        <th>
                            Servicio
                        </th>
                        <th>
                        </th>
                        <th>
                            Precio
                        </th>
                        <th>
                        </th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Reparación
                        </td>
                        <td>
                            <img
                            src= {rep6}
                            alt="Reparacion6"
                            height={150}/>
                        </td>
                        <td>
                            $10000
                        </td>
                        <td>
                            <button>Comprar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Mantenimiento
                        </td>
                        <td>
                            <img
                            src= {rep7}
                            alt="Reparacion7"
                            height={150}
                            />
                        </td>
                        <td>
                            $5000
                        </td>
                        <td>
                            <button>Comprar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Limpieza
                        </td>
                        <td>
                            <img
                            src= {rep8}
                            alt="Reparacion8"
                            height={150}
                            />
                        </td>
                        <td>
                            $2500
                        </td>
                        <td>
                            <button>Comprar</button>
                        </td>
                    </tr>
                </tbody>
            </table>}
        </div>
        </body>
    );
};

export default Tiendita;

