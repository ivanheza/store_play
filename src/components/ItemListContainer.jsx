import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemList from './Products/ItemList'

const ItemListContainer = () => {
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
		} catch (error) {
			console.log(error);
		}
	}
	let filtro = productos.map ((item) =>  item.categoria)
	
	useEffect(() => {
		
		getProducts()
		

	}, [])

	return (
		<div className="container-fluid my-4 p-3" style={{position:"relative"}}>
		
			<div className={`d-flex justify-content-center align-items-center  py-2 ${loader}`}>
				<strong>Loading...</strong>
				<div className="spinner-border ms-5" role="status" aria-hidden="false"></div>
			</div>
			<div className="my-3 py-3 d-flex justify-content-center">
				<Link to={`/categoria/${filtro[0]}`} className="btn btn-outline-secondary mx-2">Audio&DJ</Link>
				<Link to={`/categoria/${filtro[1]}`} className="btn btn-outline-secondary mx-2">Iluminación</Link>
				<Link to={`/categoria/${filtro[2]}`} className="btn btn-outline-secondary mx-2">Display&FX</Link>
			</div>

            <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-3 row-cols-lg-4 g-3">

            {productos.map((producto)=>{
                return(
                 
                        <div className>
							<ItemList key={producto.id} producto={producto}/>
						</div>
                    
                )

            })}

            </div>

		</div>
	)
}

export default ItemListContainer
