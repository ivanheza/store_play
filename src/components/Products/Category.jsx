import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loader from '../Stateless/Loader'
import CategoryItems from './CategoryItems'

const Category = () => {
    const [loading, setLoading] = useState(true)

    const { categoria } = useParams()
    const [productos, setProductos] = useState([]);
    const getProducts = async () => {

        try {
            const res = await axios.get(
                "http://demo0117039.mockable.io/productos"
            );
            setLoading(false)
            //console.log(res.data);
            setProductos(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    const filtro = productos.filter((producto) => {
        if (producto.categoria == categoria) {
            return producto;
        }
    });
    //console.log(filtro)

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div className="container mt-4 mb-3">
            <div className="row g-3">
                {loading ? <Loader text={categoria} /> :

                    filtro.map((categorias) => <CategoryItems key={categorias.id} producto={categorias} />
                    )
                }
            </div>
        </div>
    );
}

export default Category
