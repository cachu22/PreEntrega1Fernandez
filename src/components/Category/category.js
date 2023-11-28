import React from "react";

const Category = ({ onSelectCategory }) => {
    const handleSelect = (categoria) => {
        onSelectCategory(categoria);
    };

    return (
        <div>
            <button onClick={() => handleSelect("Productos")}>Productos</button>
            <button onClick={() => handleSelect("Mantenimiento")}>Mantenimiento</button>
        </div>
    );
};

export default Category;