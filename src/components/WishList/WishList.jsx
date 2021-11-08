import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const WishList = () => {
  const { wish } = useCartContext();
  return (
    <div>
      <h1>WishList</h1>
      {wish.map((i, index) => (
        <ul key={index}>
          <li>{i.producto.nombre}</li>
          <li>
            <Link to={`/detalle/${i.producto.id}`}> Detalle Producto </Link>
          </li>
        </ul>
      ))}
      ;
    </div>
  );
};

export default WishList;
