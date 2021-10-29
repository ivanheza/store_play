import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFirestore } from '../services/getFireBase'
import ItemList from './Products/ItemList'
import Loader from './Stateless/Loader'

const ItemListContainer = () => {
	const [productos, setProductos] = useState([])
	//console.log(productos)
	const [loader, setLoader]=useState(true)

	const getProducts = async () => {	
			
		try {
			//Firestore
			const db =  getFirestore ();
			const res = await db.collection("items").get()
			 //traemos toda la coleccion
			setProductos(res.docs.map((it) => (
				{id: it.id , ...it.data()}
			)))
			
			setLoader(false)
			
		} catch (error) {
			console.log(error);
		}
	}
	
	useEffect(() => {
		getProducts()
	}, [])

	return (
		<>
			
				{loader ? <Loader/> :
			
			
				<div className="container mt-4 mb-3">
					<div className=" row-md-2 my-3 py-3 d-flex justify-content-center">
						<Link to="/categoria/audio&dj" className="btn btn-outline-secondary mx-2">Audio&DJ</Link>
						<Link to="/categoria/iluminacion" className="btn btn-outline-secondary mx-2">Iluminación</Link>
						<Link to="/categoria/display&fx" className="btn btn-outline-secondary mx-2">Display&FX</Link>
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
