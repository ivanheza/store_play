import React, { useState } from 'react'
import { useCartContext } from '../context/cartContext'
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { getFirestore } from '../services/getFireBase';
import firebase from 'firebase/app'
import 'firebase/firestore'
import ModalBase from './Stateless/ModalBase';


const Cart = () => {
    const { cartList, borrarProduct, vaciarCart, cuentaOrden, cliente } = useCartContext()
    
    const [orden, setOrden] = useState({})
    const [modal, SetModal] = useState(false)
    const [btn, showBtn] = useState(true)
   //console.log(orden)


    const ordenCompra = () => {


        setOrden({
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            cliente: {
                name: cliente.nombre,
                phone: cliente.telefono,
                email: cliente.correo
            },
            productos: cartList.map((p) => {
                const id = p.id
                const producto = p.nombre
                const precio = p.precio * p.cantidad

                return { id, producto, precio }

            }),
            total: cuentaOrden()
        })

        const dbQuery = getFirestore();
        //genero constante de orden y creamos una nueva coleccion en fire
        const orderQuery = dbQuery.collection("orders")
        orderQuery.add(orden)
            .then(res => console.log(res))
            .catch(err => console.log("Error", err))
    }

    const comprar = ()=>{
        //console.log("prueba enboton modal")
        showBtn(false)
        SetModal(true)
    }



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
                                    <li key={p.id} className="list-group-product d-flex justify-content-between  shadow-sm m-2" style={{ fontSize: 12 }}>
                                        <div className="row align-items-center ">
                                            <p className="col-1 my-0 ">#{index + 1}</p>
                                            <img src={p.imagen} className="col-2 img-fluid p-0" width="40" alt="" />
                                            <p className="col-3 my-0">{p.nombre}</p>
                                            <small className="col-2 text-center">{p.precio}</small>
                                            <small className="col-1 text-center">Cant:{p.cantidad}</small>
                                            <span className=" col-2 text-end ">$ {p.precio * p.cantidad}</span>
                                            <span className=" col-1 d-flex justify-content-center"><button onClick={() => borrarProduct(p.id)} className="btn btn-danger btn-sm ">X</button></span>
                                        </div>
                                    </li>
                                )
                            })}
                            <li className="list-group-product d-flex justify-content-end ">
                                <h5 className="">Total: $ {cuentaOrden()}</h5>
                            </li>
                            <li className="list-group-product d-flex justify-content-end align-items-center ">
                                <Link to="/" className="p-1 m-0 btn btn-secondary btn-sm">Seguir Comprando</Link>
                                <button onClick={() => vaciarCart()} className="btn btn-danger p-1 m-2 "><AiFillDelete style={{
                                    margin: 0, padding: 0, fontSize: 30
                                }} /></button>
                                { btn ? "" :
                                <button onClick={ordenCompra} className="btn btn-primary">
                                    Generar Orden
                                </button>
                                }
                                {btn ? 
                                <button  className="btn btn-primary" onClick={()=> comprar()} >
                                    Continuar Compra
                                </button>
                                :
                                ""
                                }
                            </li>
                        </ul>
                    </div>
                    {
                        modal === true ? <ModalBase hide={()=>SetModal()}/> : ""
                    }
                    
                </div>

            }





        </div>
    )
}

export default Cart
