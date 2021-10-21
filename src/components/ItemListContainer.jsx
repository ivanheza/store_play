import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemList from './Products/ItemList'
import Loader from './Stateless/Loader'

const ItemListContainer = () => {
	const [productos, setProductos] = useState([])

	const [loader, setLoader]=useState(true)

	const getProducts = async () => {	
			
		try {
			const res = await axios.get("http://demo0117039.mockable.io/productos")
			//console.log(res.data);
			setLoader(false)
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
		<>
			
				{loader ? <Loader/> :
			
			
				<div className="container mt-4 mb-3">
					<div className=" row-md-2 my-3 py-3 d-flex justify-content-center">
						<Link to={`/categoria/${filtro[0]}`} className="btn btn-outline-secondary mx-2">Audio&DJ</Link>
						<Link to={`/categoria/${filtro[1]}`} className="btn btn-outline-secondary mx-2">Iluminación</Link>
						<Link to={`/categoria/${filtro[2]}`} className="btn btn-outline-secondary mx-2">Display&FX</Link>
					</div>
			
						<div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">

							{productos.map( producto => <ItemList key={producto.id} producto={producto}/>)}
					
						</div>
			
				</div>
				}
			
		</>


	
	)
}

export default ItemListContainer
