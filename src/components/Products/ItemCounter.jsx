import React, { useState } from "react";

const ItemCounter = ({ onAdd, id, block, stock }) => {
  //Contador
  const [contador, setContador] = useState(1);

  const clickAgregar = () => setContador(contador + 1);

  const clickRestar = () => setContador(contador - 1);
  //Boton y Mensaje
  const [btn, setBtn] = useState("Añadir al Carrito");

  //Funcion Boton addProduct
  const addProduct = () => {
    setBtn("Añadir +");
    setContador(1);
    onAdd(contador);
  };

  return (
    <div className="row justify-content-center mb-2">
      <div className="col-12 d-flex justify-content-center my-1">
        <button
          className="col-2 btn btn-dark"
          disabled={contador === stock}
          onClick={() => clickAgregar()}
        >
          +
        </button>
        <span className="col-2 text-center ">{contador}</span>
        <button
          className="col-2 btn btn-dark"
          disabled={contador === 0}
          onClick={() => clickRestar()}
        >
          -
        </button>
      </div>
      <div className="col-12 text-center ">
        {stock === 0 ? (
          <button
            onClick={() => addProduct()}
            disabled
            className={`col-6 btn btn-primary mt-4 mx-2 ${block}`}
          >
            No Hay Stock Actualmente
          </button>
        ) : (
          <button
            onClick={() => addProduct()}
            className={`col-6 btn btn-primary mt-4 mx-2 ${block}`}
          >
            {btn}
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCounter;
