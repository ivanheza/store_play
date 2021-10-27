import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../services/getFireBase";
import Loader from "../Stateless/Loader";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
	const { id } = useParams();
	//console.log(id)
	
	const [loader, setLoader]=useState(true)


	const [producto, setProducto] = useState({});
	//console.log(producto)
	const getProduct = async () => {
		
		try {
			const db =  getFirestore ();
			const res = await db.collection("items").doc(id).get()
			 //traemos toda la coleccion
			 setProducto({id:res.id, ...res.data()})
			 setLoader(false)
			
		} catch (error) {
			console.log(error);
		}
	};
	

	useEffect(() => {
		getProduct();
	}, []);
	return (
		<div>
			{ loader ? <Loader/> :
					<div className="container row d-flex justify-content-center">
						<ItemDetail key={producto.id} detail={producto} />
					</div>}
		</div>
	);
};

export default ItemDetailContainer;
