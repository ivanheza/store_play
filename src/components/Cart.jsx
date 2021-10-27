import React, { useEffect, useState } from 'react'
import { useCartContext } from '../context/cartContext'
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cartList, borrarProduct, vaciarCart } = useCartContext()

    const [totalCart, setTotalCart] = useState(0);

        //SubTotal

        //Total Carrito
    const cartTotal = () => {
        let cuentaTotal = cartList.reduce((acc, product) => {
            let sub = product.cantidad * product.product.precio
            return acc + sub
        }, 0)
        setTotalCart(cuentaTotal)
    }
    useEffect(() => {
        cartTotal()
    }, [cartList])

    return (
        <div className="container w-75 my-3 shadow-lg ">
            {cartList.length === 0 ?
                <li className="list-group-product d-flex justify-content-between">
                    <h4 className="fw-light">Tu Carrito está vacío</h4>
                </li>

                :

                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-8 my-3">
                        <h1>Carrito</h1>
                        <ul className="list-group mb-3">
                            {cartList.map((p, index) => {
                                return (
                                    <li key={p.product.id} className="list-group-product d-flex justify-content-between  shadow-sm m-2" style={{ fontSize: 12 }}>
                                        <div className="row align-items-center ">
                                            <p className="col-1 my-0 ">#{index + 1}</p>
                                            <img src={p.product.image} className="col-2 img-fluid p-0" width="40" alt="" />
                                            <p className="col-3 my-0">{p.product.nombre}</p>
                                            <small className="col-2 text-center">{p.product.precio}</small>
                                            <small className="col-1 text-center">Cant:{p.cantidad}</small>
                                            <span className=" col-2 text-end ">$ {p.product.precio * p.cantidad}</span>
                                            <span className=" col-1 d-flex justify-content-center"><button onClick={() => borrarProduct(p.product.id)} className="btn btn-danger btn-sm ">X</button></span>
                                        </div>
                                    </li>
                                    )})}
                            <li className="list-group-product d-flex justify-content-end ">
                                <h5 className="">Total: {totalCart}</h5>
                            </li>
                            <li className="list-group-product d-flex justify-content-end align-items-center ">
                                <Link to="/" className="p-1 m-0 btn btn-secondary btn-sm">Seguir Comprando</Link>
                                <button onClick={() => vaciarCart()} className="btn btn-danger p-1 m-2 "><AiFillDelete style={{
                                    margin: 0, padding: 0, fontSize: 30
                                }} /></button>
                            </li>
                        </ul>
                    </div>
                </div>

            }





        </div>
    )
}

export default Cart
