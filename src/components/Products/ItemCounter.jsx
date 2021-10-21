import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ItemCounter = ({onAdd,id,block}) => {
    //Contador
    const [contador, setContador] = useState(1);
    const clickAgregar = () => setContador(contador + 1);
    const clickRestar = () => contador <=0 ? "" : setContador(contador - 1)
    //Boton Finalizar Compra y Mensaje
    const [btn, setBtn] = useState("Añadir al Carrito")
    const [finalizar, setFinalizar] = useState("d-none")

    //Funcion Boton addProduct
    const addProduct = ()=>{
        setFinalizar("")
        setBtn("Añadir")
        setContador(1)
        onAdd(contador,id)
    }
    
    


    return (
       <div className="row justify-content-center mb-2">
			
			<div className="col-12 d-flex justify-content-center my-1">
				<button
					className="col-2 btn btn-dark"
					type="button"
					disabled=""
					onClick={() => clickAgregar()}
				>
					+
				</button>
				<span className="col-2 text-center ">{contador}</span>
				<button
					className="col-2 btn btn-dark"
					disabled=""
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
                
                <Link to="/cart"

				className={`col-6 btn btn-danger my-2 mx-2 ${finalizar} `}
                >
                    Finalizar Compra
                </Link>
                <Link to="/tienda" className={`col-6 p-1 m-0 btn btn-secondary btn-sm ${finalizar}`}>Volver a Tienda</Link>
            </div>
			
		</div>
    )
}

export default ItemCounter
