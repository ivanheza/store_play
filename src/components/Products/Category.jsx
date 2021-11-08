import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getFirestore } from '../../services/getFireBase'
import Loader from '../Stateless/Loader'
import CategoryItems from './CategoryItems'

const Category = () => {
    const [loader, setLoader] = useState(false)
    const { categoria } = useParams()
    //console.log(categoria)
    const [productosCatego, setProductosCatego] = useState([]);
    //console.log(productosCatego)

   const getProducts = async () => {	
			
		try {
			//Firestore
			const db =  getFirestore ();
			const res = await db.collection("items").where("categoria","==",categoria).get()
			 //traemos la coleccion por categoria
			setProductosCatego(res.docs.map((it) => ({id: it.id , ...it.data()} )) )
			
			setLoader(false)
			
		} catch (error) {
			console.log(error);
		}
	}
  

    useEffect(() => {
        getProducts();
    }, [categoria]);
    return (
        <div className="container mt-4 mb-3">
            <div className="row g-3">
                {loader ? <Loader text={categoria} /> :

                    productosCatego.map((categorias) => <CategoryItems key={categorias.id} producto={categorias} />
                    )
                }
            </div>
        </div>
    );
}

export default Category
