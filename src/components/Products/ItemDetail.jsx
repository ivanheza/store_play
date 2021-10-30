import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import Loader from '../Stateless/Loader'
import ItemCounter from './ItemCounter'

const ItemDetail = ({ detail }) => {
    //Props ItemDetail
    const { image, nombre, precio, categoria, descripcion, id, stock } = detail

    //CartContext
    const { addToCart, inCart,cantProd } = useCartContext()
    const onAdd = (contador) => {
        //console.log("contador:",contador, "id",id)
        addToCart({
            id: id,
            nombre: nombre,
            imagen: image,
            precio: precio,
            descripcion: descripcion,
            cantidad: contador,
            categoria: categoria
        })
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
                        <p className="badge bg-warning">Disponible:{stock}</p>
                        <p className="lead">{descripcion}</p>
                        <div>
                            <h2>Precio: <span className="mx-3">$ {precio}</span></h2>
                        </div>
                        <button> next </button>
                        {!inCart(id) ?
                            <div>
                                <ItemCounter id={id} onAdd={onAdd} stock={detail.stock} />
                            </div>
                            :
                            <div>
                                <ItemCounter id={id} onAdd={onAdd} stock={detail.stock} />
                                <div className="text-center m-0">
                                <span className="badge bg-light text-dark m-0">Agregaste {cantProd(id)} al carrito</span>
                                </div>
                                <div className="row justify-content-center align-items-center mb-2">
                                    <Link
                                        to="/cart"
                                        className={`col-4 btn btn-danger my-2 mx-2 `}
                                    >
                                        Finalizar Compra
                                    </Link>
                                    <Link
                                        to="/"
                                        className={`col-4  m-0 btn btn-secondary`}
                                    >
                                        Volver a Tienda
                                    </Link>
                                </div>
                            </div>

                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemDetail
