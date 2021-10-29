import React, { useState } from "react";

const ItemCounter = ({ onAdd, id, block, stock }) => {
	//Contador
	const [contador, setContador] = useState(1);
	const [botonMas, setBotonMas] = useState(false);
	const [botonMenos, setBotonMenos] = useState(false);
	
    const clickAgregar = () => {
		if (contador < stock) {
			setContador(contador + 1);
		}
		if (contador === stock) {
			setBotonMas(true);
		}
	};

	const clickRestar = () => {
		if (contador > 0) {
			setContador(contador - 1);
		}
		if (contador === 0) {
			setBotonMenos(true);
		}
		setBotonMenos(false);
	};
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
					disabled={botonMas}
					onClick={() => clickAgregar()}
				>
					+
				</button>
				<span className="col-2 text-center ">{contador}</span>
				<button
					className="col-2 btn btn-dark"
					disabled={botonMenos}
					onClick={() => clickRestar()}
				>
					-
				</button>
			</div>
			<div className="col-12 text-center ">
				<button
					onClick={() => addProduct()}
					className={`col-6 btn btn-primary mt-4 mx-2 ${block}`}
				>
					{btn}
				</button>

			</div>
		</div>
	);
};

export default ItemCounter;
