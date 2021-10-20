import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({producto}) => {

    const {nombre,precio,image,categoria} = producto
    

    return (
        <div classNameName="col">
            <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h5 className="my-0 fw-normal">{nombre}</h5>
          </div>
            <img src={image} class="card-img-top img-fluid" alt="..."/>

          <div className="card-body">
            <h1 className="card-title pricing-card-title">$ {precio}</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>{categoria}</li>
              
            </ul>
            <Link to={`/detalle/${producto.id}`}  className="w-100 btn btn-lg btn-outline-primary">Ver Más</Link>
          </div>
         </div>
        </div>
    )
}

export default Product
