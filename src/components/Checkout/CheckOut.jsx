import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getFirestore } from '../../services/getFireBase';

const CheckOut = ({ idOrder }) => {
    const [checkOut, setCheckOut] = useState(null)
    //console.log(idOrder)
    

    //console.log(checkOut)
    const getOrder = async () => {

        try {
            const db = getFirestore();
            const res = await db.collection("orders").doc(idOrder).get()
            //traemos toda la coleccion
            setCheckOut(res.data())

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getOrder()

    }, [])

    return (
        <div className="p-3">
            <h1 className="text-end">CheckOut</h1>
            {checkOut && checkOut ?
                 <div>
                         <h4>Hola {checkOut.cliente.name}<small>, gracias por tu compra</small></h4>
                         <p>El id de tu orden es: <span className="text-primary fs-5"> {idOrder}</span></p>
                     <table className="table table-striped">
                         <thead>
                             <tr>
                                 <th scope="col-1">N</th>
                                 <th scope="col-6">Producto</th>
                                 <th scope="col-1">Cantidad</th>
                                 <th scope="col">Sub Total</th>
                             </tr>
                         </thead>
                         <tbody>
                        {checkOut.productos.map((i,index)=>
                            (
                                <tr>
                                    <td>#{index+1}</td>
                                    <td>{i.producto}</td>
                                    <td>{i.cantidad}</td>
                                    <td>{i.precio}</td>
                                </tr>
                            )
                                     )}
                         </tbody>
                         <tfoot>
                        <tr className="table-info text-danger">
                            <td></td>
                            <td></td>
                            <th scope="row">
                                Total
                            </th>
                            <td className="fw-bold">{checkOut.total}</td>
                        </tr>
                         </tfoot>
                     
                     </table>
                 </div>
                 : ""
                }
                <Link className="btn btn-secondary btn-sm" to="/">Regresar</Link>
        </div>
    )
}

export default CheckOut
