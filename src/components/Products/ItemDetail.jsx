import React, { useEffect, useState } from 'react'
import { useCartContext } from '../../context/cartContext'
import Loader from '../Stateless/Loader'
import ProductCounter from './ItemCounter'

const ItemDetail = ({ detail }) => {
    //Props ItemDetail
    const { image, nombre, precio, categoria, descripcion, id } = detail
    //CartContext
    const { addToCart, block } = useCartContext()
    const onAdd = (contador, id) => {
        //console.log("contador:",contador, "id",id)
        addToCart({
            product: detail,
            cantidad: contador,
        }, id)
    }
    const [loading, setLoading] = useState(true)
    //console.log(loading)
    useEffect(() => {

        return setTimeout(() => {
            setLoading(false)
        }, 800);
    })



    return (
        <div className="container col-xxl-10 px-4 py-5">
            {loading ? <Loader text={detail.nombre} /> :
                <div className="row flex-lg-row align-items-center g-2">
                    <h1>{categoria.toUpperCase()}</h1>
                    <div className="col-10 col-sm-8 col-lg-6 ">
                        <img src={image} alt={detail.nombre} className="d-block mx-lg-auto img-fluid" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">{nombre}</h1>
                        <p className="lead">{descripcion}</p>
                        <div>
                            <h2>Precio: <span className="mx-3">$ {precio}</span></h2>
                        </div>
                        <div>
                            <ProductCounter id={id} onAdd={onAdd} block={block} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemDetail
