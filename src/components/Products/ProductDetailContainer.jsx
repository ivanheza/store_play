import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = () => {
	const { id } = useParams();
	//console.log(id)
	const [loader, setLoader] = useState("d-none")


	const [productos, setProductos] = useState([]);
	const getProducts = async () => {
		setLoader("")
		try {
			const res = await axios.get(
				"http://demo0117039.mockable.io/productos"
			);
			setLoader("d-none")
			//console.log(res.data);
			setProductos(res.data);
		} catch (error) {
			console.log(error);
		}
	};
	const filtro = productos.filter((producto) => {
		if (producto.id == id) {
			return producto;
		}
	});
	//console.log(filtro)

	useEffect(() => {
		getProducts();
	}, []);
	return (
		<div>
			{filtro.map((detail) => {
				return (
					<div className="container row d-flex justify-content-center">
					<div className={`d-flex justify-content-center align-items-center  py-2 ${loader}`}>
						<strong>Loading...</strong>
						<div className="spinner-border ms-5" role="status" aria-hidden="false"></div>
					</div>
						<ProductDetail key={detail.id} detail={detail} />
					</div>
				);
			})}
		</div>
	);
};

export default ProductDetailContainer;
