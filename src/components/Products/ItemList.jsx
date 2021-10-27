import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = ({ producto }) => {

  const { nombre, precio, image, categoria,id } = producto
  //console.log(id)
  return (
  <div className="col">
      <div className="card h-100 rounded-3 shadow-sm">
        <img src={image} class="card-img-top" alt="..." />
        <div className="card-body">
          <div className="clearfix mb-3">
            <span class="float-start badge rounded-pill bg-transparent">{categoria}</span>
            <span className="float-end badge rounded-pill bg-primary" style={{fontSize:"1rem"}}>$ {precio}</span>
          </div>
          <h4 className="card-title pricing-card-title">{nombre}</h4>
        </div>
          <div className="text-center my-3">
            <Link to={`/detalle/${id}`} className=" btn w-75 btn-outline-primary ">Ver Detalle</Link>
          </div>
      </div>


    </div>
  )
}

export default ItemList
