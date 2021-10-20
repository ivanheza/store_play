import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import ProductCounter from './ProductCounter'

const ProductDetail = ({ detail }) => {
    //Props ProductDetail
    const { image, nombre, precio, categoria,descripcion,stock,id } = detail
    //CartContext
    const {addToCart,block} = useCartContext()
    const total = 0
    const onAdd = (contador,id) => {
        //console.log("contador:",contador, "id",id)

        addToCart({
            product: detail,
            cantidad: contador,
            
        },id,total)
        
    }
    


    return (
        <div className="container col-xxl-10 px-4 py-5">
            <h1>{categoria}</h1>
            <div className="row flex-lg-row align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6 ">
                    <img src={image} className="d-block mx-lg-auto img-fluid"  width="700" height="500" loading="lazy" />

                </div>
                <div className="col-lg-6">
                    <div className="text-end">
                        <span
                            style={{ fontSize: 8 }}
                            className=" col-4 badge bg-danger mt-2"
                        >
                            Stock:{stock}
                        </span>
                    </div>
                    <h1 className="display-5 fw-bold lh-1 mb-3">{nombre}</h1>
                    <p className="lead">{descripcion}</p>
                    <div>
                        <h2>Precio: <span className="mx-3">$ {precio}</span></h2>
                    </div>
                    <div>
                        <ProductCounter id={id} onAdd={onAdd} block={block}/>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductDetail