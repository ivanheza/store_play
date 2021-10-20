import axios from 'axios'
import React, { useEffect, useState } from 'react'
import IntroPlay from './IntroPlay'
import Product from './Products/Product'

const Tienda = () => {
	const [productos, setProductos] = useState([])

	const [loader, setLoader]=useState("d-none")

	const getProducts = async () => {
		
			
			setLoader("")

		try {
			const res = await axios.get("http://demo0117039.mockable.io/productos")
			//console.log(res.data);
			setLoader("d-none")
			//console.log(res.data)
			setProductos(res.data)
			setCategorias(productos)


		} catch (error) {
			console.log(error);
		}

	}



	const [categorias, setCategorias] = useState(productos)
	const handleClick = (e) => {
		//console.log("DisteClick",)
		let filtro = productos.filter((item) => {
			if (item.categoria === e.target.textContent) {
				return item
			}
		})
		setCategorias(filtro)
	}
	const verTodo = () => {
		setCategorias(productos)
	}

	useEffect(() => {
		
		getProducts()
		

	}, [])

	return (
		<div className="container">
				<IntroPlay/>
			<div className={`d-flex justify-content-center align-items-center  py-2 ${loader}`}>
				<strong>Loading...</strong>
				<div className="spinner-border ms-5" role="status" aria-hidden="false"></div>
			</div>
			<div className="my-3 d-flex justify-content-center">
				<button type="button" onClick={(e)=>verTodo(e)} className="btn">Todo</button>
				<button type="button" onClick={(e)=>handleClick(e)} className="btn">Audio&DJ</button>
				<button type="button" onClick={(e)=>handleClick(e)} className="btn">Iluminación</button>
				<button type="button" onClick={(e)=>handleClick(e)} className="btn">Display&FX</button>
			</div>

            <div className="row row-cols-1 row-cols-md-3 text-center">

            {categorias.map((producto)=>{
                return(
                 
                        <Product key={producto.id} producto={producto}/>
                    
                )

            })}

            </div>

		</div>
	)
}

export default Tienda
