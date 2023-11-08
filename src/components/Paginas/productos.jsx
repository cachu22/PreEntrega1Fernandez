import React, { useEffect, useState } from "react";
import { productService } from "../producto-detail";

const Productos = () => {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    setTimeout(() => {
    productService.getProductos().then(data => setProductos(data));


/*         setProduct(producto);
        console.log("producto", producto);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    obtenerProducto(); */
  },3000);
  }, []);

  console.log("producto", productos);

  return (
    <div>
        <h1>Nuestro Producto</h1>

        <button onClick={() => openModal({ show: true})}> Abrir Productos</button>

        {/* <TableProductos items={productos} /> */}
      
     {/*  {productos ? (
        <div>
        </div>
      ) : (
        <p>Cargando...</p>
      )} */}
    </div>
  );
  }
export default Productos;